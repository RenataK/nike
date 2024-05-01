const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth, url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };
  
  return (
    <button onClick={handleClick} className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ?  `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-red'
        } rounded-full ${fullWidth && 'w-full'}`}>
      {label}
      {iconURL && <img 
        src={iconURL} 
        alt="arrow right"
        className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  )
}

export default Button
