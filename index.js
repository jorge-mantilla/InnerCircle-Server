const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5051;
// const inventoryRoutes = require('./routes/inventoryRoute');
// const users = require("./controllers/users");
const itemRoutes = require('./routes/itemRoute');
const userRoutes = require('./routes/userRoute');

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});