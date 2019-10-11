const express = require("express");
const router = express.Router();
const serverService = require("../services/serverService")

//find servers
router.get("/find/server", function (req, res) {
    serverService.findServer().then(data => {
        res.json({ statusCode: 200, data: data });
    }).catch(err => res.json({ statusCode: 400, data: err }));
});

module.exports = router;
