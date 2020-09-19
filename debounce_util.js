const debounce = (cb, wait = 400) => {
    let startTimeout = false 
    let currArgs = null  
    return function() {
        currArgs = arguments 
        if (!startTimeout) {
            startTimeout = true 
            setTimeout(() => {
                cb.apply(null, currArgs)
                startTimeout = false 
            }, wait)
        }
    }
}

if (module) {
    module.exports = {
        debounce 
    }
}