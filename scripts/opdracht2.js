/**
 * Verklaringen:
 * Novaehollandiae: Nieuw-Holland is de historische naam voor het continent Australië dat door Nederlanders in kaart is gebracht.
 * Dromaius: Dromaius is een geslacht van loopvogels uit Australië, waaronder de emoe.
 * Casuariidae: Casuariidae zijn een groep grote loopvogels uit de tropische regenwouden van Nieuw-Guinea en Australië (Queensland). De familie telt twee nog bestaande geslachten: Casuaris en Dromaius. DNA-onderzoek wees uit dat de kasuarissen en emoes nauw verwant zijn. Emoes zijn de grootste loopvogels van Australië. De familie Casuariidae heeft als zustergroep de struisvogels en de nandoes.
 * Woestijn: Een woestijn is een gebied waar relatief zeer weinig neerslag valt, maximum 200 millimeter per jaar, waardoor er weinig of geen vegetatie is. Het stereotiepe beeld van een woestijn is een uitgestrekte kale vlakte met zandduinen en een gemiddeld zeer hoge temperatuur. Dit beeld gaat echter voor slechts een klein deel van de woestijngebieden op aarde daadwerkelijk op. Er zijn ook woestijnen in de gematigde en de polaire zones.
 *
 * Juiste antwoorden:
 * Vraag 1: monotypische
 * Vraag 2: ja
 * Vraag 3: ja
 */

// Put your code here
var tip1 = document.getElementById("tooltip1");
var tip2 = document.getElementById("tooltip2");
var tip3 = document.getElementById("tooltip3");
var tip4 = document.getElementById("tooltip4");

var callout = document.querySelector(".callout");

tip1.addEventListener("mouseenter", function(event) {
    event.preventDefault();
    callout.style.display = "block";
    callout.textContent = "Novaehollandiae: Nieuw-Holland is de historische naam voor het continent Australië dat door Nederlanders in kaart is gebracht.";
});
tip1.addEventListener("mouseleave", function(event) {
    event.preventDefault();
    callout.style.display = "none";
});

tip2.addEventListener("mouseenter", function(event) {
    event.preventDefault();
    callout.style.display = "block";
    callout.textContent = "Dromaius: Dromaius is een geslacht van loopvogels uit Australië, waaronder de emoe.";
});
tip2.addEventListener("mouseleave", function(event) {
    event.preventDefault();
    callout.style.display = "none";
});

tip3.addEventListener("mouseenter", function(event) {
    event.preventDefault();
    callout.style.display = "block";
    callout.textContent = "Casuariidae: Casuariidae zijn een groep grote loopvogels uit de tropische regenwouden van Nieuw-Guinea en Australië (Queensland). De familie telt twee nog bestaande geslachten: Casuaris en Dromaius. DNA-onderzoek wees uit dat de kasuarissen en emoes nauw verwant zijn. Emoes zijn de grootste loopvogels van Australië. De familie Casuariidae heeft als zustergroep de struisvogels en de nandoes.";
});
tip3.addEventListener("mouseleave", function(event) {
    event.preventDefault();
    callout.style.display = "none";
});

tip4.addEventListener("mouseenter", function(event) {
    event.preventDefault();
    callout.style.display = "block";
    callout.textContent = "Woestijn: Een woestijn is een gebied waar relatief zeer weinig neerslag valt, maximum 200 millimeter per jaar, waardoor er weinig of geen vegetatie is. Het stereotiepe beeld van een woestijn is een uitgestrekte kale vlakte met zandduinen en een gemiddeld zeer hoge temperatuur. Dit beeld gaat echter voor slechts een klein deel van de woestijngebieden op aarde daadwerkelijk op. Er zijn ook woestijnen in de gematigde en de polaire zones.";
});
tip4.addEventListener("mouseleave", function(event) {
    event.preventDefault();
    callout.style.display = "none";
});



form = querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    var score = document.getElementById("score");
    score = 0;
    var vraag1 = document.getElementById("vraag1-1");
    var vraag2 = document.getElementById("vraag2-1");
    var vraag3 = document.getElementById("vraag3-1");

    if(vraag1.value == true){
        score +=1;
    }
    else if(vraag2.value == true){
        score+=1;
    }
    else if(vraag3.value == true){
        score+=1;
    }

    var submit = querySelector("")
    
});

