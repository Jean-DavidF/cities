Template.insertActivities.helpers({
    Activities: function() {
        return Activities.find();
    }
});

Template.insertActivities.events({
    "click button": function(template) {
        template.preventDefault();
        // var myid = $("#id").val()
        // var category = Categories.findOne({_id: myid});
       Meteor.call("insertActivities",
            Template.currentData().category,
            $("#name").val(),
            Template.currentData().city._id,
            $('#price').val(),
            $('#address').val(),
            $('#pictures').val(),
            $('#rating').val(),
            function() {
                alert("Activity as added");
            });
    }
})

// Template.insertActivity.events({
//   "click button": function() {
//     var idCity //=  find id
//     var idActivity //=  find id of current activity _id
//     Meteor.call("insertActivity", activity,
//   function(err, idActivity) {
//     Meteor.call("updateCity", idCity, idActivity, function(){});
//   })
//   }
// })
