<template>
  <footer class="bg-gray-800 text-white">
    <div class="px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">

        <!-- Colonne 1 - À propos -->
        <div>
          <h3 class="text-lg font-bold mb-4 flex items-center">
            <i class="fas fa-plane-departure text-[#f59e0b] mr-3"></i>
            VoyageMax
          </h3>
          <p class="text-md text-gray-400 mb-4">
            Votre agence de voyages de confiance pour des forfaits touristiques exceptionnels.
          </p>
        </div>

        <!-- Colonne 2 - Navigation rapide -->
        <div>
          <h4 class="footer-title">Navigation rapide</h4>
          <ul class="text-md space-y-2">
            <li>
              <router-link to="/" class="footer-link">→ Accueil</router-link>
            </li>
            <li>
              <router-link to="/forfaits" class="footer-link">→ Nos forfaits</router-link>
            </li>
            <li>
              <router-link to="/apropos" class="footer-link">→ À propos</router-link>
            </li>
          </ul>
        </div>

        <!-- Colonne 3 - Contact -->
        <div>
          <h4 class="footer-title">Contact</h4>
          <ul class="text-md space-y-2 text-gray-400">
            <li class="flex items-start">
              <i class="fas fa-phone-alt text-gray-400 mr-2"></i>
              <span>438 897 15 12</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-envelope text-gray-400 mr-2"></i>
              <span>info@voyagemax.ca</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-map-marker-alt text-gray-400 mr-2"></i>
              <span>3800, rue Sherbrooke Est<br />Montréal (Québec) H1X 2A2</span>
            </li>
          </ul>
        </div>

        <!-- Colonne 4 - Heures d'ouverture -->
        <div>
          <h4 class="footer-title">Heures d'ouverture</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 text-md">
            <div>
              <p class="font-semibold">Lundi - Vendredi</p>
              <p>9h00 - 18h00</p>
            </div>
            <div>
              <p class="font-semibold">Samedi - Dimanche</p>
              <p>10h00 - 16h00</p>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-4 text-center">
        <p class="text-gray-500 text-sm">
          © 2025 VoyageMax. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>