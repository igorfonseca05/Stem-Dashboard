
function useDebounce () {
  const Mydebounce = (func, wait, immediate) => {
    let timeOut;
    return function (...args) {
        const context = this;
        const later = function () {
            timeOut = null;
            if (!immediate) func.apply(context, args)
        }

        const callNow = immediate && !timeOut
        clearTimeout(timeOut)
        timeOut = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }

}

      return {Mydebounce}
}

export default useDebounce