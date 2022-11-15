import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAavatarImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

/* interface HomeProps{
  count:number
} */

export default function Home() {

  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center'>
      <main className='max-w-[30.5rem]'>
        <Image src={logoImg} alt=" NLW Copa" />

        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className='mt-10 gap-2 flex items-center'>
          <Image src={usersAavatarImg} alt="" />
          <strong className='text-gray-100 text-xl'>
            <span className='text-ignite-500'> +12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form className='mt-10 flex gap-2' >
          <input className='w-[19.1rem] h-14 rounded-[4px] items-center p-6 text-sm bg-gray-800 border border-gray-200 text-gray-100'  type="text" required placeholder='Qual nome do seu bolão?' />
          <button className='w-[10.5rem] bg-yellow-500 rounded-[4px] text-sm font-bold' type='submit'>CRIAR MEU BOLÃO</button>
        </form>

        <span className='text-gray-100 text-sm flex mt-4'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</span>
        <div className='flex mt-10 border-t-[1px] justify-between'>
          <div className=' w-[100%] flex mt-10 gap-6  items-center'>
            <Image src={iconCheckImg} alt="" />
            <div >
              <span className='text-gray-50 font-bold text-2xl'>+2.034</span>
              <p className='text-gray-50  text-base'>Bolões criados </p>
            </div>
          </div>
          <div className='w-[100%] flex mt-10 gap-6 items-center justify-end  border-l-[1px]' >
            <Image src={iconCheckImg} alt="" />
            <div>
              <span  className='text-gray-50 font-bold text-2xl'>+192.847</span>
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

/*
export const getServerSideProps = async ()=>{
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json() 

  console.log(data)

  return{
    props:{
      count: data.count
    }
  }

}
*/
