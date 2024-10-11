const express = require('express');
const app = express();

const port = process.env.PORT || 8080;  // Use 8080 as the default port

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
