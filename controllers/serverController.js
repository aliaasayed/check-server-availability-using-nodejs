const express = require("express");
const router = express.Router();
const serverService = require("../services/serverService")

//find servers
router.get("/find/server", function (req, res) {
    serverService.findServer().then(data => {
        res.json(data)
    }).catch(err => res.json(err));
});


module.exports = router;
