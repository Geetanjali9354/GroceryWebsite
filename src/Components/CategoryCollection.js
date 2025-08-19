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
import OrangeJuice from '../Images/OrangeJuice.png';
import DogFood from '../Images/DogFood.png';
import DogFood2 from '../Images/DogImage2.png'
import DogFood3 from '../Images/DogImage3.png'
import DogFood4 from '../Images/DogImage4.png'
import Milk from '../Images/Milk.png';
import Milk2 from '../Images/Milk2.png';
import Milk3 from '../Images/Milk3.png';
import Milk4 from '../Images/Milk4.png';
import ChocoLava from '../Images/Chocolava.png';
import GreenPeas from '../Images/GreenPeas.jpeg'
import ColaCan from '../Images/ColaCan.png';
import BerrySmoothieBootle from '../Images/BerrySmoothieBottle.png';
import VanillaIceCream from '../Images/VanillaIceCream.png';
import FudgeBrowniePack from '../Images/FudgeBrowniePack.png';
import GrainfreeCatFood from '../Images/GrainFreeCatFood.png';
import CatFood2 from '../Images/CatFood2.png';
import CatFood3 from '../Images/CatFood3.png';
import CatFood4 from '../Images/CatFood4.png';
import ParrotSeedMix from '../Images/ParrotSeedMix.png';
import ParrotSeed2 from '../Images/ParrotSeed2.png';
import ParrotSeed3 from '../Images/ParrotSeed3.png';
import ParrotSeed4 from '../Images/ParrotSeed4 (2).png';
import FarmFreshEggs from '../Images/FarmFreshEggs.png';
import CheddarCheeseBlock from '../Images/CheddarCheeseBlock.png';
import FrenchFries from '../Images/FrenchFries.png';
import FrozenPizza from '../Images/FrozenPizza.png';
import Egg2 from '../Images/Egg2.png';
import Egg3 from '../Images/Egg3.png';
import Egg4 from '../Images/Egg4.png';
import Cheese2 from '../Images/Cheese2.png';
import Cheese3 from '../Images/Cheese3.png';
import Cheese4 from '../Images/Cheese4.png';
import ChocoLava2 from '../Images/ChocoLava2.png';
import ChocoLava3 from '../Images/ChocoLava3.png';
import ChocoLava4 from '../Images/ChocoLava4.png';
import Vanilla2 from '../Images/Vanilla2.png';
import Vanilla3 from '../Images/Vanilla3.png';
import Vanilla4 from '../Images/Vanilla4.png';
import Brownie2 from '../Images/Bwonie2.png';
import Brownie3 from '../Images/Bwonie3.png';
import Brownie4 from '../Images/Bwonie4.png';
import GreenPeas2 from '../Images/GreenPeas2.png';
import GreenPeas3 from '../Images/GreenPeas3.png';
import GreenPeas4 from '../Images/GreenPeas4.png';
import Pizza2 from '../Images/Pizza2.png';
import Pizza3 from '../Images/Pizza3.png';
import Pizza4 from '../Images/Pizza4.png';
import FrenchFries2 from '../Images/FrenchFries2.png'
import FrenchFries3 from '../Images/FrenchFries3.png'
import FrenchFries4 from '../Images/FrenchFries4.png'
import SaltedPotatoChips from '../Images/SaltedPotatoChips.png';
import SaltedPotatoChips2 from '../Images/SaltedPotatoChip2.png';
import SaltedPotatoChips3 from '../Images/SaltedPotatoChips3.png';
import SaltedPotatoChips4 from '../Images/SaltedPotatoChip4.png';
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
                name: "Premium Dog Kibble",
                price: 19.99,
                originalPrice: 24.99,
                rating: 4.7,
                sold: "30/50",
                images: [DogFood, DogFood2, DogFood3, DogFood4],
                description: "Nutrient-rich kibble for active dogs.",
            },
            {
                id: "cat-food-1",
                name: "Grain-Free Cat Food",
                price: 14.99,
                originalPrice: 19.99,
                rating: 4.5,
                sold: "20/40",
                images: [GrainfreeCatFood, CatFood2, CatFood3, CatFood4],
                description: "Tasty and healthy cat food with tuna flavor.",
            },
            {
                id: "bird-seed-1",
                name: "Parrot Seed Mix",
                price: 9.99,
                originalPrice: 12.99,
                rating: 4.6,
                sold: "12/30",
                images: [ParrotSeedMix, ParrotSeed2, ParrotSeed3, ParrotSeed4],
                description: "Special seed blend for tropical birds.",
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
                name: "Organic Whole Milk",
                price: 3.99,
                originalPrice: 4.99,
                rating: 4.8,
                sold: "100/150",
                images: [Milk, Milk2, Milk3, Milk4],
                description: "Fresh organic milk with full cream.",
            },
            {
                id: "eggs-1",
                name: "Farm Fresh Eggs",
                price: 2.99,
                originalPrice: 3.49,
                rating: 4.7,
                sold: "90/100",
                images: [FarmFreshEggs, Egg2, Egg3, Egg4],
                description: "Cage-free large brown eggs.",
            },
            {
                id: "cheese-1",
                name: "Cheese Block",
                price: 5.99,
                originalPrice: 7.99,
                rating: 4.9,
                sold: "40/60",
                images: [CheddarCheeseBlock, Cheese2, Cheese3, Cheese4],
                description: "Rich and aged cheddar cheese.",
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
                id: "cake-1",
                name: "Choco Lava Cake",
                price: 6.99,
                originalPrice: 9.99,
                rating: 4.9,
                sold: "70/100",
                images: [ChocoLava, ChocoLava2, ChocoLava3, ChocoLava4],
                description: "Warm cake with molten chocolate center.",
            },
            {
                id: "ice-cream-1",
                name: "Vanilla Ice Cream ",
                price: 4.49,
                originalPrice: 5.99,
                rating: 4.6,
                sold: "60/80",
                images: [VanillaIceCream, Vanilla2, Vanilla3, Vanilla4],
                description: "Classic vanilla ice cream, family pack.",
            },
            {
                id: "brownie-1",
                name: "Fudge Brownie Pack",
                price: 5.99,
                originalPrice: 7.99,
                rating: 4.7,
                sold: "50/75",
                images: [FudgeBrowniePack, Brownie2, Brownie3, Brownie4],
                description: "Rich and chewy chocolate brownies.",
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
                id: "peas-1",
                name: "Frozen Green Peas",
                price: 2.49,
                originalPrice: 3.49,
                rating: 4.8,
                sold: "80/100",
                images: [GreenPeas, GreenPeas2, GreenPeas3, GreenPeas4],
                description: "Freshly frozen green peas.",
            },
            {
                id: "pizza-1",
                name: "Frozen Cheese Pizza",
                price: 5.99,
                originalPrice: 7.49,
                rating: 4.5,
                sold: "65/90",
                images: [FrozenPizza, Pizza2, Pizza3, Pizza4],
                description: "Microwaveable cheese pizza, 12 inch.",
            },
            {
                id: "fries-1",
                name: "French Fries 1kg",
                price: 3.99,
                originalPrice: 5.49,
                rating: 4.6,
                sold: "70/100",
                images: [FrenchFries, FrenchFries2, FrenchFries3, FrenchFries4],
                description: "Crispy cut fries ready to fry.",
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
                name: "Salted Potato Chips",
                price: 1.49,
                originalPrice: 2.49,
                rating: 4.3,
                sold: "150/200",
                images: [SaltedPotatoChips, SaltedPotatoChips2, SaltedPotatoChips3, SaltedPotatoChips4],
                description: "Classic salty snack for all ages.",
            },
            {
                id: "nachos-1",
                name: "Spicy Nacho Chips",
                price: 2.49,
                originalPrice: 3.49,
                rating: 4.6,
                sold: "90/100",
                // images: [CarouselImage2],
                description: "Crunchy nachos with jalapeño flavor.",
            },
            {
                id: "popcorn-1",
                name: "Butter Popcorn",
                price: 1.99,
                originalPrice: 2.99,
                rating: 4.7,
                sold: "120/150",
                // images: [CarouselImage3],
                description: "Ready-to-eat buttered popcorn.",
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
                id: "juice-1",
                name: "Orange Juice (1L)",
                price: 2.99,
                originalPrice: 3.99,
                rating: 4.8,
                sold: "100/120",
                images: [OrangeJuice],
                description: "Freshly squeezed orange juice.",
            },
            {
                id: "cola-1",
                name: "Cola Can (330ml)",
                price: 1.49,
                originalPrice: 1.99,
                rating: 4.6,
                sold: "140/160",
                images: [ColaCan],
                description: "Classic fizzy cola drink.",
            },
            {
                id: "smoothie-1",
                name: "Berry Smoothie Bottle",
                price: 3.99,
                originalPrice: 4.99,
                rating: 4.7,
                sold: "85/100",
                images: [BerrySmoothieBootle],
                description: "Mixed berry smoothie, chilled.",
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
            }, {
                id: "chicken-1",
                name: "Chicken Breast (500g)",
                price: 5.99,
                originalPrice: 7.99,
                rating: 4.8,
                sold: "60/80",
                description: "Lean, boneless chicken breast.",
            },
            {
                id: "salmon-1",
                name: "Fresh Salmon Fillet",
                price: 9.99,
                originalPrice: 12.99,
                rating: 4.9,
                sold: "40/50",
                description: "Skinless Atlantic salmon portion.",
            },
            {
                id: "mutton-1",
                name: "Premium Mutton Curry Cut",
                price: 11.99,
                originalPrice: 14.99,
                rating: 4.6,
                sold: "30/40",
                description: "Fresh mutton, cleaned and cut.",
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
                id: "apple-1",
                name: "Red Apples (1kg)",
                price: 2.99,
                originalPrice: 3.49,
                rating: 4.8,
                sold: "80/100",
                description: "Crisp and sweet red apples.",
            },
            {
                id: "banana-1",
                name: "Bananas (1 dozen)",
                price: 1.99,
                originalPrice: 2.49,
                rating: 4.7,
                sold: "100/120",
                description: "Fresh and ripe bananas.",
            },
            {
                id: "grapes-1",
                name: "Green Grapes (500g)",
                price: 2.49,
                originalPrice: 2.99,
                rating: 4.6,
                sold: "70/90",
                description: "Seedless sweet grapes.",
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
                id: "gummy-1",
                name: "Fruit Gummy Bears",
                price: 1.49,
                originalPrice: 1.99,
                rating: 4.6,
                sold: "200/250",
                description: "Soft gummy bears with fruity flavors.",
            },
            {
                id: "choco-1",
                name: "Milk Chocolate Bar",
                price: 2.49,
                originalPrice: 3.49,
                rating: 4.8,
                sold: "150/180",
                description: "Smooth milk chocolate delight.",
            },
            {
                id: "lollipop-1",
                name: "Assorted Lollipops (Pack of 10)",
                price: 1.99,
                originalPrice: 2.99,
                rating: 4.5,
                sold: "100/120",
                description: "Fun and fruity lollipop collection.",
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
                id: "carrot-1",
                name: "Fresh Carrots (1kg)",
                price: 1.49,
                originalPrice: 2.49,
                rating: 4.7,
                sold: "70/90",
                description: "Crisp and sweet orange carrots.",
            },
            {
                id: "broccoli-1",
                name: "Broccoli Florets (500g)",
                price: 2.99,
                originalPrice: 3.99,
                rating: 4.8,
                sold: "50/70",
                description: "Cleaned and cut fresh broccoli.",
            },
            {
                id: "spinach-1",
                name: "Organic Spinach (250g)",
                price: 1.99,
                originalPrice: 2.49,
                rating: 4.6,
                sold: "60/80",
                description: "Fresh baby spinach leaves.",
            },
        ],
    },

];

export default CategoryCollection;;
