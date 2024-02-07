const express = require('express')
const app = express()
const PORT = 8002

const foodRecs ={ ramen:[{
    name:'Ramen Tatsunoya Shinjuku',
    image:"https://babblinggaijin.netlify.app/Food/images/RamenTatsunoyaShinjuku.jpg",
    description:'We visited this ramen shop in Japan, and it was the first and last place we ate at during our trip. Despite having to wait for an hour, which seemed to be the norm no matter what time we went, we can confidently say that it was one of the best ramen shops we visited in Japan.'
}],bakery:[{
    name:'Little Bakery Shinjuku',
    image:"https://babblinggaijin.netlify.app/Food/images/LittleBakeryShinjuku.jpg",
    description:'We mostly went to convenience stores for breakfast but the last few days we found this bakery that we just adored. They had a large assortment of buns, doughnuts and sandwiches. My personal favourite was a flaky doughnut that was filled with Taro paste. '
}]}

// app.get('/', (request, response)=>{
//     response.sendFile(__dirname + '/index.html')
// })

app.get('/api',(request,response)=>{
    response.json(foodRecs)
})

app.listen(PORT, ()=>{
console.log('Server is running')
})