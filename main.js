const API_KEY = `cdbe48ee18ce40efa13446009ad54505`
let news = [];
const getLatestNews =  async() =>{
    const url = new URL(`https://newsapi.org/v2/everything?q=art&language=es&apiKey=${API_KEY}`);
    const response  = await fetch(url);
    const data = await response.json()
    news = data.articles;
    console.log("ddd", news);
};

getLatestNews();