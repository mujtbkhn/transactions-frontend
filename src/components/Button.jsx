export function Button({label, onClick}) {
    return <button onClick={onClick} type="button" className="px-5 mt-2 md:mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg md:text-sm text-xs	 py-2 md:py-2.5 me-2 mb-2">{label}</button>
}