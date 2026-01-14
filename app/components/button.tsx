export default function Button({ 
  texto, 
  onClick, 
  variant = "default" 
}: { 
  texto: string
  onClick?: () => void
  variant?: "default" | "danger"
}) {
  const estiloBase = "px-6 py-3 rounded-lg font-medium hover:opacity-80 transition-opacity"
  
  const estilos = {
    default: "bg-black dark:bg-white text-white dark:text-black",
    danger: "bg-red-600 dark:bg-red-500 text-white"
  }
  
  return (
    <button 
      onClick={onClick}
      className={`${estiloBase} ${estilos[variant]}`}
    >
      {texto}
    </button>
  )
}