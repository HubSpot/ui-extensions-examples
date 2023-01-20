const axios = require('axios');
const asana = require('asana');

const { ASANA_PAT, ASANA_WS_GID } = process.env;
const asanaClient = asana.Client.create().useAccessToken(ASANA_PAT);

exports.main = async (context = {}, sendResponse) => {
  const { hs_object_id, firstname, lastname } = context.propertiesToSend;
  const asanaTaskTag = 'hs_' + hs_object_id;

  try {
    const tasks = await getTasks(asanaTaskTag);

    let taskSections = [];

    if (tasks.data.length == 0) {
      taskSections = [
        {
          type: 'heading',
          text: 'No tasks found for ' + firstname + ' ' + lastname + '...',
        },
        {
          type: 'text',
          format: 'markdown',
          text: 'You are all caught up! Want to create more tasks? Go to _custom_ tab.',
        },
      ];
    } else {
      taskSections = tasks.data.map((task) => {
        return {
          type: 'tile',
          content: [
            {
              type: 'descriptionList',
              direction: 'row',
              items: [
                {
                  label: 'Name',
                  value: {
                    type: 'text',
                    format: 'markdown',
                    text: '**[' + task.name + '](' + task.permalink_url + ')**',
                  },
                },
                {
                  label: 'Description',
                  value: {
                    type: 'text',
                    format: 'markdown',
                    variant: 'microcopy',
                    text: task.notes,
                  },
                },
                {
                  label: 'Assigned to',
                  value: task.assignee.name,
                },
                {
                  label: 'Due on',
                  value: task.due_on == null ? '' : task.due_on,
                },
                {
                  label: 'Status',
                  value: task.completed ? 'Complete' : 'Incomplete',
                },
              ],
            },
          ],
        };
      });
    }

    // const taskSections = [
    //   {
    //     type: "text",
    //     variant: "microcopy",
    //     format: "markdown",
    //     text: taskList,
    //   },
    // ];

    sendResponse({
      sections: [...taskSections],
    });
  } catch (error) {
    sendResponse({
      message: {
        type: 'ERROR',
        // body: `Error: ${error.message}`,
        body: JSON.stringify(error, null, 2),
      },
      sections: [
        {
          type: 'text',
          text: JSON.stringify(error, null, 2),
        },
      ],
    });
  }
};

// ================== vvvv  Helper functions  vvvv =====================

async function getTasks(hs_contact_id) {
  const tasks = asanaClient.tasks.searchTasksForWorkspace(ASANA_WS_GID, {
    'custom_fields.1203668111866685.value': hs_contact_id,
    opt_fields: 'name,permalink_url,due_on,notes,assignee.name,completed',
  });
  return tasks;
}
