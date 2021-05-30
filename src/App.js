import "./App.css";
import { Provider } from "react-redux";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello World</h1>
        <PostForm />
        <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
