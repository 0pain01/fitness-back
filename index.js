const { request } = require('express');
const express = require('express');
const { Int32 } = require('mongodb');
const { default: mongoose, Collection } = require('mongoose');
const dbConnect = require('./db/dbConnect')
const User = require('./db/userModel')
const bodyParser = require('body-parser')

dbConnect();

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello server");
})

app.post("/subs",(req,res)=>{
    const user = new User({
		name: req.body.name,
		email: req.body.email,
	})

	user.save()
	.then((result)=>{
		return res.status(201).send({
			message: "user created successfully",
			result
		})
	}).catch((error)=>{
		return res.status(500).send({
			message: "user not created",
			error
		})
	})
})


app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
