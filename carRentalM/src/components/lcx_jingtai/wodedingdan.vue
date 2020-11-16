<template>
  <div class="wodedingdan">
    <head_><h1>我的订单</h1></head_>
    <div class="dingdan_list">
      <ul v-for="item in list" :key="item.img">
        <li><img src="" alt="" /></li>
        <li>
            <p>
                <span v-text="item.titl"></span>
                <span v-text="item.tex1"></span>
            </p>
            <p>日租：{{item.time}}天</p>
            <p>租车日期：{{item.day}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import head_ from "./header";
export default {
  props: {},
  data() {
    return {
      list: [
            {titl:'丰田汉兰达',tex1:'订单详情>',time:'2',day:'2020年12月11日'},
            {titl:'丰田汉兰达',tex1:'订单详情>',time:'2',day:'2020年12月11日'},
            {titl:'丰田汉兰达',tex1:'订单详情>',time:'2',day:'2020年12月11日'},
            {titl:'丰田汉兰达',tex1:'订单详情>',time:'2',day:'2020年12月11日'},
        ],
    };
  },
  methods: {},
  components: {
    head_,
  },
};
</script>

<style scoped lang="less">
.wodedingdan{
    width: 100%;
    height: 100%;
    font-size: 0;
    .dingdan_list{
        width: 100%;
        height: 100%;
        background-color: #eeeeee;
        padding-top: .1rem;
        ul{
            width: 95%;
            height: 1.8rem;
            background: white;
            margin: .2rem auto;
            border-radius: .08rem;
            display: flex;
            align-items: center;
            li{
                height: 90%;
            }
            li:nth-child(1){
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 2.2rem;
                    height: 1.3rem;
                }
            }
            li:nth-child(2){
                flex: 2;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                p{
                    padding: 0 .21rem;
                }
                p:nth-child(1){
                    display: flex;
                    justify-content: space-between;
                    span:nth-child(1){
                        font-weight: 600;
                        font-size: .28rem;
                    }
                    span:nth-child(2){
                        color: #999;
                        font-size: .24rem;
                    }
                }
                p:nth-child(2),p:nth-child(3){
                    font-size: .23rem;
                    color: #666;
                }
            }
        }
    }
}
</style>
