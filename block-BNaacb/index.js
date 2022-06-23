let mongoose = require(`mongoose`);
let express = require(`express`);

mongoose.connect(
  "mongodb//localhost/sample",
  (err) => {
    console.log(err ? err : "Connected with mongodb");
  }
);

let app = express();

app.listen(3000, () => {
  console.log(`Listening on port 3k`);
});
