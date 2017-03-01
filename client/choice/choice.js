Template.choice.helpers({
    "city1":function(){
        return Cities.findOne({_id : "c0"});
    },
    "city2": function(){
        return Cities.findOne({_id : "c1"});
    }
})