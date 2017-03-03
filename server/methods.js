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

  insertActivities:function(category, name, city, price, address, pictures, rating) {
    Activities.insert({
      "category":category,
      "name":name,
      "city" : city,
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


/*Meteor.methods({
  updateActivities:function(activityid, userid, email, comment) {
Activities.update({
  _id : activityid},{$push :{
      comments : {
        user : {
          _id : userid,
          email : email
        },
          date : new Date(),
          comment : comment
        }
      }
      }
);
}
});*/
