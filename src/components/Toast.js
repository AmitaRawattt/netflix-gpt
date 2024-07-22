const Toast=({errMsg})=>{
    // console.log(errMsg,"err");
    return(
        <div class="toast bg-red-500 text-white px-6 py-4 rounded shadow-md flex items-center">
        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <span>{errMsg}!</span>
      </div>
    )
}
export default Toast;