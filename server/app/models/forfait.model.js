
module.exports = (connex, Sequelize) => {
    const Forfait = connex.define('forfait', {
        nom: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.TEXT,
        },
        prix: {
            type: Sequelize.DECIMAL(10, 2),
        },
        image: {
            type: Sequelize.STRING,
        },
        categorie: {
            type: Sequelize.STRING,
        }
    })

    return Forfait
}