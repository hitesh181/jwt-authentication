const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn1')

console.log("scrupt working ")

const handleClick = async ()=>{
    try{
        const res = await fetch("http://localhost:5000/")
        const data = await res.json();
        console.log(data)
        localStorage.setItem("key", "Value")
        //console.log(document.cookie)
    }
    catch(err){
        console.log("not working ", err)
    }
}

const handleClick2 = async ()=>{
    try{
        const res = await fetch("http://localhost:5000/contact")
        const data = await res.json();
        console.log(localStorage.getItem("key"))
        console.log(data)
    }
    catch(err){
        console.log("not working ", err)
    }
}
btn2.addEventListener('click', handleClick2)
btn.addEventListener("click", handleClick)