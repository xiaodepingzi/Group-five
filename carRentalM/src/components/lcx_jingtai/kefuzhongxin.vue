<template>
  <div class="kefuzhongxin">
    <head_><h1>客服中心</h1></head_>
    <img class="_img" src="" alt="" />
    <ul class="_ul">
      <li><span>新手上路</span><van-icon size=".4rem" name="arrow" /></li>
      <li><span>常见问题</span><van-icon size=".4rem" name="arrow" /></li>
      <li><span>服务规则</span><van-icon size=".4rem" name="arrow" /></li>
    </ul>
  </div>
</template>

<script>
import head_ from './header'
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    head_,
  },
};
</script>

<style scoped lang="less">
.kefuzhongxin {
  width: 100%;
  font-size: 0;
  ._img {
    width: 100%;
    height: 2.18rem;
  }
  ._ul {
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    li {
      flex: 1;
      border-bottom: 0.01rem solid #e0e0e0;
      box-sizing: border-box;
      font-size: .27rem;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .24rem;
    }
  }
}
</style>
