var mongoose = require("mongoose");
var Schema = mongoose.Schema;
    // bcrypt = require('bcrypt'),
    // SALT_WORK_FACTOR = 10;

    const UserSchema = new Schema({
        fullname: {
            type: String,
            required: true
        },
        username: { 
            type: String, 
            match: [/.+\@.+\..+/, "Please enter a valid e-mail address"], 
            required: true, 
            index: { unique: true } 
        },
        password: { 
            type: String, 
            required: true,
            validate: [
                function(input) {
                  return input.length >= 5;
                },
                "Password must be at least 6 characters"
            ]
        },
        giftcards: [
            {
            type: Schema.Types.ObjectId,
            ref: "giftcard"
            }
        ]
    });
    
    const User = mongoose.model("User", UserSchema);
    module.exports = User;
    
