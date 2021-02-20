import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';


Meteor.startup(() => {
  // for (let i = 0; i < 1000000; i++) {
  //   TasksCollection.insert({
  //     'test': '1231aoidwjdoiajwdoiajwd oaijdo awidja owidj aowidj aowidjaowidj aowidj aowidj aowidj aowij'.repeat(10)
  //   })
  //
  //   if (i % 100 === 0)
  //     console.log(i);
  // }
});