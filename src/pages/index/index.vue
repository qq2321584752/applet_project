<template>
  <div>
    <search></search>
    <div class="search">
      <a href="/pages/search/main">
        <div class="search_box">
          <icon type="search"></icon>搜索
        </div>
      </a>
    </div>
    <div class="carousel_figure">
      <swiper
        indicator-dots
        indicator-color="rgba(6,6,20, .5)"
        indicator-active-color="rgba(250,250,250, 0.5)"
      >
        <swiper-item :key="k" v-for="(item,k) in imgUrls">
          <img :src="item.image_src" class="slide-image">
        </swiper-item>
      </swiper>
    </div>

    <div class="classification">
      <img :src="item.image_src" alt v-for="(item,k) in ification_img" :key="k">
    </div>

    <div class="banner" v-for="(item,k) in title_img" :key="k">
      <img :src="item.floor_title.image_src" class="title_img" alt>
      <div class="refinement">
        <div class="left">
          <img :src="item.product_list[0].image_src" alt>
        </div>
        <div class="right">
          <img
            v-show="index!=0"
            :key="index"
            v-for="(item,index) in item.product_list"
            :src="item.image_src"
            alt
          >
        </div>
      </div>
    </div>

    <div v-show="lock" @click="go_top" class="get_top">
      ︿
      <p>顶部</p>
    </div>
  </div>
</template>

<script>
import get_ajax from "./get_ajax.js";
import search from "../../components/search";

export default {
  data() {
    return {
      lock: false,
      imgUrls: [
        // "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        // "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
        // "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      ],
      ification_img: [],
      title_img: []
    };
  },

  methods: {
    go_top() {
      mpvue.pageScrollTo({
        scrollTop: 0
      });
    },
    async get_data() {
      var swiperdata = await get_ajax("/home/swiperdata");
      this.imgUrls = swiperdata;

      var catitems = await get_ajax("/home/catitems");
      this.ification_img = catitems;

      var floordata = await get_ajax("/home/floordata");
      this.title_img = floordata;
    }
  },

  async created() {
    this.get_data();
    // var that = this
    // mpvue.request({
    //   url: "https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata",
    //   method: "GET",
    //   success: function (res) {
    //     // console.log(res);
    //     const {data:dt} = res
    //     that.imgUrls = dt.message
    //     // console.log(that.imgUrls);

    //   }
    // });

    // get_ajax('/home/swiperdata').then(function (res) {
    //   that.imgUrls = res

    //   }).catch(function (err) {
    //     console.log(err);

    //     })

    // var swiperdata = await get_ajax('/home/swiperdata')
    // this.imgUrls = swiperdata

    //   mpvue.request({
    //   url: "https://www.zhengzhicheng.cn/api/public/v1/home/catitems",
    //   method: "GET",
    //   success: function (res) {
    //     // console.log(res);
    //     const {data:dt} = res
    //     that.ification_img = dt.message
    //     // console.log(that.ification_img);

    //   }
    // });

    // get_ajax('/home/catitems').then(function (res) {
    //   that.ification_img = res

    //   }).catch(function (err) {
    //     console.log(err);

    //     })

    //  var catitems = await get_ajax('/home/catitems')
    //  this.ification_img = catitems

    //  mpvue.request({
    //   url: "https://www.zhengzhicheng.cn/api/public/v1/home/floordata",
    //   method: "GET",
    //   success: function (res) {
    //     // console.log(res);
    //     const {data:dt} = res
    //     that.title_img = dt.message
    //     // console.log(that.title_img);

    //   }
    // });

    // get_ajax('/home/floordata').then(function (res) {
    //   that.title_img = res

    //   }).catch(function (err) {
    //     console.log(err);

    //     })

    //   var floordata = await get_ajax('/home/floordata')
    //  this.title_img = floordata
  },

  onPageScroll(scroll) {
    // console.log(scroll);

    // if (scroll.scrollTop > 100) {
    //   this.lock = true
    // }else {
    //   this.lock = false
    // }

    this.lock = scroll.scrollTop > 100;
    // console.log(scroll);
  },
  onPullDownRefresh() {
    this.get_data();
  }
};
</script>

<style scoped>
.get_top {
  position: fixed;
  bottom: 20rpx;
  right: 20rpx;
  width: 100rpx;
  height: 100rpx;
  background: rgba(248, 246, 246, 0.7);
  border-radius: 50%;
  font-size: 16px;
  text-align: center;
  color: #b4aeae;
  transition: 1s;
}

.refinement {
  display: flex;
  height: 440rpx;
}
/* .refinement div {
  flex:1;
} */
.left {
  flex: 40%;
}
.left img {
  height: 100%;
}
.right {
  flex: 70%;
}
.refinement img {
  width: 100%;
}
.refinement .right {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-between;
  /* flex:48%; */
}

.refinement .right img {
  /* height: 284rpx; */
  height: 49.3%;
  width: 48%;
  /* margin: 10rpx; */
  /* margin-top: 0; */
}

.search {
  width: 100%;
  background: #ff2d4a;
  padding: 10px;
  box-sizing: border-box;
}
.search_box {
  background: #fff;
  /* width: 94%; */
  text-align: center;
  font-size: 16px;
  color: #c4c4c4;
  border-radius: 3px;
}
icon {
  vertical-align: middle;
  /* height: 10px; */
  padding: 6px 0;
  padding-right: 8px;
  /* box-sizing: border-box; */
}
.slide-image {
  height: 100%;
}
.classification {
  margin: 20rpx 0;
  display: flex;
  justify-content: space-around;
}
.classification img {
  height: 160rpx;
  width: 150rpx;
}
.banner {
  width: 100%;
}
.title_img {
  width: 100%;
  height: 75rpx;
  background: rgb(245, 245, 245);
  padding-top: 22rpx;
}
</style>
