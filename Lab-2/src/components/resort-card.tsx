import type { ResortListing } from "../data/data"

function ResortCard({ pic, country, location, rating, price }: ResortListing) {
  return (
    <div className="ResortCard">
      <img src={pic} />
      <p>{country}</p>
      <p>{location}</p>
      <p>{rating}</p>
      <p>{price}</p>
    </div>
  )
}

export default ResortCard 
