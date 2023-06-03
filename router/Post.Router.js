//! Post Router for Registrating and Login

const bcrypt = require('bcrypt'); //for hashing
const jwt = require('jsonwebtoken'); //for token 
const express = require('express');

// importing PostSchema here
const PostModel = require('../models/Post.Model');

const app = express();

const PostRouter = express.Router(); //making route
PostRouter.use(express.json());  //converting in json format


//! performing crud operations here

//Post request 

PostRouter.post('/post', async (req, res) => {
    let post = req.body;
    console.log(post);
    try {

        let data = new PostModel(post);
        console.log(data);
        await data.save();

        console.log(data);
        res.status(201).send({ message: `  Classifields posted  here successfully 🙂`, data });

    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: ` failed to post classifield 🥲`, data })

    }
})

// Get router

PostRouter.get('/post', async (req, res) => {

    try {

        let data = await PostModel.find();
        console.log(data);

        console.log(data);
        res.status(201).send({ message: `  Browse your classifield collection🙂`, data });

    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: ` failed to browse your classifield collection  🥲`, data })

    }
})

// Patch router

PostRouter.patch('/post/:id', async (req, res) => {
    let post = req.body;
    let id = req.params.id;
    console.log(post, id)
    try {

        let data = await PostModel.findByIdAndUpdate(id, post);
        console.log(data);

        console.log(data);
        res.status(201).send({ message: `  update your classifield collection🙂`, data });

    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: ` failed to update your classifield collection  🥲`, data })

    }
})

// delete Router
PostRouter.delete('/post/:id', async (req, res) => {
    let id = req.params.id;
    console.log(id)
    try {

        let data = await PostModel.findByIdAndRemove(id);
        console.log(data);

        console.log(data);
        res.status(201).send({ message: `  deleted your classifield collection🙂`, data });

    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: ` failed to delete your classifield collection  🥲`, data })

    }
})

// Searching by name
PostRouter.get('/post', async (req, res) => {
    async function searchByName(req, res) {
        try {
            const searchStr = req.query.name;
            const regrexQ = { name: { $regrex: searchStr, $options: 'i' } };


            const data = await PostModel.find(regrexQ);
            res.json({data})
            res.send(data)

        } catch (error) {
            console.log(error.message);
            res.send({ message: ` searcning by name   🥲` })

        }

    }


})

// Pagination 
PostRouter.get("/post", async (req, res) => {
    const { page } = req.query;
    const new_data = await PostModel.find().skip((page - 1) * 2).limit(3);

    console.log(new_data);
    res.send(new_data);
})


// filter  by category
PostRouter.get('/clothing', async (req, res) => {

    try {

        const data = await PostModel.find({ category: 'clothing' })
        console.log(data);
        res.send(data);

    } catch (error) {
        console.log(error.message);

    }

})

// filter by electronics

PostRouter.get('/electronics', async (req, res) => {

    try {

        const data = await PostModel.find({ category: 'electronics' })
        console.log(data);
        res.send(data);

    } catch (error) {
        console.log(error.message);

    }

})

// filter by furniture

PostRouter.get('/furniture', async (req, res) => {

    try {

        const data = await PostModel.find({ category: 'furniture' })
        console.log(data);
        res.send(data);

    } catch (error) {
        console.log(error.message);

    }

})

// filter by others category
PostRouter.get('/others', async (req, res) => {

    try {

        const data = await PostModel.find({ category: 'others' })
        console.log(data);
        res.send(data);

    } catch (error) {
        console.log(error.message);

    }

})

// sort by date 
PostRouter.get('/sortbydate', async (req, res) => {
    try {
        const data = await PostModel.find().sort({ date: 1 });
        console.log(data)
        res.send(data)

    } catch (error) {
        console.log(error.message);

    }

})




module.exports = PostRouter;


