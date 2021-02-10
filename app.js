const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'./src')));

app.get('/', (req, res, next) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server listen this port:${PORT}`);
})