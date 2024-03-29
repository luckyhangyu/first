import Mock from 'mockjs'

const data = Mock.mock({
    "list|50": [
        {
            "id": "@id",
            "name": "@cname",
            "price|1-50": 10,
            "imgUrl": "@image(100x100, @color, @text)",
            "checked": false,
            "images|4-8": ["@image(375x300, @color, @title)"]
        }
    ]
})

// 模拟接口
Mock.mock('/api/list', () => {
    return data.list
})