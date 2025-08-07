import AnimalFood from '../Images/AnimalFood.png';
import DariyAndEggs from '../Images/DariyAndEggs.png';
import Desserts from '../Images/Desserts.png';
import DrinkAndJuice from '../Images/DrinkAndJuice.png';
import FishAndMeat from '../Images/fishAndMeat.png';
import FreshFruit from '../Images/FreshFruits.png';
import FrozenFood from '../Images/FrozenFood.png';
import YummyCandy from '../Images/YummyCandy.png';
import Vegetables from '../Images/Vegetables1.png';
import Snacks from '../Images/Snacks.png';
import CarouselImage1 from '../Images/CarousalImg1.png';
import CarouselImage2 from '../Images/CarousalImg2.png';
import CarouselImage3 from '../Images/CarousalImg3.png';
import CarouselImage4 from '../Images/CarousalImg4.png';
import CarouselImage5 from '../Images/CarousalImg5.png';
import CarouselImage6 from '../Images/CarousalImg6.png';
const CategoryCollection = [
    {
        id: "animal-food",
        label: "Animal Food",
        image: AnimalFood,
        bgColor: "#FFCDD2",
        subtitle: "125+ Products",
        products: [
            {
                id: "dog-food-1",
                price: 14.99,
                originalPrice: 28.99,
                rating: 4.8,
                sold: "18/35",
                name: "Taylor Farms Broccoli Florets Vegetables",
                images: [CarouselImage1],
                description: "High-quality dog food made with real meat and grains.",
            },
        ],
    },
    {
        id: "dairy-eggs",
        label: "Dairy & Eggs",
        image: DariyAndEggs,
        bgColor: "#F8BBD0",
        subtitle: "125+ Products",
        products: [
            {
                id: "milk-1",
                price: 14.99,
                originalPrice: 28.99,
                rating: 4.8,
                sold: "18/35",
                name: "Taylor Farms Broccoli Florets Vegetables",
                images: [CarouselImage2],
                description: "Fresh organic milk from healthy cows.",
            },
        ],
    },
    {
        id: "desserts",
        label: "Desserts",
        image: Desserts,
        bgColor: "#E1BEE7",
        subtitle: "125+ Products",
        products: [
            {
                id: "choco-cake-1",
                price: 14.99,
                originalPrice: 28.99,
                rating: 4.8,
                sold: "18/35",
                name: "Taylor Farms Broccoli Florets Vegetables",
                images: [CarouselImage3],
                description: "Delicious and moist chocolate cake for dessert lovers.",
            },
        ],
    },
    {
        id: "frozen-food",
        label: "Frozen Food",
        image: FrozenFood,
        bgColor: "#FFECB3",
        subtitle: "125+ Products",
        products: [
            {
                id: "frozen-peas-1",
                price: 14.99,
                originalPrice: 28.99,
                rating: 4.8,
                sold: "18/35",
                name: "Taylor Farms Broccoli Florets Vegetables",
                images: [CarouselImage4],
                description: "Frozen peas preserved at peak freshness.",
            },
        ],
    },
    {
        id: "snacks",
        label: "Snacks",
        image: Snacks,
        bgColor: "#FFAB91",
        subtitle: "125+ Products",
        products: [
            {
                id: "chips-1",
                price: 14.99,
                originalPrice: 28.99,
                rating: 4.8,
                sold: "18/35",
                name: "Taylor Farms Broccoli Florets Vegetables",
                images: [CarouselImage5],
                description: "Crunchy salted potato chips in a handy pack.",
            },
        ],
    },
    {
        id: "drinks",
        label: "Drinks",
        image: DrinkAndJuice,
        bgColor: "#D1C4E9",
        subtitle: "125+ Products",
        products: [
            {
                id: "dog-food-1",
                price: 14.99,
                originalPrice: 28.99,
                rating: 4.8,
                sold: "18/35",
                name: "Taylor Farms Broccoli Florets Vegetables",
                images: [CarouselImage6],
                description: "High-quality dog food made with real meat and grains.",
            },
        ],
    },
    {
        id: "fish",
        label: "Fish & Meat",
        image: FishAndMeat,
        bgColor: "#BBDEFB",
        subtitle: "125+ Products",
        products: [
            {
                id: "dog-food-1",
                name: "Premium Dog Food",
                price: 25.99,
                // images: [Dog1, Dog2, Dog3],
                description: "High-quality dog food made with real meat and grains.",
            },
        ],
    },
    {
        id: "fruit",
        label: "Fruits",
        image: FreshFruit,
        bgColor: "#C8E6C9",
        subtitle: "125+ Products",
        products: [
            {
                id: "dog-food-1",
                name: "Premium Dog Food",
                price: 25.99,
                // images: [Dog1, Dog2, Dog3],
                description: "High-quality dog food made with real meat and grains.",
            },
        ],
    },
    {
        id: "yummycandy",
        label: "Yummy Candy",
        image: YummyCandy,
        bgColor: "#FFE0B2",
        subtitle: "125+ Products",
        products: [
            {
                id: "dog-food-1",
                name: "Premium Dog Food",
                price: 25.99,
                // images: [Dog1, Dog2, Dog3],
                description: "High-quality dog food made with real meat and grains.",
            },
        ],
    },
    {
        id: "vegetables",
        label: "Vegetables",
        image: Vegetables,
        bgColor: "#C8E6C9",
        subtitle: "125+ Products",
        products: [
            {
                id: "dog-food-1",
                name: "Premium Dog Food",
                price: 25.99,
                // images: [Dog1, Dog2, Dog3],
                description: "High-quality dog food made with real meat and grains.",
            },
        ],
    },

];

export default CategoryCollection;;
