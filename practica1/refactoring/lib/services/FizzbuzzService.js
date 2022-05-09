class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        let trick = "";
        if(explorer.score % 3 === 0)
            trick+="FIZZ";
        if(explorer.score % 5 === 0)
            trick+="BUZZ";
        if(trick === '') trick = explorer.score;
        explorer.trick = trick;
    }
}

module.exports = FizzbuzzService;