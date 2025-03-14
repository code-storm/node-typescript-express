import mongoose, { Document, Schema } from 'mongoose';

// Interface to define user document structure
export interface IDocument extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    status: "ACTIVE" | "INACTIVE";
    type: "ADMIN" | "USER";
    createdAt: Date;
    updatedAt: Date;
}

// Create the schema
const userSchema = new Schema<IDocument>({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
    type: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    }
}, {
    timestamps: true
});

// Create and export the model
export const model = mongoose.model<IDocument>('User', userSchema);