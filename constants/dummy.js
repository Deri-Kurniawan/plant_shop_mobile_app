import IMAGES from "./images";

export const CATEGORIES = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Indoor",
  },
  {
    id: 3,
    name: "Outdoor",
  },
  {
    id: 4,
    name: "Popular",
  },
  {
    id: 5,
    name: "Latest",
  },
];

export const PLANTS = [
  {
    id: 1,
    name: "Aloe",
    image: IMAGES.PLANTS.plant1,
    category: {
      id: 2,
      name: "Indoor",
    },
    price: "300",
    description:
      "Aloe is a plant that is native to the Indian subcontinent. It is a shrub or small tree with a large greenish-yellow fruit. It is a member of the family of plants called the family of the evening primrose, and is one of the most popular indoor plants in the world.",
    size: "Medium",
    plant: "Orchid",
    height: "1.5 m",
    humidity: "70%",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "Deri Kurniawan",
        rating: 5,
        comment: "This is a good plant",
      },
      {
        id: 2,
        name: "Simon",
        rating: 5,
        comment: "This is a good plant",
      },
      {
        id: 3,
        name: "Victoria",
        rating: 5,
        comment: "This is a good plant",
      },
      {
        id: 4,
        name: "Jill Doe",
        rating: 4.5,
        comment: "This is a good plant",
      },
      {
        id: 5,
        name: "Joe Doe",
        rating: 4.5,
        comment: "This is a good plant",
      },
    ],
  },
  {
    id: 2,
    name: "Cactus",
    image: IMAGES.PLANTS.plant2,
    category: {
      id: 3,
      name: "Outdoor",
    },
    price: "1000",
    description:
      "Cactus is a plant that is native to the Indian subcontinent. It is a shrub or small tree with a large greenish-yellow fruit. It is a member of the family of plants called the family of the evening primrose, and is one of the most popular indoor plants in the world.",
    size: "Medium",
    plant: "Orchid",
    height: "1.5 m",
    humidity: "70%",
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "This is a good plant",
      },
      {
        id: 2,
        name: "John Doe",
        rating: 5,
        comment: "This is a good plant",
      },
    ],
  },
  {
    id: 3,
    name: "Camellia",
    image: IMAGES.PLANTS.plant3,
    category: {
      id: 2,
      name: "Indoor",
    },
    price: "2300",
    description:
      "Camellia is a plant that is native to the Indian subcontinent. It is a shrub or small tree with a large greenish-yellow fruit. It is a member of the family of plants called the family of the evening primrose, and is one of the most popular indoor plants in the world.",
    size: "Medium",
    plant: "Orchid",
    height: "1.5 m",
    humidity: "70%",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "This is a good plant",
      },
      {
        id: 2,
        name: "John Doe",
        rating: 4,
        comment: "This is a good plant",
      },
    ],
  },
  {
    id: 4,
    name: "Carnation",
    image: IMAGES.PLANTS.plant4,
    category: {
      id: 4,
      name: "Popular",
    },
    price: "240",
    description:
      "Carnation is a plant that is native to the Indian subcontinent. It is a shrub or small tree with a large greenish-yellow fruit. It is a member of the family of plants called the family of the evening primrose, and is one of the most popular indoor plants in the world.",
    size: "Medium",
    plant: "Orchid",
    height: "1.5 m",
    humidity: "70%",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "This is a good plant",
      },
    ],
  },
  {
    id: 5,
    name: "Cherry",
    image: IMAGES.PLANTS.plant5,
    category: {
      id: 2,
      category: {
        id: 5,
        name: "Latest",
      },
    },
    price: "560",
    description:
      "Cherry is a plant that is native to the Indian subcontinent. It is a shrub or small tree with a large greenish-yellow fruit. It is a member of the family of plants called the family of the evening primrose, and is one of the most popular indoor plants in the world.",
    size: "Medium",
    plant: "Orchid",
    height: "1.5 m",
    humidity: "70%",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "This is a good plant",
      },
    ],
  },
];
