
import { defineStore } from "pinia"
import { ref, computed } from 'vue'
import { getGoodsListApi } from '@/api'
import type { GoodsItem } from '@/api'

type Goods = GoodsItem & { count?: number }

export const useGoodsStore = defineStore('goods', () => {
    const goodsList = ref<Goods[]>([])
    const cartList = ref<Goods[]>([])
    const total = computed(() => {
        return cartList.value.reduce((prev, val) => {
            return {
                count: prev.count + val.count!,
                price: prev.price + val.count! * val.price * 100
            }
        }, { count: 0, price: 0 })
    })
    const setGoodsList = async () => {
        const res = await getGoodsListApi()
        goodsList.value = res.data
    }
    const changeCount = (id: string, num: number) => {
        const index = cartList.value.findIndex(item => item.id === id)
        if (index > -1) {
            // as强转类型
            (cartList.value[index].count as number) += num
        } else {
            const item = goodsList.value.find(v => v.id === id)!
            cartList.value.push({
                ...item,
                count: 1
            })
        }
    }
    return {
        cartList,
        goodsList,
        total,
        setGoodsList,
        changeCount
    }
})