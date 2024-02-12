const express = require('express')
const app = express()
const PORT = 8002

const foodRecs ={ ramen:[{
    name:'Ramen Tatsunoya Shinjuku',
    location:'Tokyo',
    image:"https://babblinggaijin.netlify.app/Food/images/RamenTatsunoyaShinjuku.jpg",
    description:'We visited this ramen shop in Japan, and it was the first and last place we ate at during our trip. Despite having to wait for an hour, which seemed to be the norm no matter what time we went, we can confidently say that it was one of the best ramen shops we visited in Japan.'
}],bakery:[{
    name:'Little Bakery Shinjuku',
    location:'Tokyo',
    image:"https://babblinggaijin.netlify.app/Food/images/LittleBakeryShinjuku.jpg",
    description:'We mostly went to convenience stores for breakfast but the last few days we found this bakery that we just adored. They had a large assortment of buns, doughnuts and sandwiches. My personal favourite was a flaky doughnut that was filled with Taro paste!'}],
    streetFood:[
        {name:'Asakusa',
        location:'Tokyo',
    image:"https://babblinggaijin.netlify.app/Food/images/Asakusa.jpg",
    description:"Asakusa is an exceptional place unlike any other! It is one of the busiest tourist destinations, especially during the summer. We reached Asakusa at 8 am, but we were not alone. Before reaching the temple, there were three isles of food and tourist gift shops to explore. However, most of these shops and food stands don't open until 9 or 10 am. I absolutely adore this location because many street vendors are selling sweet treats in addition to the beauty of the temple. This is where I purchased some of my favourite souvenirs and all the sweets I desired."},{name:'Tsukiji fish Market',
    location:'Tokyo',
    image:"https://babblinggaijin.netlify.app/Food/images/TsukijiFishMarket1.jpg",
    description:"The food here is incredible, if you know where to go! We had everything from Wagyu beef, grilled eel, fresh-cut tuna, torched tuna, raw scallops and so much more. The Market has the freshest fish and most delicious sushi. A trip here wouldn't be complete without grilled eel. I was never a fan of grilled eel before, but here it just melts in your mouth and is marvelous!"}],
    kaseki:[{name:'馳走 風々（ちそう ふふ',
    location:'Tokyo',
    image:"none",
    description:"Kaiseki is a whole segment of its own. This restaurant was a splendid fine dining experience. We had everything from grilled salmon to sashimi of fish I didn't even know existed. The food was sensational but what made the experience special was the people. Although none of the staff spoke any English they were very accommodating in trying to explain everything using pictures and Google Translate. In the intimate restaurant, we were the only people in there. This was an astounding experience that I will always treasure."}],
    omakase:[{name:'Japanese cruise Fujitate',
    location:'Kyoto',
    image:"https://babblinggaijin.netlify.app/Food/images/japaneseCruiseFujitate.jpg",
    description:'An Omakase was always an experience that I dreamed about doing in Japan. This quaint restaurant we walked by on our way to dinner, as we passed we noticed it had very high ratings. The restaurant we planned on going to was closed, and because we were hungry we decided, why not try. Once we looked at the menu we noticed they had Omakase for 5500 yen (55 CAD) which is honestly unheard of. This included an assortment of dishes that were completely up to the chef. The restaurant was very kind to let us order one omakase and let us share. They brought a whole new meaning to food. The food was unworldly. Completely indescribable just sensational. We loved everything they served and we ordered another omakase where the chef created a new set of dishes for us. We were shocked that everything was so delicious. The server recommended edamame ice cream for dessert. It completed the meal perfectly as it was another thing that was truly unique to the restaurant. The whole experience was insane and I would fly back to Kyoto just to eat here again.'}],
    sushi:[{name:'Maruman 丸萬',
    location:'Kyoto',
    image:"https://babblinggaijin.netlify.app/Food/images/Maruman.jpg",
    description:"Without a single doubt the best sushi restaurant we went to. As soon as we entered it felt like stepping into another world. From the hectic busy streets to a homey sweet and relaxing environment. It is a cozy atmosphere, with only one chef and one waitress serving the customers. We had an assortment of sushi it was so astounding we ordered two more plates until we were stuffed to the brim. We were so lucky, we got the last two seats during dinner, there was a constant flow of customers who couldn't get seats after us."}],
    gyoza:[{name:'Horai 551',
    location:'Osaka',
    image:"https://babblinggaijin.netlify.app/Food/images/Horai551.jpg",
    description:"To be fair Gyoza wasn't a dish we had often in Japan, but as soon as you see this place you know it's the place to be for Gyoza. This is a franchise and when we saw it in Osaka it always had a massive lineup. The elaborate displays and long lines are what intrigued us the most. The gyoza was crispy and addictive and I could easily eat 10. It's easy on the wallet and if you're interested in a cheap eat, it's a definite recommendation."}],
    udon:[{name:'Breakfast Udon Express',
    location:'Kyoto',
    image:"https://babblinggaijin.netlify.app/Food/images/breakfastUdonExpress.jpg",
    description:'As I walk down a suspicious alleyway and think this is where bad things happen, I enter a shop and am immediately relieved that this indeed is a restaurant. With an open kitchen, I am soon welcomed by the chef and the warm atmosphere. The food was delicious and makes my mouth water just thinking about it. The noodles are thick, the broth is flavourful. They top the dish with crispy beef intestines which to my surprise, I loved. The food, the people, and the atmosphere feel like one big hug.'}],
    soba:[{name:'Kofune 飛騨そば 小舟',
    location:'Takayama',
    image:"https://babblinggaijin.netlify.app/Food/images/Kofune.jpg",
    description:"Sadly we were in a rush when coming here but one of the most memorable things is the atmosphere. As soon as I entered I noticed the combination of floor and bench seating. Then I noticed the eclectic accumulation of artifacts on the wall, telling all kinds of stories. Special Hida beef soba was what I ordered, and as soon as it came I knew we had chosen the right restaurant; it smelled scrumptious. I read about soba noodles in Hida being special. And they were some of the most delicious noodles I've ever had. They were soft and so incredible. The meat was so thin and flavourful. I only wished we had more time to savour every spoonful."}],

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