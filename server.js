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
    description:'We mostly went to convenience stores for breakfast but the last few days we found this bakery that we just adored. They had a large assortment of buns, doughnuts and sandwiches. My personal favourite was a flaky doughnut that was filled with Taro paste. '}],
    streetFood:[
        {name:'Asakusa',
    image:"none",
    description:'none'},{name:'Tsukiji fish Market',
    image:"https://babblinggaijin.netlify.app/Food/images/TsukijiFishMarket1.jpg",
    description:"The food here is incredible if you know where to go! We had everything from Wagyu beef, grilled eel, fresh-cut tuna, torched tuna, raw scallops and so much more. The Market has the freshest fish and most delicious sushi. A trip here wouldn't be complete without grilled eel. I was never a fan of grilled eel before, but here it just melts in your mouth and is marvelous!"}],
    kaseki:[{name:'馳走 風々（ちそう ふふ',
    image:"none",
    description:"Kaiseki is a whole segment of its own. This restaurant was an splendid fine dining experience. We had everything from grilled salmon to sashimi of fish I didn't even know existed. The food was sensational but what made the experience special was the people. Although none of the staff spoke any English they were very accommodating in trying to explain everything using pictures and Google Translate. In the intimate restaurant, we were the only people in there. This was an astounding experience that I will always treasure."}],
    omakase:[{name:'Japanese cruise Fujitate',
    image:"none",
    description:'none'}],
    sushi:[{name:'Maruman 丸萬',
    image:"none",
    description:'none'}],
    gyoza:[{name:'Horai 551',
    image:"none",
    description:'none'}],
    udon:[{name:'Breakfast Udon Express',
    image:"none",
    description:'none'}],
    soba:[{name:'Kofune 飛騨そば 小舟',
    image:"none",
    description:"Sadly we were in a rush when coming here but one of the most memorable things is the atmosphere. As soon as I entered I noticed the combination of floor and bench seating. Then I noticed the eclectic accumulation of artifacts on the wall, telling all kinds of stories. Special Hida beef soba was what I ordered, and as soon as it came I knew we had chosen the right restaurant it smelled scrumptious. I read about soba noodles in Hida being special. And they were some of the most delicious noodles I've ever had. They were soft and so incredible. The meat was so thin and flavourful. I only wished we had more time to savour every spoonful."}],
    
}

// app.get('/', (request, response)=>{
//     response.sendFile(__dirname + '/index.html')
// })

app.get('/api',(request,response)=>{
    response.json(foodRecs)
})

app.listen(PORT, ()=>{
console.log('Server is running')
})