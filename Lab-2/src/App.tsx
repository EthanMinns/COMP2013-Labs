import ResortCardContainer from "./components/resort-card-container"
import listings from "./data/data"

function App() {
  return (
    <div>
      <h1>Resorts Lite</h1>
      <ResortCardContainer data={listings} />
    </div>
  )
}

export default App
