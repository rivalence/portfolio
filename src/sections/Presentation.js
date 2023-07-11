import '../assets/styles/Presentation.css'
import photo1 from '../assets/images/Ma photo 1.JPG'

export default function Presentation () {
    return( 
        <div className="presentation-container">
            <div className='div1'>
                <h1 className="presentation-title">Bienvenue sur mon portfolio en ligne</h1>
                <h3 className='h3-presentation'>Rick NDELO | Développeur Full Stack</h3>
            </div>

            <div className='div2'>
                <img src={photo1} alt='Rick NDELO'/>
            </div> 
        </div>
    )
}