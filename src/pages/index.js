import CardFilme from '@/Components/CardFilme'
import Header from '@/Components/Header'
import SecaoFilmes from '@/Components/SecaoFilmes'
import Titulo from '@/Components/Titulo'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })
const filmes = [
  {
    titulo: "MOTOMAMI",
    nota: "8.9",
    poster: "https://cdn.discordapp.com/attachments/1026632294041133111/1112825342848139355/4.png"
  },
  {
    titulo: "MR. MORALE & THE BIG STEPPERS",
    nota: "9.7",
    poster: "https://cdn.discordapp.com/attachments/1026632294041133111/1112825344022544384/2.png"
  },
  {
    titulo: "RENAISSANCE",
    nota: "10,0",
    poster: "https://cdn.discordapp.com/attachments/1026632294041133111/1112826480146260098/Design_sem_nome.png"
  },
  {
    titulo: "MIDNIGHTS",
    nota: "8.7",
    poster: "https://cdn.discordapp.com/attachments/1026632294041133111/1112825342483238922/3.png"
  }
]
export default function Home() {
  return (
    <>
      <Header />

      <div>
        <img className='h-72 brightness-10 object-cover w-screen' src='https://cdn.discordapp.com/attachments/1026632294041133111/1112817292531748964/4566888.jpg'></img>
      </div>

      <main
        className={`flex m-5 min-h-screen flex-col justify-between px-24  ${inter.className}`}
      >
        <Titulo>Melhores Álbuns de 2022</Titulo>
        <div className='flex'>
          <SecaoFilmes filmes={filmes} />
        </div>

        <Titulo>Musicas em alta</Titulo>

        <Titulo>Álbuns em alta</Titulo>

        <Titulo>Lançamentos</Titulo>

      </main>//JSX
    </>
  )
}
