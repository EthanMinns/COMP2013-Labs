import type { ResortListing } from "../data/data"

function ResortCard({ pic, country, location, rating, price }: ResortListing) {
  return (
    <div className="resortCard">
      <img src={pic} width={100} />
      <p className="countryTag"><b>{country}</b></p>
      <p className="locationTag"><i>{location}</i></p>
      <p style={{ color: rating >= 4 ? "green" : "red" }}>{rating + "★"}</p>
      <p className="priceTag">{"$" + price + "/night"}</p>
    </div>
  )
}

export default ResortCard 
