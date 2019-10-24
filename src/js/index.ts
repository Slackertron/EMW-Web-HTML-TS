let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("beregnButton");

function BilAfgift(pris : number){  

    let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("afgiftOutput");    

    if (pris <= 0)
    {
        outputElement.innerHTML = "Tallet skal være positivt, og må ikke være under eller lig nul";
    }
    
    let bilAfgift : number;
    if (pris <= 200000)
    {
        bilAfgift = pris * 0.85
    }
    else if (pris > 200000)
    {
        bilAfgift = (pris*1.50) - 130000;
    }
    
    return bilAfgift;
}

function ElBilAfgift(pris : number){
    
    let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("afgiftOutput");    

    if (pris <= 0)
    {
        outputElement.innerHTML = "Tallet skal være positivt, og må ikke være under eller lig nul";
    }

    
    let bilAfgift : number;

    if (pris <= 200000)
    {
        bilAfgift = pris * 0.85;
    }
    else if (pris > 200000)
    {
        bilAfgift = (pris * 1.50) - 130000
    }

    
    let elBilAfgift : number = bilAfgift * 0.20;
    return elBilAfgift

}
buttonElement.addEventListener("click", () => {
    
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("prisInput");
    let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("afgiftOutput");
    
    let inputPris : number = +inputElement.value;

    

    let bilType = (<HTMLSelectElement>document.getElementById('bilTypeInput')).value;
    

    let bilAfgiftResultat : number;

    
    if (bilType == "Personbil")
    {
        bilAfgiftResultat = BilAfgift(inputPris);
    }
    else if (bilType == "Elbil")
    {
        bilAfgiftResultat = ElBilAfgift(inputPris);
    }
    else 
    {
        bilAfgiftResultat = 0;
    }

    

    outputElement.innerHTML = bilAfgiftResultat.toString();

    
});