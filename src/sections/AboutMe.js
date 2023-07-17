import photo2 from '../assets/images/Ma photo 2.jpg'

export default function AboutMe() {
    return (
        <div className='flex flex-row pt-6 gap-x-4 md:gap-x-6 lg:gap-x-8 w-full md:w-11/12 lg:w-11/12'>
            <div className='flex items-center'>
                <img 
                    className='rounded-3xl w-30 h-40 md:w-40 md:h-55 lg:w-64 lg:h-64' 
                    src={photo2} 
                    alt='Rick NDELO'
                
                />
            </div>

            <div className='w-10/12 border border-black bg-orange-100 p-4 rounded-lg'>
                <h1>Qui suis-je ?</h1><hr className='border-gray-400'/>
                <p className='pt-4'>
                    Je suis Rick NDELO. Je me forme actuellement à la 3W Academy afin d'obtenir la qualification de 
                    Concepteur Développeur d'Applications. A cet effet, je recherche une entreprise d'accueil pour une alternance de 
                    12 mois avec un rythme de 3 semaines en entreprise et 1 semaine en cours.
                </p>
            </div>
        </div>
    )
}