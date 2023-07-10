import Joi from "joi";

export const updateUserSchema = Joi.object({
  name: Joi.string().required(),
  dob: Joi.date().required(),
  address: Joi.string().required(),
  description: Joi.string().required(),
});
