const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const allErrorHandler = require('./utils/allErrorHandler')
const applyMiddleware = require('./middleware/index')
const connectDB = require('./db/connectDB')
const packagesRoute = require('./routes/packages/index')
const wishlistRoute = require('./routes/wishlist/index')
const tourGuidesRoute = require('./routes/tourGuides/index')
const singlePackageRoute = require('./routes/singlepackage/index')
const bookingsRoute = require('./routes/Bookings/index')
const singleTourGuideRoute = require('./routes/singleTourGuide/index')


// middleware
applyMiddleware(app)



// get api
app.use(packagesRoute)
app.use(tourGuidesRoute)
app.use(singlePackageRoute)
app.use(singleTourGuideRoute)


// post api
app.use(wishlistRoute)
app.use(bookingsRoute)

// update api

// delete api






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