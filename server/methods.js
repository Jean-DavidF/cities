Meteor.methods({
  initUploadServerForCity: function (name, lat, long) {
      UploadServer.init({
          tmpDir: process.env.PWD + '/.uploads/tmp',
          uploadDir: process.env.PWD + '/public/images/' + name,
          checkCreateDirectories: true, //create the directories for you
          finished: function (req) {
              var fileName = "/images/" + name + "/" + req.name;
          }
      });
  },
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
    })
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
