const Razorpay = require("razorpay");
const { randomInt } = require("crypto");

exports.payment = async (req, res) => {
  try {
    const amount = req.params.amount;
  
    
    const razorpay = new Razorpay({
      key_id: 'rzp_test_AAnKi0nwmhTdF3',
      key_secret: 'TGIQ6d429yaBpSrWr3DjxDN',
    });
    
    const payment_capture = 1;
    const currency = "INR";
    
    const options = {
      amount: amount * 100,
      currency,
      receipt: randomInt(100000, 999999).toString(),
      payment_capture,
    };
    
    const response = await razorpay.orders.create(options);
    res.send(response);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).send("Error creating Razorpay order");
  }
};
