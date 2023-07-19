const NavigationButton = ({buttons}) => {
  return (
    <div className={`grid grid-cols-${buttons.length} border-b border-gray-400`}>
        {
            buttons.map(button =>
                <button
                    key={button.name}
                    className={button.state ? "border border-gray-200 bg-orange-200 rounded" : "hover:bg-orange-200"}
                    onClick={button.method}
                >
                    <h2 className='text-center'>{button.name}</h2>
                </button>
            )     
        }
    </div>
  )
}

export default NavigationButton