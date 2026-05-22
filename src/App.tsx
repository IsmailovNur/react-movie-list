import './App.css';
import MovieApp from "./containers/MovieApp/MovieApp.tsx";
import JokesApi from "./containers/JokesApi/JokesApi.tsx";

const App = () => {

  return (
    <div className="App">
      <div className="container">
        <MovieApp />
        <JokesApi />
      </div>
    </div>
  )
}

export default App;
