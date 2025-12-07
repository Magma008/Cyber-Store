// ! Special Cards Images
import group1 from "../assets/group1.png"
import group2 from "../assets/group2.png"
import group3 from "../assets/group3.png"
import group4 from "../assets/group4.png"

// * Cards Images
import iphone14 from "../assets/iphone1.png"
import camera1 from "../assets/camera.png"
import iwatch from "../assets/iwatch.png"
import headset from "../assets/headset.png"
import watch1 from "../assets/watch.png"
import zfold from "../assets/z-fold.png"
import buds from "../assets/buds.png"
import tablet from "../assets/tablet.png"
import iphone_gold from "../assets/iphone-gold.png"
import iphone_gray from "../assets/iphone-gray.png"

// ? Categories Images
import phone from "../assets/phone-icon.png"
import watch from "../assets/smartwatch-icon.png"
import camera from "../assets/camera-icon.png"
import headphones from "../assets/headphones-icon.png"
import computers from "../assets/pc-icon.png"
import gaming from "../assets/gaming-icon.png"

export const categories = [
    {
        id: 1,
        name: "Phones",
        image: phone,
        path: "phones",
    },
    {
        id: 2,
        name: "Smart Watches",
        image: watch,
        path: "watches",
    },
    {
        id: 3,
        name: "Cameras",
        image: camera,
        path: "cameras",
    },
    {
        id: 4,
        name: "Headphones",
        image: headphones,
        path: "headphones",
    },
    {
        id: 5,
        name: "Computers",
        image: computers,
        path: "computers",
    },
    {
        id: 6,
        name: "Gaming",
        image: gaming,
        path: "gaming",
    },
];

export const cards = [
    {
        id: 1,
        image: iphone14,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple ",
        price: "900",
        onDiscount: false,
        category: "phones",
    },
    {
        id: 2,
        image: camera1,
        name: "Blackmagic Pocket Cinema Camera 6k",
        price: "2535",
        onDiscount: false,
        category: "cameras",
    },
    {
        id: 3,
        image: iwatch,
        name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
        price: "399",
        onDiscount: true,
        dsPrice: "355",
        category: "watches",
    },
    {
        id: 4,
        image: headset,
        name: "AirPods Max Silver Starlight Aluminium ",
        price: "549",
        onDiscount: false,
        category: "headphones",
    },
    {
        id: 5,
        image: watch1,
        name: "Samsung Galaxy Watch6 Classic 47mm Black",
        price: "369",
        onDiscount: true,
        dsPrice: "344",
        category: "watches",
    },
    {
        id: 6,
        image: zfold,
        name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
        price: "1799",
        onDiscount: true,
        dsPrice: "1699", 
        category: "phones",
    },
    {
        id: 7,
        image: buds,
        name: "Galaxy Buds FE Graphite",
        price: "99.99",
        onDiscount: false,
        category: "headphones",
    },
    {
        id: 8,
        image: tablet,
        name: `Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`,
        price: "398",
        onDiscount: false,
        category: "computers",
    },
    {
        id: 9,
        image: iphone_gold,
        name: `Apple iPhone 14 Pro 512GB Gold (MQ233)`,
        price: "1437",
        onDiscount: true,
        dsPrice: "1399",
        category: "phones",
    },
    {
        id: 10,
        image: iphone_gray,
        name: `Apple iPhone 14 Pro 1TB Silver (MQ2V3)`,
        price: "1499",
        onDiscount: false,
        category: "phones",
    },
    {
        id: 11,
        image: zfold,
        name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
        price: "1799",
        onDiscount: false,
        category: "phones"
    },
    {
        id: 12,
        image: buds,
        name: "Galaxy Buds EA Neolite",
        price: "99.99",
        onDiscount: true,
        dsPrice: "85",
        category: "headphones"
    },
    {
        id: 13,
        image: tablet,
        name: `Apple iPad 9 10.5" 64GB+16GB Silver (MK2L3) 2021`,
        price: "398",
        onDiscount: true,
        dsPrice: "388",
        category: "tablets"
    },
    {
        id: 14,
        image: iphone_gold,
        name: `Apple iPhone 14 Pro Max Gold (MQ233)`,
        price: "1437",
        onDiscount: false,
        category: "phones"
    },
    {
        id: 15,
        image: iphone_gray,
        name: `Apple iPhone 14 Pro Max Silver (MQ2V3)`,
        price: "1499",
        category: "phones"
    },
];

export const specialCards = [
    {
        id: 1,
        image: group1,
        title: "Popular Products",
        text: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        fontColor: "#000",
        backGround: "#fff",
        type: "Headhones",
    },
    {
        id: 2,
        image: group2,
        title: "Ipad Pro",
        text: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        fontColor: "#000",
        backGround: "#F9F9F9",
        type: "Tablets",
    },
    {
        id: 3,
        image: group3,
        title: "Samsung Galaxy",
        text: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        fontColor: "#000",
        backGround: "#EAEAEA",
        type: "Phones",
    },
    {
        id: 4,
        image: group4,
        title: "Macbook Pro",
        text: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        fontColor: "#fff",
        backGround: "#2C2C2C",
        type: "Laptops",
    },
];

export const phones = [
    {
        title: "Brands",
        datas: [
            {
                id: 1,
                name: "Apple",
                stock: 110,
            },
            {
                id: 2,
                name: "Samsung",
                stock: 125,
            },
            {
                id: 3,
                name: "Xiaomi",
                stock: 68,
            },
            {
                id: 4,
                name: "Poco",
                stock: 44,
            },
            {
                id: 5,
                name: "OPPO",
                stock: 36,
            },
            {
                id: 6,
                name: "Honor",
                stock: 10,
            },
            {
                id: 7,
                name: "Motorola",
                stock: 34,
            },
            {
                id: 8,
                name: "Nokia",
                stock: 22,
            },
            {
                id: 9,
                name: "Realme",
                stock: 35,
            },
        ]
    },
    {
        title: "Battery Capacity",
        datas: [
            {
                id: 1,
                name: "2500mAh",
                stock: 32,
            },
            {
                id: 2,
                name: "3500mAh",
                stock: 45,
            },
            {
                id: 3,
                name: "4500mAh",
                stock: 80,
            },
            {
                id: 4,
                name: "5000mAh",
                stock: 443,
            },
            {
                id: 5,
                name: "5500mAh",
                stock: 233,
            },
        ]
    },
    {
        title: "RAM",
        datas: [
            {
                id: 1,
                name: "4GB",
                stock: 279,
            },
            {
                id: 2,
                name: "6GB",
                stock: 330,
            },
            {
                id: 3,
                name: "8GB",
                stock: 240,
            },
            {
                id: 4,
                name: "16GB",
                stock: 356,
            },
            {
                id: 5,
                name: "32GB",
                stock: 13,
            },
        ]
    },
    {
        title: "Storage",
        datas: [
            {
                id: 1,
                name: "16GB",
                stock: 323,
            },
            {
                id: 2,
                name: "32GB",
                stock: 498,
            },
            {
                id: 3,
                name: "64GB",
                stock: 665,
            },
            {
                id: 4,
                name: "128GB",
                stock: 552,
            },
            {
                id: 5,
                name: "512GB",
                stock: 543,
            },
            {
                id: 6,
                name: "1TB",
                stock: 155,
            },
            {
                id: 5,
                name: "2TB",
                stock: 98,
            },
        ]
    },
];

export const address = [
    {
        name: "2118 Thornridge",
        where: "Home",
        fullAddress: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
        telNumber: "(209) 555-0104",
        type: "address",
    },
    {
        name: "Head Office",
        where: "Office",
        fullAddress: "2715 Ash Dr. San Jose, South Dakota 83475",
        telNumber: "(704) 555-0127",
        type: "address",
    },
]