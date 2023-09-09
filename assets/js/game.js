cases.forEach(function(caseDiv) {
    caseDiv.onclick = function() {
        
        clickCounter++;
        this.onclick = null;

        this.style.backgroundImage = 'url('+srcCrossAndRound[indexCrossAndRound]+')';
        
        (indexCrossAndRound === 1) ? indexCrossAndRound-- : indexCrossAndRound++;
        
        checkCombinations(WINCOMBINATIONS[0].horizontal);
        checkCombinations(WINCOMBINATIONS[1].vertical);
        checkCombinations(WINCOMBINATIONS[2].diagonal);

        if (clickCounter === MORPIONCASES) {
            alert("CROSS loose and ROUND loose !");
            document.location.reload();
        }

    }
});