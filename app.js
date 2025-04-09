const express=require('express');
const app=express();
const pagesRoutes = require('./routes/pages');
app.use(pagesRoutes);
app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
