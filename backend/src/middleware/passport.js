const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const User        = require("../models/users/users.mongo");
require("dotenv").config();


module.exports = (passport) => {
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey    = process.env.JWT_SECRET;
    
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    
    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
    
    passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
        await User.find({ _id: jwt_payload._id })
            .then(user => {
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            }).catch(err => {
                return done(err, false);
            })
    }));

    console.log("PASSPORT JS Strategies are ready.");
}