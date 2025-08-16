import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

const createNew = async (req, res, next) => {
  const cardSchema = Joi.object({
    boardId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
    title: Joi.string().required().min(3).max(50).trim().strict(),
    columnId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
  })
  try {
    await cardSchema.validateAsync(req.body, { abortEarly: false })
    next()
  }
  catch (error) {
    // next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, (error.massage)));
    // res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
    //     status: `${StatusCodes.UNPROCESSABLE_ENTITY}`,
    //     message: error.message,
    // });
    // next(error)
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

const update = async (req, res, next) => {
  const cardSchema = Joi.object({
    title: Joi.string().min(3).max(50).trim().strict(),
    description: Joi.string().optional()
  })
  try {
    await cardSchema.validateAsync(req.body, { abortEarly: false }, { allowUnknown: true })
    next()
  }
  catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

export const cardValidation = {
  createNew,
  update
}

