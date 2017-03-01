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

Router.route("/city/:id", {
    template: "city",
    data : function() {
        console.log(this.params.id);
        console.log(Cities.findOne({_id : this.params.id}));
        return Cities.findOne({_id : this.params.id});
    }
});

