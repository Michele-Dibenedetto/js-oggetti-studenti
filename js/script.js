// Parte 1
// creo il mio oggetto
// var studente = {
//     "nome": "Michele",
//     "cognome": "Di Benedetto",
//     "eta": 21
// }
// con il ciclo stampo sulla console il valore che ha ogni chiave
// for (var key in studente) {
//     console.log(studente[key]);
// }


// parte 2
// var listaStudenti = [
//     studente1 = {
//         "nome": "Michele",
//         "cognome": "Di Benedetto",
//         "eta": 21
//     },
//     studente2 = {
//         "nome": "Giacomo",
//         "cognome": "Marchese",
//         "eta": 20
//     },
//     studente3 = {
//         "nome": "Davide",
//         "cognome": "Lombardo",
//         "eta": 22
//     }
// ]
// for (var i=0; i < listaStudenti.length; i++) {
//     console.log(listaStudenti[i].nome + " " + listaStudenti[i].cognome)
// }

// parte 3
// var listaStudenti = [
//     studente1 = {
//         "nome": "Michele",
//         "cognome": "Di Benedetto",
//         "eta": 21
//     },
//     studente2 = {
//         "nome": "Giacomo",
//         "cognome": "Marchese",
//         "eta": 20
//     },
//     studente3 = {
//         "nome": "Davide",
//         "cognome": "Lombardo",
//         "eta": 22
//     }
// ]
// console.log(listaStudenti);

// var studente4 = {};

// var nomeUtente = prompt("inserisci il tuo nome");
// studente4.nome = nomeUtente;

// var cognomeUtente = prompt("inserisci il tuo cognome");
// studente4.cognome = cognomeUtente;

// var etaUtente = parseInt(prompt("inserisci la tua eta"));
// studente4.eta = etaUtente;

// listaStudenti.push(studente4);
// console.log(listaStudenti);


// Con html (parte 4)
$(document).ready(function() {
    var listaStudenti = [
        studente1 = {
            "nome": "Michele",
            "cognome": "Di Benedetto",
            "eta": 21
        },
        studente2 = {
            "nome": "Giacomo",
            "cognome": "Marchese",
            "eta": 20
        },
        studente3 = {
            "nome": "Davide",
            "cognome": "Lombardo",
            "eta": 22
        }
    ]
    // con il ciclo for inserisco nell'html tante list item quanti sono gli oggetti studente dentro l'arrey lista studenti
    for (var i=0; i < listaStudenti.length; i++) {
        console.log(listaStudenti[i].nome + " " + listaStudenti[i].cognome);
        $(".student_list").append("<li>" + listaStudenti[i].nome + " " + listaStudenti[i].cognome + " " + listaStudenti[i].eta + "</li>");
    }
    // al click del bottone dentro il form aggiungo il nuovo utente nella lista degli studenti
    $(".send").click(function() {
        // creo una variabile d'appoggio a cui attribuisco la maiuscola alla prima lettera e il resto lo metto in minuscolo
        var nome = $("#nome").val();
        nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

        var cognome = $("#cognome").val();
        cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();

        var eta = $("#eta").val();
        // aggiungo alla lista degli studenti il nuovo studente prendendo tutti i dati che ha inserito negli input
        $(".student_list").append("<li>" + nome + " " + cognome + " " + eta + "</li>");
        // svuoto gli input cambiando i dati inseriti dall'utente con una stringa vuota
        $("#nome").val("");
        $("#cognome").val("");
        $("#eta").val("");
    }) 
})
