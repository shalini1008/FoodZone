// /api/food.js
export default async function handler(req, res) {
  const foodData = [
    {
      name: "Boiled Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/egg.png",  // Correct path
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/ramen.png",  // Correct path
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/chicken.png",  // Correct path
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/cake.png",  // Correct path
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/burger.png",  // Correct path
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/images/pancake.png",  // Correct path
      type: "dinner",
    },
  ];

  res.status(200).json(foodData);  // Respond with the food data
}


