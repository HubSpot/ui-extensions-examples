const axios = require('axios');
const asana = require('asana');

// Make sure you have added these as secrets in your account using `hs secrets add`
const { ASANA_PAT, ASANA_TEAM_GID, ASANA_CUSTOM_FIELD } = process.env;
const asanaClient = asana.Client.create().useAccessToken(ASANA_PAT);

exports.main = async (context = {}, sendResponse) => {
  const { hs_object_id } = context.propertiesToSend;
  const asanaTaskTag = 'hs_' + hs_object_id;

  try {
    const teamData = await getTeamData();
    const teamUsers = await getTeamUsers();
    const teamProjects = await getTeamProjects();

    const taskSections = [
      {
        type: 'text',
        variant: 'microcopy',
        format: 'markdown',
        text:
          'Create a task for your Asana team: ' +
          teamData.name +
          '. [(view team Asana)](' +
          teamData.permalink_url +
          ')',
      },
      {
        type: 'form',
        content: [
          {
            type: 'input',
            name: 'taskName',
            inputType: 'text',
            label: 'Task Name',
            placeholder: 'Enter task name',
          },
          {
            type: 'input',
            name: 'taskNotes',
            inputType: 'text',
            label: 'Task Notes',
            placeholder: 'Enter task notes',
          },
          {
            type: 'select',
            name: 'taskProject',
            label: 'Project',
            placeholder: 'Select a project',
            description: 'Select a project for team: ' + teamData.name,
            options: teamProjects.map((project) => {
              return {
                value: project.gid,
                label: project.name,
              };
            }),
          },
          {
            type: 'select',
            name: 'taskMember',
            label: 'Member',
            placeholder: 'Select a team member',
            tooltip: 'Member of ' + teamData.name + ' team to assign this task',
            options: teamUsers.map((user) => {
              return {
                value: user.gid,
                label: user.name,
              };
            }),
          },
          {
            type: 'button',
            text: 'Create task',
            onClick: {
              type: 'SUBMIT',
              serverlessFunction: 'create-task-card',
            },
          },
        ],
      },
    ];

    if (context.event && context.event.type === 'SUBMIT') {
      const { taskName, taskNotes, taskProject, taskMember } =
        context.event.payload.formState;
      await asanaClient.tasks.createTask({
        name: taskName,
        notes: taskNotes,
        projects: [taskProject],
        assignee: taskMember,
        custom_fields: {
          [ASANA_CUSTOM_FIELD]: asanaTaskTag,
        },
      });
    }

    sendResponse({
      sections: [...taskSections],
      message: {
        type: 'SUCCESS',
        body: 'Task added to Asana!',
      },
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

async function getTeamData() {
  const team = await asanaClient.teams.getTeam(ASANA_TEAM_GID);
  return team;
}

async function getTeamUsers() {
  const users = await asanaClient.users.getUsersForTeam(ASANA_TEAM_GID);
  return users.data;
}

async function getTeamProjects() {
  const projects = await asanaClient.projects.getProjectsForTeam(
    ASANA_TEAM_GID
  );
  return projects.data;
}
