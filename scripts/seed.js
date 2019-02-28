const { db, User, Present, Event, Product } = require("../models/models");

const seed = async () => {
    try {
        // await User.truncate({ restartIdentity: true });
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

        // await Event.truncate({ restartIdentity: true });
        await Event.bulkCreate([
            {
                title: "Saida & Joey's Baby Registry",
                type: "Baby Shower",
                date: "April 7, 2019",
                host_1: "Saida DiPeri",
                host_2: "Joey DiPeri",
                user_id: 1
            },
            {
                title: "Saida & Joey's Wedding",
                type: "Wedding",
                date: "March 30, 2018",
                host_1: "Saida DiPeri",
                host_2: "Joey DiPeri",
                user_id: 2
            }
        ]);

        // await Product.truncate({ restartIdentity: true });
        await Product.bulkCreate([
            {
                product_name:
                    "Simple Joys by Carter's Baby Boys' 2-Pack Cotton Footed Sleep and Play",
                img: "/images/baby-cloth.jpg",
                price: "14.99$",
                link:
                    "https://www.amazon.com/Simple-Joys-Carters-2-Pack-Cotton/dp/B07GKYV735/ref=sr_1_5?crid=39GBRA80EPIWO&keywords=baby+boy+clothes&qid=1551322630&s=gateway&sprefix=baby+boy+%2Caps%2C131&sr=8-5"
            }
        ]);

        // await Present.truncate({ restartIdentity: true });
        await Present.bulkCreate([
            {
                purchased: false,
                favorites: false
            }
        ]);
    } catch (err) {
        console.log("error", err.message);
    }
    process.exit();
};

seed();
