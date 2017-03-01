Template.choice.helpers({
    "city1":function(){
        return Cities.findOne({_id : "c0"});
    },
    "city2": function(){
        return Cities.findOne({_id : "c1"});
    }
});

$("#city-left").mouseover(function(){
    $("#description-city1").css({
        opacity: 1,
    });
});

$("#city-right").mouseover(function(){
    $("#description-city2").css({
        opacity: 1,
    });
});