const express = require("express");
const router = express.Router();
const findServer = require("../services/serverService")

//find servers
router.get("/find/server", function (req, res) {
    findServer().then(data => {
        res.send(data)
    });
});


module.exports = router;
