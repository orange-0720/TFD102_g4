<template>
  <div>
    <HeaderMobile />
    <MenuFixed />
    <Menu />
  </div>
</template>
<script>
import HeaderMobile from "@/components/HeaderMobile.vue";
import MenuFixed from "@/components/MenuFixed.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Header",
  components: {
    HeaderMobile,
    MenuFixed,
    Menu,
  },
  // ...
};
</script>
