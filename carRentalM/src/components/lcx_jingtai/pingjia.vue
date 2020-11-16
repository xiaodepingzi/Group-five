<template>
  <div class="pingjia">
    <head_><h1>评价</h1></head_>
    <div class="pingjia_all">
      <div class="xingxing">
        <p>
          手续办理：
          <van-rate
            v-model="value1"
            gutter=".39rem"
            size=".51rem"
            color="#ffae3a"
            void-icon="star"
            void-color="#eee"
          />
        </p>
        <p>
          车辆情况：
          <van-rate
            v-model="value2"
            gutter=".39rem"
            size=".51rem"
            color="#ffae3a"
            void-icon="star"
            void-color="#eee"
          />
        </p>
        <p>
          服务态度：
          <van-rate
            v-model="value3"
            gutter=".39rem"
            size=".51rem"
            color="#ffae3a"
            void-icon="star"
            void-color="#eee"
          />
        </p>
      </div>
      <div
        class="input"
        contenteditable="true"
        placeholder="感谢您对平驾的支持，来说说您的评价之旅吧！"
        @blur="blur"
      ></div>
      <div class="btn_">
        <van-button :disabled="disabled" @click="tijiao" type="info">
          匿名提交
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import head_ from "./header";
export default {
  props: {},
  data() {
    return {
      value1: 5,
      value2: 0,
      value3: 0,
      disabled: true,
    };
  },
  methods: {
    tijiao() {},
    blur(e) {
      console.log(e);
      console.log(document.getElementsByClassName("input")[0].innerText);
      let text = document.getElementsByClassName("input")[0].innerText;
      if (text !== "") {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
  },
  components: {
    head_,
  },
};
</script>

<style scoped lang="less">
.pingjia {
  width: 100%;
  font-size: 0;
  .pingjia_all {
    width: 90%;
    margin: 0 auto;
    .xingxing {
      width: 100%;
      height: 2.74rem;
      margin-top: 0.34rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      p {
        font-size: 0.31rem;
        font-weight: 600;
        letter-spacing: 0.02rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    }
    .input {
      width: 88%;
      height: 1.99rem;
      border: 0.01rem solid #ddd;
      margin: 0.2rem auto;
      border-radius: 0.08rem;
      padding: 0.23rem;
      font-size: 0.29rem;
      background: #f7f7f7;
    }
    .input:empty::before {
      content: attr(placeholder);
      color: #ccc;
      font-size: 0.29rem;
    }
    .btn_ {
      text-align: center;
      .van-button--info {
        width: 88%;
        height: 1rem;
        margin-top: 0.1rem;
        background: rgb(180, 180, 180);
        border-radius: 0.08rem;
        color: white;
        font-size: 0.34rem;
        border: 0;
      }
    }
  }
}
</style>
