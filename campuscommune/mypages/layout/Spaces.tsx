"use client";
import SpacesCollection from "./SpacesCollection";
import SpaceBar from "./SpaceBar";


// component for Sidebar quick access buttons
const Spaces = () => {

    return (
      <div className="md:flex hidden basis-1/5  flex-col gap-5" style={{minWidth: "200px"}}>
        <SpaceBar />
        <SpacesCollection />
      </div>
    );
}

export default Spaces;