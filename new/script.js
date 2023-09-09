var bord = document.querySelector("#bord")
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

for(var i = 1; i <= 9 ; i++){
    var cases = document.createElement("div")
    cases.style.width = "80px"
    cases.style.height = "80px"
    cases.style.border = "2px solid black"
    cases.className="col-4 cases"
    cases.id = i
    bord.appendChild(cases)
}

var allCases = document.querySelectorAll(".cases")
var i = 0
var boolean = true
allCases.forEach(element => {  
    element.onclick = function(){
        
        this.onclick = null
        if(i % 2 == 0){
            this.textContent = "O"
        }else{
            this.textContent = "X"
        }

        var id = element.id
        var symbole = this.textContent
        
        combinaison.forEach(element => {

            if(element.indexOf(parseInt(id)) > -1){
                var tab = element.indexOf(parseInt(id))
               element.splice(tab,1,symbole)
            }

           if(element[0] == "O" && element[1] == "O" && element[2] == "O" ){
               console.log("rond gagne")
              boolean = false
           }

           console.log(element[0])
           console.log(element[1])

           if(element[0] == "X" && element[1] == "X" && element[2] == "X" ){
               console.log("croix gagne")
               boolean = false
        }
            
        });

       if(i == 8 && boolean){
            console.log("égalité")
        }
      
        i++
    }
});