import libraryIcon from '../assets/icones/icons8-bibliothèque-64.png'
import footballIcon from '../assets/icones/icons8-football-94.png'
import guitaristIcon from '../assets/icones/icons8-guitarist-96.png'
import { useState } from 'react'
import NavigationButton from '../components/NavigationButton'

export default function AboutMe() {
    const [selfShow, setSelfShow] = useState(true)
    const [interetShow, setInteretShow] = useState(false)

    const displaySelf = () => {
        setSelfShow(true)
        setInteretShow(false)
    }

    const displayInteret = () => {
        setInteretShow(true)
        setSelfShow(false)
    }

    return (
        <div className='flex justify-center pt-6 w-full md:w-11/12'>
            <div className='border border-black bg-orange-100 p-4 rounded-lg'>
                <h1>Qui suis-je ?</h1><hr className='border-gray-400'/>

                {/* Container navigation */}
                <NavigationButton 
                    buttons={[
                        {
                            name: "Self",
                            method : displaySelf,
                            state : selfShow
                        },
                        {
                            name: "Centres d'intérêts",
                            method: displayInteret,
                            state: interetShow
                        }
                    ]}
                />

                {/* Self content  */}
                <div className={selfShow ? "block p-4" : "hidden"}>
                    <p className='pt-4'>
                        Je suis Rick NDELO. Je me forme actuellement à la 3W Academy afin d'obtenir la qualification de 
                        Concepteur Développeur d'Applications. A cet effet, je recherche une entreprise d'accueil, dans le département
                        des Alpes Maritimes, pour une alternance de 12 mois avec un rythme de 3 semaines en entreprise et 1 semaine en 
                        cours.
                    </p>
                </div>
                

                {/* Cadre de centres d'intérets */}
                <div className={interetShow ? "flex flex-row items-center gap-x-4 block p-4" : "hidden"}>
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