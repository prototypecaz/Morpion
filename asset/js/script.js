const DIVERSE = 10;
var div;
var indice = 0;
var source = "images/";
const SOURCEIMG = [source+"croix.png",source+"rond.png"];
var table = document.querySelector('#table')
var img;
var tableauCroix = [];
var tableauRond = [];
var croixRond = [];
var background = "./images/background.png";
var background2="./images/background2.png"
var horizontal = "./images/horizontal.png";
var vertical = "./images/avoir.png"
const reducer = (accumulator, currentValue) => accumulator * currentValue;
var combinaison = [   
    /* horizontal */
    [1, 2, 3],                                  
    [4, 5, 6],
    [7, 8, 9],
    /* vertical */
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    /* diagonale */
    [1, 5, 9],
    [7, 5, 3]
];


function parcoursCombinaison (combinaison,tableau,croixOuRond){

        
        for(var iterator=0; iterator < combinaison.length; iterator++){

            var comparaisonCroix = combinaison[iterator].every(function(v,i) { return ($.inArray(v,tableau) != -1)})
                
            if(comparaisonCroix == true){

                    var fond = combinaison[iterator].reduce(reducer)
                 
                    function ligne (test,test1,test2,image){
                        if(fond == test || fond == test1 || fond == test2){
                            combinaison[iterator].forEach(element => {
                                var correct = document.querySelector("#case"+element) 
                                correct.style.backgroundImage = "url("+image+")";
                                correct.style.backgroundRepeat = "no-repeat";
                                correct.style.backgroundPosition ="center center"
                                correct.style.backgroundSize = "100% 100%, auto" 
                             });
                             setTimeout(function(){window.location.reload()},2500)
                        }
                    }

                    function diagonale (test,image){
                        if(fond == test){
                            combinaison[iterator].forEach(element => {
                                var correct = document.querySelector("#case"+element) 
                                correct.style.backgroundImage = "url("+image+")";
                                correct.style.backgroundRepeat = "no-repeat";
                                correct.style.backgroundPosition ="center center"
                                correct.style.backgroundSize = "100% 100%, auto" 
                             });
                             
                             setTimeout(function(){window.location.reload()},2500)
                            
                        }

                        
                    }

                    ligne(6,120,504,horizontal);
                    ligne(28,80,162,vertical);
                    diagonale(105,background);
                    diagonale(45,background2);

                 
                 var p = document.createElement('p')
                 p.textContent="Bravo "+croixOuRond+" vous avez gagner !"
                 p.className="mx-auto";
                 p.style.fontSize="30px"
                 table.appendChild(p)
               }

                if(tableauCroix.length == 5) {
               
                window.location.reload();
                tableauCroix= [];
               
           }
            }
        }


for(var iterator = 1; iterator < DIVERSE; iterator++) {
    div = document.createElement('div');
    img = document.createElement('img');
    div.className = "col-4 bordure p-5";
    div.id= "case"+iterator;
    img.id="photo"+iterator;
    img.className="w-50 d-block mx-auto"
    
    
    table.appendChild(div);
    div.appendChild(img);
}

var cases = document.querySelectorAll('div[id^="case"]');

cases.forEach(element => {
    
    element.onclick = function () {

        element.firstElementChild.src = SOURCEIMG[indice];
        console.log(element.firstElementChild.src)
        croixRond.push(element.id);
        
        croixRond.forEach(element => {
        document.querySelector("#"+element).style.pointerEvents="none"
            
        });
        

        if (indice < 1) {
            tableauCroix.push(parseInt(element.firstElementChild.id.substr(5)))
            parcoursCombinaison (combinaison,tableauCroix,"Croix")
                
            }

        indice++;
        
        if (indice>1) {
            tableauRond.push(parseInt(element.firstElementChild.id.substr(5)))
            parcoursCombinaison(combinaison,tableauRond,"Rond");
            indice=0
            }
        
        }



    
});






