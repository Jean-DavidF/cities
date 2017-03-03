Template.displayComments.helpers({
    Activities : function(){
        var currentActivity = Activities.find({activity : Template.currentData().activity._id});
        return Activities.find({activity : Template.currentData().currentActivity.comments});
}
});
