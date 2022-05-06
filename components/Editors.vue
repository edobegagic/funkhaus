<template>
  <div class="editors">
    <div v-for="editor in editors" :key="editor.id" class="editor">
      <h4 class="title" v-html="editor.title"></h4>
      <div class="sliders">
        <img
          class="featured fade-enter-active fade-leave-active"
          :src="editor.featuredImage.sourceUrl"
        />
        <img
          v-for="image in images"
          :src="image.sourceUrl"
          class="featured fade-enter-active fade-leave-active"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editors',
  mounted() {
    this.getPages()
  },

  data() {
    return {
      editors: {},
      images: {},
      active: false,
    }
  },

  methods: {
    /*assignment db.json had error (one extra " at end of line 5) so I fixed it and reuploaded to my github*/
    async getPages() {
      this.data = await fetch(
        'https://raw.githubusercontent.com/edobegagic/temporary-funkhaus/main/db.json'
      ).then((res) => res.json())
      this.editors = this.data.pages
      this.images = this.data.images
      // console.log(this.images)
      // console.log(this.editors)
    },
  },

  computed: {
    numberOfSlides() {
      return this.images.length + 1
    },
  },
}
</script>

<style lang="scss" scoped>
.editors {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  column-gap: 20px;
  row-gap: 30px;
  padding: 80px 0;
  position: relative;

  .title {
    color: var(--rpsg-yellow);
    text-align: left;
    font: normal normal normal 24px/37px RM Neue;
    letter-spacing: 0px;
    margin: 0;
    position: relative;
    z-index: 20;
    cursor: default;
    width: fit-content;

    &:hover {
      color: var(--color-white);
    }
  }

  .title:hover + .sliders {
    opacity: 1;
    transition: opacity 1s;
  }
  .featured {
    width: 80%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 50%;
    object-fit: cover;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 1s;
  }
  .sliders {
    opacity: 0;
    transition: opacity 1s;
  }
}

@media screen and (max-width: 1024px) {
  .editors {
    grid-template-columns: 2fr 2fr;
  }
}

@media screen and (max-width: 769px) {
  .editors {
    grid-template-columns: 2fr;
  }
}

// Animation settings
$totalTime: 16s;
$items: 8;
$animationSpeed: 3.5;

// Calculate animation time in seconds (how long the fade lasts)
$animationTime: 0s + $totalTime / ($items * $animationSpeed * 2);
// Calculate show time in seconds (how long the element is displayed)
$showTime: (0s + $totalTime - ($animationTime * $items)) / $items;

// Set animation for each element
@for $i from 1 through $items {
  .title:hover + .sliders > *:nth-child(#{$i}) {
    // Delay is increased for each item
    // Starting with an offset of -$animationTime so the first element is displayed on load
    $delay: -$animationTime + ($animationTime + $showTime) * ($i - 1);
    animation: fadeinout $totalTime linear $delay infinite;
  }
}

// Calculate percentages of the display time for keyframes
$animationPercentage: 0% + 150 * (($animationTime / $totalTime));
$showPercentage: 0% + 140 * ($showTime / $totalTime);

@keyframes fadeinout {
  0% {
    opacity: 0;
  }
  #{$animationPercentage},
  #{$animationPercentage + $showPercentage} {
    opacity: 1;
  }
  #{$showPercentage + $animationPercentage * 2},
  100% {
    opacity: 0;
  }
}
</style>
