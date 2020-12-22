const { RequestResponseStatusCode } = require("@vonage/server-sdk");
const db = require("../models")


module.exports = {
    findAll: function (req, res) {
        db.Contacts
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Contacts
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Contacts
            .create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber:req.body.phoneNumber,
                activities: [req.body.selectedActivity]
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Contacts
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Contacts
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findActivityContact: function (req, res) {
        db.Contacts
        this.findById({_id: req.params.id}).populate('activity')
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    }

};
