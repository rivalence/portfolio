import '../assets/styles/Contact.css'
import IconsFade from '../components/IconsFade'
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className='contact-container'>
        <div className='contact-content-container'>
            <h1>Contactez-moi !</h1>
            <div className='contact-list'>
                <div className='flex-contact-list'>
                    <div className='flex-contact-list-title'>
                        <div><IconsFade icon={faArrowTurnRight} /></div>
                        <p className='contact-title-item'>Adresse</p>
                    </div>
                    <p style={{ textAlign: 'center' }}>24 Avenue Malausséna, 06000 Nice</p>
                </div>
                
                <div className='flex-contact-list'>
                    <div className='flex-contact-list-title'>
                        <div><IconsFade icon={faArrowTurnRight} /></div>
                        <p className='contact-title-item'>Email</p>
                    </div>
                    <p style={{ textAlign: 'center' }}>rickndelo@gmail.com</p>
                </div>
                
                <div className='flex-contact-list'>
                    <div className='flex-contact-list-title'>
                        <div><IconsFade icon={faArrowTurnRight} /></div>
                        <p className='contact-title-item'>Téléphone</p>
                    </div>
                    <p style={{ textAlign: 'center' }}>0649749606</p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Contact