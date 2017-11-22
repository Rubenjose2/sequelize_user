var db = require("../models");


module.exports = function(app) {
    //This Route would print all the user 
    app.get("/api/user", function(req, res) {
        db.user.findAll({
            include: [db.Access]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    })

};