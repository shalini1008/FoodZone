// /api/food.js
export default async function handler(req, res) {
  const foodData = [
    {
      name: "Boiled Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/public/images/egg.png",  // Ensure the correct path to images
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/public/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/public/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/public/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/public/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/public/images/pancake.png",
      type: "dinner",
    },
  ];

  res.status(200).json(foodData);  // Respond with the food data
}

