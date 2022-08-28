const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport=require('passport');
const GOOGLE_CLIENT_ID ="695989205548-uu7n6mau41649ob85dvi3rokmp8t6lbp.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

FACEBOOK_APP_ID="6093871213957436"
FACEBOOK_APP_SECRET="";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
//   function(accessToken, refreshToken, profile, cb) {  for database
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
        // const user ={
        //     username:profile.displayName,
        //     avatar:profile.photos[0],
        // };
        // user.save;
//     });
  }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
//   function(accessToken, refreshToken, profile, cb) {  for database
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
        // const user ={
        //     username:profile.displayName,
        //     avatar:profile.photos[0],
        // };
        // user.save;
//     });
  }
));

passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((user,done)=>{
    done(null,user);
})