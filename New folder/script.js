async function call() {
  try {
    let data = await fetch("https://restcountries.com/v3.1/all");
    let allData = await data.json();
    console.log(allData);
    allData.forEach((countries) => {
      let country = document.createElement("div");
      country.setAttribute("class", "container");
      country.innerHTML = `
        <h2>${countries.name.common}</h2>   
        <img src=${countries.flags.svg}
        class = "flag" />
        <div class="info">
        
        <p><span>Population:</span>${countries.population}</p>
        <p><span>Region:</span>${countries.region}</p>
        <p><span>Capital:</span>${countries.capital}</p>
        <p><span>Continents:</span>${countries.continents}</p>
       <button> Click for Weather </button>
        </div>`

    //   var button = document.createElement("button");
    //   button.setAttribute("class", "a");
    //   button.setAttribute("type", "button");
    //   button.addEventListener("click", async function display() {
    //     try {
    //         let temp = await fetch("https://api.openweathermap.org/data/2.5/weather?q=${countries.name.common}&appid=4163d7a1e0d4a7fcc1e1963437ca4a1d");
    //         let temper = await json();
    //         let allTemp = (function () {
    //             alert("${countries.name.common} is ${climate.main.temp}")
                
    //         })

    //     } catch 
    //      {
            
    //     }
        
    //   });

    document.addEventListener("click",async function () {
        try {
            let temp =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countries.name.common}&appid=4163d7a1e0d4a7fcc1e1963437ca4a1d`);
            let temper = await temp.json();
             (function () {
                alert(`${countries.name.common} is ${temper.main.temp}`)
                
            })

        } catch 
         {
            console.log("Not Found");
        }
        
      })
      
      document.body.appendChild(country);
    });
  } catch (er) {
    console.log("Eroor 404");
  }
}
call();
