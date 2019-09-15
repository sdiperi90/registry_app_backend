const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const passport = require("passport");
const path = require("path");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
require("./services/passport");

app.use(bodyParser.json());
app.use(morgan("dev"));
// configuration object is passed to cookie session
// configuration object expexcts 2 diff properties
// maxAge how long cookie can exist in browser before autamatically expiring
// keys to encrypt the cookie, provide additional security
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        keys: [keys.cookieKey]
    })
);
//telling passport to use cookies to authenticate user
app.use(passport.initialize());
app.use(passport.session());

// oauth routes
require("./routes/authRoutes")(app);
require("./routes/event")(app);
require("./routes/product")(app);
require("./routes/present")(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'build' + 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`);
});
