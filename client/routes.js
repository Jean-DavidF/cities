Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    template: "start"
});

Router.route("/choice", {
    template: "choice"
});

/*Router.route("/list-activities", {
    template: "listActivities"
});*/

Router.route("/city/:id", function() {
    var city = Cities.findOne({_id : this.params.id})
    if(typeof city == "undefined")
        this.render("notFound");
    else
        this.render("city",{data : city});
});


Router.route("/restaurants/:id", function() {
    var listactivities = Cities.findOne({_id : this.params.id})
    if(typeof listactivities == "undefined")
        this.render("notFound");
    else
        this.render("activitiesBakery",{data : {city : listactivities, category  : "ca0"}});
});

Router.route("/fastfoods/:id", function() {
    var listactivities = Cities.findOne({_id : this.params.id})
    if(typeof listactivities == "undefined")
        this.render("notFound");
    else
        this.render("activitiesBakery",{data : {city : listactivities, category  : "ca1"}});
});

Router.route("/snacks/:id", function() {
    var listactivities = Cities.findOne({_id : this.params.id})
    if(typeof listactivities == "undefined")
        this.render("notFound");
    else
        this.render("activitiesBakery",{data : {city : listactivities, category  : "ca2"}});
});

Router.route("/cafeterias/:id", function() {
    var listactivities = Cities.findOne({_id : this.params.id})
    if(typeof listactivities == "undefined")
        this.render("notFound");
    else
        this.render("activitiesBakery",{data : {city : listactivities, category  : "ca3"}});
});

Router.route("/bakerys/:id", function() {
    var listactivities = Cities.findOne({_id : this.params.id})
    if(typeof listactivities == "undefined")
        this.render("notFound");
    else
        this.render("activitiesBakery",{data : {city : listactivities, category  : "ca4"}});
});

Router.route("/grills/:id", function() {
    var listactivities = Cities.findOne({_id : this.params.id})
    if(typeof listactivities == "undefined")
        this.render("notFound");
    else
        this.render("activitiesBakery",{data : {city : listactivities, category  : "ca5"}});
});



/*Router.route("/activity/:id", function() {
    var pageactivities = Activities.findOne({_id : this.params.id})
    if(typeof pageactivities == "undefined")
        this.render("notFound");
    else
        this.render("activitiesPage",{data : pageactivities});
});*/