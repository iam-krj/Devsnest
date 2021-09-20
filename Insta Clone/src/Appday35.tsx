import "./Styleday35.css";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="landing">
        <div className="content">
          <Stories />
          <Posts />
        
    </div>
  );
};

export default App;