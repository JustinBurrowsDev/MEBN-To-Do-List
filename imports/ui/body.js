import { Template } from "meteor/templating";
//Load tasks from Tasks collection
import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';


Template.body.helpers({
    tasks() {
        return Tasks.find({}, { sort: { createdAt: -1 } });
    },
});

//adding and event handler for form submit
Template.body.events({
    'submit .new-task' (event) {

        //prevent default browser form submit
        event.preventDefault();

        //Get value from form element
        const target = event.target;
        const text = target.text.value;

        //Insert a task into collection
        Tasks.insert({
            text,
            createdAt: new Date(), //the current time the post was created
        });

        //Clear form so user can type something new
        target.text.value = "";
        console.log(event);
    },

});