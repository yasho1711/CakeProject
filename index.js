// app.use(express.static(__dirname + '/public'));
const express = require('express') 
const app = express() 
const path = require('path') 




const port = process.env.PORT || 8000 

// View Engine Setup 
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

app.get('/', function(req, res){ 
    res.render('home', { 
   
    }) 
}) 

app.listen(port, function(error){ 
    if(error) throw error 
    console.log("Server created Successfully") 
})