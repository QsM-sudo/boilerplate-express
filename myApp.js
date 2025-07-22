let express = require('express');
let app = express();


app.get('/',(req,res)=>{
    res.send("Hello Express")
})



const port = 3000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
































 module.exports = app;
