<script setup lang="ts">
import { ref } from "vue";
import { useAddressStore }  from '@/stores/address'
import Goods  from './components/Goods.vue'

const addressStore = useAddressStore()
const tabIndex = ref(0)

</script>
<template>
      <van-cell :title="addressStore.currentAddress" icon="location-o" is-link to="/address" />
  <van-tabs v-model:active="tabIndex" sticky>
    <van-tab title="标题1">
      <Goods />
    </van-tab>
    <van-tab title="标题2">
      内容2
    </van-tab>
    <van-tab title="标题3">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </van-tab>
  </van-tabs>
  
</template>
<style lang="scss" scoped></style>
