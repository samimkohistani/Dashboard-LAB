// we are importing all the compoent and our css 
import './App.css';
import Sidebar from "./components/sidebar";
import Reviews from "./components/reviews";
import Rating from "./components/average-rating";
import Sentiment from "./components/sentiment-analysis";
import Visitors from "./components/web-visitors";

// we are calling for our components in our app
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

// this will set our page to be able to imort in different pages components and app.js 
export default App;