import '../assets/styles/Projects.css'
import IconsFade from '../components/IconsFade'
import Icons from '../components/Icons'
import { faArrowTurnRight, faVideo } from '@fortawesome/free-solid-svg-icons'
import demoEducateur from '../assets/videos/Demo educateur.mp4'
import demoFamille from '../assets/videos/Demo famille.mp4'

function Projects() {
  return (
    <div className='projects-container'>
        <div className='projects-content-container'>
            <h1>Mes projets</h1>
            <div>
                <p>
                    <IconsFade icon={faArrowTurnRight}/> Feecare: Réseau social privé proposant en plus, une gestion de 
                    prise de rendez-vous. Il comporte deux interfaces différentes. D'un côté, on a des éducateurs qui peuvent promouvoir 
                    des évènements via des posts et qui peuvent gérer leurs rendez-vous avec des familles (Liste de rendez-vous, mise à 
                    jour des créneaux de disponibilité). De l'autre, on a des comptes de familles qui peuvent réagir aux posts 
                    (liker, commenter) et prendre RDV avec leurs éducateurs, en fonction des 
                    disponibilités de ceux-ci. Cette application, développée en Symfony/PostGreSQL côté back-end et javaScript 
                    natif/BootStrap côté front-end, était pour le compte d'un projet de fin de cours en faculté.
                    Le projet n'est pas hébergé en ligne. Explorez les démos des deux interfaces ci-dessous ou accédez au code source 
                    sur mon github : https://github.com/rivalence
                </p>

                <div className='video-container'>
                    <div className='video-content'>
                        <p className='video-title'><Icons icon={faVideo} /> Interface Educateur</p>
                        <video controls width="400" height="250" src={demoEducateur}>
                            <source src={demoEducateur} type='video/mp4'/>
                        </video>
                    </div>

                    <div className='video-content'>
                        <p className='video-title'><Icons icon={faVideo} /> Interface Famille</p>
                        <video controls width="400" height="250" src={demoFamille}>
                            <source src={demoFamille} type='video/mp4'/>
                        </video>
                    </div>    
                </div>    
            </div>

            <div>
                <p>
                    <IconsFade icon={faArrowTurnRight}/> Codexia : Jeu mobile d'énigmes (Android et iOS), en cours de développement. Il 
                    sera très prochainement disponible. Github:  https://github.com/rivalence/codexia
                </p>
            </div>    
        </div>
    </div>
  )
}

export default Projects