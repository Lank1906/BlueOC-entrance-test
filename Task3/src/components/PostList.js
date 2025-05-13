import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost, setEditingPost } from '../features/postsSlice';

const PostList = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state.posts);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const postsPerPage = 5;

    useEffect(() => {
        if (status === 'idle') dispatch(fetchPosts());
    }, [status, dispatch]);

    const filteredPosts = items.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handleDelete = id => dispatch(deletePost(id));
    const handleEdit = post => dispatch(setEditingPost(post));

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    return (
        <div>
            <h2>Posts</h2>

            <input
                type="text"
                placeholder="Search by title or body..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
            />

            {currentPosts.map(post => (
                <div key={post.id} className="post-card">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                    <button onClick={() => handleEdit(post)}>Edit</button>
                </div>
            ))}

            <div className="simple-pagination">
                <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default PostList;
