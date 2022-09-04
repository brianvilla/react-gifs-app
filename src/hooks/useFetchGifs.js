import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getImages = async () => {
    const images = await getGifs(category);
    setGifs(images);
    setLoading(false);
  };

  useEffect(() => {
    // getGifs(category);
    getImages();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
