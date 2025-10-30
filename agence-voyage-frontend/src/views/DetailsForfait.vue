<template>
  <section class="p-6 mb-8 w-full md:w-4/5 mx-auto">
    <div class="container bg-white rounded-xl shadow-xl overflow-hidden">
      
      <div class="border-b border-gray-100 bg-gray-50">
        <router-link to="/forfaits" class="inline-flex items-center px-6 py-4 text-gray-600 hover:text-[#f59e0b] transition-colors duration-200 font-medium">
          <i class="fas fa-chevron-left mr-2 text-sm"></i> 
          Retour aux forfaits
        </router-link>
      </div>

      <div class="flex flex-col lg:flex-row">
        
        <!-- Image Section -->
        <div class="lg:w-1/2 p-8">
          <div class="sticky top-6">
            <img v-if="forfait.image" :src="forfait.image" :alt="forfait.nom" class="w-full h-96 object-cover rounded-xl shadow-md" />
            <div v-else  class="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <div class="text-center">
                <i class="fas fa-image text-gray-400 text-5xl mb-3"></i>
                <p class="text-gray-500 font-medium">Aucune image disponible</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Détails Section -->
        <div class="lg:w-1/2 p-8 lg:pl-4">
          
          <!-- En-tête -->
          <div class="mb-6">
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {{ forfait.nom }}
            </h1>
            
            <div class="flex items-center justify-between flex-wrap gap-4">
              <span :class="`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold border ${getCategoryColor(forfait.categorie)}`">
                <i class="fas fa-tag mr-2 text-xs"></i>
                {{ forfait.categorie }}
              </span>

              <div class="flex items-baseline">
                <span class="text-4xl font-bold text-[#f59e0b]">{{ forfait.prix }}</span>
                <span class="text-xl text-gray-600 ml-1">$</span>
              </div>
            </div>
          </div>

          <!-- Separateur -->
          <div class="border-t border-gray-200 my-6"></div>

          <!-- Description -->
          <div class="mb-8">
            <h2 class="text-lg font-semibold text-gray-900 mb-3">Description</h2>
            <p class="text-base leading-relaxed text-gray-700">
              {{ forfait.description }}
            </p>
          </div>

          <!-- Separateur -->
          <div class="border-t border-gray-200 my-6"></div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-3">
            <router-link :to="{ name: 'edit-forfait', params: { id: forfait.id } }" class="flex-1 inline-flex items-center justify-center btn-gold text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
              <i class="fas fa-pen mr-2 text-sm"></i> 
              Modifier
            </router-link>

            <button type="button" @click="forfaitDelete" class="flex-1 inline-flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg">
              <i class="fas fa-trash-alt mr-2 text-sm"></i> 
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ForfaitDataService from '../services/ForfaitDataService'

export default {
  name: 'DetailsForfait',
  props: {
    forfaits: {
      type: Array,
      required: true
    },
    deleteForfait: {
    type: Function,
    required: true
  }
  },
  computed: {
    forfait() {
      const forfait = this.forfaits.find(f => {
        return f.id === Number(this.$route.params.id)
      })
      return forfait || {}
    },
    
    forfaitIndex() {
      const index = this.forfaits.findIndex(f => {
        return f.id === Number(this.$route.params.id)
      })
      return index
    }
  },
  methods: {
    getCategoryColor(category) {
      const colors = {
        'Plage': 'bg-yellow-100 text-yellow-800 border-yellow-300',
        'Culture': 'bg-purple-100 text-purple-800 border-purple-300',
        'Aventure': 'bg-green-100 text-green-800 border-green-300',
        'Gastronomie': 'bg-blue-100 text-blue-800 border-blue-300',
        'Montagne': 'bg-gray-100 text-gray-800 border-gray-300'
      }
      return colors[category] || 'bg-gray-100 text-gray-800 border-gray-300'
    },

    forfaitDelete() {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce forfait?')) {
        ForfaitDataService.delete(this.forfait.id)
          .then(() => {
            this.deleteForfait(this.forfait.id)
            this.$router.push('/forfaits')
          })
          .catch(error => {
            console.error('Erreur:', error)
            alert('Erreur lors de la suppression')
          })
      }
    }
  }
}
</script>