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
    description:"Asakusa is an exceptional place unlike any other! It is one of the busiest tourist destinations, especially during the summer. We reached Asakusa at 8 am, but we were not alone. Before reaching the temple, there were three isles of food and tourist gift shops to explore. However, most of these shops and food stands don't open until 9 or 10 am. I absolutely adore this location because many street vendors are selling sweet treats in addition to the beauty of the temple. This is where I purchased some of my favourite souvenirs and all the sweets I desired."},{name:'Tsukiji fish Market',
    image:"https://babblinggaijin.netlify.app/Food/images/TsukijiFishMarket1.jpg",
    description:"The food here is incredible if you know where to go! We had everything from Wagyu beef, grilled eel, fresh-cut tuna, torched tuna, raw scallops and so much more. The Market has the freshest fish and most delicious sushi. A trip here wouldn't be complete without grilled eel. I was never a fan of grilled eel before, but here it just melts in your mouth and is marvelous!"}],
    kaseki:[{name:'馳走 風々（ちそう ふふ',
    image:"none",
    description:"Kaiseki is a whole segment of its own. This restaurant was a splendid fine dining experience. We had everything from grilled salmon to sashimi of fish I didn't even know existed. The food was sensational but what made the experience special was the people. Although none of the staff spoke any English they were very accommodating in trying to explain everything using pictures and Google Translate. In the intimate restaurant, we were the only people in there. This was an astounding experience that I will always treasure."}],
    omakase:[{name:'Japanese cruise Fujitate',
    image:"none",
    description:'An Omakase was always an experience that I dreamed about doing in Japan. This quaint restaurant we walked by on our way to dinner, we noticed had very high ratings. The restaurant we planned on going to was closed and because we were hungry we decided why not try. Once we looked at the menu we noticed they had Omakase for 5500 yen which is about 55 CAD which is honestly unheard of. This included an assortment of dishes that were completely up to the chef. The restaurant was very kind to let us order one omakase and let us share. We also ordered Yuzu Wine, a very sweet fruit wine. They brought a whole new meaning to food. The food was unworldly. Completely indescribable just sensational. We loved everything they served and we ordered another omakase where the chef created a new set of dishes for us. We were shocked that everything was so delicious. The server recommended edamame ice cream for dessert, It completed the meal perfectly as it was another thing that was truly unique to the restaurant. The whole experience was insane and I would fly back to Kyoto just to eat here again.'}],
    sushi:[{name:'Maruman 丸萬',
    image:"none",
    description:'none'}],
    gyoza:[{name:'Horai 551',
    image:"none",
    description:'In Osaka'}],
    udon:[{name:'Breakfast Udon Express',
    image:"none",
    description:'none'}],
    soba:[{name:'Kofune 飛騨そば 小舟',
    image:"none",
    description:"Sadly we were in a rush when coming here but one of the most memorable things is the atmosphere. As soon as I entered I noticed the combination of floor and bench seating. Then I noticed the eclectic accumulation of artifacts on the wall, telling all kinds of stories. Special Hida beef soba was what I ordered, and as soon as it came I knew we had chosen the right restaurant it smelled scrumptious. I read about soba noodles in Hida being special. And they were some of the most delicious noodles I've ever had. They were soft and so incredible. The meat was so thin and flavourful. I only wished we had more time to savour every spoonful."}],

}

app.get('/', (request, response)=>{
    response.sendFile(index.html)
})

app.get('/api/:foodRecsName',(request,response)=>{
    const foodRecsName = request.params.foodRecsName.toLowerCase()
    response.json(foodRecs[foodRecsName])
})

app.listen(PORT, ()=>{
console.log('Server is running')
})