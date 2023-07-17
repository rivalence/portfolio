import IconsFade from '../components/IconsFade'
import Icons from '../components/Icons'
import { faArrowTurnRight, faVideo } from '@fortawesome/free-solid-svg-icons'
import demoEducateur from '../assets/videos/Demo educateur.mp4'
import demoFamille from '../assets/videos/Demo famille.mp4'

function Projects() {
  return (
    <div className='w-full md:w-10/12 lg:w-9/12 pt-16 flex justify-center'>
        <div className='border border-black rounded-lg p-8 bg-orange-100'>
            <h1 className='font-medium'>Mes projets</h1><hr className='border-gray-500 pb-8' />
            <div>
                <p>
                    <IconsFade icon={faArrowTurnRight}/> Feecare: Réseau social privé proposant en plus, une gestion de 
                    prise de rendez-vous. Il comporte deux interfaces différentes. D'un côté, on a des éducateurs qui peuvent promouvoir 
                    des évènements via des posts et qui peuvent gérer leurs rendez-vous avec des familles (Liste de rendez-vous, mise à 
                    jour des créneaux de disponibilité). De l'autre, on a des comptes de familles qui peuvent réagir aux posts 
                    (liker, commenter) et prendre RDV avec leurs éducateurs, en fonction des 
                    disponibilités de ceux-ci. 
                    <br/>•Cette application, développée en Symfony/PostGreSQL côté back-end et javaScript 
                    natif/BootStrap côté front-end, était pour le compte d'un projet de fin de cours en faculté.
                    Le projet n'est pas hébergé en ligne. Explorez les démos des deux interfaces ci-dessous ou accédez au code source 
                    sur mon github : <a className='hover:text-sky-700' href='https://github.com/rivalence/feecare'>https://github.com/rivalence/feecare</a>
                </p>

                <div className='flex flex-row gap-x-16 justify-center'>
                    <div>
                        <p className='pt-8 font-medium pb-4'><Icons icon={faVideo} /> Interface Educateur</p>
                        <video controls width="400" height="250" src={demoEducateur}>
                            <source src={demoEducateur} type='video/mp4'/>
                        </video>
                    </div>

                    <div>
                        <p className='pt-8 font-medium pb-4'><Icons icon={faVideo} /> Interface Famille</p>
                        <video controls width="400" height="250" src={demoFamille}>
                            <source src={demoFamille} type='video/mp4'/>
                        </video>
                    </div>    
                </div>    
            </div>

            <div className='pt-8'>
                <p>
                    <IconsFade icon={faArrowTurnRight}/> Codexia : Jeu mobile d'énigmes (Android et iOS), en cours de développement. Il 
                    sera très prochainement disponible.
                    <br/>•Stack technique: React Native, MongoDB.
                    <br/>•Accédez au repositorie sur Github:  <a className='hover:text-sky-700' href='https://github.com/rivalence/codexia'>
                        https://github.com/rivalence/codexia</a>
                </p>
            </div>    
        </div>
    </div>
  )
}

export default Projects