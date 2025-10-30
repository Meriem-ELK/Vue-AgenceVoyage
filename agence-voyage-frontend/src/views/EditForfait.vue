<template>
  <div class="p-6 mb-8 w-full md:w-3/4 lg:w-2/3 mx-auto">
    <div class="bg-white rounded-xl shadow-xl overflow-hidden">
      
      <!-- Header -->
      <div class="border-b border-gray-100 bg-gray-50 px-8 py-6">
        <h3 class="text-3xl font-bold text-gray-900">Modifier le forfait</h3>
        <p class="text-sm text-gray-600 mt-1">Mettez à jour les informations du forfait</p>
      </div>

      <!-- Message d'erreur -->
      <div v-if="message" class="mx-8 mt-6">
        <div class="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 rounded-r-lg flex items-start">
          <i class="fas fa-exclamation-circle mr-3 mt-0.5"></i>
          <span>{{ message }}</span>
        </div>
      </div>

      <!-- Formulaire -->
      <div v-if="!submitted" class="p-8">
        <form @submit.prevent="updateForfaitData" class="space-y-6">

          <!-- Nom du forfait -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fas fa-tag mr-2 text-gray-400 text-xs"></i>
              Nom du forfait
            </label>
            <input v-model="forfait.nom" type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 focus:outline-none transition-all" placeholder="Ex: Forfait Découverte" required />
          </div>
          
          <!-- Description -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fas fa-align-left mr-2 text-gray-400 text-xs"></i>
              Description
            </label>
            <textarea v-model="forfait.description" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 focus:outline-none transition-all resize-none" rows="5" placeholder="Décrivez le forfait en détail..." required></textarea>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- Prix -->
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  <i class="fas fa-dollar-sign mr-2 text-gray-400 text-xs"></i>
                  Prix (CAD)
                </label>
                <div class="relative">
                  <input v-model.number="forfait.prix" type="number" class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:border-[#0d9488 focus:ring-2 focus:ring-[#0d9488]/20 focus:outline-none transition-all"step="0.01" placeholder="0.00" required />
                  <span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">$</span>
                </div>
            </div>

            <!-- Catégorie -->
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  <i class="fas fa-list mr-2 text-gray-400 text-xs"></i>
                  Catégorie
                </label>
                <select  v-model="forfait.categorie" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 focus:outline-none transition-all appearance-none bg-white" required >
                  <option value="" disabled>Sélectionnez une catégorie</option>
                  <option>Plage</option>
                  <option>Culture</option>
                  <option>Aventure</option>
                  <option>Gastronomie</option>
                  <option>Montagne</option>
                </select>
            </div>
          </div>
          
          <!-- URL de l'image -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fas fa-image mr-2 text-gray-400 text-xs"></i>
              URL de l'image
            </label>
            <input v-model="forfait.image" type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 focus:outline-none transition-all" placeholder="https://exemple.com/image.jpg" />
            <p class="text-xs text-gray-500 mt-1.5">
              <i class="fas fa-info-circle mr-1"></i>
              Optionnel - Laisser vide si aucune image
            </p>
          </div>

          <!-- Separateur -->
          <div class="border-t border-gray-200 pt-6"></div>
          
          <!-- Boutons d'action -->
          <div class="flex flex-col sm:flex-row gap-3">
            <button type="submit" class="flex-1 inline-flex items-center justify-center btn-gold text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
              <i class="fas fa-check mr-2 text-sm"></i> 
              Mettre à jour
            </button>
            <router-link to="/forfaits" class="flex-1 inline-flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg">
              <i class="fas fa-times mr-2 text-sm"></i> 
              Annuler
            </router-link>
          </div>

        </form>
      </div>
      
      <!-- Message de succès -->
      <div v-else class="p-8">
        <div class="text-center py-8">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <i class="fas fa-check-circle text-green-600 text-3xl"></i>
          </div>
          <h4 class="text-2xl font-bold text-gray-900 mb-2">Forfait mis à jour!</h4>
          <p class="text-gray-600 mb-6">Les modifications ont été enregistrées avec succès.</p>
          <router-link to="/forfaits" class="inline-flex items-center justify-center btn-gold text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
            <i class="fas fa-arrow-left mr-2 text-sm"></i>
            Retour aux forfaits
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ForfaitDataService from '../services/ForfaitDataService'

export default {
  name: 'EditForfait',
  props: {
    forfaits: {
      type: Array,
      required: true
    },
    updateForfait: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      message: null,
      submitted: false,
      forfait: {},
      id: parseInt(this.$route.params.id)
    }
  },
  mounted() {
    ForfaitDataService.get(this.id)
      .then(response => {
        this.forfait = response.data
      })
      .catch(error => {
        console.error('Erreur:', error)
        this.message = 'Erreur lors du chargement du forfait'
      })
  },
  computed: {
    forfaitIndex() {
      const index = this.forfaits.findIndex(f => {
        return f.id === this.id
      })
      return index
    }
  },
  methods: {
    updateForfaitData() {
      ForfaitDataService.update(this.id, this.forfait)
        .then(response => {
          this.updateForfait(this.forfaitIndex, this.forfait)
          this.message = null
          this.submitted = true
        })
        .catch(error => {
          this.message = error.response?.data?.message || 'Erreur lors de la mise à jour'
        })
    }
  }
}
</script>