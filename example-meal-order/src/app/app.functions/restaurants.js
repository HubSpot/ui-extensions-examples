// Credit to Dan Dascalescu and Community:
// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

exports.main = async () => {
  await sleep(1000);
  return demoRestaurants;
};

const demoMenu = {
  items: [
    {
      id: 1,
      name: 'Harvest Bowl',
      price: 14.25,
      description:
        'Roasted Chicken, Roasted Sweet Potatoes, Apples, Goat Cheese, Toasted Almonds, Warm Wild Rice, Shredded Kale, Balsamic Vinaigrette',
    },
    {
      id: 2,
      name: 'Crispy Rice Bowl',
      price: 14.25,
      description:
        'Blackened Chicken, Raw Carrots, Shredded Cabbage, Cucumber, Cilantro, Toasted Almonds, Crispy Rice, Warm Wild Rice, Arugula, Fresh Lime Squeeze, Spicy Cashew Dressing',
    },
    {
      id: 3,
      name: 'Chicken Pesto Parm',
      price: 14.25,
      description:
        "Roasted Chicken, Spicy Broccoli, Tomato, Shaved Parmesan, Za'atar Breadcrumbs, Warm Quinoa, Baby Spinach, Sweetgreen Hot Sauce, Pesto Vinaigrette",
    },
    {
      id: 4,
      name: 'Shroomami',
      price: 13.25,
      description:
        'Roasted Tofu, Warm Portobello Mix, Raw Beet, Cucumber, Basil, Sunflower Seeds, Warm Wild Rice, Shredded Kale, Miso Sesame Ginger Dressing',
    },
    {
      id: 5,
      name: 'Fish Taco',
      price: 16.5,
      description:
        'Roasted Steelhead, Avocado, Shredded Cabbage, Cilantro, Tortilla Chips, Warm Quinoa, Arugula, Sweetgreen Hot Sauce, Lime Cilantro Jalapeño Vinaigrette',
    },
  ],
  bases: [
    'shredded kale',
    'warm wild rice',
    'arugula',
    'baby spinach',
    'warm quinoa',
  ],
  toppings: [
    'toasted almonds',
    'raw carrots',
    'chickpeas',
    'crispy rice',
    "za'atar breadcrumbs",
  ],
  premiums: [
    'roasted chicken',
    'avocado',
    'roasted tofu',
    'warm portobello mix',
    'blackened chicken',
  ],
  dressings: [
    'balsamic vinaigrette',
    'balsamic vinegar',
    'caesar dressing',
    'extra virgin olive oil',
    'lime cilantro jalapeno vinaigrette',
  ],
};

const demoRestaurants = [
  {
    id: 1,
    name: 'sweetgreen',
    image: 'https://i.imgur.com/ptGKCSS.jpeg',
    category: 'Salad',
    ratings: 52,
    rating: 4,
    deliveryInMinutes: 30,
    deliveryCost: 1.99,
    menu: demoMenu,
  },
  {
    id: 2,
    name: 'B.Good',
    image: 'https://i.imgur.com/JBYJEkR.jpeg',
    category: 'Salad',
    ratings: 24,
    rating: 3,
    deliveryInMinutes: 25,
    deliveryCost: 1.99,
    menu: demoMenu,
  },
  {
    id: 3,
    name: "Monica's Mercato",
    image: 'https://i.imgur.com/M0aBHM5.jpeg',
    category: 'Italian',
    ratings: 86,
    rating: 2,
    deliveryInMinutes: 50,
    deliveryCost: 2.49,
    menu: demoMenu,
  },
  {
    id: 4,
    name: 'Pita Cambridge',
    image: 'https://i.imgur.com/Vjy9EEG.jpeg',
    category: 'Dinner',
    ratings: 1376,
    rating: 4,
    deliveryInMinutes: 30,
    deliveryCost: 2.49,
    menu: demoMenu,
  },
  {
    id: 5,
    name: 'All Star Sandwich Bar',
    image: 'https://i.imgur.com/iNGSbL8.jpeg',
    category: 'Sandwich',
    ratings: 2332,
    rating: 4,
    deliveryInMinutes: 25,
    deliveryCost: 2.49,
    menu: demoMenu,
  },
  {
    id: 6,
    name: 'Koreana',
    image: 'https://i.imgur.com/zDouC4Q.jpeg',
    category: 'Korean',
    ratings: 528,
    rating: 5,
    deliveryInMinutes: 30,
    deliveryCost: 2.49,
    menu: demoMenu,
  },
  {
    id: 7,
    name: "Alfredo's Italian Kitchen",
    image: 'https://i.imgur.com/QhuwIMM.jpeg',
    category: 'Pizza',
    ratings: 3205,
    rating: 4,
    deliveryInMinutes: 35,
    deliveryCost: 3.0,
    menu: demoMenu,
  },
  {
    id: 8,
    name: 'Mu Lan',
    image: 'https://i.imgur.com/75Otwyu.jpeg',
    category: 'Asian',
    ratings: 22,
    rating: 4,
    deliveryInMinutes: 30,
    deliveryCost: 1.99,
    menu: demoMenu,
  },
  {
    id: 9,
    name: "Anna's Taquieria",
    image: 'https://i.imgur.com/75TQNpM.jpeg',
    category: 'Mexican',
    ratings: 1770,
    rating: 4,
    deliveryInMinutes: 30,
    deliveryCost: 1.99,
    menu: demoMenu,
  },
  {
    id: 10,
    name: 'Passage To India',
    image: 'https://i.imgur.com/YZRhd8l.jpeg',
    category: 'Indian',
    ratings: 90,
    rating: 5,
    deliveryInMinutes: 65,
    deliveryCost: 6.99,
    menu: demoMenu,
  },
];
