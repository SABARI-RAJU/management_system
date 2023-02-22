const app = require("./app");
const dotenv = require('dotenv');
dotenv.config();
const PORT =process.env.port

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})