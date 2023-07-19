import IconsFade from '../components/IconsFade'
import Icons from '../components/Icons'
import { faArrowTurnRight, faVideo } from '@fortawesome/free-solid-svg-icons'
import demoEducateur from '../assets/videos/Demo educateur.mp4'
import demoFamille from '../assets/videos/Demo famille.mp4'
import NavigationButton from '../components/NavigationButton'
import { useState } from 'react'

function Projects() {
    const [feecareShow, setFeecareShow] = useState(true)
    const [codexiaShow, setCodexiaShow] = useState(false)

    const displayCodexia = () => {
        setCodexiaShow(true)
        setFeecareShow(false)
    }

    const displayFeecare = () => {
        setFeecareShow(true)
        setCodexiaShow(false)
    }

  return (
    <div className='w-full md:w-11/12 flex flex-col justify-center border border-black rounded-lg p-4 mt-8 bg-orange-100'>
        <h1 className='font-medium'>Mes projets</h1><hr className='border-gray-500 pb-4' />

        {/* Navigation's menu */}
        <NavigationButton 
            buttons={[
                {
                    name: "Feecare",
                    method: displayFeecare,
                    state: feecareShow
                },
                {
                    name: "Codexia",
                    method: displayCodexia,
                    state: codexiaShow
                }
            ]}
        />

        <div className={feecareShow ? "block p-4" : "hidden"}>
            <p>
                <IconsFade icon={faArrowTurnRight}/> Feecare est un réseau social privé proposant en plus, une gestion de 
                prise de rendez-vous. Il comporte deux interfaces différentes. D'un côté, on a des éducateurs qui peuvent promouvoir 
                des évènements via des posts et qui peuvent gérer leurs rendez-vous avec des familles (Liste de rendez-vous, mise à 
                jour des créneaux de disponibilité). De l'autre, on a des comptes de familles qui peuvent réagir aux posts 
                (liker, commenter) et prendre RDV avec leurs éducateurs, en fonction des 
                disponibilités de ceux-ci. 
                <br/><br/>• Cette application, développée en Symfony/PostGreSQL côté back-end et javaScript 
                natif/BootStrap côté front-end, était pour le compte d'un projet de fin de cours en faculté.
                Le projet n'est pas hébergé en ligne. Explorez les démos des deux interfaces ci-dessous ou accédez au code source 
                sur mon github : <a className='hover:text-sky-700' href='https://github.com/rivalence/feecare'>https://github.com/rivalence/feecare</a>
            </p>

            <div className='flex flex-col md:flex-row md:gap-x-8 justify-center'>
                <div>
                    <p className='pt-8 font-medium pb-4'><Icons icon={faVideo} /> Interface Educateur</p>
                    <video controls width="400" height="250" src={demoEducateur} className='items-end'>
                        <source src={demoEducateur} type='video/mp4'/>
                    </video>
                </div>

                <div>
                    <p className='pt-8 font-medium pb-4'><Icons icon={faVideo} /> Interface Famille</p>
                    <div className='flex items-end'>
                        <video controls width="400" height="250" src={demoFamille} >
                            <source src={demoFamille} type='video/mp4'/>
                        </video>
                    </div>
                    
                </div>    
            </div>    
        </div>

        <div className={codexiaShow ? "block p-4" : "hidden"}>
            <p>
                <IconsFade icon={faArrowTurnRight}/> Codexia est un jeu mobile d'énigmes (Android et iOS), en cours de développement. Il 
                sera très prochainement disponible.
                <br/><br/>• Stack technique: React Native, MongoDB.
                <br/>• Accédez au repositorie sur Github:  <a className='hover:text-sky-700' href='https://github.com/rivalence/codexia'>
                    https://github.com/rivalence/codexia</a>
            </p>
        </div>   
    </div>
  )
}

export default Projects