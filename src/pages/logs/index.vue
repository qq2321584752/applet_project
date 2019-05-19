<template>
  <div>
    <!-- <a href="/pages/search/search"> -->
    <search></search>
    <!-- </a> -->
    <div class="box">
      <div class="left_list_title">
        <ul>
          <li @click="get_t(item.cat_id)" v-for="item in get_left_list" :key="item.cat_id">
            <!-- <div class="line"></div> -->
            <span :class="{active: now_id == item.cat_id}" v-text="item.cat_name"></span>
          </li>
        </ul>
      </div>
      <div class="right_list">
        <div v-for="item in tv_list" :key="item.cat_id" class="right_title">
          <div class="title_shop">
            <div>
              <span>/</span>
              {{ item.cat_name }}
              <span>/</span>
            </div>
          </div>

          <div class="c_right_shop" v-for="(item2,k) in item.children" :key="k">
            <img :src="item2.cat_icon" alt>
            <p>{{ item2.cat_name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import get_ajax from "../index/get_ajax.js";
import search from "../../components/search";
export default {
  data() {
    return {
      get_left_list: [],
      now_id: 1,
      tv_list: []
    };
  },
  created() {
    this.get_left_list_title();
    // this.get_tv_list();
  },
  components: {
    search: search
  },
  computed: {
    async get_right_list() {
      let tv_list = this.get_left_list.filter(item => {
        return item.cat_id == this.now_id;
      });
      this.tv_list = tv_list[0].children;
      console.log(this.tv_list);
    }
  },
  methods: {
    async get_left_list_title() {
      var res = await get_ajax("/categories");
      this.get_left_list = res;
      // console.log(res);
    },
    async get_t(id) {
      this.now_id = id;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./main.scss";
</style>
