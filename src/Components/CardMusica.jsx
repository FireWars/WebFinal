import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function CardMusica({ musica }) {
  const [favorito, setFavorito] = useState(false)
  const cover = "https://api.deezer.com/album/302127/image" + musica.cover_path
  return (
    <div className='flex flex-col p-3 w-56'>
      <div className='relative'>
        {
          favorito ?
            <FavoriteIcon className='absolute right-3 top-2 cursor-pointer text-red-600' onClick={() => setFavorito(false)} /> :
            <FavoriteBorderIcon className='absolute right-3 top-2 cursor-pointer text-rose-600' onClick={() => setFavorito(true)} />
        }

        <img className='rounded-lg' src={cover}></img>
      </div>
      <h4 className='text-xl my-2 line-clamp-1 w-fit'>{musica.title}</h4>

      <div className="flex justify-center items-center">
        <StarIcon className='text-ambar-400' />
        <span className='text-lg'>{musica.artist}</span>
      </div>
      <a href='#' className='rounded-lg bg-cyan-700 py-2  text-center'>Detalhes</a>
    </div>
  )
}