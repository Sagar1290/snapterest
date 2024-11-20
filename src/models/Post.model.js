import mongoose from "mongoose";

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
            ref: 'User'
        },
        likedAt: {
            type: Date,
            default: Date.now
        }
    }],    
    commentedBy:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
}, { timestamps: true })

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;