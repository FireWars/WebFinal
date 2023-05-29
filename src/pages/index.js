import CardFilme from '@/Components/CardFilme'
import Header from '@/Components/Header'
import SecaoFilmes from '@/Components/SecaoFilmes'
import Titulo from '@/Components/Titulo'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })
const filmes = [
  {
    titulo: "B-Day",
    nota: "8.9",
    poster: "https://i.discogs.com/cikW5GiNVKJZLGzduliGmhjxdHNpOj7UX9SNZb_x3Qc/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc3ODU5/OS0xNDE0MzU0Mjc4/LTg3OTMuanBlZw.jpeg"
  },
  {
    titulo: "Superman Returns",
    nota: "6.7",
    poster: "https://i.discogs.com/E1NnEaJM5A_tB8UYxHzHHK81c36hZKE7A0gRNLEvt98/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzQ3/NDU4LTE0OTU4OTY1/ODctMTI5My5qcGVn.jpeg"
  },
  {
    titulo: "Me ama/mama",
    nota: "10,0",
    poster: "https://i.discogs.com/zApTq8Nmc2bKFinwFR-_dqnTpkVuwEqBcrUnFyaWDgI/rs:fit/g:sm/q:90/h:170/w:170/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4ODQx/MjItMTQyODcxNjE5/MS0yODIyLmpwZWc.jpeg"
  },
  {
    titulo: "PAblo Honey",
    nota: "3.7",
    poster: "https://i.discogs.com/Y734zQvVbXxI4HzRykyCn2CA-T8Fvb1LQHpFp1IE3h8/rs:fit/g:sm/q:90/h:589/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyNTU0/Mi0xMjU4NDIxNjAz/LmpwZWc.jpeg"
  }
]
export default function Home() {
  return (
    <>
      <Header/>

      <div>
        <img className=' h-72 brightness-10 object-cover w-screen' src='https://i.discogs.com/XfU3ucPf4ntvb9BRZAJkH35CuKCt6QkW-9YqbKRvR8M/rs:fit/g:sm/q:90/h:388/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTUyODM1/LTE2NTkwNDE5NjQt/MjYxMS5qcGVn.jpeg'></img>
      </div>

      <main
        className={`bg-gray-600 flex min-h-screen flex-col justify-between px-24 ${inter.className}`}
      >
        <Titulo>Musicas em alta</Titulo>
        <div className='flex'>
          <SecaoFilmes filmes={filmes} />
        </div>

        <Titulo>Melhores Álbuns de 2022</Titulo>

        <Titulo>Álbuns em alta</Titulo>

        <Titulo>Lançamentos</Titulo>

      </main>//JSX
    </>
  )
}
