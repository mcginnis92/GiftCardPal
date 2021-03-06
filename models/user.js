var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

    const UserSchema = new Schema({
        fullname: {
            type: String,
            required: true,
            trim: true
        },
        username: { 
            type: String, 
            match: [/.+\@.+\..+/, "Please enter a valid e-mail address"], 
            required: true, 
            trim: true,
            index: { unique: true } 
        },
        password: { 
            type: String, 
            required: true,
            trim: true,
            validate: [
                function(input) {
                  return input.length >= 5;
                },
                "Password must be at least 5 characters"
            ]
        },
        giftcards: [
            {
            type: Schema.Types.ObjectId,
            ref: "giftcard"
            }
        ]
    });

    /**
     * @function comparePassword checks the password a user gives us
     * @param {string} candidatePassword what the user typed in
     * @param {function} cb the bcrypt compare function that checks for a match
     * @returns {boolean} isMatch
     */
    UserSchema.methods.comparePassword = function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    };
    

    const User = mongoose.model("User", UserSchema);
    module.exports = User;
    
