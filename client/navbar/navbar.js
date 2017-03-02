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
    },
    'click .menu-button': function(e) {
        $("#menu-open").addClass('displaynone');
    },
});

Template.navbar.helpers({
    "city1":function(){
        return Cities.findOne({_id : "c0"});
    },
    "city2": function(){
        return Cities.findOne({_id : "c1"});
    }
});