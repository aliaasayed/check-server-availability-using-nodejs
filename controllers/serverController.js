const express = require("express");
const router = express.Router();
const serverService = require("../services/serverService")

//find servers
router.get("/find/server", function (req, res) {
    serverService.findServer().then(data => {
        res.status(200).json({ data: data });
    }).catch(err => res.status(404).json({ err: err }));
});

module.exports = router;
