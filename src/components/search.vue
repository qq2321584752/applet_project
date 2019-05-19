<template>
  <div>
    <div class="search">
      <a href="/pages/search/main">
        <div class="search_box">
          <icon type="search"></icon>搜索
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.search {
  width: 100%;
  background: #ff2d4a;
  padding: 10px;
  box-sizing: border-box;
  .search_box {
    background: #fff;
    /* width: 94%; */
    text-align: center;
    font-size: 16px;
    color: #c4c4c4;
    border-radius: 3px;
  }
}

icon {
  vertical-align: middle;
  /* height: 10px; */
  padding: 6px 0;
  padding-right: 8px;
  /* box-sizing: border-box; */
}
</style>
