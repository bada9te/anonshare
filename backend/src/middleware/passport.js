const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const User        = require("../models/users/users.mongo");


module.exports = (passport) => {
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 's1';
    opts.issuer      = 's2';
    opts.audience    = 's3';
    
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    
    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
    
    passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
        await User.findOne({id: jwt_payload.sub})
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