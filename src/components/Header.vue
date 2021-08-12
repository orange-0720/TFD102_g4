<template>
  <header class="header">
    <HeaderMobile />
    <MenuFixed />
    <Menu />
    <HeaderTitle />
  </header>
</template>
<script>
import HeaderMobile from "@/components/HeaderMobile.vue";
import MenuFixed from "@/components/MenuFixed.vue";
import Menu from "@/components/Menu.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
export default {
  name: "Header",
  components: {
    HeaderMobile,
    MenuFixed,
    Menu,
    HeaderTitle,
  },
  // ...
};
</script>
