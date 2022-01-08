const express = require("express");
const app = express();

app.use(express.static("./public"));

app.listen(5200, () => {
  console.log("Server is up at 5200");
});

// app.get("/home",(req,res)=>{
//     res.send('./')
// });
