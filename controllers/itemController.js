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
