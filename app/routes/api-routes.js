var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM members";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a Member
  app.post("/api/new", function(req, res) {
    console.log("Member Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO members (email) VALUES (?)";

    connection.query(dbQuery, [req.body.email] , function(err, result) {
      if (err) throw err;
      console.log("Email Successfully Saved!");
      res.end();
    });
  });
};
