Template.displayActivities.helpers({
Activities : function(){
  console.log( Activities.find());
return Activities.find();
},
picture : function(a) {
  return a.pictures[0];
}
});

// Template.insertCity.events({
//   "click button":function(template){
//     template.preventDefault();
//
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
