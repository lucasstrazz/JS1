const button = document.getElementById(`convert-button`)
const select = document.getElementById(`currency-select`)

const dolar = 5.2;
const euro = 5.9;
const bitcoin = 140000

const ConvertValues = () => {
        const inputReais = document.getElementById('input-real').value; 
        const realValueText = document.getElementById('real-value-text');
        const currencyValueText = document.getElementById(`currency-value-text`);
        
        //realValueText.innerHTML = inputReais;

        realValueText.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL",
        }).format(inputReais);
        
        if(select.value === 'US$ Dolar Americano' ){

                currencyValueText.innerHTML = new Intl.NumberFormat("en-US",{
                        style: "currency",
                        currency: "USD",
                        }).format(inputReais/dolar);

        }

      if(select.value === '€ Euro' ){

        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",{
                style: "currency",
               currency: "EUR",
               }).format(inputReais/euro);

      }

      

};

changeCurrency = () => {
        const currencyName = document.getElementById("currency-name")
        const currencyImg = document.getElementById("currency-img")   
        const currencyValueText = document.getElementById("currency-value-text")             
        
        if(select.value === `US$ Dolar Americano`){
        currencyName.innerHTML= "Dolar Americano"
        currencyImg.src= "./assets/estados-unidos (1) 1.png"
        currencyValueText.innerHTML= "US$ 2.000"

                 }

        if(select.value === `€ Euro`){
        currencyName.innerHTML= "Euro"
        currencyImg.src= "./assets/euro.png"
        currencyValueText.innerHTML = "€ 2000" 
         }

ConvertValues()
}       

button.addEventListener("click", ConvertValues)
select.addEventListener("change", changeCurrency)
