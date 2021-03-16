import mongoose, { Schema, Document } from 'mongoose'

export interface IWebsite extends Document {
  user: string;
  name: string;
  url: string;
}

export const WebsiteSchema: Schema = new Schema({
  user: { type: [mongoose.Schema.Types.ObjectId], ref: 'Users', required: true },
  name: { type: String, required: true },
  url: { type: String, required: true }
})

export default mongoose.model<IWebsite>("Websites", WebsiteSchema)