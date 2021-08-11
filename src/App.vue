<template>
  <div id="app">
    <HeaderMobile/>
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import HeaderMobile from "@/components/HeaderMobile.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    HeaderMobile,
    Footer
  },

  props: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
@import "@/scss/base/_font.scss";
@import "@/scss/base/_reset.scss";
@import "@/scss/base/style.scss";
@import "@/scss/layout/_footer.scss";
// @import '@/scss/layout/_header.scss';
// @import '@/scss/layout/_shopping_cart.scss';
</style>
