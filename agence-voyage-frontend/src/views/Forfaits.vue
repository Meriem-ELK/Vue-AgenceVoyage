<template>
  <div class="p-6">
    <div class="flex justify-end mb-6 ">
      <button @click="toggleForm" :class="showAdd ? 'btn-close' : 'btn-gold'">
        <span v-if="showAdd"><i class="fas fa-times"></i> Fermer</span>
        <span v-else><i class="fas fa-plus"></i> Nouveau forfait</span>
      </button>
    </div>

    <div v-if="showAdd" class="mb-8">
      <AddForfait :addForfait="addForfait" @forfait-added="forfaitAdded" />
    </div>

    <div class="text-center pb-10 pt-5">
      <h2 class="text-3xl font-bold text-[#134e4a] mb-4">
        Liste des forfaits touristiques
      </h2>
    </div>

    <div v-if="forfaits.length === 0" class="text-center py-20">
      <p class="text-xl text-gray-600">Aucun forfait disponible pour le moment.</p>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardForfait v-for="(forfait, index) in forfaits" :key="forfait.id" :forfait="forfait" :forfaitIndex="index" />
    </div>
  </div>
</template>

<script>
import CardForfait from './CardForfait.vue'
import AddForfait from './AddForfait.vue'

export default {
  name: 'Forfaits',
  components: {
    CardForfait,
    AddForfait
  },
  props: {
    forfaits: {
      type: Array,
      required: true
    },
    addForfait: {
      type: Function,
      required: true
    },
    deleteForfait: {
      type: Function,
      required: true
  }
  },
  data() {
    return {
      showAdd: false
    }
  },
  methods: {
    toggleForm() {
      this.showAdd = !this.showAdd
    },

    forfaitAdded() {
      this.showAdd = false
    }

  }
}
</script>