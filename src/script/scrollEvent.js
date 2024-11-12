
document.addEventListener("DOMContentLoaded", function () {
    const logosect = document.getElementById("logoSection")

    window.addEventListener("load", () => {
        loader.classList.add('hidden', 'bg-transparent');

        if(window.screenY > 50){
            logosect.classList.add("translate-y-0", "scale-100")
            logosect.classList.remove("translate-y-3", "scale-110")
        }
    })

    window.addEventListener("scroll",  function(){
        if(window.scrollY > 50){

            logosect.classList.add("translate-y-0", "scale-100")
            logosect.classList.remove("translate-y-3", "scale-110")
        }
        else{
            logosect.classList.add("translate-y-3", "scale-110")
            logosect.classList.remove("translate-y-0", "scale-100")
        }
    })
})

