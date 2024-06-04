import fs from 'fs';

/**
 * Reads and parses data from 'data.json' file.
 * @returns {Object} Parsed JSON data from the file.
 * @throws {Error} If the file is misplaced or data was accidentally deleted. `data.json` needs be in the root of the repository.
 */
export const parseDataFromStorage = () => {
  const data = fs.readFileSync('./data.json', 'utf-8');
  return JSON.parse(data);
}

/**
 * Overwrites data in 'data.json' file with the provided array based on the collection name.
 * 
 * @param {Array} arr - The array to overwrite the existing data with.
 * @param {string} collection - The name of the collection to overwrite ('products' or 'orders').
 * 
 * @throws {Error} If the collection name is not 'products' or 'orders'.
 */
export const overwriteDataInStorage = (arr, collection) => {
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

  switch (collection.toLowerCase()) {
    case 'products':
      fs.writeFileSync('./data.json', JSON.stringify({
        ...data,
        products: arr
      }, null, 2))
      break;
    case 'orders':
      fs.writeFileSync('./data.json', JSON.stringify({
        ...data,
        orders: arr
      }, null, 2))
      break;
    default:
      throw new Error('Invalid collection name.')
  }
}


/**
 * Resets the JSON data to its initial state.
 */
export const resetJsonData = () => {
  fs.writeFileSync('./data.json', {
    "products": [
      {
        "id": "02cb0766-8cd3-4666-9a17-01ff0fa70b1a",
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      },
      {
        "id": "e795cb95-ed98-4300-b5cb-7adea894a553",
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": "002a1f53-ae21-42ec-b23f-a63e0e2b591e",
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 500
        }
      },
      {
        "id": "b63e5e02-adbb-4228-b077-05c116f16a71",
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
          "rate": 2.1,
          "count": 430
        }
      },
      {
        "id": "db44b0fb-84f2-4b0c-bc7e-69818cc27595",
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 4.6,
          "count": 400
        }
      },
      {
        "id": "ce2fbd84-e940-4a1e-8355-b494e3f815c3",
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 70
        }
      },
      {
        "id": "80f9cf57-450b-468b-98f9-4e99f51d794f",
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 3,
          "count": 400
        }
      },
      {
        "id": "d4bc08db-28c7-4817-b76a-d0c54284f46e",
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
          "rate": 1.9,
          "count": 100
        }
      },
      {
        "id": "04a2bffd-e8f9-4a47-9053-83ca0d41a7dc",
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "rating": {
          "rate": 3.3,
          "count": 203
        }
      },
      {
        "id": "2bfab226-0fbf-4757-a630-be47d7d4259f",
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 470
        }
      },
      {
        "id": "3109635e-f320-4350-8486-5bd5220c1620",
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 319
        }
      },
      {
        "id": "4ae2bce2-4a42-41de-9e2d-4585806503a6",
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
          "rate": 4.8,
          "count": 400
        }
      },
      {
        "id": "ae318e7d-d538-43c4-b85e-dceb0b911a32",
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 250
        }
      },
      {
        "id": "54c79917-00c8-4e40-b270-eda86d6bb719",
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
          "rate": 2.2,
          "count": 140
        }
      },
      {
        "id": "51be1c55-364f-4b0b-a828-53ded65bd7ec",
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "rating": {
          "rate": 2.6,
          "count": 235
        }
      },
      {
        "id": "10ddb0cf-79d4-48a8-9b7f-d6d8ead4fcb5",
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "rating": {
          "rate": 2.9,
          "count": 340
        }
      },
      {
        "id": "5c1f8ea1-c23f-40fa-852a-9a0a253b9c1f",
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
          "rate": 3.8,
          "count": 679
        }
      },
      {
        "id": "9db506bc-71d7-479f-be04-807136c13bb0",
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 130
        }
      },
      {
        "id": "7c25302a-b91c-4d2f-8a26-f7871b160d86",
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.5,
          "count": 146
        }
      },
      {
        "id": "c0c55a49-cf35-492b-a13c-526e6cc412c6",
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
          "rate": 3.6,
          "count": 145
        }
      }
    ],
    "orders": [
      {
        "id": "7fa116a5-a9f7-456d-aa2a-c033eae4c0f8",
        "userId": 1,
        "date": "2020-03-02T00:00:00.000Z",
        "products": [
          {
            "productId": "02cb0766-8cd3-4666-9a17-01ff0fa70b1a",
            "quantity": 4
          },
          {
            "productId": "e795cb95-ed98-4300-b5cb-7adea894a553",
            "quantity": 1
          },
          {
            "productId": "002a1f53-ae21-42ec-b23f-a63e0e2b591e",
            "quantity": 6
          }
        ]
      },
      {
        "id": "c88313f3-e678-45fe-ae14-c5f1746755c7",
        "userId": 1,
        "date": "2020-01-02T00:00:00.000Z",
        "products": [
          {
            "productId": "e795cb95-ed98-4300-b5cb-7adea894a553",
            "quantity": 4
          },
          {
            "productId": "02cb0766-8cd3-4666-9a17-01ff0fa70b1a",
            "quantity": 10
          },
          {
            "productId": "db44b0fb-84f2-4b0c-bc7e-69818cc27595",
            "quantity": 2
          }
        ]
      },
      {
        "id": "deb15445-5c44-43b6-be4d-9787b9447d5a",
        "userId": 2,
        "date": "2020-03-01T00:00:00.000Z",
        "products": [
          {
            "productId": "02cb0766-8cd3-4666-9a17-01ff0fa70b1a",
            "quantity": 2
          },
          {
            "productId": "04a2bffd-e8f9-4a47-9053-83ca0d41a7dc",
            "quantity": 1
          }
        ]
      },
      {
        "id": "c3c8f553-2806-47d9-badc-d15e029619b0",
        "userId": 3,
        "date": "2020-01-01T00:00:00.000Z",
        "products": [
          {
            "productId": "02cb0766-8cd3-4666-9a17-01ff0fa70b1a",
            "quantity": 4
          }
        ]
      },
      {
        "id": "0c528013-3a32-4b85-a3cd-9d77cf1bae8b",
        "userId": 3,
        "date": "2020-03-01T00:00:00.000Z",
        "products": [
          {
            "productId": "80f9cf57-450b-468b-98f9-4e99f51d794f",
            "quantity": 1
          },
          {
            "productId": "d4bc08db-28c7-4817-b76a-d0c54284f46e",
            "quantity": 1
          }
        ]
      },
      {
        "id": "83da995a-ff2c-41de-80ce-a19dc661c60a",
        "userId": 4,
        "date": "2020-03-01T00:00:00.000Z",
        "products": [
          {
            "productId": "02cb0766-8cd3-4666-9a17-01ff0fa70b1a",
            "quantity": 2
          },
          {
            "productId": "02cb0766-8cd3-4666-9a17-01ff0fa70b1a",
            "quantity": 3
          }
        ]
      },
      {
        "id": "14877c9f-0a19-4720-8e22-33cb18de22a1",
        "userId": 8,
        "date": "2020-03-01T00:00:00.000Z",
        "products": [
          {
            "productId": "02cb0766-8cd3-4666-9a17-01ff0fa70b1a",
            "quantity": 1
          }
        ]
      }
    ]
  })
}
