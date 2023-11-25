const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const allErrorHandler = require('./utils/allErrorHandler')
const applyMiddleware = require('./middleware/index')
const connectDB = require('./db/connectDB')
const packagesRoute = require('./routes/packages/index')


// middleware
applyMiddleware(app)



// get api
app.use(packagesRoute)





app.get("/health", (req, res) => {
    res.send("Tourist Guide is running now");
  });
  
  // undefind route
  app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
  });
  
  // error handling middleware
  app.use(allErrorHandler);
  
  
  const main=async ()=>{
      await connectDB()
      app.listen(port, () => {
          console.log(`Tourist Guide Server is running on port ${port}`);
      });
     
  }
  
  main()