<template>
  <div class="group bg-white rounded-md shadow-lg overflow-hidden border-2 border-transparent">
    <div :class="`h-2 ${getCategoryColor(forfait.categorie).split(' ')[0]}`"></div>
    
    <div class="p-6 relative">
      <div class="mb-4">
        <span :class="`inline-flex items-center gap-2 px-10 py-2 rounded-md text-sm font-bold shadow-md ${getCategoryColor(forfait.categorie)}`">
          {{ forfait.categorie }}
        </span>
      </div>

      <h3 class="text-2xl font-bold text-gray-800 mb-3">
        {{ forfait.nom }}
      </h3>

      <p class="text-gray-600 mb-5 text-md">
        {{ forfait.description }}
      </p>

      <div class="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-5"></div>

      <div class="flex items-center justify-between">
        <div class="text-2xl font-black">
          {{ forfait.prix }} $
        </div>

        <router-link :to="{ name: 'detail-forfait', params: { id: forfait.id } }" class="block text-center btn-gold text-white text-md font-bold py-3 px-6 rounded-lg">
          <i class="fas fa-eye"></i> Voir les détails
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardForfait',
  props: {
    forfait: {
      type: Object,
      required: true
    },
    forfaitIndex: {
      type: Number,
      required: true
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
  }
}
</script>