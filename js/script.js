fetch("https://nekos.best/api/v2/search?query=Naruto&type=2&amount=10")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    let anime=data.results
    const img1= document.getElementById("img1")
    const img2= document.getElementById("img2")
    const img3= document.getElementById("img3")
    const img4= document.getElementById("img4")
    const img5= document.getElementById("img5")
    const img6= document.getElementById("img6")
    const img7= document.getElementById("img7")
    const img8= document.getElementById("img8")
    const img9= document.getElementById("img9")
    const img10= document.getElementById("img10")
    img1.src=anime[0].url
    img2.src=anime[1].url
    img3.src=anime[2].url
    img4.src=anime[3].url
    img5.src=anime[4].url
    img6.src=anime[5].url
    img7.src=anime[6].url
    img8.src=anime[7].url
    img9.src=anime[8].url
    img10.src=anime[9].url
    
})