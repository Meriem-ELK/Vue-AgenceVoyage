<template>
  <div>
    <div class="text-center pb-10 pt-10">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">
        À propos de VoyageMax
      </h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Votre partenaire de confiance pour des voyages inoubliables depuis 2015
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-10">

      <!-- Notre histoire -->
      <section class="mb-20">
        <div class="bg-white rounded-2xl shadow-sm p-12 border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center mr-4">
              <i class="fas fa-book text-2xl"></i>
            </div>
            <h2 class="text-2xl font-bold">Notre histoire</h2>
          </div>
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed mb-6 text-lg">
              Fondée en 2015 à Montréal, VoyageMax s'est imposée comme un acteur majeur 
              du secteur touristique canadien. Notre vision était claire dès le départ : 
              démocratiser l'accès aux voyages d'exception tout en maintenant les plus hauts 
              standards de qualité et de service.
            </p>
            <p class="text-gray-700 leading-relaxed text-lg">
              Grâce à une équipe de spécialistes passionnés et à un réseau de partenaires 
              internationaux soigneusement sélectionnés, nous créons des expériences de voyage 
              sur mesure qui dépassent les attentes de nos clients.
            </p>
          </div>
        </div>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        
      <!-- Mission -->
        <div class="bg-white rounded-2xl shadow-sm p-10 border-2 border-[#f59e0b]">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center mr-4">
              <i class="fas fa-bullseye text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold">Notre mission</h3>
          </div>
          <p class="text-gray-700 leading-relaxed text-lg">
            Offrir des expériences de voyage exceptionnelles et accessibles, en combinant 
            expertise professionnelle, innovation technologique et engagement envers la 
            satisfaction client.
          </p>
        </div>

      <!-- Valeurs -->
        <div class="bg-white rounded-2xl shadow-sm p-10 border-2 border-[#f59e0b]">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center mr-4">
              <i class="fas fa-gem text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold">Nos valeurs</h3>
          </div>

          <ul class="space-y-4">
            <li class="flex items-start text-gray-700">
              <span class="text-[#f59e0b] mr-3 mt-1">✓</span>
              <span class="text-lg"><strong>Excellence</strong>-Standards de qualité irréprochables</span>
            </li>
            <li class="flex items-start text-gray-700">
              <span class="text-[#f59e0b] mr-3 mt-1">✓</span>
              <span class="text-lg"><strong>Authenticité</strong>- Expériences culturelles genuines</span>
            </li>
            <li class="flex items-start text-gray-700">
              <span class="text-[#f59e0b] mr-3 mt-1">✓</span>
              <span class="text-lg"><strong>Durabilité</strong> - Engagement environnemental</span>
            </li>
            <li class="flex items-start text-gray-700">
              <span class="text-[#f59e0b] mr-3 mt-1">✓</span>
              <span class="text-lg"><strong>Innovation</strong>- Amélioration continue</span>
            </li>
          </ul>
          
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'About'
}
</script>