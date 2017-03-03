Template.activitiesBakery.helpers({
    Activities : function(){
    console.log( Activities.find({city : Template.currentData().city._id, category : Template.currentData().category}).count());
        console.log(Template.currentData().city._id);
        console.log(Template.currentData().category);
        return Activities.find({city : Template.currentData().city._id, category : Template.currentData().category});
},
picture : function(a) {
  return a.pictures[0];
}
});

// Template.insertCity.events({
//   "click button":function(template){
//     template.preventDefault();

// Activities.update({_id : Template.currentData()._id},{$push :{comments : { user : {_id : Meteor.user()._id, email : Meteor.user().email[0].address}, date : new Date(), comment : }}}

//     Meteor.call("insertCity",
//     $("#name").val(),
//     $('#coordinates').val(),
//     $('#description').val(),
//     $('#picture').val(),
//     $('#activities').val(),
//     function(){
//       alert("Added");
//     });
//
//   }
// })
