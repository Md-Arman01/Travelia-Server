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
const commentsRoute = require('./routes/Comments/index')
const singleGuideCommentsRoute = require('./routes/SingelGuideComment/index')
const allUsersRoute = require('./routes/AllUsers/index')
const userRoleRoute = require('./routes/UserRole/index')
const allUsersGetRoute = require('./routes/AllUserGet/index')
const updateUserRoleRoute = require('./routes/UpdateUserRole/index')
const appPackageRoute = require('./routes/AddPackage/index')
const userBookingsRoute = require('./routes/UserBookings/index')
const userWishListRoute = require('./routes/UserWishlist/index')
const deleteWishlistRoute = require('./routes/DeleteWishlist/index')
const makeTourGuideRoute = require('./routes/MakeTourGuide/index')
const singleUserRoute = require('./routes/SingleUser/index')
const tourAssignBookingsRoute = require('./routes/TourAssignBooking/index')
const updateBookingStatusRoute = require('./routes/BookingStatusChange/index')
const deleteBookingRoute = require('./routes/DeleteBooking/index')
const addStoryRoute = require('./routes/AddStory/index')


// middleware
applyMiddleware(app)



// get api
app.use(packagesRoute)
app.use(tourGuidesRoute)
app.use(singlePackageRoute)
app.use(singleTourGuideRoute)
app.use(singleGuideCommentsRoute)
app.use(userRoleRoute)
app.use(allUsersGetRoute)
app.use(userBookingsRoute)
app.use(userWishListRoute)
app.use(singleUserRoute)
app.use(tourAssignBookingsRoute)


// post api
app.use(wishlistRoute)
app.use(bookingsRoute)
app.use(commentsRoute)
app.use(allUsersRoute)
app.use(appPackageRoute)
app.use(makeTourGuideRoute)
app.use(addStoryRoute)

// update api
app.use(updateUserRoleRoute)
app.use(updateBookingStatusRoute)


// delete api
app.use(deleteWishlistRoute)
app.use(deleteBookingRoute)







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