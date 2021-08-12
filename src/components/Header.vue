<template>
  <header class="header">
    <HeaderMobile />
    <MenuFixed />
    <Menu />
    <HeaderTitle />
    <jumpHamburgerBlock />
    <indexContactBox />
    <headerShoppingCart />
  </header>
</template>
<script>
import HeaderMobile from "@/components/HeaderMobile.vue";
import MenuFixed from "@/components/MenuFixed.vue";
import Menu from "@/components/Menu.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import jumpHamburgerBlock from "@/components/HeaderPopUp/jumpHamburgerBlock.vue";
import indexContactBox from "@/components/HeaderPopUp/indexContactBox.vue";
import headerShoppingCart from "@/components/HeaderPopUp/headerShoppingCart.vue";
export default {
  name: "Header",
  components: {
    HeaderMobile,
    MenuFixed,
    Menu,
    HeaderTitle,
    jumpHamburgerBlock,
    indexContactBox,
    headerShoppingCart,
  },
  // ...
};
</script>
