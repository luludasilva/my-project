const express = require('express');
const router = express.Router();
const newsData = require('../components/newsData')
const newsElement = require('../components/newsElement')
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });


router.get('/', upload.single('image'), async (req, res) => {
    const dataArray = newsData.getDataArray();
    res.json(dataArray);

});


//-------------------post-------------------//
router.post('/', upload.single('image'), (req, res) => {
    const { title, subtitle, content } = req.body;

    if (!title || !subtitle || !content) {
        return res.status(400).json({ error: 'Incomplete fields' });
    }

    if (!req.file || !req.file.path) {
        return res.status(400).json({ error: 'Image upload failed' });
    }

    const imagePath = req.file.path.replace('public', '');

    const newNewsElement = new newsElement(title, imagePath, subtitle, content);
    newsData.pushToDataArray(newNewsElement);

    res.status(201).json({ success: true, data: newNewsElement });
});


module.exports = router