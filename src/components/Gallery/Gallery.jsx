import React, { useEffect, useState } from "react";
import Thumb from "./thumb/thumb";
import axios from "axios";

const Gallery = () => {


  const [galleryData, setGalleryData] = useState([]);

  const getData = () => {
    axios
      .get("/logements.json")
      .then((res) => setGalleryData(res.data));
  };

  useEffect(() => getData(), []);

  return (
    <div className="gallery">
      <ul>
        {galleryData.map((logement) => (
          <Thumb key={logement.id} logement={logement} />
        ))}
      </ul>
    </div>
  );

};

export default Gallery;
