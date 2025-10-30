<template>
  <div id="app">
    <Header />
    <router-view 
      :forfaits="forfaits"
      :addForfait="addForfait"
      :updateForfait="updateForfait"
      :deleteForfait="deleteForfait" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ForfaitDataService from './services/ForfaitDataService'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      forfaits: []
    }
  },
  mounted() {
    // Charger tous les forfaits au démarrage
    ForfaitDataService.getAll()
      .then(response => {
        this.forfaits = response.data
      })
      .catch(error => {
        console.error('Erreur lors du chargement des forfaits:', error)
      })
  },
  methods: {
    // Ajouter un forfait au tableau
    addForfait(forfait) {
      this.forfaits.push(forfait)
    },

    // Mettre à jour un forfait dans le tableau
    updateForfait(index, data) {
      this.forfaits[index] = data
    },

    deleteForfait(forfaitId) {

      // Recherche l'index du forfait dans le tableau 'forfaits' 
      const index = this.forfaits.findIndex(f => f.id === forfaitId)
      if (index !== -1) {
        this.forfaits.splice(index, 1)
      } 
    }
  }

}
</script>