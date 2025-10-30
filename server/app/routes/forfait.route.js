module.exports = app => {
    const forfait= require('../controllers/forfait.controller.js')
    const router = require('express').Router()

    // Créer un nouveau forfait
    router.post('/', forfait.create)

    // Récupérer tous les forfaits
    router.get('/', forfait.findAll)

    // Récupérer un forfait par ID
    router.get('/:id', forfait.findOne)

    // Mettre à jour un forfait
    router.put('/:id', forfait.update)

    // Supprimer un forfait
    router.delete('/:id', forfait.delete)

    // Enregistrement des routes sous /api/forfaits
    app.use('/api/forfaits', router)
}