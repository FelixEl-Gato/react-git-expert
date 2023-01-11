import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GridGif = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(images, isLoading);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? <p>Loading...</p> : null}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
