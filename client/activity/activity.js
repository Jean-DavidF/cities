Template.activitiesPage.events({
    'submit form' : function(e) {
        e.preventDefault();
        //console.log("tyty " + Template.currentData()._id);
        Activities.update(
            {_id:Template.currentData()._id},
            {$push:{comments:{
                user: {
                    _id: Meteor.user()._id,
                    email: Meteor.user().emails[0].address
                },
                date: new Date(),
                text: $('#addcomment').val()
            }}});
    }
});