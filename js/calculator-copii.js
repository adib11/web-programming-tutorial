// // primul script
// console.info("Salut ");
//
// // declaration
// function getInfo(nume) {
//     var msg = "Salut " + nume +"," + "Bine ai venit la FastTrackIT";
//     return msg;
// }
//
// var mesaj = getInfo("adi");
// console.info(mesaj);
//
// function adunaNumerele(a,b) {
//     var rezultat = a + b;
//     return rezultat;
// }
// var calculat = adunaNumerele(2,3)
// console.info(calculat);

 function catFacAdunareaNumerelor(a, b){
    console. info ("primul numar este " + a);
    console.info ("al 2-lea numar este " + b);
    var max = b;
    var min = a;

    if(a > b){
        console.info(a + " este mai mare " + b);
        max = a;
        min = b;
    }
    console.info ("numarul cel mai mare este " + max);
    console.info("vom numara " + min + " degetele");
    // min = min - 1
     //min -=1;
     //min += -1;
     //min --;
    for(min--; min >= 0; min--){
    // aici vrem sa numaram
        max++;
        console.info("au ramas " + min + " degetele");
    }

    return max;
}

var rezultat = catFacAdunareaNumerelor(6, 4);
console.info (rezultat);

var rezultat= catFacAdunareaNumerelor(1, 5);
console.info(rezultat);

//    console.info (2+3);

// wrong var names;