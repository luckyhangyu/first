import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {

    Button,
    Tabbar,
    TabbarItem,
    Swipe,
    SwipeItem,
    Cell,
    CellGroup,
    AddressList,
    AddressEdit,
    Empty,
    Notify,
    Tab,
    Tabs,
    Grid,
    GridItem,
    Image,
    SubmitBar,
    Checkbox


} from 'vant'
import 'vant/lib/index.css'
// 引入mock模拟的数据
import './mock'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Swipe)
app.use(SwipeItem)
app.use(Cell)
app.use(CellGroup)
app.use(AddressList)
app.use(AddressEdit)
app.use(Empty)
app.use(Notify)
app.use(Tab)
app.use(Tabs)
app.use(GridItem)
app.use(Grid)
app.use(Image)
app.use(SubmitBar)
app.use(Checkbox)

app.mount('#app')
