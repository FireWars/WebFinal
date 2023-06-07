import CardMusica from '@/Components/CardMusica';
import Header from '@/Components/Header';
import SecaoMusicas from '@/Components/SecaoMusicas';
import Titulo from '@/Components/Titulo';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [musicas, setMusicas] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ae0e3099c4mshafb361d18631148p19cd5cjsnb394b21bd634',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    const fetchMusic = async () => {
      fetch('https://deezerdevs-deezer.p.rapidapi.com/album/302127', options)
        .then(response => response.json())
        .then(data => setMusicas(data))
        .catch(err => console.error(err));
    }
    fetchMusic();
  }, [])
 
  return (
    <>
      
      <Header />
      
      <div className='relative'>
        <div>
          <img className='h-72 brightness-10 object-cover w-screen' src='https://cdn.discordapp.com/attachments/1026632294041133111/1112817292531748964/4566888.jpg' />
        </div>
      </div>

      <main className={`flex m-5 min-h-screen flex-col justify-between px-24 ${inter.className}`}>
      <div className='flex w-96 rounded bg-white'>
        <input
          className="w-full font-bold bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
          type="search"
          name="search"
          id="search"
          placeholder="Search"
        />

        <button className='m-2 rounded bg-teal-800 px-4 py-4 text-white'>
          Search
        </button>
      </div>

        <Titulo>Melhores Álbuns de 2022</Titulo>
        <div className='flex'>
          <SecaoMusicas musicas={musicas} />
        </div>

        <Titulo>Musicas em alta</Titulo>

        <Titulo>Álbuns em alta</Titulo>

        <Titulo>Lançamentos</Titulo>
      </main>
    </>
  );
}