import mongoose from "mongoose";
import { User } from "@/models/User.model";
import { Comment } from "@/models/Comment.model";

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    caption: {
        type: String
    },
    likedBy: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            unique: true
        },
        likedAt: {
            type: Date,
            default: Date.now
        }
    }],
    tags: [{
        type: String,
        default: ["photography"]
    }]
}, { timestamps: true })

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;