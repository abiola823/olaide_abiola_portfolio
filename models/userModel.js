const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            
        },

        message: {
            type: String,
            required: true
        }

}, {
    timestamps: true
});
const user = mongoose.model("Users", userSchema);

module.exports = {
    user
};
