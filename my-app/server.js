const express-generator = require ('express-generator');
const mongoose = require ('mongoose')

const PORT = 3001;

app.get('/', function(req,res){
  console.log('get to root');
  res.sendFile(path.join(__dirname, ./../ ))
});

app.listen(PORT, function(){
  console.log('listening on port '+ PORT)
});
