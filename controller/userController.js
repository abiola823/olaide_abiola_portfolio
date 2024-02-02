const {user} = require('../models/userModel');
const express = require('express');
const app = express();
const path = require('path');

const contactUser = async (req, res) => {
    try {
        const{name, email, message } = req.body;
      const response =  await user.create({
            name,
            email,
            message
        });
        if(response) return res.status(200).sendFile(path.join(__dirname, 'response.html' ));

    } catch (error) {
        res.send("could not send your message because: ", error.message);
    }
}

module.exports = {
    contactUser
};