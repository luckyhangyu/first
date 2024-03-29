<script setup lang="ts">
import { ref } from 'vue'
import { useGoodsStore } from '@/stores/goods'
// 引入变量
import { getBanner, getGoodsListApi } from '@/api'
// 引入类型
import type { BannerItem, GoodsItem } from '@/api'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'


const goodsStore = useGoodsStore()
const modules = [Navigation, Pagination, Autoplay]
const banners = ref<BannerItem[]>([])

const init = async () => {
    const [banners] = await promise.all([getBanner])
}

</script>
<template>
<ul>
    <li v-for="item in goodsStore" :key="item.id"></li>
</ul>

</template>

<style></style>
