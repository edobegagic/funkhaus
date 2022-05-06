<template>
  <div
    class="hamburger"
    @click="toggleHamburger"
    :class="{ 'hamburger--is-open': hamburgerOpen }"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      hamburgerOpen: false,
    }
  },
  methods: {
    toggleHamburger() {
      this.hamburgerOpen = !this.hamburgerOpen
      this.$store.commit('toggleHamburger')
    },
  },
}
</script>

<style lang="scss" scoped>
.hamburger {
  position: relative;
  display: flex;
  height: 80px;
  width: 80px;

  cursor: pointer;
  pointer-events: all;
  outline: none;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 36px;
    left: 20px;
    background: var(--rpsg-yellow);
    width: 30px;
    height: 2px;
    transition: transform 300ms ease-out;
  }

  &:after {
    top: auto;
    bottom: 32px;
  }

  &--is-open {
    &:before {
      transform: translateY(4px) rotate(135deg);
    }
    &:after {
      transform: translateY(-6px) rotate(45deg);
    }
  }
}
</style>
