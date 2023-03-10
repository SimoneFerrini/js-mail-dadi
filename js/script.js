/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia
 per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire
    cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa
    vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far 
    svolgere al nostro programma così come lo faremmo "a mano"

*/

/*mail*/
let adminList = ["simone.ferrini@boolean.com", "gabriel.spanu@boolean.com", "davide.voza@boolean.com", "andrea.bellucci@boolean.com"];

let btnConfirmEL = document.getElementById("btn-confirm");

let access = false;

btnConfirmEL.addEventListener("click", function() {
        let userMail = document.getElementById("user-mail").value;

        access = false;

        for (i=0; i<adminList.length; i++){

            if (userMail == adminList[i]){
                access = true;
            }
        }
        console.log(userMail);
        console.log(access);

        if (access == true){
            document.getElementById("mail-result").innerHTML = "Accesso Effettuato, Benvenuto";
            document.getElementById("mail-result").style.color = "white";
            document.getElementById("mail-result").style.backgroundColor = "rgb(40, 102, 52)";
        } else {
            document.getElementById("mail-result").innerHTML = " !!! Accesso Negato !!! ";
            document.getElementById("mail-result").style.color = "white";
            document.getElementById("mail-result").style.backgroundColor = "rgb(135, 34, 0)";
        }
    }
    )
/*fine sezione mail------------------------*/


/*sezione Dadi----------------------------*/

let btnLanciaDadiEL = document.getElementById("btn-dadi");
let facceDadiImg = ["img/dice1.png", "img/dice2.png", "img/dice3.png",
                    "img/dice4.png", "img/dice5.png", "img/dice6.png"];

btnLanciaDadiEL.addEventListener("click", function(){
    let tiro1 = Math.floor((Math.random() * 6) + 1);
    let tiro2 = Math.floor((Math.random() * 6) + 1);

    console.log(tiro1);
    console.log(tiro2);

    for(let i=1; i<=6; i++){
        if (i == tiro1){
            document.getElementById("img-tiro1").src = facceDadiImg[i-1];
        }

        if (i == tiro2){
            document.getElementById("img-tiro2").src = facceDadiImg[i-1];
        }
    }

    document.getElementById("dadi-display1").style.display = "flex";
    document.getElementById("dadi-display2").style.display = "flex";
    
    if (tiro1 < tiro2){

        document.getElementById("dadi-result").innerHTML = "Hai perso...";
        document.getElementById("dadi-result").style.backgroundColor = "rgb(176, 12, 0)"

    } else if (tiro1 > tiro2) {

        document.getElementById("dadi-result").innerHTML = "Hai vinto!!!";
        document.getElementById("dadi-result").style.backgroundColor = "rgb(115, 207, 99)"
    } else {

        document.getElementById("dadi-result").innerHTML = "Un triste pareggio.";
        document.getElementById("dadi-result").style.backgroundColor = "rgb(237, 174, 0)"
    }
})

/*fine sezione dadi----------------------------------------------*/
