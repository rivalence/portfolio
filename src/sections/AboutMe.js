import photo2 from '../assets/images/Ma photo 2.jpg'
import libraryIcon from '../assets/icones/icons8-bibliothèque-64.png'
import footballIcon from '../assets/icones/icons8-football-94.png'
import guitaristIcon from '../assets/icones/icons8-guitarist-96.png'

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
                </p><br />
                <h2 className='text-center'>CENTRES D'INTERÊT</h2>

                {/* Cadre de centres d'intérets */}
                <div className='flex flex-col items-center gap-y-4'>
                    <div className='border border-gray-400 rounded p-2'>
                        <div className='flex justify-center'><img src={libraryIcon} alt='Library' className='w-15 h-10'/></div>
                        <div className='mt-4'>
                            <p>Particulièrement fan de littérature japonaise. Les "mangas" me permettent de décompresser et la lecture
                                en général est source d'inspiration, rien de plus bénéfique pour un développeur !
                            </p>
                        </div>
                    </div>
                    <div className='border border-gray-400 rounded p-2'>
                        <div className='flex justify-center'><img src={footballIcon} alt='Footballer' className='w-15 h-10'/></div>
                        <div className='mt-4'>
                            <p>
                                Le football est mon sport collectif favori et je le pratiquement régulièrement en club. L'esprit
                                d'équipe et les émotions qui en ressortent sont personnellement incroyables !
                            </p>
                        </div>
                    </div>
                    <div className='border border-gray-400 rounded p-2'>
                        <div className='flex justify-center'><img src={guitaristIcon} alt='Guitarist' className='w-15 h-10'/></div>
                        <div className='mt-4'>
                            <p>
                                La guitare, plus généralement la musique, est l'un de mes indispensables. Détente, inspiration, 
                                évasion... de quoi apaiser les moeurs !
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}