const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries=countries=>{
   console.log(countries);
   const countriesHtml=countries.map(country=>gteCountryHTML(country))
        // console.log(country)
        const container=document.getElementById('countries');
        container.innerHTML=countriesHtml.join(" ");


}

// const gteCountryHTML=country=>{
//     console.log(country )
//     // console.log(country.flags )
//     const {name,flags}=country
//     return `
//     <div class="country">
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}"/>
//     </div>`
// }

// const gteCountryHTML=country=>{
//     // console.log(country.flags )
//     const {name,flags}=country
//     return `
//     <div class="country">
//     <h2>${name.common}</h2>
//     <img src="${flags.png}"/>
//     </div>`
// }

const gteCountryHTML=({name,flags,area,subregion})=>{
        // console.log(country.flags )
    //    const {name,flags}=country;

        return `
        <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}"/>
        <p>Area:${area}</p>
        <p>Region:${subregion}</p>
        </div>`
    }
loadCountries();
