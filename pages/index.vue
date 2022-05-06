<template>
  <div class="layout">
    <navbar />
    <editors />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Editors from '@/components/Editors'

export default {
  name: 'Homepage',
  components: {
    Editors,
    Navbar,
  },
  mounted() {
    this.getMeta()
  },
  data() {
    return {
      meta: {},
    }
  },

  methods: {
    /*assignment db.json had error (one extra " at end of line 5) so I fixed it and reuploaded to my github*/
    async getMeta() {
      this.data = await fetch(
        'https://raw.githubusercontent.com/edobegagic/temporary-funkhaus/main/db.json'
      ).then((res) => res.json())
      this.meta = this.data.siteMeta
    },
  },
  /*site meta add dynamicaly*/
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.meta.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.meta.thumbnail,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.layout {
  max-width: 1240px;
  width: 100%;
  height: auto;
  background: var(--color-black) 0% 0% no-repeat;
  margin: 30px auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
}
</style>
