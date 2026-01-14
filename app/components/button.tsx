export default function Button({ texto, onClick }: { texto: string, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition-opacity"
    >
      {texto}
    </button>
  )
}