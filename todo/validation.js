import joi from 'joi';

export const  userSchema = joi.object({
    title : joi.string().min(3).max(25).required(),
    description : joi.string().max(255),
    status : joi.number().required()
})