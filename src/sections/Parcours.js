import IconsFade from '../components/IconsFade'
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons'

function Parcours() {
  return (
    <div className='w-full md:w-11/12 lg:w-11/12 pt-8 flex flex-col justify-center border border-black rounded-lg bg-orange-100 p-4 mt-8'>
        <h1>Mon parcours</h1><hr className='border-gray-400 pb-4' />
        
        <h2>Formations</h2>
        <ul>
            <li>
                <IconsFade icon={faArrowTurnRight} /> Licence informatique à la Faculté de sciences de Nice (UCA) | 2020 - 2022
            </li>
            <li>
                <IconsFade icon={faArrowTurnRight} /> Formation CDA à la 3W Academy | 2023 - Maintenant
            </li>
        </ul>

        <h2 className='pt-2'>Expériences professionnelles</h2>
        <ul>
            <li>
                <IconsFade icon={faArrowTurnRight} /> Stagiaire informatique au PMUG(Gabon) | Mars 2020 - Mai 2020
            </li>
            <li>
                <IconsFade icon={faArrowTurnRight} /> Développeur full stack indépendant | 2023 - Maintenant
            </li>
        </ul>
    </div>
  )
}

export default Parcours