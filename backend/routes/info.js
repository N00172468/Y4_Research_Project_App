const router = require('express').Router();
let Info = require('../models/info.model');

router.route('/').get((req, res) => {
    Info.find()
        .then(info => res.json(info))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const experience = Number(req.body.experience);
    const date = Date.parse(req.body.date);

    const newInfo = new Info({
        username,
        description,
        experience,
        date
    });

    newInfo.save()
        .then(() => res.json('Info added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;