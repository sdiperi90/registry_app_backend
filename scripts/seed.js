const { db, User, Present, Event, Product } = require("../models/models");

const seed = async () => {
    try {
        await User.truncate({ restartIdentity: true });
        await User.bulkCreate([
            {
                first_name: "Saida",
                last_name: "DiPeri",
                email: "sdiperi17@gmail.com",
                username: "sdiperi90"
            },
            {
                first_name: "Pamela",
                last_name: "Johnson",
                email: "pjohnson@gmail.com",
                username: "pam90"
            }
        ]);

        await Event.truncate({ restartIdentity: true });
        await Event.bulkCreate([
            {
                title: "Saida & Joey's Baby Registry",
                type: "Baby Shower",
                date: "April 7, 2019",
                host_1: "Saida DiPeri",
                host_2: "Joey DiPeri"
            }
        ]);
    } catch (err) {
        console.log("error", err.message);
    }
    process.exit();
};

seed();
