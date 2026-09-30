import type { ResortListing } from "../data/data";
import ResortCard from "./resort-card";

export interface ResortCardContainerProps {
  data: ResortListing[]
}

function ResortCardContainer({ data }: ResortCardContainerProps) {
  return (
    <div className="resortCardContainer">
      {data.map((listing) => (
        <ResortCard key={listing.id} {...listing} />
      ))}
    </div>
  )
}

export default ResortCardContainer
