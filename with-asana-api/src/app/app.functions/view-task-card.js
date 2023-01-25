const axios = require('axios');
const asana = require('asana');

// Make sure you have added these as secrets in your account using `hs secrets add`
const { ASANA_PAT, ASANA_WS_GID, ASANA_CUSTOM_FIELD } = process.env;
const asanaClient = asana.Client.create().useAccessToken(ASANA_PAT);

exports.main = async (context = {}, sendResponse) => {
  const { hs_object_id, firstname, lastname } = context.propertiesToSend;
  const asanaTaskTag = 'hs_' + hs_object_id;

  try {
    const tasks = await getTasks(asanaTaskTag);

    let taskSections = [];

    if (tasks.data.length === 0) {
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
                    text: task.notes == null ? '' : task.notes,
                  },
                },
                {
                  label: 'Assigned to',
                  value: task.assignee.name == null ? '' : task.assignee.name,
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

    sendResponse({
      sections: [...taskSections],
    });
  } catch (error) {
    sendResponse({
      message: {
        type: 'ERROR',
        body: `Error: ${error.message}`,
      },
      sections: [
        {
          type: 'text',
          text: error.message,
        },
      ],
    });
  }
};

// ================== vvvv  Helper functions  vvvv =====================

// Get Asana tasks for the workspace and the team. Make sure you created a global custom field, added to the project, as well as added ASANA_CUSTOM_FIELD in your secrets and
async function getTasks(hs_contact_id) {
  const tasks = asanaClient.tasks.searchTasksForWorkspace(ASANA_WS_GID, {
    [`custom_fields.${ASANA_CUSTOM_FIELD}.value`]: hs_contact_id,
    opt_fields: 'name,permalink_url,due_on,notes,assignee.name,completed',
  });
  return tasks;
}
