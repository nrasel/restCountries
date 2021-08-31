const searchCountry=()=>{
    const inputField=document.getElementById('input-field')
    const inputFieldText=inputField.value
    inputField.value=''

    fetch(`https://restcountries.eu/rest/v2/name/${inputFieldText}`)
    .then(res=>res.json())
    .then(data=>countryDisplay(data))
}

const countryDisplay=(countries)=>{
    const singleCountryContainer=document.getElementById('single-country')
    singleCountryContainer.textContent=''
    countries.forEach(country => {
        const div=document.createElement('div')
        console.log(country.currencies[0].code);
     
        div.innerHTML=`
            <div  class="card mx-auto mt-5" style="width: 18rem;">
                <img src="${country.flag}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.name}</h5>
                    <p class="card-text"> <strong>regionalBlocs:</strong> ${country.regionalBlocs[0].name}</p>
                    <!-- Button trigger modal -->
                    <button onclick="countryDetails(${country.callingCodes})" type="button" class="btn btn-primary" data-bs-toggle="modal"   data-bs-target="#exampleModal">
                        Details
                    </button>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1"         aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                           
                        <div>
                        <img src="${country.flag}" class="w-50 d-block mx-auto mt-4" alt="...">
                        </div>
                        <div class="modal-body">
                            <h4 class="text-center mb-4">${country.name}</h4>
                            <p><strong>Population: </strong> ${country.population}</p>
                            <p><strong>Region: </strong> ${country.region}</p>
                            <p><strong>Capital: </strong> ${country.capital}</p>
                            <p><strong>Demonym: </strong> ${country.demonym}</p>
                            <p><strong>Languages: </strong> ${country.languages[0].name}</p>
                            <p><strong>Currencies: </strong> ${country.currencies[0].code}</p>
                            
                        </div>
                            <div class="modal-footer">
                                <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        `
        singleCountryContainer.appendChild(div)
    });
    
}

const countryDetails=(details)=>{
    console.log(details);
    const url=`https://restcountries.eu/rest/v2/callingcode/${details}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetails(data)) 
}

const displayCountryDetails=(displayDetails)=>{
    const detailsContainer=document.getElementById('details-country')
    detailsContainer.textContent=''
    const div=document.createElement('div')
    div.innerHTML=`
       <div class="">
       </div>
    `
    detailsContainer.appendChild(div)
}



