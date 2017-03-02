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
                description: 'Dublin is the capital and largest city of Ireland. Dublin is in the province of Leinster on Ireland seast coast, at the mouth of the River Liffey. The city has an urban area population of 1,345,402 Founded as a Viking settlement, the Kingdom of Dublin became Irelands principal city following the Norman invasion. The city expanded rapidly from the 17th centuryand was briefly the second largest city in the British Empire before the Acts of Union in 1800. Following the partition of Ireland in 1922, Dublin became thecapital of the Irish Free State, later renamed Ireland.The population of the Greater Dublin Area, as of 2016, was 1,904,806 people.',
                picture: '/images/Dublin/dublin-1.jpg',
              }


            var Nantes = {
                _id: "c1",
                name: 'Nantes',
                description: 'Nantes is a city in western France, located on the Loire River, 50 km (31 mi) from the Atlantic coast. The city is the sixth largest in France, with almost 300,000 inhabitants within its administrative limits, and an urban area of 600,000 inhabitants. Together with Saint-Nazaire, a seaport located on the Loire estuary, Nantes forms the main metropolis of north-western France.Nantes is the administrative seat of the Loire-Atlantique département and of the Pays de la Loire région, one of the 18 regions of France. Historically and culturally, Nantes belongs to Brittany, a region and former duchy and province. The fact that it is not part of the modern administrative region of Brittany is subject to debate.',
                picture: '/images/Nantes/nantes-1.jpg',
              }

              db.cities.remove({});
              db.cities.insert(Dublin);
              db.cities.insert(Nantes);

        //    ----- CREATING CATEGORIES -----
            var Restaurant = {
                _id: 'ca0',
                name: 'Restaurant',
                }
            var Fastfood = {
                _id: 'ca1',
                name: 'Fastfood',
                }
            var Snack = {
                _id: 'ca2',
                name: 'Snack',
                }
            var Cafeteria = {
                _id: 'ca3',
                name: 'Cafeteria',
                }
            var Bakery = {
                _id: 'ca4',
                name: 'Bakery',
                }
            var Grill = {
                _id: 'ca5',
                name: 'Grill',
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
                category: 'ca0',
                name: 'De Grasso',
                price: '23.00',
                address: 'Main Street, Lens, France',
                pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
                rating: '9',
                comments: [{
                  user: {
                  _id: 'u0',
                  email: 'myemail@hello.com'
                  },
                  date: new Date(),
                  comment: "perfect, worth every single cent"
                  }],
                tags: ["restaurant", "degrassso", "cheap"]
                }
            var activity1 = {
                _id: 'a1',
                category: 'ca0',
                name: 'Pizzeria',
                price: '20.00',
                address: 'Somewhere, here, France',
                pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
                rating: '8',
                comments: [{
                  user: {
                  _id: 'u1',
                  email: 'myemail@hello.com'
                  },
                  date: new Date(),
                  comment: "perfect, worth every single cent"
                  }],
                tags: ["fastfood", "pizza", "cheap"]
                }
            var activity2 = {
                _id: 'a2',
                category: 'ca0',
                name: 'Local Bakery',
                price: '4.00',
                address: 'Side Street, main road, France',
                pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
                rating: '7',
                comments: [{
                  user: {
                  _id: 'u2',
                  email: 'myemail@hello.com'
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
