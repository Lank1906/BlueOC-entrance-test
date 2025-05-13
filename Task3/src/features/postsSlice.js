import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
            throw new Error('Invalid JSON format: Expected an array of posts');
        }

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred');
    }
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: { items: [], status: 'idle', editingPost: null },
    reducers: {
        addPost: (state, action) => {
            state.items.unshift(action.payload);
        },
        deletePost: (state, action) => {
            state.items = state.items.filter(post => post.id !== action.payload);
        },
        updatePost: (state, action) => {
            const index = state.items.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
            state.editingPost = null;
        },
        setEditingPost: (state, action) => {
            state.editingPost = action.payload;
        },
        clearEditingPost: (state) => {
            state.editingPost = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, state => { state.status = 'loading'; })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchPosts.rejected, state => { state.status = 'failed'; });
    },
});

export const { addPost, deletePost, updatePost, setEditingPost, clearEditingPost } = postsSlice.actions;
export default postsSlice.reducer;
