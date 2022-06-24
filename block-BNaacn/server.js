let mongoose = require(`mongoose`);
let Schema = mongoose.Schema;

let app = express();

mongoose.connect("mongodb+srv://baljeetsingh:Roopsingh007@cluster0.26rdn.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    console.log(err ? err : "Connected to database")
})

app.listen(`3000`, ()=>{
    console.log(`Listening on port 3k`)
})