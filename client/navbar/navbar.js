Template.navbar.events({
    'click #reset' : function() {
        Meteor.call('reset');
    }
});

Template.navbar.events({
    'click #burger-btn': function (e) {
        $("#menu-open").removeClass('displaynone');
    },
    'click #cross-icon': function (e) {
        $("#menu-open").addClass('displaynone');
    }
});