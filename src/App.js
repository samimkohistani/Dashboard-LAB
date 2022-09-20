import './App.css';
import Sidebar from "./components/sidebar";
import Reviews from "./components/reviews";
import Rating from "./components/average-rating";
import Sentiment from "./components/sentiment-analysis";
import Visitors from "./components/web-visitors";

function App() {
  return (
    <div className="dashboard">
      <Sidebar/>
      <Reviews/>
      <Rating/>
      <Sentiment/>
      <Visitors/>
    </div>
  );
};

export default App;