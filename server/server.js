const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'https://placeimg.com/64/64/1',
            name: 'Sang',
            birthday: '000729',
            gender: 'Male',
            job: 'Web-Developer'
        },
        {
            id: 2,
            image: 'https://placeimg.com/64/64/2',
            name: 'Jang',
            birthday: '990427',
            gender: 'Male',
            job: 'Student'
        },
        {
            id: 3,
            image: 'https://placeimg.com/64/64/4',
            name: 'Jae',
            birthday: '961225',
            gender: 'Female',
            job: 'Student'
        }
    ])
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})