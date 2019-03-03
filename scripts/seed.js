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
                product_name: "Crib",
                product_description:
                    "DaVinci Autumn 4-in-1 Crib & Changer Combo in White",
                img: "crib.jpeg",
                price: "$329.99",
                link:
                    "https://www.buybuybaby.com/store/product/davinci-piedmont-4-in-1-crib-and-changer-combo-in-white/3330063?categoryId=32776"
            },
            {
                product_name: "Stroller",
                product_description:
                    "Chicco® Mini Bravo® Sport Travel System in Carbon",
                img: "stroller.jpeg",
                price: "$299.99",
                link:
                    "https://www.buybuybaby.com/store/product/chicco-reg-mini-bravo-reg-sport-travel-system-in-carbon/5231574?categoryId=32574"
            },
            {
                product_name: "Bedding Collection",
                product_description:
                    "Lambs & Ivy® Luna 4-Piece Crib Bedding Set in Grey/White",
                img: "bedding-set.jpeg",
                price: "$159.99",
                link:
                    "https://www.buybuybaby.com/store/product/lambs-amp-ivy-reg-luna-4-piece-crib-bedding-set-in-grey-white/5232825?categoryId=32003"
            },
            {
                product_name: "Bottle Gift Set",
                product_description:
                    "Dr. Brown's® Options+™ Bottle Gift Set in Blue",
                img: "bottle-gift-set.jpeg",
                price: "$49.99",
                link:
                    "https://www.buybuybaby.com/store/product/dr-brown-39-s-reg-options-trade-bottle-gift-set-in-blue/5197080?categoryId=305123"
            },
            {
                product_name: "Alphabet & Numbers",
                product_description: "Foam Alphabet & Numbers",
                img: "alphabet-numbers.jpeg",
                price: "$6.99",
                link:
                    "https://www.buybuybaby.com/store/product/foam-alphabet-numbers/1040593647?categoryId=30518"
            },
            {
                product_name: "Bath Thermometer",
                product_description:
                    "Dreambaby® Room and Bath Duck Thermometer",
                img: "thermometer.jpeg",
                price: "$12.99",
                link:
                    "https://www.buybuybaby.com/store/product/dreambaby-reg-room-and-bath-duck-thermometer/1046591630?categoryId=30518"
            },
            {
                product_name: "Bath Tub",
                product_description:
                    "Fisher-Price® 4-in-1 Sling 'n Seat Bath Tub in Grey",
                img: "bath-tub.jpeg",
                price: "$39.99",
                link:
                    "https://www.buybuybaby.com/store/product/fisher-price-reg-4-in-1-sling-39-n-seat-bath-tub-in-grey/5170369?categoryId=30518"
            },
            {
                product_name: "Teething Toy",
                product_description: "Sophie la girafe® Teething Toy",
                img: "girafe.jpeg",
                price: "$24.99",
                link:
                    "https://www.buybuybaby.com/store/product/sophie-la-girafe-reg-teething-toy/10171103578"
            },
            {
                product_name: "Activity Gym",
                product_description:
                    "SKIP*HOP® Silver Lining Cloud Activity Gym",
                img: "activity-gym.jpeg",
                price: "$84.99",
                link:
                    "https://www.buybuybaby.com/store/product/skip-hop-reg-silver-lining-cloud-activity-gym/1046921802"
            },
            {
                product_name: "Book",
                product_description:
                    "Snuggle Puppy Board Book by Sandra Boynton",
                img: "book.jpeg",
                price: "$6.95",
                link:
                    "https://www.buybuybaby.com/store/product/snuggle-puppy-board-book-by-sandra-boynton/1015083336"
            },
            {
                product_name: "Bodysuit",
                product_description:
                    "Little Me® 3-Pack Puppies Bodysuit in Blue",
                img: "body-suit.jpeg",
                price: "$12.99",
                link:
                    "https://www.buybuybaby.com/store/product/little-me-reg-3-pack-puppies-bodysuit-in-blue/3251789"
            },
            {
                product_name: "Socks",
                product_description: "Luvable Friends™ Newborn 6-Pack Socks",
                img: "socks.jpeg",
                price: "$7.99",
                link:
                    "https://www.buybuybaby.com/store/product/luvable-friends-trade-newborn-6-pack-socks/5028466"
            },
            {
                product_name: "Newborn Boy Sets",
                product_description:
                    "Gerber® 4-Piece Explore Bodysuit, Footie, Pant, and Hat Take Me Home Set in Blue",
                img: "newborn-set.jpeg",
                price: "$13.99",
                link:
                    "https://www.buybuybaby.com/store/product/gerber-reg-4-piece-explore-bodysuit-footie-pant-and-hat-take-me-home-set-in-blue/5089069?categoryId=32940"
            },
            {
                product_name: "Bodysuit and Shorts Set",
                product_description:
                    "Finn + Emma® 3-Piece Organic T-Shirt, Bodysuit and Shorts Set",
                img: "t-shirt.jpeg",
                price: "$24.99",
                link:
                    "https://www.buybuybaby.com/store/product/finn-emma-reg-3-piece-organic-t-shirt-bodysuit-and-shorts-set/5246322?categoryId=32940"
            },
            {
                product_name: "Bodysuit and Shorts Set",
                product_description:
                    "BabyVision® Yoga Sprout 3-Piece Lion Bodysuit, Hoodie, and Pant Set in Grey",
                img: "short-set.jpeg",
                price: "$14.99",
                link:
                    "https://www.buybuybaby.com/store/product/babyvision-reg-yoga-sprout-3-piece-lion-bodysuit-hoodie-and-pant-set-in-grey/3303626?categoryId=32940"
            },
            {
                product_name: "Night Light",
                product_description:
                    "Hatch Baby Rest Sound Machine with Night Light in White",
                img: "night-light.jpeg",
                price: "$59.99",
                link:
                    "https://www.buybuybaby.com/store/product/hatch-baby-rest-sound-machine-with-night-light-in-white/1061239272"
            },
            {
                product_name: "Musical Toy",
                product_description:
                    "Baby Einstein™ Hape Magic Touch Piano™ Musical Toy",
                img: "musical-toy.jpeg",
                price: "$24.99",
                link:
                    "https://www.buybuybaby.com/store/product/baby-einstein-trade-hape-magic-touch-piano-trade-musical-toy/5171733?categoryId=30008"
            },
            {
                product_name: "Highchair",
                product_description:
                    "Graco® Blossom™ LX 6-in-1 Convertible Highchair in Grey",
                img: "high-chair.jpeg",
                price: "$188.99",
                link:
                    "https://www.buybuybaby.com/store/product/graco-reg-blossom-trade-lx-6-in-1-convertible-highchair-in-grey/5219894?categoryId=30008"
            },
            {
                product_name: "Push Car",
                product_description:
                    "Best Ride On Cars® Mercedes 3-in-1 Push Car in White",
                img: "push-car.jpeg",
                price: "$99.99",
                link:
                    "https://www.buybuybaby.com/store/product/best-ride-on-cars-reg-mercedes-3-in-1-push-car-in-white/5039073?categoryId=30008"
            },
            {
                product_name: "Cam Baby Monitor",
                product_description:
                    "Cocoon Cam Plus Baby Monitor with Breathing Monitoring",
                img: "baby-monitor.jpeg",
                price: "$149.99",
                link:
                    "https://www.buybuybaby.com/store/product/cocoon-cam-plus-baby-monitor-with-breathing-monitoring/5213200?categoryId=30008"
            },
            {
                product_name: "Learning Desk",
                product_description: "Leap Frog® Learning Desk Activity Table",
                img: "learning-desk.jpeg",
                price: "$39.99",
                link:
                    "https://www.buybuybaby.com/store/product/leap-frog-reg-learning-desk-activity-table/5167149?categoryId=30008"
            },
            {
                product_name: "Learning Walker",
                product_description: "VTech® Sit to Stand Learning Walker",
                img: "learning-walker.jpeg",
                price: "$39.99",
                link:
                    "https://www.buybuybaby.com/store/product/vtech-reg-sit-to-stand-learning-walker/5173449?categoryId=30008"
            },
            {
                product_name: "Humidifier",
                product_description:
                    "Fridababy® 3-in-1 Humidifier with Diffuser and Nightlight",
                img: "humidifier.jpeg",
                price: "$49.99",
                link:
                    "https://www.buybuybaby.com/store/product/fridababy-reg-3-in-1-humidifier-with-diffuser-and-nightlight/5312921?categoryId=30008"
            },
            {
                product_name: "Booties",
                product_description:
                    "ED by Ellen DeGeneres Size 0-6M Heart Booties in Ivory",
                img: "booties.jpeg",
                price: "$11.99",
                link:
                    "https://www.buybuybaby.com/store/product/ed-by-ellen-degeneres-size-0-6m-heart-booties-in-ivory/5215253?categoryId=30008"
            },
            {
                product_name: "Cradle 'N Swing",
                product_description:
                    "Fisher Price® Owl 2-in-1 Smart Connected Deluxe Cradle 'N Swing in White/Grey",
                img: "swing.jpeg",
                price: "$169.99",
                link:
                    "https://www.buybuybaby.com/store/product/fisher-price-reg-owl-2-in-1-smart-connected-deluxe-cradle-39-n-swing-in-white-grey/5216527?categoryId=30008"
            },
            {
                product_name: "Plush Toy",
                product_description: "Spunky Hedgehog Plush Toy",
                img: "plush-toy.jpeg",
                price: "$169.99",
                link:
                    "https://www.buybuybaby.com/store/product/spunky-hedgehog-plush-toy/1061875456?categoryId=30008"
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
