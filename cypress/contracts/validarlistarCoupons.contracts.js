//import { clamp } from 'cypress/types/lodash'
import Joi from 'joi'

const validarlistarCouponsschema = Joi.object({
    "id": Joi.number(),
    "code": Joi.string(),
    "amount": Joi.string(),
    "date_created": Joi.string(),
    "date_created_gmt": Joi.string(),
    "date_modified": Joi.string(),
    "date_modified_gmt": Joi.string(),
    "discount_type": Joi.string(),
    "description": Joi.string(),
    "date_expires": Joi.string(),
    "date_expires_gmt": Joi.string(),
    "usage_count": Joi.number(),
    "individual_use": Joi.boolean,
    "product_ids": Joi.array().items(Joi.string()),
    "excluded_product_ids": Joi.array().items(Joi.string()),
    "usage_limit": Joi.string(),
    "usage_limit_per_user": Joi.string(),
    "limit_usage_to_x_items": Joi.string(),
    "free_shipping": Joi.boolean(),
    "product_categories": Joi.array().items(Joi.string()),
    "excluded_product_categories": Joi.array().items(Joi.string()),
    "exclude_sale_items": Joi.boolean,
    "minimum_amount": Joi.string(),
    "maximum_amount": Joi.string(),
    "email_restrictions": Joi.array().items(Joi.string()),
    "used_by": Joi.array().items(Joi.string()),
    "meta_data": Joi.array().items(Joi.string()),
    "_links": Joi.object({ 
        
    })
})
export default validarlistarCouponsschema