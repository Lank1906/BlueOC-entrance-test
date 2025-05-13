import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './index.css';

const App = () => (
    <div>
        <h1>React Redux Posts App</h1>
        <div className="main-layout">
            <div className="left-column">
                <PostList />
            </div>
            <div className="right-column">
                <PostForm />
            </div>
        </div>
    </div>
);

export default App;
