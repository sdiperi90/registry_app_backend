const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const { User } = require("../models/models");

// console.developers.google.com;

passport.serializeUser((user, done) => {
    done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback"
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const user = await User.findOne({
                    raw: true,
                    where: {
                        googleId: profile.id
                    }
                });
                console.log(user);
                if (user) {
                    // If the credentials are valid, the verify callback invokes done to supply
                    //Passport with the user that authenticated.
                    return done(null, user);
                } else {
                    console.log(accessToken);
                    console.log("refresh token:", refreshToken);
                    console.log("profile:", profile);
                    // if we don't have a user record with this ID make a new record in db
                    let user = await User.create({
                        googleId: profile.id,
                        first_name: profile.name.givenName,
                        last_name: profile.name.familyName,
                        email: profile.emails[0].value
                    });
                    return done(null, user);
                }
            } catch (err) {
                if (err) {
                    return done(err);
                }
            }
        }
    )
);

// generate some identifying token and attach it user's cookie
