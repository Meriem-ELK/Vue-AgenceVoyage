<template>
  <header class="header-gradient mb-1">
    <div class="px-6 py-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <i class="fas fa-plane-departure text-2xl text-[#f59e0b] mr-3"></i>
          <span class="logo-text">VoyageMax</span>
        </router-link>

        <!-- Navigation -->
        <nav class="flex justify-end space-x-2">
          <router-link to="/" class="nav-link flex items-center gap-2">
            <i class="fas fa-home w-5 h-5 text-[#f59e0b]"></i>
            <span>Accueil</span>
          </router-link>

          <router-link to="/apropos" class="nav-link flex items-center gap-2">
            <i class="fas fa-info-circle w-5 h-5 text-[#f59e0b]"></i>
            <span>À propos</span>
          </router-link>

          <router-link to="/forfaits" class="nav-link flex items-center gap-2">
            <i class="fas fa-briefcase w-5 h-5 text-[#f59e0b]"></i>
            <span>Forfaits</span>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  name: 'Header'
}
</script>