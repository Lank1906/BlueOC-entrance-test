import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updatePost, clearEditingPost } from '../features/postsSlice';

const PostForm = () => {
    const dispatch = useDispatch();
    const editingPost = useSelector(state => state.posts.editingPost);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setBody(editingPost.body);
        } else {
            setTitle('');
            setBody('');
        }
    }, [editingPost]);

    const handleSubmit = e => {
        e.preventDefault();
        if (title && body) {
            if (editingPost) {
                dispatch(updatePost({ ...editingPost, title, body }));
            } else {
                dispatch(addPost({ userId: 999, id: Date.now(), title, body }));
            }
            setTitle('');
            setBody('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <h2>{editingPost ? 'Edit Post' : 'Add New Post'}</h2>
            <input 
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea 
                value={body}
                onChange={e => setBody(e.target.value)}
                placeholder="Body"
                style={{height:'300px'}}
                required
            />
            <button type="submit">{editingPost ? 'Update Post' : 'Add Post'}</button>
            {editingPost && <button type="button" onClick={() => dispatch(clearEditingPost())}>Cancel</button>}
        </form>
    );
};

export default PostForm;
