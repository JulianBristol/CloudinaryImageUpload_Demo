const express = require('express');
const app = express();

const { cloudinary } = require('./utils/cloudinary');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true}));

app.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('dev_upload_preset')
        .sort_by('updated_at', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

app.post('/api/upload', async(req, res) => {
    try {
        const fileString = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileString, {
            upload_preset: 'dev_upload_preset'
        })
        console.log(uploadedResponse);
        res.json({msg: "Image uploaded successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({err: 'Error uploading image'});
    }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

