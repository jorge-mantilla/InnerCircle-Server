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