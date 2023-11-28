const Payment = require("../../models/payment")


const SpecificPayment =  async(req, res)=>{
    
    const package = req.params.package
    const result = await Payment.find({ package_name : package })

    res.send(result)
}

module.exports = SpecificPayment