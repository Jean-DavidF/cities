Meteor.methods({
  insertCity:function(name, coordinates, description, picture, activities) {
    Cities.insert({
      "name":name,
      "coordinates":coordinates,
      "description":description,
      "picture":picture,
      "activities":activities
    });
  }
});

Meteor.methods({
  insertActivity:function(name, nature, editor, pictures, comments, description, url) {
    Activities.insert({
      "name":name,
      "nature":nature,
      "editor":editor,
      "pictures":pictures,
      "comments":comments,
      "description":description,
      "url":url
    },function(err, objectId) {
      return objectId;
      console.log(tmp);
    });
  }
});

// Meteor.methods({
//   insertActivity:function(activity) {
//     return Activities.insert(activity);
//   },
//   updateCity:function(idCity, idActivity) {
//     var activity=Activities //find the id _id:idActivity
//   },
//   Cities.update({_id:idCity}, {$push:{activities:activity}})
// })
