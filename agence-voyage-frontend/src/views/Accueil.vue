<template>
  <div>
    <!-- Section Hero -->
    <section class="hero-section">
      <div class="hero-image-bg"></div>

      <div class="hero-content">
        <h1 class="hero-title">
          Découvrez le Monde avec VoyageMax
        </h1>

        <p class="hero-subtitle">
          Votre agence de voyages spécialisée dans les forfaits touristiques exceptionnels. 
          Des destinations de rêve à des prix imbattables depuis 2015.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <router-link to="/forfaits" class="btn-gold">
            Découvrir nos forfaits
          </router-link>
          <router-link to="/apropos" class="btn-secondary">
            En savoir plus
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section avantages -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="section-title">Pourquoi choisir VoyageMax ?</h2>
        <p class="section-subtitle">
          Une expérience de voyage incomparable avec un service d'excellence
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col justify-items-center items-center card-feature group">
            <div class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-globe"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Destinations uniques</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              Des destinations soigneusement sélectionnées pour des expériences authentiques et inoubliables.
            </p>
          </div>

          <div class="card-feature group flex-col justify-items-center items-center">
            <div class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-gem"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Qualité premium</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              Des services haut de gamme et des hébergements de qualité supérieure pour un voyage sans stress.
            </p>
          </div>

          <div class="card-feature group flex-col justify-items-center items-center">
            <div class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Prix compétitifs</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              Les meilleurs forfaits au meilleur prix, avec des offres spéciales toute l'année.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section catégories -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="section-title">Nos Catégories Populaires</h2>
        <p class="section-subtitle">Trouvez le type de voyage qui vous correspond</p>
        
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div class="flex flex-col justify-items-center items-center card-category bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 hover:border-yellow-500">
            <div class="text-5xl mb-3">
              <i class="fas fa-umbrella-beach"></i>
            </div>
            <h3 class="font-bold text-yellow-800 text-lg">Plage</h3>
            <p class="text-sm text-yellow-600 mt-1">Détente & Soleil</p>
          </div>
          
          <div class="flex flex-col justify-items-center items-center card-category bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300 hover:border-purple-500">
            <div class="text-5xl mb-3">
              <i class="fas fa-theater-masks"></i>
            </div>
            <h3 class="font-bold text-purple-800 text-lg">Culture</h3>
            <p class="text-sm text-purple-600 mt-1">Histoire & Art</p>
          </div>
          
          <div class="flex flex-col justify-items-center items-center card-category bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 hover:border-green-500">
            <div class="text-5xl mb-3">
              <i class="fas fa-campground"></i>
            </div>
            <h3 class="font-bold text-green-800 text-lg">Aventure</h3>
            <p class="text-sm text-green-600 mt-1">Sensations fortes</p>
          </div>
          
          <div class="flex flex-col justify-items-center items-center card-category bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300 hover:border-blue-500">
            <div class="text-5xl mb-3">
              <i class="fas fa-utensils"></i>
            </div>
            <h3 class="font-bold text-blue-800 text-lg">Gastronomie</h3>
            <p class="text-sm text-blue-600 mt-1">Saveurs</p>
          </div>
          
          <div class="flex flex-col justify-items-center items-center card-category bg-gradient-to-br from-gray-50 to-slate-50 border-gray-300 hover:border-gray-500">
            <div class="text-5xl mb-3">
              <i class="fas fa-mountain"></i>
            </div>
            <h3 class="font-bold text-gray-800 text-lg">Montagne</h3>
            <p class="text-sm text-gray-600 mt-1">Nature</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section statistiques -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="section-title mb-16">VoyageMax en Chiffres</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-6xl font-bold gradient-text mb-2">10K+</div>
            <p class="text-gray-600 font-semibold">Clients Satisfaits</p>
          </div>
          <div class="text-center">
            <div class="text-6xl font-bold gradient-text mb-2">50+</div>
            <p class="text-gray-600 font-semibold">Destinations</p>
          </div>
          <div class="text-center">
            <div class="text-6xl font-bold gradient-text mb-2">10+</div>
            <p class="text-gray-600 font-semibold">Années d'Expérience</p>
          </div>
          <div class="text-center">
            <div class="text-6xl font-bold gradient-text mb-2">98%</div>
            <p class="text-gray-600 font-semibold">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Accueil'
}
</script>