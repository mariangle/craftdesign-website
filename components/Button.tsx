interface ButtonsProps {
    style: "services"
    fullWidth?: boolean
    children: React.ReactNode
}

const Button: React.FC<ButtonsProps> = ({ style, children, fullWidth }) => {
  return (
    <button
    className={`px-4 py-2 
        ${style === "services" ? "bg-gray-800 text-gray-400" : ""} 
        ${fullWidth ? "w-full" : ""}`}
    >
    {children}
    </button>
  )
}

export default Button