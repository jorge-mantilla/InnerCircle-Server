/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('items').del();
    await knex('items').insert(
        [
    {
    id:'9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
    user_id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
    title:"Jet Ski",
    price:"$100",
    image:"https://i.imgur.com/uIro1cq.jpg",
    description:" A lovely yellow jet ski that will bring you joy this weekend!"
    },
    {
    id:'83433026-ca32-4c6d-bd86-a39ee8b7303e',
    user_id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
    title:"Small Boat",
    price:"$200",
    image:"https://i.imgur.com/ebq58TA.jpg",
    description:" A lovely boat that will bring you joy this weekend!"
    },
    {
    id:"8ea3f172-14d2-4c04-8d9e-528547781516",
    user_id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
    title:"Drone",
    price:"$50",
    image:"https://i.imgur.com/rbBMkqg.jpg",
    description:" A lovely drone that will bring you joy this weekend!"
    },
    {
    id:'a193a6a7-42ab-4182-97dc-555ee85e7486',
    user_id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
    title:"Drone",
    price:"$50",
    image:"https://i.imgur.com/RVKphDa.jpg",
    description:" A lovely drone that will bring you joy this weekend!"
    },
    {
    id:'8f16bd30-bab5-40af-aca2-b63d5fdd1acc',
    user_id:"5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
    title:"Red Heels - Jimmy Choo",
    price:"$50",
    image:"https://i.imgur.com/hDA98we.jpg",
    description:" A lovely pair of heels that will bring you joy this weekend!"
    },
    {
    id:'bdc6bb69-e09c-498d-8abd-be2792504d00',
    user_id:"5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
    title:"Yellow Heels - Jimmy Choo",
    price:"$50",
    image:"https://i.imgur.com/c3VjXEr.jpg",
    description:" A lovely pair of heels that will bring you joy this weekend!"
    },
    {
    id:'3ce124a4-78b0-4d80-91b9-11f9ced631a7',
    user_id:"5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
    title:"Red Evening Dress",
    price:"$50",
    image:"https://i.imgur.com/IJQVStp.jpg",
    description:" A lovely dress that will bring you joy this weekend!"
    },
    {
    id:'4dd464d6-90b8-4330-91e0-bd1217811bd9',
    user_id:"5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
    title:"Event Tables & Chairs",
    price:"$200",
    image:"https://i.imgur.com/4dg6oqs.jpg",
    description:" A lovely set of chairs and tables that will bring you joy this weekend!"
    },
    {
    id:'c0ba64a8-0ecb-4a7d-ab7f-2dbbd1d437b1',
    user_id:"90ac3319-70d1-4a51-b91d-ba6c2464408c",
    title:"3 Skii Sets",
    price:"$600",
    image:"https://i.imgur.com/kHeTGfb.jpg",
    description:" A lovely skii's that will bring you joy this weekend!"
    },
    {
    id:"f3260a1e-0671-466e-8a3d-e49279ea0a1a",
    user_id:"90ac3319-70d1-4a51-b91d-ba6c2464408c",
    title:"Snowboard",
    price:"$150",
    image:"https://i.imgur.com/O80tdVG.jpg",
    description:" A lovely snowboard that will bring you joy this weekend!"
    },
    {
    id:'d9ef9352-2367-4272-8884-70cf80cb7a38',
    user_id:"90ac3319-70d1-4a51-b91d-ba6c2464408c",
    title:"Guitar",
    price:"$30",
    image:"https://i.imgur.com/Mu0AjPV.jpg",
    description:" A lovely guitar that will bring you joy this weekend!"
    },
    {
    id:'b70067d1-49c9-4925-b830-67b3e98005d5',
    user_id:"90ac3319-70d1-4a51-b91d-ba6c2464408c",
    title:"Fishing Poles",
    price:"$60",
    image:"https://i.imgur.com/hkcgCoi.jpg",
    description:" A lovely set of rods that will bring you joy this weekend!"
    },
    {
    id:'7c79d334-6b90-4052-9def-aa9b8519c9fb',
    user_id:"bfc9bea7-66f1-44e9-879b-4d363a888eb4",
    title:"Blue Dress",
    price:"$25",
    image:"https://i.imgur.com/FtmZv5w.jpg",
    description:" A lovely Blue Dress that will bring you joy this weekend!"
    },
    {
    id:'eafcb711-a726-4b3c-adec-704e3265c47d',
    user_id:"bfc9bea7-66f1-44e9-879b-4d363a888eb4",
    title:"Green Dress",
    price:"$25",
    image:"https://i.imgur.com/DNMzFZZ.jpg",
    description:" A lovely Green Dress that will bring you joy this weekend!"
    },
    {
    id:'72c826ba-fde0-4aae-9aaf-95c6072946cd',
    user_id:"bfc9bea7-66f1-44e9-879b-4d363a888eb4",
    title:"Blue Satin Dress",
    price:"$30",
    image:"https://i.imgur.com/if8lZpD.jpg",
    description:" A lovely blue dress that will bring you joy this weekend!"
    },
    {
    id:'019da03d-1162-48a4-ad48-ed655e3d7301',
    user_id:"bfc9bea7-66f1-44e9-879b-4d363a888eb4",
    title:"Brides Maid Dress",
    price:"$30",
    image:"https://i.imgur.com/EHs9Bnn.jpg",
    description:" A lovely brides maid dress that will bring you joy this weekend!"
    },
    {
    id:'705b808f-d8a0-4713-a796-8653c5c5952b',
    user_id:"89898957-04ba-4bd0-9f5c-a7aea7447963",
    title:"PaddleBoards",
    price:"$25",
    image:"https://i.imgur.com/ZAlmCSn.jpg",
    description:" A lovely Paddleboard that will bring you joy this weekend!"
    },
    {
    id:'f19b0b8a-9cca-4567-9af7-4016a15e038a',
    user_id:"89898957-04ba-4bd0-9f5c-a7aea7447963",
    title:"Fishing Rods",
    price:"$50",
    image:"https://i.imgur.com/hkcgCoi.jpg",
    description:" A lovely set of rods that will bring you joy this weekend!"
    },
    {
    id:"cd12eee6-135a-4356-8641-c7a4ee1c1116",
    user_id:"89898957-04ba-4bd0-9f5c-a7aea7447963",
    title:"Scuba Gear",
    price:"$50",
    image:"https://i.imgur.com/Y2mvYlF.jpg",
    description:" A lovely scuba set that will bring you joy this weekend!"
    },
    {
    id:'2cba0296-c77d-4758-9115-bd98ac18f2c0',
    user_id:"89898957-04ba-4bd0-9f5c-a7aea7447963",
    title:"Fishing Poles",
    price:"$60",
    image:"https://i.imgur.com/hkcgCoi.jpg",
    description:" A lovely set of rods that will bring you joy this weekend!"
    },
    {
    id:'e202e167-d242-4d7f-b8fc-68caffef9e01',
    user_id:"bb1491eb-30e6-4728-a5fa-72f89feaf622",
    title:"Tent",
    price:"$35",
    image:"https://i.imgur.com/tPgQkKk.jpg",
    description:" A lovely tent set that will bring you joy this weekend!"
    },
    {
    id:'079c88df-ed32-4d88-a9b7-eaebc85c4ce2',
    user_id:"bb1491eb-30e6-4728-a5fa-72f89feaf622",
    title:"Pressure Washer",
    price:"$40",
    image:"https://i.imgur.com/gULqnx2.jpg",
    description:" A lovely pressure washer that will bring you joy this weekend!"
    },
    {
    id:'56c8e94c-777d-4176-b7fd-02f0806f614a',
    user_id:"bb1491eb-30e6-4728-a5fa-72f89feaf622",
    title:"Hunting Equipement",
    price:"$50",
    image:"https://i.imgur.com/JPyRNfk.jpg",
    description:" A lovely shotgun that will bring you joy this weekend!"
    },
    {
    id:'2c0185c7-89ef-48ad-a22f-9fc022a5c90c',
    user_id:"bb1491eb-30e6-4728-a5fa-72f89feaf622",
    title:"Dj & Karaoke Set",
    price:"$100",
    image:"https://i.imgur.com/0hcakLd.jpg",
    description:" A lovely DJ tools that will bring you joy this weekend!"
    }
    ]);
    }