<template>
  <div>
    <div class="search">
      <div class="search_box">
        <icon type="search"></icon>

        <input v-model="search_info" @input="search" type="text" placeholder="请输入要查询的商品">
      </div>
      <button type="default" @click="clear_content">取消</button>
    </div>
    <div>
      <p v-for="item in search_list" :key="item.goods_id">{{ item.goods_name }}</p>
    </div>
  </div>
</template>

<script>
import get_ajax from "../index/get_ajax.js";
export default {
  data() {
    return {
      search_info: "",
      search_list: []
    };
  },
  methods: {
    async search() {
      let res = await get_ajax("/goods/search", "GET", {
        query: this.search_info
      });
      this.search_list = res.goods;
      //   console.log(this.search_list);
    },
    clear_content() {
      console.log(this.search_info.length);

      this.search_info = "";
      this.search_list.length = 0;
    }
  }
};
</script>

<style lang='scss' scoped>
.search {
  box-sizing: border-box;
  padding-top: 30rpx;
  height: 150rpx;
  line-height: 120rpx;
  background: rgb(239, 239, 239);
  overflow: auto;
  display: flex;
  button {
    height: 66%;
    text-align: center;
    font-size: 16px;
    width: 177rpx;
    //   color: #ccc;
    background: rgb(239, 239, 239);
  }
}
.search_box {
  //   padding-left: 5px;
  background: #fff;
  display: flex;
  height: 50rpx;
  padding: 10px 0;
  width: 68%;
  margin-left: 10px;
  border-radius: 5px;
}
icon {
  vertical-align: middle;
  margin-left: 10px;
}
p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 10px;
  background: pink;
}
</style>
