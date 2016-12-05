var express = require('express');

//create app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
    //res.redirect('http://'+req.hostname+req.url)
  } else {
    res.redirect('http://'+req.hostname+req.url)
    //next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express up on' + PORT);
});
