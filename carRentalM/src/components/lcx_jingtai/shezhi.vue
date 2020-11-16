<template>
  <div class="shezhi">
    <head_><h1>设置</h1></head_>
    <ul class="_ul">
      <li><span>修改密码</span><van-icon size=".4rem" name="arrow" /></li>
      <li><span>忘记密码</span><van-icon size=".4rem" name="arrow" /></li>
      <li><span>关于我们</span><van-icon size=".4rem" name="arrow" /></li>
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
  components: { head_ },
};
</script>

<style scoped lang="less">
.shezhi {
  width: 100;
  font-size: 0;
  ._ul {
    width: 100%;
    height: 3rem;
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
}
</style>
