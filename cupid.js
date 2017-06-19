
    console.log(cupidjson);
    createGrid(cupidjson);

//construir els 2 divs (laterals) a partir dels valors random recollits
function createGrid(array2) {
    // I need to get 2 random numbers
    var array = getRandom(array2);
    var item1 = $("<div/>").addClass("item1");
    var divimg1 = $("<div/>").addClass("divimg1");
    var img1 = array[0].img;
    var imgtag1 = $("<img/>").addClass("w3-circle").attr("src", "cupidimg/" + img1);
    var divnombre1 = $("<div/>").addClass("divnombre1");
    var ptag1 = $("<p/>").addClass("ptag1");
    var ptag2 = $("<p/>").addClass("ptag2");
    var nombre1 = array[0].nombre;
    var divedad1 = $("<div/>").addClass("divedad1");
    var edad1 = array[0].edad + " años";
    $(ptag1).append(nombre1);
    $(divnombre1).append(ptag1);
    $(item1).append(divnombre1);
    $(imgtag1).append(img1);
    $(divimg1).append(imgtag1);
    $(item1).append(divimg1);
    $(ptag2).append(edad1);
    $(divedad1).append(ptag2);
    $(item1).append(divedad1);
    $('.divitem1').append(item1);
    var item2 = $("<div/>").addClass("item2");
    var divimg2 = $("<div/>").addClass("divimg2");
    var img2 = array[1].img;
    var imgtag2 = $("<img/>").addClass("w3-circle").attr("src", "cupidimg/" + img2);
    var divnombre2 = $("<div/>").addClass("divnombre2");
    var ptag3 = $("<p/>").addClass("ptag3");
    var ptag4 = $("<p/>").addClass("ptag4");
    var nombre2 = array[1].nombre;
    var divedad2 = $("<div/>").addClass("divedad2");
    var edad2 = array[1].edad + " años";
    $(ptag3).append(nombre2);
    $(divnombre2).append(ptag3);
    $(item2).append(divnombre2);
    $(imgtag2).append(img2);
    $(divimg2).append(imgtag2);
    $(item2).append(divimg2);
    $(ptag4).append(edad2);
    $(divedad2).append(ptag4);
    $(item2).append(divedad2);
    $('.divitem2').append(item2);
    var pctval = array[2];
    //console.log(pctval);
    var pcttag = $("<p/>").addClass("pcttag");
    if (pctval > 50) {
        $(pcttag).css('color', 'green');
    }
    else {
        $(pcttag).css('color', 'black');
    }
    var divitemcenter1 = $("<div/>").addClass("divitemcenter1");
    $('#divitemcenter').append(divitemcenter1);
    $(divitemcenter1).append(pcttag);
    $(pcttag).append(pctval + "%");
    var divbutton = $("<div/>").addClass("divbutton");
    var button = $("<button/>").addClass("button");
    var pbutton = $("<p/>").addClass("pbutton");
    $('#divitemcenter').append(divbutton);
    $(divbutton).append(button);
    $(button).append(pbutton);
    $(pbutton).append("¡Nuevo Ligue!");
    $(".divbutton").click(function () {
        listener(array2);
    });
}

function getRandom(cupid) {
    //recollir els 3 valors random
    var randomnum1 = Math.floor(Math.random() * (cupid.length - 1));
    var randomnum2 = Math.floor(Math.random() * (cupid.length - 1));
    var pct = Math.floor((Math.random() * 100) + 1);
    var finalArray = [];
    if (randomnum1 == randomnum2) {
        console.log("IGUALES");
        if (randomnum2 === 0) {
            randomnum2 = randomnum2 + 1;
        }
        else {
            randomnum2 = randomnum2 - 1;
        }
    }
    if (randomnum1 != randomnum2) {
       
    }
    console.log(randomnum1);
    console.log(randomnum2);
    var randomleft = cupid[randomnum1];
    var randomright = cupid[randomnum2];
    finalArray.push(randomleft);
    finalArray.push(randomright);
    finalArray.push(pct);
    //console.log(finalArray);
    return finalArray;
}

function listener(cupid) {
    //console.log("click!");
    $('.divitem1').empty();
    $('#divitemcenter').empty();
    $('.divitem2').empty();
    createGrid(cupid);
}