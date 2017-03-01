Template.choice.helpers({
    "city1":function(){
        return Cities.findOne({_id : "c0"});
    },
    "city2": function(){
        return Cities.findOne({_id : "c1"});
    }
});

/*
$(document).ready(function(){
$("#description-city2").mouseenter(function(){
    $("#description-city1").css({
        opacity: 1,
    });
});

$("#description-city1").mouseenter(function(){
    $("#description-city2").css({
        opacity: 1,
    }););
});
}); */

Template.choice.events({
    'mouseenter #description-city1': function (e) {
        $("#description-city2").animate({
            opacity: 1,
        }),75;
    },
    'mouseenter #description-city2': function (e) {
        $("#description-city1").animate({
            opacity: 1,
        }),75;
    },
    'mouseleave #description-city1': function (e) {
        $("#description-city2").css({
            opacity: 0.01,
        });
    },
    'mouseleave #description-city2': function (e) {
        $("#description-city1").css({
            opacity: 0.01,
        });
    }
});