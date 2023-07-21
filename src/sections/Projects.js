import NavigationButton from '../components/NavigationButton'
import { useState, useEffect } from 'react'
import { projects } from '../Datas/projects'

function Projects() {
    const [feecareShow, setFeecareShow] = useState(true)
    const [codexiaShow, setCodexiaShow] = useState(false)
    const [awaleShow, setAwaleShow] = useState(false)
    const [descriptionProjectShow, setDescriptionProjectShow] = useState(true)
    const [demoProjectShow, setDemoProjectShow] = useState(false)

    useEffect(() => {
        setDescriptionProjectShow(true)
        setDemoProjectShow(false)
    }, [feecareShow, codexiaShow, awaleShow])

    const displayCodexia = () => {
        setCodexiaShow(true)
        setFeecareShow(false)
        setAwaleShow(false)
    }

    const displayFeecare = () => {
        setFeecareShow(true)
        setCodexiaShow(false)
        setAwaleShow(false)
    }

    const displayAwale = () => {
        setAwaleShow(true)
        setCodexiaShow(false)
        setFeecareShow(false)
    }

    const displayDescription = () => {
        setDescriptionProjectShow(true)
        setDemoProjectShow(false)
    }

    const displayDemo = () => {
        setDemoProjectShow(true)
        setDescriptionProjectShow(false)
    }

    // MES DONNEES DE PROJETS AVEC LES STATE D'AFFICHAGE
    const states = [feecareShow, codexiaShow, awaleShow]    
    const projectsWithDisplayState = projects.map(project => (
      {
        display: states.shift(),
        project: project
      }  
    ))

    console.log(projectsWithDisplayState);
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
                },
                {
                    name: "Awalé",
                    method: displayAwale,
                    state: awaleShow
                }
            ]}
        />

        {/* BLOCK FEECARE  */}
        {
            projectsWithDisplayState.map(project => {
                if(project.project.containDemo) {
                    return(
                        <div className={project.display ? "block p-4" : "hidden"}>
                            {/* NAVIGATION ENTRE DEMO ET DESCRIPTION  */}
                            <NavigationButton 
                                buttons={[
                                    {
                                        name: "Description",
                                        method: displayDescription,
                                        state: descriptionProjectShow
                                    },
                                    {
                                        name: "Demo",
                                        method: displayDemo,
                                        state: demoProjectShow
                                    }
                                ]}
                            />

                            <div className={descriptionProjectShow ? "block p-4" : "hidden"}>
                                {<project.project.description />}
                            </div>
                            <div className={demoProjectShow ? 'block p-4' : 'hidden'}>
                                {<project.project.demoContent />}
                            </div>
                        </div>
                    )
                }
                
                // SI LE PROJET NE CONTIENT PAS DE DEMO 
                return (
                <div className={project.display ? "block p-4" : "hidden"}>
                    {<project.project.description />}
                </div>
                )
            })
        }
    </div>
  )
}

export default Projects