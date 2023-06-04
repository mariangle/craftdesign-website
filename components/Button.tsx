interface ButtonsProps {
    style: "services" | "hero"
    fullWidth?: boolean
    children: React.ReactNode
}

const Button: React.FC<ButtonsProps> = ({ style, children, fullWidth }) => {
  return (
    <button
    className={`px-4 py-2 shadow-lg
        ${style === "services" ? "bg-midnight_blue text-gray-300 hover:text-white hover:scale-105 transition-all" : ""} 
        ${style === "hero" ? "bg-blue-600 text-white" : ""} 
        ${fullWidth ? "w-full" : ""}`}
    >
    {children}
    </button>
  )
}

export default Button