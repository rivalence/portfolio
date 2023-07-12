import IconsFade from '../components/IconsFade'
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons'

function Parcours() {
  return (
    <div className='w-9/12 pt-16 flex justify-center'>
        <div className='border border-black rounded-lg bg-orange-100 p-8 w-full'>
            <h1 className='font-medium'>Mon parcours</h1><hr className='border-gray-400 pb-4' />
            
            <h2>Formations</h2>
            <ul>
                <li>
                    <IconsFade icon={faArrowTurnRight} /> Licence informatique à la Faculté de sciences de Nice (UCA) | 2020 - 2022
                </li>
                <li>
                    <IconsFade icon={faArrowTurnRight} /> Formation CDA à la 3W Academy | 2023 - Maintenant
                </li>
            </ul>

            <h2 className='pt-4'>Expérience professionnelle</h2>
            <ul>
                <li>
                    <IconsFade icon={faArrowTurnRight} /> Stagiaire informatique au PMUG(Gabon) | Mars 2020 - Mai 2020
                </li>
                <li>
                    <IconsFade icon={faArrowTurnRight} /> Développeur full stack indépendant | 2023
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Parcours