<template>
  <div class="fuwuguize">
    <head_><h1>服务规则</h1></head_>
    <ul class="_ul">
      <li><span>服务时间</span><van-icon size=".4rem" name="arrow" /></li>
      <li><span>租车时限</span><van-icon size=".4rem" name="arrow" /></li>
      <li><span>数量限制</span><van-icon size=".4rem" name="arrow" /></li>
      <li><span>租车资格</span><van-icon size=".4rem" name="arrow" /></li>
      <li><span>信用卡担保规则</span><van-icon size=".4rem" name="arrow" /></li>
      <li><span>租车流程</span><van-icon size=".4rem" name="arrow" /></li>
      <li><span>可选服务</span><van-icon size=".4rem" name="arrow" /></li>
    </ul>
  </div>
</template>

<script>
import head_ from "./header";
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
.fuwuguize {
  width: 100;
  font-size: 0;
}
._ul {
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  li {
    flex: 1;
    border-bottom: 0.01rem solid #e0e0e0;
    box-sizing: border-box;
    font-size: 0.27rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.24rem;
  }
}
</style>
