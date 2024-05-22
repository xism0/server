const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let messages = [];

app.post('/message', (req, res) => {
    const { message } = req.body;
    if (message) {
        messages.push(message);
        res.status(200).send('Message received');
    } else {
        res.status(400).send('No message provided');
    }
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
