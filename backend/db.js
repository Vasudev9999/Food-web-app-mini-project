const mongoose = require('mongoose');

const mongoDB = async () => {
    try {
        const uri = "mongodb+srv://22it118:vnpvnp16@data.ls38hpg.mongodb.net/V-fOOd?retryWrites=true&w=majority";

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB Atlas");

        const fetched_data = await mongoose.connection.db.collection("food-items").find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

        global.food_items = fetched_data;
        global.foodCategory = foodCategory;

        // console.log("Data fetched successfully");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

module.exports = mongoDB;

// const mongoose = require('mongoose');

// const mongoDB = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/V-fOOd');
//         console.log("Connected");

//         const fetched_data = await mongoose.connection.db.collection("food-items").find({}).toArray();
//         const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

//         global.food_items = fetched_data;
//         global.foodCategory = foodCategory;

//         // console.log("Data fetched successfully");
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// module.exports = mongoDB;


// const mongoose = require('mongoose');

// const mongoDB = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/V-fOOd');
//         console.log("Connected");
        
//         const fetched_data = await mongoose.connection.db.collection("food-items");
        
//         console.log(fetched_data);
        
//         const data = await fetched_data.find({}).toArray();
//         // console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// };

// module.exports = mongoDB;
