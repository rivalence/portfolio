import IconsFade from '../components/IconsFade'
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className='w-full md:w-10/12 lg:w-9/12 flex flex-col p-8 mt-8 md:mt-10 lg:mt-16 bg-orange-100 border border-black rounded-lg'>
        <h1 className='font-medium'>Contactez-moi !</h1><hr className='border-gray-500 pb-8' />
        <div className='flex gap-x-32'>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div><IconsFade icon={faArrowTurnRight} /></div>
                    <p className='font-medium mx-auto'>Adresse</p>
                </div>
                <p style={{ textAlign: 'center' }}>24 Avenue Malausséna, 06000 Nice</p>
            </div>
            
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div><IconsFade icon={faArrowTurnRight} /></div>
                    <p className='font-medium mx-auto'>Email</p>
                </div>
                <p style={{ textAlign: 'center' }}>rickndelo@gmail.com</p>
            </div>
            
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div><IconsFade icon={faArrowTurnRight} /></div>
                    <p className='font-medium mx-auto min-w-max'>Téléphone</p>
                </div>
                <p style={{ textAlign: 'center' }}>+33 (0)649749606</p>
            </div>
        </div>
    </div>
  )
}

export default Contact