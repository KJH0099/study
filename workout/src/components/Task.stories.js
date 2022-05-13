import React from 'react';

import Task from './Task';

export default {
    component : Task,
    title : 'Task',
};

const Template =(args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {  // 기본 args 값 
    task :{
        id : '1',
        title : 'Test Task',
        state : 'Task_INBOX',
        updateAt : new Date(),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task:{
        ...Default.args.task,
        state : 'TASK_PINNED',
    }, 
};

export const Archived = Template.bind({});
Archived.args ={
    task : {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
}