const Payment = require("../../models/payment");

const AddPayment =  async(req, res)=>{

    const paymentDetails = req.body;

    const doc = {
        user_name: paymentDetails.user_name,
        user_email: paymentDetails.user_email,
        price: paymentDetails.price,
        payment_id: paymentDetails.payment_id,
        package_name: paymentDetails.package_name,
        
    }
    const result = await Payment.create(doc)
    res.send(result)
}

module.exports = AddPayment