import axios from 'axios'

// 抛出类型
export interface BannerItem {
    imageUrl: string;
    targetId: number;
}

interface BannerResponse {
    code: number;
    banners: BannerItem[]
}

export const getBanner = () => {
    // 指定接口返回值类型
    return axios.get<BannerResponse>('http://zyxcl.xyz/music_api/banner')
}

export interface GoodsItem {
    checked: boolean;
    id: string;
    images: string[];
    imgUrl: string;
    name: string;
    price: number;
}

export const getGoodsListApi = () => {
    return axios.get<GoodsItem[]>('/api/list')
}

