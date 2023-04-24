const stripe = require("stripe")(
  "pk_test_51MxrX4SDC9hiqW4kd0qbsgftcBidRohYb8wdvdizSBTfzeT3rXpbtOZL7TYSvXetaJi4oaxrh1ZsxwWV7WLLuGSY00RxoLAQgO"
);

const checkOut = async (req, res, next) => {
  const username = req.body.username;
  const quantity = req.body.quantity;
  const price = req.body.price;
  try {
    const payment_session = await stripe.checkOut.session.create({
      customer: username,
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: price,
          quantity: quantity,
        },
      ],
      success_url: "",
      cancel_url: "",
    });
    req.session.id = username;
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createCustomer = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addCustomerCard = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const paymentCharges = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { checkOut, addCustomerCard, paymentCharges, createCustomer };
