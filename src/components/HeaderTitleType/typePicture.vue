<template>
  <div class="title_pic">
    <!--img slot -->
    <slot name="img"></slot>
    <span class="bkc_black"></span>
    <!--h1 slot -->
    <slot name="title"></slot>
  </div>
</template>
<script>
export default {
  name: "typePicture",
  components: {},
};
</script>
