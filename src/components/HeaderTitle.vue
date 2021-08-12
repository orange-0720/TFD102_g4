<template>
  <div class="title">
    <div class="title_btn">
      <button class="comm_us">
        聯絡我們
        <img src="@/assets/images/cotact_us.svg" width="25px" alt="" />
      </button>
      <a class="buy_now">
        立即買<img src="@/assets/images/buy_now.svg" width="25px" alt="" />
      </a>
    </div>
    <!-- 型態1 video -->
    <!-- 型態2 picture -->
    <!-- 型態3 Carousel -->
    <!-- 型態4 無放置 -->
    <component :is="content">
      <template slot="img" v-if="content === 'typePicture'">
        <img :src="typePictureSlotImgSrc" alt="checkout_pic" />
      </template>
      <template slot="title" v-if="content === 'typePicture'"
        ><h1>
          {{ typePictureSlotTitle }}
        </h1></template
      >
    </component>
  </div>
</template>
<script>
import typeCarousel from "@/components/HeaderTitleType/typeCarousel.vue";
import typePicture from "@/components/HeaderTitleType/typePicture.vue";
import typeVideo from "@/components/HeaderTitleType/typeVideo.vue";
export default {
  name: "HeaderTitle",
  components: {
    typeCarousel,
    typePicture,
    typeVideo,
  },
  data() {
    return {
      content: "",
      typePictureSlotTitle: "",
      typePictureSlotImgSrc: "",
      typePictureGroups: [
        {
          pathName: "index",
          displayType: "typeCarousel",
        },
        {
          pathName: "aboutUs",
          displayType: "typeVideo",
        },
        {
          pathName: "fruit_introduction",
          displayType: "typePicture",
          title: "水果介紹",
          imgSrc: require("@/assets/images/farm/product_introduction/fruit_introduction_bg.jpg"),
        },
        {
          pathName: "checkout",
          displayType: "typePicture",
          title: "結帳頁面",
          imgSrc: require("@/assets/images/checkout/checkout_01.jpg"),
        },
        {
          pathName: "checkout_s2",
          displayType: "typePicture",
          title: "結帳頁面",
          imgSrc: require("@/assets/images/checkout/checkout_01.jpg"),
        },
        {
          pathName: "checkout_s3",
          displayType: "typePicture",
          title: "結帳頁面",
          imgSrc: require("@/assets/images/checkout/checkout_01.jpg"),
        },
        {
          pathName: "event_info",
          displayType: "typePicture",
          title: "活動預約",
          imgSrc: require("@/assets/images/shopping_page/shopping_page01.jpg"),
        },
        {
          pathName: "event",
          displayType: "typePicture",
          title: "活動體驗",
          imgSrc: require("@/assets/images/member/member_01.jpg"),
        },
        {
          pathName: "game_page_defeat",
          displayType: "typePicture",
          title: "蔬果知識小遊戲",
          imgSrc: require("@/assets/images/member/member_01.jpg"),
        },
        {
          pathName: "game_page_lotteryStart",
          displayType: "typePicture",
          title: "蔬果知識小遊戲",
          imgSrc: require("@/assets/images/member/member_01.jpg"),
        },
        {
          pathName: "game_page_lotteryEnd",
          displayType: "typePicture",
          title: "蔬果知識小遊戲",
          imgSrc: require("@/assets/images/member/member_01.jpg"),
        },
        {
          pathName: "game_page_pass",
          displayType: "typePicture",
          title: "蔬果知識小遊戲",
          imgSrc: require("@/assets/images/member/member_01.jpg"),
        },
        {
          pathName: "game",
          displayType: "typePicture",
          title: "蔬果知識小遊戲",
          imgSrc: require("@/assets/images/member/member_01.jpg"),
        },
        {
          pathName: "itemtest",
          displayType: "typePicture",
          title: "蔬菜箱",
          imgSrc: require("@/assets/images/shopping_page/shopping_page01.jpg"),
        },
        {
          pathName: "login",
          displayType: "",
          title: "",
          imgSrc: "",
        },
        {
          pathName: "member",
          displayType: "typePicture",
          title: "會員中心",
          imgSrc: require("@/assets/images/member/member_01.jpg"),
        },
        {
          pathName: "product_introduction",
          displayType: "typePicture",
          title: "生產介紹",
          imgSrc: require("@/assets/images/farm/product_introduction/bg01.jpg"),
        },
        {
          pathName: "q_a",
          displayType: "typePicture",
          title: "Q&A",
          imgSrc: require("@/assets/images/q_a/q_a_01_1.jpg"),
        },
        {
          pathName: "shopping_page",
          displayType: "typePicture",
          title: "商品一覽",
          imgSrc: require("@/assets/images/shopping_page/shopping_page01.jpg"),
        },
        {
          pathName: "vagatable_introduction",
          displayType: "typePicture",
          title: "蔬菜介紹",
          imgSrc: require("@/assets/images/farm/product_introduction/vagatable_introduction_bg.jpg"),
        },
        {
          pathName: "fruit_box",
          displayType: "",
          title: "",
          imgSrc: "",
        },

        
      ],
    };
  },
  watch: {
    $route() {
      this.setTypePictureProp();
    },
  },
  methods: {
    setTypePictureProp: function() {
      const routeName = this.$route.name;
      if (!routeName) {
        return;
      }
      const pictureWithPathAndTitle = this.typePictureGroups.find(
        (item) => item.pathName === routeName
      );
      const displayType = pictureWithPathAndTitle.displayType;
      const title = pictureWithPathAndTitle.title;
      const imgSrc = pictureWithPathAndTitle.imgSrc;
      if (displayType) {
        this.content = displayType;
      }
      if (title) {
        this.typePictureSlotTitle = title;
      }
      if (imgSrc) {
        this.typePictureSlotImgSrc = imgSrc;
      }
    },
  },
  mounted: function() {
    this.setTypePictureProp();
  },
};
</script>
