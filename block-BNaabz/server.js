let mongoose = require(`mongoose`);
let express = require(`express`);

mongoose.connect("mongodb+srv://baljeetsingh:Roopsingh007@cluster0.26rdn.mongodb.net/?retryWrites=true&w=majority", (err) => {
  console.log(err ? err : "Connected to database");
});

let app = express();

app.get(`/`, (req,res)=>{
    res.send(`Hello`)
})

app.listen(3000, () => {
  console.log(`The server is listening on port 3k`);
});
