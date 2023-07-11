import '../assets/styles/AboutMe.css'
import photo2 from '../assets/images/Ma photo 2.jpg'

export default function AboutMe() {
    return (
        <div className='about-me-container'>
            <div>
                <img src={photo2} alt='Rick NDELO'/>
            </div>

            <div className='about-me-text'>
                <h1>Qui suis-je ?</h1>
                <h3 className='h3-about-me'>
                    Je suis Rick NDELO. Je me forme actuellement à la 3W Academy afin d'obtenir la qualification de 
                    Concepteur Développeur d'Applications. A cet effet, je recherche une entreprise d'accueil pour une alternance de 
                    12 mois avec un rythme de 3 semaines en entreprise et 1 semaine en cours.
                </h3>
            </div>
        </div>
    )
}