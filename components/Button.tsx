interface ButtonsProps {
    style: "services" | "hero"
    fullWidth?: boolean
    children: React.ReactNode
}

const Button: React.FC<ButtonsProps> = ({ style, children, fullWidth }) => {
  return (
    <button
    className={`px-4 py-2
        ${style === "services" ? "bg-gray-800 text-gray-400" : ""} 
        ${style === "hero" ? "bg-blue-600 text-white" : ""} 
        ${fullWidth ? "w-full" : ""}`}
    >
    {children}
    </button>
  )
}

export default Button