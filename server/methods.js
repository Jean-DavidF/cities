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
  insertActivities:function(category, name, price, address, pictures, rating) {
    Activities.insert({
      "category":category,
      "name":name,
      "price":price,
      "address":address,
      "pictures":pictures,
      "rating":rating
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
