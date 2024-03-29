<script setup>
import { RouterView } from 'vue-router'
import { useGoodsStore } from '@/stores/goods'
const goodsStore = useGoodsStore()
</script>

<template>
  <div class="home">
    <main>
      <RouterView />
    </main>
    <van-tabbar route active-color="#ee0a24">
      <van-tabbar-item to="/gohome" icon="wap-home-o">配送到家</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o" :badge="goodsStore.total.count">购物车</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang='scss' scoped>
.home {
  width: 100%;
  height: 100%;
}
main {
  height: 100%;
  overflow: auto;
  padding-bottom: var(--van-tabbar-height);
}
</style>
