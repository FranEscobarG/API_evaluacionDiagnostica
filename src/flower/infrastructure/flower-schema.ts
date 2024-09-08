import mongoose, { Schema, Document } from 'mongoose';
// import { Flower } from '../domain/flower';

export interface FlowerDocument extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  type: string;
  price: number;
  image: string;
}


const FlowerSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export const FlowerModel = mongoose.model<FlowerDocument>('flowers', FlowerSchema);