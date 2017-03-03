Template.activitiesPage.events({
    'submit form' : function(e) {
        e.preventDefault();
        Activities.update(
            {_id:Template.currentData()._id},
            {$push:{comments:{
                user: {
                    _id: Meteor.user()._id,
                    email: Meteor.user().emails[0].address
                },
                date: $('#addsubject').val(),
                text: $('#addcomment').val()
            }}});
    }
});