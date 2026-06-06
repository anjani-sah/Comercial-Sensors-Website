// script.js

const products = [
    {
        id: 1,
        name:"Soil Moisture Sensor",
        type: "iot",
        price: 700,
        image: [
            "https://www.mouser.in/images/marketingid/2018/img/112439723_Sparkfun_Soil%20Moisture%20Sensor%20with%20Screw%20Terminals.png?v=070223.0511",
            "https://cdn.sparkfun.com/r/500-500/assets/parts/1/6/8/4/8/17731-SparkFun_Qwiic_Soil_Moisture_Sensor-01.jpg"
        ],
        description:  "Iot based sensor for moisture calculation."
    },
    {
        id: 2,
        name: "Leaf Weatness Sensor",
        type: "iot",
        price: 750,
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_wzVmfve3CZARN0LkggWRbHRX3BJqd0FIw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoumyMhbhwfqqYzdybuwjFGSWeKkTC6bDUA&s"
        ],
        description: "Iot based sensor for leaf wetness calculation."

    },


    {
        id: 3,
        name: "Soil Temperature Sensor",
        type: "iot",
        price: 800,
        image: [
            "https://5.imimg.com/data5/SELLER/Default/2021/12/RO/GU/EF/10795062/soil-temperature-moisture-npk-ph-sensor-with-rs485-output.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2AHpK5TAVtIcB2PBg3obKmWaVljiiNHUFw&s"
        ],
        description: "Iot based sensor for temperature calculation."
    },
    {
        id: 4,
        name: "Weather Stations",
        type: "iot",
        price: 1500,
        image: [
            "https://www.renkeer.com/wp-content/uploads/2021/06/weather-station-3.jpg",
            "https://www.renkeer.com/wp-content/uploads/2021/06/agricultural-weather-station-1.jpg"
        ],
        description: "Iot based sensor for getting environmental data."
    },
    {
        id: 5,
        name: "Nutrient Sensor",
        type: "iot",
        price: 300,
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPGlbokcihSfwQm30a05I_53I3Rb_5CEadw&s",
            "https://www.renkeer.com/wp-content/uploads/2021/06/soil-npk-meter.jpg"
        ],
        description: "Iot based sensor for soil management."
    },
    {
        id: 6,
        name: "Nutrient Sensor",
        type: "iot",
        price: 830,
        image: [
            "https://5.imimg.com/data5/ECOM/Default/2023/1/EL/MP/IS/137491030/hccf768c5dd104c00a40ea1b31a2631bce-250x250.jpg",
            "https://5.imimg.com/data5/XP/SB/MY-1833510/sharp-optical-dust-sensor-gp2y1010au0f-250x250.jpg"
        ],
        description: "Iot based sensor act as health scanner."
    },
    {
        id: 7,
        name: "Remote Sensing Sensor",
        type: "iot",
        price: 1000,
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaBtcmgLhsC9TtvZtj6VlCwH2l3s4_Wdqdg&s",
            "https://agriculturepost.com/wp-content/uploads/2018/08/7-benefits-of-Remote-Sensing-GIS-in-agriculture.jpg"
        ],
        description: "Iot based sensor that act as eye view of field."
    },
    {
        id: 8,
        name: "Potentiometric Sensors",
        type: "electronic",
        price: 1220,
        image: [
            "https://s.alicdn.com/@sc04/kf/HTB11e.Tax2rK1RkSnhJq6ykdpXaW.jpg_300x300.jpg",
            "https://i0.wp.com/iotdepot.io/wp-content/uploads/2021/10/smart-room-sensor-3.png?fit=1000%2C1000&ssl=1"
        ],
        description: "Electronic based sensor that measure electrical potential."
    },
    {
        id: 9,
        name: "Voltammetric Sensors",
        type: "electronic",
        price: 1400,
        image: [
            "https://electroncart.in/wp-content/uploads/2022/05/Voltage_Detection_Sensor_Module_0-25V_DC1.jpg",
            "https://m.media-amazon.com/images/I/51cG23bCMcL._AC_UF350,350_QL50_.jpg"
        ],
        description: "Electronic based sensor that measure electrical current."
    },
    {
        id: 10,
        name: "FET Sensors",
        type: "electronic",
        price: 550,
        image: [
            "https://5.imimg.com/data5/AO/KE/MV/SELLER-68847315/field-effect-transistor.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9cRE_iHReGYqqQKysT4GDsDf8udH3vXGVWxAlqWAryGVSyEtSZXPsAeIJxg_vLccwPs&usqp=CAU"
        ],
        description: "Electronic based sensor that measure voltage regulators."
    },
    {
        id: 11,
        name: "ISEs Sensors",
        type: "electronic",
        price: 608,
        image: [
            "https://www.mt.com/images/WebShop/MainImage/51344700.jpg",
            "https://5.imimg.com/data5/SELLER/Default/2022/9/KA/QD/GN/613318/ion-selective-electrodes.jpg"
        ],
        description: "Electronic based sensor that measure nutrient analysis."
    },
    {
        id: 12,
        name: "Optical Fibre Sensors",
        type: "electronic",
        price: 770,
        image: [
            "https://4.imimg.com/data4/DY/AC/MY-9872252/fiber-optic-sensor-500x500.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUA5B_CUTzH3jflypUV_Po9nvSDGSiS23jqw&s"
        ],
        description: "Electronic based sensor that measure nutrient through light."
    },
    {
        id: 13,
        name: "Calorimetric Sensors",
        type: "electronic",
        price: 200,
        image: [
            "https://5.imimg.com/data5/YQ/BS/GLADMIN-23108818/gy-31-tcs230-colour-sensor-500x500.png",
            "https://5.imimg.com/data5/SELLER/Default/2024/7/438902623/JK/BG/JL/1225448/color-sensor-tcs230-500x500.jpg"
        ],
        description: "Electronic based sensor that detect nutrients by changing hues."
    },
    {
        id: 14,
        name: "Conductivity Sensors",
        type: "electronic",
        price: 2200,
        image: [
            "https://m.media-amazon.com/images/I/61rHRMN4fIL.jpg",
            "https://cdn2.botland.store/66532-large_default/gravity-analog-electrical-conductivity-sensor-dfrobot-dfr0300-h.jpg"
        ],
        description: "Electronic based sensor that measure electrical conductivity."
    },
    {
        id: 15,
        name: "Aerial Drone",
        type: "drone",
        price: 220,
        image: [
            "https://pub.mdpi-res.com/jimaging/jimaging-07-00217/article_deploy/html/images/jimaging-07-00217-g005.png?1634614902",
            "https://media.infratec.eu/infrared-camera-infratec-imageir-5300.png?mp_enc=YXV0bz1jb21wcmVzcyZmaXQ9bWF4JmZtPXdlYnAmaD0yODcmdz00MzAmbXBfZGlyPTY1MTY3Jm1wX2lkPTE2Nzg3MTY4NTU="
        ],
        description: "Drone based sensor for detection of temperature"
    },
    {
        id: 16,
        name: "LiDAR Drone",
        type: "drone",
        price: 900,
        image: [
            "https://www.mouser.in/images/marketingid/2021/img/153351344.png?v=070223.0240",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGi3JKlkfFcCV2OO3Z8SaQy8eYkk7YUKQfw&s"
        ],
        description: "Drone based sensor for creation of 3D map"
    },
    {
        id: 17,
        name: "Precision Drone",
        type: "drone",
        price: 3000,
        image: [
            "https://www.ntsensors.com/wp-content/uploads/2023/05/precision_agriculture_sensor.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-IqrioPZfGUoHMPsmOfhPnNAvuaY9g-JYQ&s"
        ],
        description: "Drone based sensor for crop management"
    },
    {
        id: 18,
        name: "Pollen Drone",
        type: "drone",
        price: 590,
        image: [
            "https://robu.in/wp-content/uploads/2017/04/GP2Y1014AU0F-Compact-Optical-font-b-Dust-b-font-Sensor-Compatible-GP2Y1010AU0F-GP2Y1010AUOF-Smoke-font-b-Particle.jpg",
            "https://amt.copernicus.org/articles/12/1581/2019/amt-12-1581-2019-f01-web.png"
        ],
        description: "Drone based sensor for enhancing pollination"
    },
    {
        id: 19,
        name: "Agricultural Drone",
        type: "drone",
        price: 400,
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxBTUuYtmcsheVGjiRDvVF5LCIHI4l9t_CQ&s",
            "https://www.dronevolt.com/wp-content/uploads/2021/03/spray_autonome_v2_acc.png"
        ],
        description: "Drone based sensor for applying pesticides"
    },
    {
        id: 20,
        name: "Seed Drone",
        type: "drone",
        price: 280,
        image: [
            "https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/07/06132303/seeds-from-drone.jpg",
            "https://5.imimg.com/data5/SELLER/Default/2023/8/331235466/XX/RL/FT/94954033/10l-seed-spreader-drone-500x500.png"
        ],
        description: "Drone based sensor for planting sensor"
    },



];

const productContainer = document.querySelector('main');
const filterSelect = document.getElementById('filter');
const cart = [];

function displayProducts(filteredProducts) {
    productContainer.innerHTML = ''; // Clear current products
    filteredProducts.forEach(product => {
        const productSection = document.createElement('section');
        productSection.classList.add('products');
        productSection.innerHTML = `
            <div class="product">
                <div class="image-slider">
                    ${product.image.map(img => `<img src="${img}" alt="${product.name} Image" class="image-slide">`).join('')}
                </div>
                <h2>   <a href="Product-detail/product-detail${product.id}.html">${product.name}</h2></a>
                <p> ${product.description}</p>
                <div class="price">Price: ₹${product.price}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productContainer.appendChild(productSection);
    });
}



function filterProducts() {
    const selectedType = filterSelect.value;
    const filteredProducts = selectedType === 'all' ? products : products.filter(product => product.type === selectedType);
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart!`);
    }
}

filterSelect.addEventListener('change', filterProducts);
document.addEventListener('DOMContentLoaded', () => displayProducts(products));
