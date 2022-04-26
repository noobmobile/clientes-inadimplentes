import { Schema, Document, model, PaginateModel } from 'mongoose'
import paginate from 'mongoose-paginate-v2';

export interface IClient {
  name: string
  description: string
  image: string
}

export default interface IClientModel extends Document, IClient {}

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 6,
    },
    debt: {
      type: Number,
      required: true,
    },
    debtDate: {
      type: Date,
      required: true,
    },
  },
)

schema.plugin(paginate);

export const Client = model<IClientModel, PaginateModel<IClientModel>>('Client', schema)
