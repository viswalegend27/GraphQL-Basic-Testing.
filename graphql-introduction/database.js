export const Shirts = [
  { id: "1", fabric_name: "Cotton", color: ["White", "Blue"], size: 40 },
  { id: "2", fabric_name: "Linen", color: ["Beige", "Olive"], size: 42 },
  { id: "3", fabric_name: "Silk", color: ["Black", "Maroon"], size: 38 }
];

export const Pants = [
  { id: "1", fabric_name: "Denim", color: ["Blue", "Black"], size: 32 },
  { id: "2", fabric_name: "Cotton", color: ["Khaki", "Grey"], size: 34 },
  { id: "3", fabric_name: "Wool", color: ["Brown"], size: 36 }
];

export const Reviews = [
  //Shirt 1 (Cotton)
  { id: "1", rating: 5, comment: "Excellent quality and fit! The cotton fabric feels premium.", shirtId: "1", pantId: "1" },
  { id: "2", rating: 4, comment: "Nice texture and breathable fabric, ideal for summer.", shirtId: "1", pantId: "2" },

  //(Linen)
  { id: "3", rating: 5, comment: "Super comfortable and lightweight, perfect for tropical weather.", shirtId: "2", pantId: "3" },
  { id: "4", rating: 3, comment: "Wrinkles easily but looks elegant when ironed.", shirtId: "2", pantId: "1" },

  //(Silk)
  { id: "5", rating: 4, comment: "Smooth and stylish, suitable for special occasions.", shirtId: "3", pantId: "4" },
  { id: "6", rating: 5, comment: "Feels luxurious and fits perfectly. Highly recommend.", shirtId: "3", pantId: "2" },

  // Additional mixed reviews
  { id: "7", rating: 2, comment: "Color faded slightly after multiple washes.", shirtId: "1", pantId: "3" },
  { id: "8", rating: 4, comment: "Great combo with denim pants. Overall value for money.", shirtId: "2", pantId: "1" },
  { id: "9", rating: 5, comment: "Love the design and comfort level. Would buy again!", shirtId: "3", pantId: "4" }
];


export const Companies = [
  { id: "1", Owner: "Raymond Ltd", Verified: true },
  { id: "2", Owner: "Peter England", Verified: false },
  { id: "3", Owner: "Allen Solly", Verified: true }
];

export default { Shirts,Pants, Reviews, Companies};