<template>
  <nav class="navbar">
    <!-- using nuxt svg loader module-->
    <svg-logo-makemake class="logo"></svg-logo-makemake>
    <h6 class="category">Editors</h6>
    <div class="hamburger-container">
      <svg-logo-rps class="rps"></svg-logo-rps>
      <hamburger />
    </div>
  </nav>
</template>

<script>
import SvgLogoMakemake from '~/assets/svgs/logo-makemake.svg'
import SvgLogoRps from '~/assets/svgs/logo-rps.svg'
import Hamburger from '@/components/Hamburger.vue'
export default {
  name: 'Navbar',
  components: {
    SvgLogoMakemake,
    SvgLogoRps,
    Hamburger,
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 120px;
  width: 100%;
  .hamburger-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 208px;
  }
}

.category {
  color: var(--rpsg-yellow);
  text-align: center;
  font: normal normal normal 18px/22px RM Neue;
  letter-spacing: 0px;
  color: #fdc760;
}
</style>
