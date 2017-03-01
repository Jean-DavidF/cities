Template.insertCity.helpers({
cities : function(){
return Cities.find();
}
});

Template.insertCity.events({
  "click button":function(template){
    template.preventDefault();

    Meteor.call("insertCity",
    $("#name").val(),
    $('#coordinates').val(),
    $('#description').val(),
    $('#picture').val(),
    $('#activities').val(),
    function(){
      alert("Added");
    });
    
  }
})
