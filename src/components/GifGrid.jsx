import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-grid">
        {gifs.map((gif) => (
          //   <GifItem className="card" key={id} title={title} url={url} />
          // { ...gif } - lo que hace es exparsir todas las propiedades de 'gif' en el componente GifItem.
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
