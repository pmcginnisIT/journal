let express = require("express");
let router = express.Router();

// router.get('/practice', function(req, res){
//     res.send("This is a practice route!")
// });

router.get('/about', function(req, res){
        res.send("This is an about route!")
    });

module.exports = router;
