const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("items")
    .join("users", "items.user_id", "=", "users.id")
    .select(
      "items.id",
      "users.user_name",
      "items.title",
      "items.description",
      "items.price",
      "items.image"
    )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving items ${err}`));
};

exports.singleItem = (req, res) => {
  knex('items')
      .where({ id: req.params.id })
      .then((data) => {
          // If record is not found, respond with 404
          if (!data.length) {
              return res.status(404).send(`Record with id: ${req.params.id} is not found`);
          }

          // Knex returns an array of records, so we need to send response with a single object only
          res.status(200).json(data[0]);
      })
      .catch((err) =>
          res.status(400).send(`Error retrieving item ${req.params.id} ${err}`)
      );
};
