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

Router.route("/list-activities", {
    template: "listActivities"
});

Router.route("/city/:id", function() {
    var city = Cities.findOne({_id : this.params.id})
    if(typeof city == "undefined")
        this.render("notFound");
    else
        this.render("city",{data : city});
});
