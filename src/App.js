import "./App.css";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <PostForm />
      <hr />
      <Post />
    </div>
  );
}

export default App;
