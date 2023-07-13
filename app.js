//express
const express = require('express');

const { response, request } = require('express');

//express app
const app = express();

//mongoose
const mongoose = require('mongoose');
const toolData = require('./models/tool-data.js');

//connection to mongodb
const dbURI = 'mongodb+srv://aarushpatil4:RVXrCOEi58fNstw7@cluster0.ptxoxhh.mongodb.net/Tools?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) =>{
        //make app listen for requests
        app.listen(3000);
    })
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');


//middleware for static files
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

//render the page to add tools
app.get('/', (req, res) => {
    res.redirect('/add-tool');
})

app.get('/add-tool', (req, res) => {
    res.render('index');
})

app.get('/tools', (req, res) => {
    res.render('tools');
    toolData.find()
        .then((result) => {
            console.log(result);
            // res.render('tools', {tools: result})
        })
})


app.post('/add-tool', (req, res) => {
    const tool = new toolData({name: req.body.name, description: req.body.description, category: req.body.category, quantity: req.body.quantity, price: req.body.price});

    tool.save()
        .then((result) => {
            res.redirect('/add-tool');
        })
        .catch((err)=>{
            console.log(err);
        })
})

