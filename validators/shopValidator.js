import Joi from 'joi';

const createShopSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  // Add more validation rules for other fields
});

export default createShopSchema
