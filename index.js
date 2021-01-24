const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ error: false, message: 'welcome!' });
})

const server = app.listen(process.env.PORT || 3000,
    () => { console.log(`server is runnig on port ${server.address().port}`) }
);