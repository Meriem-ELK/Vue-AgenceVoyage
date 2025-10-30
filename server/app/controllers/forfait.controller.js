const db = require('../models')
const Forfait = db.Forfaits

// Récupérer tous les forfaits (LIST)
exports.findAll = (req, res) => {
    Forfait.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Erreur lors de la récupération des forfaits'
            })
        })
}

// Créer un nouveau forfait (CREATE)
exports.create = (req, res) => {

    // Validation
    if (!req.body.nom) {
        res.status(400).send({
            message: 'Le nom du forfait est requis'
        })
        return
    }

    if (!req.body.prix) {
        res.status(400).send({
            message: 'Le prix est requis'
        })
        return
    }

    if (!req.body.image) {
         res.status(400).send({
            message: 'L\'URL de l\'image est obligatoire.'
        })
        return
  }

    if (!req.body.categorie) {
        res.status(400).send({
            message: 'La catégorie est requise'
        })
        return
    }

    // Créer le forfait
    Forfait.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Erreur lors de la création du forfait'
            })
        })
}

// Récupérer un forfait par ID
exports.findOne = (req, res) => {
    const id = req.params.id

    Forfait.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Forfait avec id=${id} non trouvé`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Erreur lors de la récupération du forfait avec id=${id}`
            })
        })
}

// Mettre à jour un forfait (UPDATE)
exports.update = (req, res) => {
    const id = req.params.id

    Forfait.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Forfait mis à jour avec succès'
                })
            } else {
                res.status(404).send({
                    message: `Impossible de mettre à jour le forfait avec id=${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Erreur lors de la mise à jour du forfait avec id=${id}`
            })
        })
}

// Supprimer un forfait (DELETE)
exports.delete = (req, res) => {
    const id = req.params.id

    Forfait.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Forfait supprimé avec succès'
                })
            } else {
                res.status(404).send({
                    message: `Impossible de supprimer le forfait avec id=${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Erreur lors de la suppression du forfait avec id=${id}`
            })
        })
}