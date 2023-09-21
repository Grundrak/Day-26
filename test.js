

const express = require('express');
const app = express();

const PORT = 3000;




app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
})
app.get('/',(req,res) => {
    res.send('Welcome to my Express.js server!')
})
