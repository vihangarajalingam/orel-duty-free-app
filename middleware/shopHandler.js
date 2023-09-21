import createShopSchema from "../validators/shopValidator.js";

const createShopHandler = (req, res) => {
  const { error } = createShopSchema.validate(req.body);

  if (error) {
    // Joi validation failed; send an error response
    return res.status(400).json({ error: error.details[0].message });;
  }

  // If validation passes, proceed with creating the shop
};

export default createShopHandler;
