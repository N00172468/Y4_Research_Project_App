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

router.route('/:id').get((req, res) => {
    Info.findById(req.params.id)
        .then(info => res.json(info))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Info.findByIdAndDelete(req.params.id)
        .then(() => res.json('Info Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}); 

router.route('/update/:id').post((req, res) => {
    Info.findById(req.params.id)
        .then(info => {
            info.username = req.body.username;
            info.description = req.body.description;
            info.experience = Number(req.body.experience);
            info.date = Date.parse(req.body.date);

            info.save()
                .then(() => res.json('Info Updated!'))
                .catch(err => res.status(400).json('Erro: ' + err));
        })
        .catch(err => res.status(400).json('Erro: ' + err));
});

module.exports = router;