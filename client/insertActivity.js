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
        Meteor.call("insertCity",
            $("#name2").val(),
            $('#nature').val(),
            $('#editor').val(),
            $('#pictures').val(),
            $('#description').val(),
            $('#url').val(),
            function() {
                alert("Added");
            });

        activities.update("insertCity",{
            _id: "#id"
        }, {
            $push: {
                activities: [{
                    name: $("#name2").val(),
                    nature: $('#nature').val(),
                    editor: $('#editor').val(),
                    pictures: $('#pictures').val(),
                    description: $('#description').val(),
                    url: $('#url').val()
                }]
            }
        })

    }
})
