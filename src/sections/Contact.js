import IconsFade from '../components/IconsFade'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className='w-full md:w-11/12 lg:w-11/12 flex flex-col p-4 mt-8 bg-orange-100 border border-black rounded-lg'>
        <h1 className='font-medium'>Contactez-moi !</h1><hr className='border-gray-500 pb-4' />
        <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-16 lg:gap-x-20 xl:gap-x-44 2xl:gap-x-60'>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div><IconsFade icon={faLocationDot} /></div>
                    <p className='font-bold mx-auto'>Région</p>
                </div>
                <p className='text-center'>Nice, Provence-Alpes-Côte D'azur</p>
            </div>
            
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div><IconsFade icon={faEnvelope} /></div>
                    <p className='font-bold mx-auto'>Email</p>
                </div>
                <p className='text-center'>rickndelo@gmail.com</p>
            </div>
            
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div><IconsFade icon={faPhone} /></div>
                    <p className='font-bold mx-auto min-w-max'>Téléphone</p>
                </div>
                <p className='text-center'>+33 (0)649749606</p>
            </div>
        </div>
    </div>
  )
}

export default Contact