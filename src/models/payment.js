const { model, Schema } = require("mongoose");

const PaymentSchema = new Schema({
  user_name: {
    type: String,
  },
  user_email: {
    type: String,
  },
  price: {
    type: String,
  },
  payment_id: {
    type: String,
  },
  package_name: {
    type: String,
  },
});

const Payment = model("payment", PaymentSchema);

module.exports = Payment;
