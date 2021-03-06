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
                coordinates: {
                    long: "-6.2488900",
                    lat: "53.3330600",
                },
                description: 'Dublin is the capital and largest city of Ireland. Dublin is in the province of Leinster on Ireland seast coast, at the mouth of the River Liffey. The city has an urban area population of 1,345,402 Founded as a Viking settlement, the Kingdom of Dublin became Irelands principal city following the Norman invasion. The city expanded rapidly from the 17th centuryand was briefly the second largest city in the British Empire before the Acts of Union in 1800. Following the partition of Ireland in 1922, Dublin became thecapital of the Irish Free State, later renamed Ireland.The population of the Greater Dublin Area, as of 2016, was 1,904,806 people.',

                picture: "/images/Dublin/dublin-1.jpg"

            }

            var Nantes = {
                _id: "c1",
                name: 'Nantes',
                coordinates: {
                    long: "-1.5533600",
                    lat: "47.2172500",
                },
                description: 'Nantes is a city in western France, located on the Loire River, 50 km (31 mi) from the Atlantic coast. The city is the sixth largest in France, with almost 300,000 inhabitants within its administrative limits, and an urban area of 600,000 inhabitants. Together with Saint-Nazaire, a seaport located on the Loire estuary, Nantes forms the main metropolis of north-western France.Nantes is the administrative seat of the Loire-Atlantique département and of the Pays de la Loire région, one of the 18 regions of France. Historically and culturally, Nantes belongs to Brittany, a region and former duchy and province. The fact that it is not part of the modern administrative region of Brittany is subject to debate.',


                picture: "/images/Nantes/nantes-1.jpg"

            }

            Cities.remove({});
            Cities.insert(Dublin);
            Cities.insert(Nantes);

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

            Categories.remove({});
            Categories.insert(Restaurant);
            Categories.insert(Fastfood);
            Categories.insert(Snack);
            Categories.insert(Cafeteria);
            Categories.insert(Bakery);
            Categories.insert(Grill);

            //      ----- CREATING ACTIVITIES -----
            var activity0 = {
                _id: 'a0',
                category: 'ca2',
                name: 'Le Nid',
                city: "c1",
                price: '12',
                address: 'This high-rise bar with a 360 ° view is decorated with a heron and egg-shell seats',
                pictures: "/images/Nantes/lenid.jpg",
                rating: '8.7',
                comments: [{
                    user: {
                        _id: 'u0',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["leNid", "bar", "snack"]
            }
            var activity1 = {
                _id: 'a1',
                category: 'ca0',
                name: 'Le Boudoir',
                city: "c1",
                price: '30',
                address: 'This restaurant offers contemporary cuisine in a purple and gold baroque decor for a cozy ambience.',
                pictures: "/images/Nantes/leboudoir.jpg",
                rating: '9',
                comments: [{
                    user: {
                        _id: 'u1',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["restaurant"]
            }
            var activity2 = {
                _id: 'a2',
                category: 'ca1',
                name: 'Burger House',
                price: '12',
                city: "c1",
                address: 'Burgers made with artisan bread and milkshakes in a restaurant with simple furnishings and yellow walls.',
                pictures: "/images/Nantes/burgerhouse.jpg",
                rating: '8.8',
                comments: [{
                    user: {
                        _id: 'u2',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["fastfood", "burger"]
            }
            var activity3 = {
                _id: 'a3',
                category: 'ca3',
                name: 'Flunch',
                price: '7',
                city: "c1",
                address: 'Self-service cafeteria chain with unlimited vegetable meals and a casual atmosphere.',
                pictures: "/images/Nantes/flucnh.jpg",
                rating: '6.8',
                comments: [{
                    user: {
                        _id: 'u2',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["cafeteria", "familly"]
            }
            var activity4 = {
                _id: 'a4',
                category: 'ca4',
                name: 'La Boulangerie Honoré',
                price: '3',
                city: "c1",
                address: 'A bakery is a type of retail bread making and selling. This activity has been the subject of much attention on the part of the governed and rulers because of its importance in food.',
                pictures: "/images/Nantes/boulangerie.jpg",
                rating: '9.8',
                comments: [{
                    user: {
                        _id: 'u2',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["bakery", "bread"]
            }
            var activity5 = {
                _id: 'a5',
                category: 'ca5',
                name: 'Le Nez Grillé',
                price: '20',
                city: "c1",
                address: 'For lovers of grilled meat. Good welcome, very intimate. Homemade products.',
                pictures: "/images/Nantes/grill.jpg",
                rating: '8.4',
                comments: [{
                    user: {
                        _id: 'u2',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["meat", "grill"]
            }
            var activity6 = {
                _id: 'a6',
                category: 'ca0',
                name: 'Dax Restaurant',
                city: "c0",
                price: '45',
                address: 'Welcome to Dax Restaurant, one of the best fine dining restaurants in Dublin city centre offering modern Irish-French cuisine for lunch and dinner Tuesday to Saturday.Our intimate Georgian basement dining room retains many period features. The unique layout with open fire, hard-wood ceilings, fine table linens, modern art, original flag-stone floors and rough rendered walls lends the feel of a wealthy, rustic country manor house in rural France.',
                pictures: "/images/Dublin/dax.jpg",
                rating: '9.2',
                comments: [{
                    user: {
                        _id: 'u0',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["restaurant", "dax"]
            }
            var activity7 = {
                _id: 'a7',
                category: 'ca1',
                name: 'Supermacs',
                city: "c0",
                price: '10',
                address: 'The first Supermac’s opened its door in 1978 on Main Street, Ballinasloe, Co. Galway. Since that first opening Supermac’s restaurants have become a firm fixture in towns and cities around Ireland. Today Supermac’s is the largest indigenous fast food restaurant group with a policy of continued expansion and growth.The managing director of Supermac’s, Pat McDonagh, identified an opportunity in the locality for a fast food offering while teaching in Kilrickle in Co.Galway. From that first opportunity in Ballinasloe, Supermac’s has grown steadily, bringing its unique brand of wholesomeness and attention to detail to its chain of restaurants across Ireland. The success of the company can be attributed to a number of factors: a unique and innovative menu, a commitment to quality across all aspects of the business and a strong work ethic define Supermac’s as the number one franchise in Ireland',
                pictures: "/images/Dublin/supermacs.jpg",
                rating: '7.8',
                comments: [{
                    user: {
                        _id: 'u1',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["spermacs", "fastfood"]
            }
            var activity8 = {
                _id: 'a8',
                category: 'ca2',
                name: 'Stript Snacks',
                price: '8',
                city: "c0",
                address: 'Nicest biltong available in the UK or Ireland. Great for a late afternoon snack or a brilliant source of protein after the gym.',
                pictures: "/images/Dublin/stript.jpg",
                rating: '8',
                comments: [{
                    user: {
                        _id: 'u2',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["snack", "protein"]
            }
            var activity9 = {
                _id: 'a9',
                category: 'ca3',
                name: 'Queen of Tarts',
                price: '12',
                city: "c0",
                address: 'Queen of Tarts opened its doors for the first time in 1998. Sisters Regina and Yvonne Fallon trained as pastry chefs in New York City in the 1990s, returning home to Ireland to establish and run their own café. They knew what they wanted: to create a homely and welcoming space which offered the best breakfasts and weekend brunch in Dublin, the tastiest lunches – and the finest cakes, scones and brownies in the business. Not to mention, of course, the most sublime savoury and sweet tarts too!Queen of Tarts quickly established an iconic reputation – and today, sixteen years on, it’s still flourishing. Everything is baked and prepared fresh on the premises; and Yvonne and Regina still use only the best ingredients – Lavazza coffee beans in their coffee machines, Callebaut fine Belgian chocolate in their chocolate fudge cake and muffins, and of course the freshest Bramley’s Irish apples in their apple crumbles. The home-baked buttermilk brown breads are still moist and flavoursome, the soups are lovingly made daily – and the fabulous cakes and signature tarts still draw customers from far and wide. And now, a perfectly judged wine list is another reason to drop by.',
                pictures: "/images/Dublin/queen.jpg",
                rating: '9',
                comments: [{
                    user: {
                        _id: 'u2',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["cafeteria", "familly"]
            }
            var activity10 = {
                _id: 'a10',
                category: 'ca4',
                name: 'Thunders Home Bakery',
                price: '3.5',
                city: "c0",
                address: 'From christening cakes to birthday cakes and wedding cakes to novelty cakes, we can make whatever you want. Our cakes are made from fresh cream and butter cream and can be bought straight from our shops or ordered online with next day delivery.From our first shop in Drumcondra 1969, we now have seven around Dublin and two cafes, with more on the way. Yet we haven’t forgotten our origins and what makes us special. We are a traditional home bakery that makes fresh bread, cakes and confectionery.',
                pictures: "/images/Dublin/bakery.jpg",
                rating: '9',
                comments: [{
                    user: {
                        _id: 'u2',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["bakery", "bread"]
            }
            var activity11 = {
                _id: 'a11',
                category: 'ca5',
                name: 'Whitefriar Grill',
                price: '35',
                city: "c0",
                address: 'Whitefriar Grill’s Sunday Night Ribs ‘N’ Rump is nirvana for meat lovers everywhere! Stock up on the protein for the week ahead with a 14oz char-grilled rump steak, sticky BBQ baby back ribs, bacon ribs, honey glazed lamb ribs all served on a WFG chopping board, add to this two sides from (tobacco onions, greens, fries, balsamic onion & mushrooms) and you have a meat feast! All for 40 euros for two!',
                pictures: "/images/Dublin/grill.jpg",
                rating: '8.4',
                comments: [{
                    user: {
                        _id: 'u2',
                        email: 'myemail@hello.com'
                    },
                    date: new Date(),
                    comment: "perfect, worth every single cent"
                  }],
                tags: ["meat", "grill"]
            }
            console.log(activity0);
            Activities.remove({});
            Activities.insert(activity0);
            Activities.insert(activity1);
            Activities.insert(activity2);
            Activities.insert(activity3);
            Activities.insert(activity4);
            Activities.insert(activity5);
            Activities.insert(activity6);
            Activities.insert(activity7);
            Activities.insert(activity8);
            Activities.insert(activity9);
            Activities.insert(activity10);
            Activities.insert(activity11);
        },
    })
}
