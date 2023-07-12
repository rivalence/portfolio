import photo2 from '../assets/images/Ma photo 2.jpg'

export default function AboutMe() {
    return (
        <div className='flex flex-row pt-16 gap-x-16 w-9/12'>
            <div>
                <img className='rounded-3xl' src={photo2} alt='Rick NDELO'/>
            </div>

            <div className='w-9/12 border border-black bg-orange-100 p-8 rounded-lg'>
                <h1 className='font-medium pb-2'>Qui suis-je ?</h1><hr className='border-gray-400'/>
                <h3 className='text-xl pt-6'>
                    Je suis Rick NDELO. Je me forme actuellement à la 3W Academy afin d'obtenir la qualification de 
                    Concepteur Développeur d'Applications. A cet effet, je recherche une entreprise d'accueil pour une alternance de 
                    12 mois avec un rythme de 3 semaines en entreprise et 1 semaine en cours.
                </h3>
            </div>
        </div>
    )
}