Template.choice.helpers({
    "city1":function(){
        return Cities.findOne({_id : "c0"});
    },
    "city2": function(){
        return Cities.findOne({_id : "c1"});
    }
});

Template.choice.events({
    'mouseenter #description-city1': function (e) {
        $("#description-city2").animate({
            opacity: 1,
        },100);
    },
    'mouseenter #description-city2': function (e) {
        $("#description-city1").animate({
            opacity: 1,
        },100);
    },
    'mouseleave #description-city1': function (e) {
        $("#description-city2").animate({
            opacity: 0.01,
        },100);
    },
    'mouseleave #description-city2': function (e) {
        $("#description-city1").animate({
            opacity: 0.01,
        },100);
    }
});