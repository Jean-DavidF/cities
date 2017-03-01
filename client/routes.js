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
<<<<<<< HEAD
/*
Router.route('/city/:id', {
    template: "city",
    data: function () {
        // Return the document for the selected city (the one whose id is given)
        // The value of this id is given by  this.params.id
    }
});
*/
=======
>>>>>>> 6c66b0a344f5c3944d5fbf418980684d6fb142b2
