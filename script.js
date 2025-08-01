function GetRGB(){
            let val1 = Math.floor(Math.random()*256)
            let val2 = Math.floor(Math.random()*256)
            let val3 = Math.floor(Math.random()*256)
            return ` rgb(${val1},${val2},${val3})`
        }

document.querySelector(".button").addEventListener("click" , ()=>{
    document.body.style.backgroundColor=GetRGB()
})


