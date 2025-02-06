import { Document, model, models, Schema } from "mongoose";



export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicID: string;
    secureURL: string;
    width?: number;
    height?: number;
    config?: object;
    tranformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: { _ud: string; firstName: string; lastName: string; };
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicID: { type: String, required: true },
    secureURL: { type: String, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    tranformationUrl: { type: URL },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Image = models?.Image || model("Image", ImageSchema);

export default Image