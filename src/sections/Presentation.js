import photo1 from '../assets/images/Ma photo 1.JPG'

export default function Presentation () {
    return( 
        <div 
            className="
                flex flex-row 
                gap-x-4 md:gap-x-6 lg:gap-x-8 
                w-full md:w-11/12 lg:w-11/12
                "
        >
            <div className='w-10/12 border border-black rounded-lg bg-orange-100 p-4'>
                <h1 className='font-bold'>Bienvenue sur mon portfolio en ligne</h1>
                <h2 className='text-center pt-4 border border-black rounded-lg w-full pb-3 mt-4'>
                    Rick NDELO | Développeur Full Stack
                </h2>
            </div>

            <div className='flex justify-center items-center'>
                <img className='rounded-3xl w-30 h-40 md:w-50 md:h-60 lg:w-60 lg:h-80' src={photo1} alt='Rick NDELO'/>
            </div> 
        </div>
    )
}