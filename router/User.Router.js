//! User Router for Registrating and Login

const bcrypt = require('bcrypt'); //for hashing
const jwt = require('jsonwebtoken'); //for token 
const express = require('express');

// importing UserSchema here
const UserModel = require('../models/User.Model');

const app = express();

const UserRouter = express.Router(); //making route
UserRouter.use(express.json());  //converting in json format


// ! making  User's Register routes

// signup route

UserRouter.post('/signup', async (req, res) => {

    // taking from user model
    const { email, password } = req.body
    console.log(req.body);
    try {
        // finding by email
        const user = await UserModel.find({ email });
        console.log(user);

        // validation for users already exists
        if (user.length > 0) {
            res.send(`User ${user} already exists 😀`);
        } else {

            // hashing the password of the user
            bcrypt.hash(password, 6, async (err, hash) => {
                const users = new UserModel({
                    email: email,
                    password: hash,
                })
                console.log(users);

                // save users data in database
                await users.save();

                // generating status response of successful register request
                res.status(201).send({ message: ` Users Successfully registered 🙂`, users })

            })
        }

    } catch (error) {
        console.log(error.message);

        // generate failed registration response
        res.status(404).send({ message: ` Users  registration failed 🥲`, users })
    }
})



// ! making  User's Login routes

//login router

UserRouter.post('/login', async (req, res) => {

    // taking from user's schema
    const { email, password } = req.body;
    console.log(req.body);

    try {

        // finding user from email
        const user = await UserModel.findOne({ email });
        console.log(user);

        // checking for hashed users
        const hashed_password = user?.password;
        console.log(hashed_password);

        if (user) {

            // comparing the hash password
            bcrypt.compare(password, hashed_password, async (err, result) => {
                try {

                    // checking for hashed users result
                    if (result) {

                        // generating token for user for other routes
                        const token = jwt.sign({ user_id: user._id }, 'OLX-key', { expiresIn: "7d" });
                        console.log(token);

                        // generating status response of login Users request
                        res.status(201).send({ message: ` Users Successfully Login 🙂`, token, user_id: user._id, user });
                    } else {
                        console.log(err.message);
                    }

                } catch (error) {
                    console.log(error.message);

                }

            });
        } else {
            console.log({ message: `Sorry user not found or password missmatched` });

            // generating status response of failed login  request
            res.status(404).send({ message: `Sorry user not found or password missmatched` });
        }

    } catch (error) {

        console.log(error.message);
        res.status(404).send({ message: ` Users  Login failed 🥲`, user })
    }
})



// exporting user routers
module.exports = UserRouter;


