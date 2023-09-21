import Joi from 'joi';

const createShopSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  // TODO: Add more validation rules for other fields
});

export default createShopSchema
