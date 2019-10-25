// Fanger button i GUI
let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("beregnButton");

//Function til udregning af bilafgift på normal personbil.
function BilAfgift(pris : number){  

    let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("afgiftOutput");    

    if (pris <= 0)
    {
        outputElement.innerHTML = "Prisen skal være mere end 0";
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
//Function til udregning af bilafgift på elbil.
function ElBilAfgift(pris : number){
    
    let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("afgiftOutput");    

    if (pris <= 0)
    {
        outputElement.innerHTML = "Prisen skal være mere end 0";
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

//Opretter event listener på button, så man kan køre function ved click på button.
buttonElement.addEventListener("click", () => {
    
    //Fanger vores elementer i HTML.
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("prisInput");
    let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("afgiftOutput");
    let bilType = (<HTMLSelectElement>document.getElementById('bilTypeInput')).value;

    let inputPris : number = +inputElement.value;
    let bilAfgiftResultat : number;
    
    //Kører enten BilAfgift eller ElBilAfgift alt efter hvilken type er sat i Select elementet. Ellers returnere den 0.
    //Metoderne tager inputPris, som parameter og returner værdien af afgiften. 
    //Til sidst bliver resultatet lavet om til string og sendt til output elementet.
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