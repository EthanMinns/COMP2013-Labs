import ResortCardContainer from "./components/resort-card-container"
import listings from "./data/data"
import "./app.css"

function App() {
  return (
    <div className="app">
      <h1>Resorts Lite</h1>
      <div className="outerContainer">
        <ResortCardContainer data={listings} />
      </div>
    </div>
  )
}

export default App
