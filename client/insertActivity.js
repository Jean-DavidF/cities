Template.insertActivity.helpers({
    activities: function() {
        return Cities.find();
    }
});

Template.insertActivity.events({
    "click button": function(template) {
        template.preventDefault();
        var myid = $("#id").val()
        var city = Cities.findOne({
            _id: myid
        });
       var activityId = Meteor.call("insertActivity",
            $("#name").val(),
            $('#nature').val(),
            $('#editor').val(),
            $('#pictures').val(),
            $('#description').val(),
            $('#url').val(),
            function() {
                alert("Added");
            });
    }
})

Template.insertActivity.events({
  "click button": function() {
    var idCity //=  find id
    var idActivity //=  find id of current activity _id
    Meteor.call("insertActivity", activity,
  function(err, idActivity) {
    Meteor.call("updateCity", idCity, idActivity, function(){});
  })
  }
})
