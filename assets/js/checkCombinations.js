function checkCombinations(combinations) {
    for (let iterator = 0; iterator < combinations.length; iterator++) {
        
        let incubator = [];

        combinations[iterator].forEach(
            function(id) {

               
                let caseBackgroundImage = document.querySelector("#case"+id).style.backgroundImage
              
                if (caseBackgroundImage !== "") {
                    incubator.push(caseBackgroundImage);
                }
            }
        );
        console.log(incubator)
        if (incubator.length === 3) {
            
            let removeDuplicate = incubator.filter(
                function(value, index) {
                    return incubator.indexOf(value) === index
                }
            );

            if (removeDuplicate.length === 1) {

                if ( removeDuplicate[0].includes(srcCrossAndRound[0]) ) {
                    alert("CROSS win !");
                } else if (removeDuplicate[0].includes(srcCrossAndRound[1]) ) {
                    alert("ROUND win !");
                }
                document.location.reload();

            }

        }
        
    }
    
}