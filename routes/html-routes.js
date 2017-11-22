var path = require("path");

module.exports = function(app) {

    app.get("/admin/user", function(req, res) {
        res.sendfile(path.join(__dirname, "../public/user.html"));
    });
};