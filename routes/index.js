var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[{
    name:"asus",
    categorey:"laptop",
    description:"hd view",
    image:"https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024"
  },
{
name:"asus",
categorey:"laptop",
description:"hd view",
image:"https://m.media-amazon.com/images/I/7147S89KqeL._AC_UF1000,1000_QL80_.jpg"

}]
  res.render('index', {products,admin:true});
});

module.exports = router;
