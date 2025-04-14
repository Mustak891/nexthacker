// src/data/mockArticles.js

const mockArticles = [
  {
    id: 1,
    title: "Why Siri’s AI Upgrades Keep Getting Pushed Back",
    excerpt: "Apple's voice assistant struggles amidst fierce competition.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Full article text discussing AI challenges, market pressures, and insider insights.`,
    author: "Jake Peterson",
    date: "April 11, 2025",
    image: "https://s.yimg.com/ny/api/res/1.2/4.xpExPDwAphgOGx098yuQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/lifehacker_articles_330/bbdfdf9b01b751d1a4410e65d02cb2ce",
    top: true,
    featured: true,
    categories: ["Tech", "Latest"]
  },
  {
    id: 2,
    title: "The Whoop 4.0 Is Even Better Now Than When It First Debuted",
    excerpt: "Improvements to Whoop 4.0 that elevate your performance tracking.",
    content: `Detailed review of Whoop 4.0 improvements. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`,
    author: "Jake Peterson",
    date: "April 10, 2025",
    image: "https://www.verywellfit.com/thmb/dYbugFroawBMm6ATonctal2NqoU=/750x750/filters:no_upscale():max_bytes(150000):strip_icc()/Whoop-4.0-review-VWT-Tout-fc9bcb667bf94712992a2ff939c5f16c.jpg",
    top: true,
    featured: false,
    categories: ["Tech", "Latest"]
  },
  {
    id: 3,
    title: "The reMarkable Paper Pro: A Novel Approach to Digital Note-Taking",
    excerpt: "Digital note-taking is evolving with the new reMarkable Paper Pro.",
    content: `Discover the reMarkable Paper Pro's innovative features. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: "John Smith",
    date: "April 9, 2025",
    image: "https://th.bing.com/th/id/OIP.RhrQt1xOwG66IAzZqomIHQAAAA?rs=1&pid=ImgDetMain",
    top: true,
    featured: false,
    categories: ["Tech", "Latest"]
  },
  {
    id: 4,
    title: "Delicious Vegan Recipes to Try at Home",
    excerpt: "A guide to mouthwatering vegan dishes that are easy to cook.",
    content: `Explore healthy, delicious vegan recipes for your everyday meals.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: "Maria Garcia",
    date: "April 8, 2025",
    image: "https://assets.avanihotels.com/image/upload/q_auto,f_auto/media/minor/avani/images/blogs/food-fun---delicious-and-colourful-vegan-recipes-to-try-at-home/av-blog-teaser-(1).png",
    top: false,
    featured: false,
    categories: ["Food", "Latest"]
  },
  {
    id: 5,
    title: "Top 10 Movies to Watch This Summer",
    excerpt: "Your guide to must-see films that will keep you entertained.",
    content: `Check out our curated list of blockbuster hits and indie gems.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: "Alan Moore",
    date: "April 7, 2025",
    image: "https://th.bing.com/th/id/OIP.EB7o9MhzEJ3IY3p2MECBrwHaEK?rs=1&pid=ImgDetMain",
    top: false,
    featured: false,
    categories: ["Entertainment", "Latest"]
  },
  {
    id: 6,
    title: "10 Tips for a Healthier Life",
    excerpt: "Simple lifestyle changes to boost your health and well-being.",
    content: `Learn practical health tips and wellness strategies.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: "Dr. Emily Lin",
    date: "April 6, 2025",
    image: "https://blog.myfitnesspal.com/wp-content/uploads/2018/11/UACF-HH-Nutrition-graphic.jpg",
    top: false,
    featured: false,
    categories: ["Health", "Latest"]
  },
  {
    id: 7,
    title: "How to Save Money on Your Grocery Bill",
    excerpt: "Smart ways to cut costs without compromising on quality.",
    content: `Discover strategies to reduce your grocery expenses.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: "Bob Martin",
    date: "April 5, 2025",
    image: "https://www.savingyoudinero.com/wp-content/uploads/2018/03/Save-Money-On-Your-Grocery-Bill-Printable-Menu-and-Grocery-List.jpg",
    top: false,
    featured: false,
    categories: ["Money", "Deals", "Latest"]
  },
  {
    id: 8,
    title: "DIY Home & Garden Projects to Boost Your Home’s Value",
    excerpt: "Easy projects to enhance your living space and garden.",
    content: `Step-by-step DIY projects to improve your home.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: "Jane Doe",
    date: "April 4, 2025",
    image: "https://th.bing.com/th/id/R.cb4ff13727c4d85f8a993a54947b7bdf?rik=Pq8U6eTAIa3GBA&riu=http%3a%2f%2fmedia.diyprojectsworld.com%2fwp-content%2fuploads%2fprojects-that-increase-home-value-christianpf-com-1200x900.jpg&ehk=rwtNq25M8SmsRLohakDYMLo5Nw3t8C92jtXOkPwOJmU%3d&risl=&pid=ImgRaw&r=0",
    top: false,
    featured: false,
    categories: ["Home & Garden", "Hacks"]
  },
  {
    id: 9,
    title: "Exclusive Deals: Best Tech Gadgets at Discount Prices",
    excerpt: "Grab the latest tech gadgets at unbeatable prices.",
    content: `Overview of discount tech gadgets available now.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: "Alan Moore",
    date: "April 3, 2025",
    image: "https://images.macrumors.com/t/Q1-78Z503I8jECHdtWdRi6hHurY=/2500x/https://images.macrumors.com/article-new/2017/12/Deals-Header-Image-Blue.jpg",
    top: false,
    featured: false,
    categories: ["Deals", "Tech"]
  },
  {
    id: 10,
    title: "Life Hacks: Organize Your Day Like a Pro",
    excerpt: "Smart hacks to improve your daily productivity and time management.",
    content: `Practical tips and tricks for a more organized life.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: "Sarah Johnson",
    date: "April 2, 2025",
    image: "https://i.pinimg.com/originals/53/ab/ba/53abba50d59278d92bc57392fe912680.jpg",
    top: false,
    featured: false,
    categories: ["Hacks", "Latest"]
  }
];

export default mockArticles;
