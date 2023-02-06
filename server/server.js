const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true}));


app.post('/api/upload', (req, res) => {
    try {
        const fileString = req.body.data;
        
    } catch (error) {
        console.error(error);
    }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

