const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require('uuid');

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

exports.addItem = (req, res) => {
  const newItem = {
    id: uuidv4(),
    ...req.body
  };

  knex("items")
    .insert(newItem)
    .then(() => {
      const newItemURL = `/items/${newItem.id}`;
      res.status(201).location(newItemURL).send(newItemURL);
    })
    .catch((err) => res.status(400).send(`Error creating Item: ${err}`));
};

// exports.addItem = (req, res) => {
//   knex("items")
//     .insert(req.body)
//     .then((data) => {
//       // For POST requests we need to respond with 201 and the location of the newly created record
//       const newItemURL = `/items/${data[0]}`;
//       res.status(201).location(newItemURL).send(newItemURL);
//     })
//     .catch((err) => res.status(400).send(`Error creating Item: ${err}`));
// };

//To delete an existing inventory using DELETE
exports.updateItem = (req, res) => {
  knex("items")
    .update(req.body)
    .where({ id: req.params.id })
    .then(() => {
      res
        .status(200)
        .send(`item with id: ${req.params.id} has been updated`);
    })
    .catch((err) =>
      res.status(400).send(`Error updating item ${req.params.id} ${err}`)
    );
};

exports.deleteItem = (req, res) => {
  knex("items")
    .delete()
    .where({ id: req.params.id })
    .then(() => {
      // For DELETE response we can use 204 status code
      res.status(204).send(`Item with id: ${req.params.id} has been deleted`);
    })
    .catch((err) =>
      res.status(400).send(`Error deleting Item ${req.params.id} ${err}`)
    );
};

