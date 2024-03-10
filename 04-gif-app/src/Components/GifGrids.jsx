import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrids = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category );


  return (
    <>
      <h1>{category}</h1>
      
      {
        isLoading && (<h2>Cargando...</h2>) 
      }
      
      <div className='card-grid'>
        { images.map((img) => (
          <GifItem 
            key={img.id}
            {...img}
          />
        ))}
        
      </div>
      
    </>
  );
};
