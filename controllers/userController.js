const knex = require('knex')(require('../knexfile'));

exports.index = (_req, res) => {
  knex("users")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving users ${err}`));
};

//GET Items for a Given User

exports.userItems = (req, res) => {
  knex("items")
  .where({ user_id: req.params.id })
  .select("id", "title", "price", "image", "description")
  .then((data) => {
      //this is a guard clause
      if (data.length === 0) {
          res.status(404).send("Error");
          return;
      }
      res.status(200).json(data);
  })
  .catch((err) =>
  res
  .status(404)
  .send(
      `Error retrieving items for user ${req.params.id} ${err}`
      )
      );
  };

exports.singleUser = (req, res) => {
  knex("users")
    .where({ id: req.params.id })
    .then((data) => {
      // If record is not found, respond with 404
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with id: ${req.params.id} is not found`);
      }
      // Knex returns an array of records, so we need to send response with a single object only
      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving user ${req.params.id} ${err}`)
    );
};

exports.singleUserByEmail = (req, res) => {
  knex("users")
    .where({ email: req.params.email })
    .first() // Retrieve the first matching record
    .then((user) => {
      // If user is not found, respond with 404
      if (!user) {
        return res
          .status(404)
          .send(`User with email: ${req.params.email} not found`);
      }
      // Send the user object as the response
      res.status(200).json(user);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving user ${req.params.email} ${err}`)
    );
};


// exports.singleUserByEmail = (req, res) => {
//   knex("users")
//     .where({ email: req.params.email })
//     .then((data) => {
//       // If record is not found, respond with 404
//       if (!data.length) {
//         return res
//           .status(404)
//           .send(`Record with id: ${req.params.email} is not found`);
//       }
//       // Knex returns an array of records, so we need to send response with a single object only
//       res.status(200).json(data[0]);
//     })
//     .catch((err) =>
//       res.status(400).send(`Error retrieving user ${req.params.email} ${err}`)
//     );
// };

exports.addUser = (req, res) => {
  knex("users")
    .insert(req.body)
    .then((data) => {
      // For POST requests we need to respond with 201 and the location of the newly created record
      const newUserURL = `/users/${data[0]}`;
      res.status(201).location(newUserURL).send(newUserURL);
    })
    .catch((err) => res.status(400).send(`Error creating User ${err}`));
};

exports.userCheck = (req, res) => {
  const userEmail = req.params.email;

  knex("users")
    .where({ email:userEmail })
    .then((data) => {
      // If record is not found, respond with 404
      if (!data.length) {
        return res
          .status(404)
          .send(`User with email: ${userEmail} is not found`);
      }
      // Knex returns an array of records, so we need to send response with a single object only
      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving user ${userEmail}: ${err}`)
    );
};
