import { faArrowTurnRight, faVideo } from '@fortawesome/free-solid-svg-icons'
import demoEducateur from '../assets/videos/Demo educateur.mp4'
import demoFamille from '../assets/videos/Demo famille.mp4'
import IconsFade from '../components/IconsFade'
import Icons from '../components/Icons'
import debutJeuAwale from '../assets/videos/Début du jeu.mp4'
import moveIaAwale from "../assets/videos/Move intéressant de l'IA.mp4"
import jeLaiEu from "../assets/videos/Je l'ai eu.mp4"

const feecareDescription = () => (
    <p>
        <IconsFade icon={faArrowTurnRight}/> Feecare est un réseau social privé proposant en plus, une gestion de 
        prise de rendez-vous. Il comporte deux interfaces différentes. D'un côté, on a des éducateurs qui peuvent promouvoir 
        des évènements via des posts et qui peuvent gérer leurs rendez-vous avec des familles (Liste de rendez-vous, mise à 
        jour des créneaux de disponibilité). De l'autre, on a des comptes de familles qui peuvent réagir aux posts 
        (liker, commenter) et prendre RDV avec leurs éducateurs, en fonction des 
        disponibilités de ceux-ci. 
        <br/><br/> 
        <IconsFade icon={faArrowTurnRight}/> Cette application, développée en Symfony/PostGreSQL côté back-end et javaScript 
        natif/BootStrap côté front-end, était pour le compte d'un projet de fin de cours en faculté.
        Le projet n'est pas hébergé en ligne. Explorez les démos des deux interfaces ci-dessous ou accédez au code source 
        sur mon github : <a className='hover:text-sky-700' href='https://github.com/rivalence/feecare'>https://github.com/rivalence/feecare</a>
    </p>
)

const demoFeecare = () => (
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
)

const codexiaDescription = () => (
    <p>
        <IconsFade icon={faArrowTurnRight}/> Codexia est un jeu mobile d'énigmes (Android et iOS), en cours de développement. Il 
        sera très prochainement disponible.
        <br/><br/><IconsFade icon={faArrowTurnRight}/> Stack technique: React Native, MongoDB.
        <br/><IconsFade icon={faArrowTurnRight}/> Accédez au repositorie <a className='hover:text-sky-700' href='https://github.com/rivalence/codexia'>
        github ici</a>
    </p>
)

const awaleDescription = () => (
    <p>
        <IconsFade icon={faArrowTurnRight}/> Awalé est un jeu de société et de stratégie qui se joue à 2 joueurs. Initialement
            on a un plateau de 16 cases à l'horizontale (8 cases par joueur) contenant chacune 4 graines. NB: Le jeu original
            comporte 12 cases au total.
            <br/><br/><IconsFade icon={faArrowTurnRight}/> Le jeu se déroule entre un joueur et une IA qui implémente un minimax
            pour calculer ses coups. L'objectif est de capturer
            le maximum de graines. Le joueur doit prendre toutes les graines d'une de ses cases et en placer à chaque fois
            une graine dans la case qui suit(celle-ci pouvant être celle de l'adversaire) jusqu'à épuisement et suivant un sens de jeu(
            ici celui des aiguilles d'une montre). 
            <br/><br/><IconsFade icon={faArrowTurnRight}/> Règle fondamentale: lorsqu'un joueur finit son tour, on vérifie si la dernière
            graine posé est dans le camp adverse. Si oui, on vérifie si la case concernée par cette dernière graine comporte 2 ou 3 graines.
            Si oui, le joueur qui vient de finir son tour capture les graines de cette case et on vérifie sur les cases précédentes en
            appliquant la même règle. Vous trouverez les règles officielles <a className='hover:text-sky-700' 
            href='https://fondem.ong/awale-regles-du-jeu/'>via ce lien</a>. Le jeu s'arrête quand l'un des deux joueurs a moins de 8 graines.
            <br/><br/><IconsFade icon={faArrowTurnRight}/> Jeu entièrement développez en C. Accèdez au <a className='hover:text-sky-700' 
            href='https://github.com/rivalence/Awale'>code source github ici</a>.

    </p>
)

const demoAwale = () => (
    <div className='grid grid-row-3 grid-col-3 gap-y-4 lg:gap-x-8 justify-center p-4'>
        <div className=''>
            <p><Icons icon={faVideo} /> Début du jeu. J'essaie de le piéger mais ca défend bien !</p>
            <video controls width="400" height="400" src={debutJeuAwale}>
                <source src={debutJeuAwale} type='video/mp4'/>
            </video>
        </div>
        <div className='flex flex-col'>
            <div>
               <p><Icons icon={faVideo} /> Move intéressant de l'IA</p> 
            </div>
            <div className='lg:flex-1 lg:items-end'>
               <video controls width="400" height="400" src={moveIaAwale}>
                    <source src={moveIaAwale} type='video/mp4'/>
                </video> 
            </div>
            
        </div>
        <div className=''>
            <p><Icons icon={faVideo} /> Je l'ai eu !!</p>
            <video controls width="400" height="400" src={jeLaiEu}>
                <source src={jeLaiEu} type='video/mp4'/>
            </video>
        </div>
    </div>
)

export const projects = [
{
    description: feecareDescription,
    containDemo : true,
    demoContent : demoFeecare
},
{
    description: codexiaDescription,
    containDemo: false,
    demoContent: null
},
{
    description: awaleDescription,
    containDemo: true,
    demoContent: demoAwale
}]