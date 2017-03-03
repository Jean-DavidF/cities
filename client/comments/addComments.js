Template.addComment.helpers({
    Activities: function() {
        return Activities.find();
    }
});

Template.addComment.events({
    "click button": function(e) {
      e.preventDefault();
      // var id = Template.currentData()._id;
      // var userid = Meteor.user()._id;
      // var useremail = Meteor.user().email[0].address;

       Meteor.call("updateActivities",
$('#f1').val(),
$('#f2').val(),
$('#f3').val(),
            $('#addcomment').val(),
            function() {
                alert("Activity as added");
            });
    }
})
