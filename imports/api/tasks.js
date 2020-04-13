//  Create tasks collection
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Tasks = new Mongo.Collection('tasks');