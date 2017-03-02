if (Meteor.isServer) {
    Meteor.methods({
        // reset database
        reset: function () {
            var derek = {
                "_id": "u0",
                "createdAt": new Date("2016-02-04T09:28:14.187Z"),
                "services": {
                    "password": {
                        "bcrypt": "$2a$10$5J/u4IF59xW8Xi73eQajzu5rnF2bcvXaKKQaye.Njh3knctvLnuf6" // derek.ie
                    },
                    "resume": {
                        "loginTokens": []
                    }
                },
                "emails": [{
                        "address": "derek@dkit.ie",
                        "verified": false
      }
  ]
            };
            var gilles = {
                "_id": "u1",
                "createdAt": new Date("2016-02-04T09:29:14.662Z"),
                "services": {
                    "password": {
                        "bcrypt": "$2a$10$PtpfLpKrWd3/AbQz1CCL6ubnHpWd2D.QVvQSJLoL.WPKpQjZCGIi." //gilles.fr
                    },
                    "resume": {
                        "loginTokens": []
                    }
                },
                "emails": [{
                        "address": "gilles@iut.fr",
                        "verified": false
      }
  ]
            };
            Meteor.users.remove({});
            Meteor.users.insert(derek);
            Meteor.users.insert(gilles);

            // *** activities
  //           var granet = {
  //               _id: "c0a0",
  //               name: "musée Granet",
  //               nature: "place",
  //               editor: {
  //                   _id: gilles._id,
  //                   email: gilles.emails[0].address
  //               },
  //               pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
  //               comments: [{
  //                   user: {
  //                       _id: derek._id,
  //                       email: derek.emails[0].address
  //                   },
  //                   date: new Date(),
  //                   text: "I love this place !!"
  // }],
  //               description: "Le musée Granet présente près de 600 oeuvres de peinture, sculpture, pièces archéologiques. Peintures hollandaises, italiennes, françaises de diverses époques",
  //               url: "http://museegranet-aixenprovence.fr"
  //           };
  //           var saintSauveur = {
  //               _id: "c0a1",
  //               name: "cathedral saint Sauveur",
  //               nature: "place",
  //               editor: {
  //                   _id: gilles._id,
  //                   email: gilles.emails[0].address
  //               },
  //               pictures: ["/images/Aix/sauveur1.jpg", "/images/Aix/sauveur2.jpg"],
  //               comments: [{
  //                   user: {
  //                       _id: derek._id,
  //                       email: derek.emails[0].address
  //                   },
  //                   date: new Date(),
  //                   text: "great"
  // }],
  //               description: "no description"
  //           };
  //           var festival = {
  //               _id: "c0a2",
  //               name: "festival de musique",
  //               nature: "event",
  //               editor: {
  //                   _id: gilles._id,
  //                   email: gilles.emails[0].address
  //               },
  //               pictures: ["/images/Aix/festival1.png", "/images/Aix/festival1.jpg", "/images/Aix/festival2.jpg"],
  //               comments: [{
  //                   user: {
  //                       _id: derek._id,
  //                       email: derek.emails[0].address
  //                   },
  //                   date: new Date(),
  //                   text: "Awful music"
  // }],
  //               description: "Fort de son succès, le Festival d’Aix accueille un public non seulement local, mais aussi national, et un grand nombre de spectateurs et de journalistes venus du monde entier.",
  //               url: "http://festival-aix.com/en",
  //               dateStart: new Date('2016-6-15'),
  //               dateEnd: new Date('2016-7-10')
  //           };
  //           Activities.remove({})
  //           Activities.insert(granet);
  //           Activities.insert(saintSauveur);
  //           Activities.insert(festival);

            // **** cities
            // var Dublin = {
            //     _id: "c0",
            //     name: 'Dublin',
            //     description: 'dublin city description HERE',
            //     picture: '/images/Aix/aix.jpg',
            //     categories: [{
            //         _id: '',
            //         name: '',
            //         category: '',
            //         picture: '',
            //             activity: [{
            //                 _id: '',
            //                 name: '',
            //                 price: '',
            //                 address: '',
            //                 pictures: [],
            //                 rating: '',
            //                 comments: [],
            //                 tags: []
            //             }]
            //   }]
            // };
            //
            // var Nantes = {
            //     _id: "c1",
            //     name: 'Nantes',
            //     description: 'nantes city description HERE',
            //     picture: '/images/Aix/aix.jpg',
            //     categories: [{
            //         _id: '',
            //         name: '',
            //         category: '',
            //         picture: '',
            //             activity: [{
            //                 _id: '',
            //                 name: '',
            //                 price: '',
            //                 address: '',
            //                 pictures: [],
            //                 rating: '',
            //                 comments: [],
            //                 tags: []
            //             }]
            //   }]
            //   }
            // db.cities.remove({});
            // db.cities.insert(Dublin);
            // db.cities.insert(Nantes);

    //        ----- CREATING CITIES -----
            var Dublin = {
                _id: "c0",
                name: 'Dublin',
                description: 'dublin city description HERE',
                picture: '/images/Aix/aix.jpg',
              }


            var Nantes = {
                _id: "c1",
                name: 'Nantes',
                description: 'nantes city description HERE',
                picture: '/images/Aix/aix.jpg',
              }

              db.cities.remove({});
              db.cities.insert(Dublin);
              db.cities.insert(Nantes);

        //    ----- CREATING CATEGORIES -----
            var Restaurant = {
                _id: 'ca0',
                name: 'Restaurant',
                picture: '/images/Aix/aix.jpg'
                }
            var Fastfood = {
                _id: 'ca1',
                name: 'Fastfood',
                picture: '/images/Aix/aix.jpg'
                }
            var Snack = {
                _id: 'ca2',
                name: 'Snack',
                picture: '/images/Aix/aix.jpg'
                }
            var Cafeteria = {
                _id: 'ca3',
                name: 'Cafeteria',
                picture: '/images/Aix/aix.jpg'
                }
            var Bakery = {
                _id: 'ca4',
                name: 'Bakery',
                picture: '/images/Aix/aix.jpg'
                }
            var Grill = {
                _id: 'ca5',
                name: 'Grill',
                picture: '/images/Aix/aix.jpg'
                }


                db.categories.remove({});
                db.categories.insert(Restaurant);
                db.categories.insert(Fastfood);
                db.categories.insert(Snack);
                db.categories.insert(Cafeteria);
                db.categories.insert(Bakery);
                db.categories.insert(Grill);

      //      ----- CREATING ACTIVITIES -----
            var activity0 = {
                _id: 'a0',
                category: Restaurant._id,
                name: 'De Grasso',
                price: '23.00',
                address: 'Main Street, Lens, France',
                pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
                rating: '9',
                comments: [{
                  user: {
                  _id: derek._id,
                  email: derek.emails[0].address
                  },
                  date: new Date(),
                  comment: "perfect, worth every single cent"
                  }],
                tags: ["restaurant", "degrassso", "cheap"]
                }
            var activity1 = {
                _id: 'a1',
                category: Fastfood._id,
                name: 'Pizzeria',
                price: '20.00',
                address: 'Somewhere, here, France',
                pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
                rating: '8',
                comments: [{
                  user: {
                  _id: derek._id,
                  email: derek.emails[0].address
                  },
                  date: new Date(),
                  comment: "perfect, worth every single cent"
                  }],
                tags: ["fastfood", "pizza", "cheap"]
                }
            var activity2 = {
                _id: 'a2',
                category: Bakery._id,
                name: 'Local Bakery',
                price: '4.00',
                address: 'Side Street, main road, France',
                pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
                rating: '7',
                comments: [{
                  user: {
                  _id: derek._id,
                  email: derek.emails[0].address
                  },
                  date: new Date(),
                  comment: "perfect, worth every single cent"
                  }],
                tags: ["bakery", "bread", "cheap"]
                }

            db.activities.remove({});
            db.activities.insert(activity0);
            db.activities.insert(activity1);
            db.activities.insert(activity2);
        },
    })
}
