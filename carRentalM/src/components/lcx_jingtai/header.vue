<template>
  <div class="header">
    <div class="head_top">
      <van-icon @click="back" size=".4rem" color="#333333" name="arrow-left" />
      <slot />
      <!-- 在此插槽一个<h1>标签 -->
      <!-- <h1>头部标题内容</h1> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    back() {
      window.history.back();
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.header {
  width: 100;
  font-size: 0;
}
.head_top {
  width: 100%;
  height: 0.88rem;
  text-align: center;
  line-height: 0.88rem;
  position: relative;
  i {
    position: absolute;
    left: 0.24rem;
    top: 0.3rem;
  }
  h1 {
    font-size: 0.34rem;
    font-weight: 600;
  }
}
</style>
