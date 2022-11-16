import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAavatarImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'
import { api } from '../lib/axios'
import { FormEvent, useState } from 'react'

interface HomeProps {
  poolCount: number
  guessesCount: number
  usersCount: number
}

export default function Home(props: HomeProps) {

  const [name, setName] = useState('')

  console.log(name)
  async function createPool(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await api.post('/pools', {
        title: name
      })

      const { code } = response.data

      await navigator.clipboard.writeText(code)
      alert('Bolão criado com sucesso, o código foi copiado para área de transferencia')
      setName('')
    } catch (error) {
      console.log(error)

      alert("Erro ao criar o Bolão, tente novamente!")
    }

  }

  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28'>
      <main className='max-w-[30.5rem]'>
        <Image src={logoImg} alt=" NLW Copa" />

        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className='mt-10 gap-2 flex items-center'>
          <Image src={usersAavatarImg} alt="" />
          <strong className='text-gray-100 text-xl'>
            <span className='text-ignite-500'> +{props.usersCount} </span> pessoas já estão usando
          </strong>
        </div>

        <form onSubmit={createPool} className='mt-10 flex gap-2' >
          <input className='flex-1 px-6 py-4 rounded items-center  text-sm bg-gray-800 border border-gray-600 text-gray-100'
            type="text"
            required
            placeholder='Qual nome do seu bolão?'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button className='px-6 py-4 bg-yellow-500 rounded items-center text-sm text-gray-900 font-bold hover:bg-yellow-700' type='submit'>CRIAR MEU BOLÃO</button>
        </form>

        <p className='text-gray-300 text-sm flex mt-4 leading-relaxed'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>

        <div className='flex mt-10 border-t border-gray-600  justify-between'>
          <div className='flex flex-1 mt-10 gap-6  items-center'>
            <Image src={iconCheckImg} alt="" />
            <div >
              <span className='text-gray-50 font-bold text-2xl'>+{props.poolCount} </span>
              <p className='text-gray-50  text-base'>Bolões criados </p>
            </div>
          </div>
          <div className='flex flex-1 mt-10 gap-6 items-center justify-end  border-l  border-gray-600 ' >
            <Image src={iconCheckImg} alt="" />
            <div>
              <span className='text-gray-50 font-bold text-2xl'>+{props.guessesCount} </span>
              <p className='text-gray-50  text-base'>Palpites enviados </p>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={appPreviewImg}
        quality={100}
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa" />

    </div>
  )
}


export const getServerSideProps = async () => {

  const [poolCountResponse, guessesCountResponse, usersCountResponse] = await Promise.all([
    api.get('/pools/count'),
    api.get('/guesses/count'),
    api.get('/users/count')
  ])



  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessesCount: guessesCountResponse.data.count,
      usersCount: usersCountResponse.data.count
    }
  }

}

