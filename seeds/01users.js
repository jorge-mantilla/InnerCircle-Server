
exports.seed = async function (knex) {
    console.log("KNEX PARAM",knex);
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
        {
            id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
            email:"hmenci0@seattletimes.com",
            user_name:"Mike Rodriguez",
            password:"12345",
            image:"https://i.imgur.com/fXkMYwS.jpg"
        },
        {
            id:"5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
            email:"bmozzini1@seesaa.net",
            user_name:"Jessica Mino",
            password:"12345",
            image:"https://i.imgur.com/8TAWhs8.jpg"
        },
        {
            id:"90ac3319-70d1-4a51-b91d-ba6c2464408c",
            email:"rpickrell2@bloglovin.com",
            user_name:"Mark Anderson",
            password:"12345",
            image:"https://i.imgur.com/MDrY57N.jpg"
        },
        {
            id:"bfc9bea7-66f1-44e9-879b-4d363a888eb4",
            email:"rkonert3@chicagotribune.com",
            user_name:"Mary Bilton",
            password:"12345",
            image:"https://i.imgur.com/GPwYT1p.jpg"
        },
        {
            id:"89898957-04ba-4bd0-9f5c-a7aea7447963",
            email:"lbehnecken4@bigcartel.com",
            user_name:"Jordan Martin",
            password:"12345",
            image:"https://i.imgur.com/jEMaVRD.jpg"
        },
        {
            id:"bb1491eb-30e6-4728-a5fa-72f89feaf622",
            email:"fhudleston5@wsj.com",
            user_name:"Allison Pineda",
            password:"12345",
            image:"https://i.imgur.com/WA44zuZ.jpg"
        }
    ]);
}