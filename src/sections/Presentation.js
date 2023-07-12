import photo1 from '../assets/images/Ma photo 1.JPG'

export default function Presentation () {
    return( 
        <div className="flex flex-row gap-x-16 w-9/12">
            <div className='w-7/12 border border-black rounded-lg bg-orange-100 p-8'>
                <h1 className="font-bold">Bienvenue sur mon portfolio en ligne</h1>
                <h3 className='text-2xl text-center pt-4 border border-black rounded-lg w-9/12 pb-3 mt-4'>
                    Rick NDELO | Développeur Full Stack
                </h3>
            </div>

            <div className='flex justify-center items-center'>
                <img className='rounded-3xl w-80 h-90' src={photo1} alt='Rick NDELO'/>
            </div> 
        </div>
    )
}