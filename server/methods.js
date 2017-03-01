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
    });
  }
});
