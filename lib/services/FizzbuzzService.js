class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        explorer.trick = this.applyValidationInNumber(explorer.score);
    }
    static applyValidationInNumber(number){
        let trick = "";
        if(number % 3 === 0)
            trick+="FIZZ";
        if(number % 5 === 0)
            trick+="BUZZ";
        if(trick === "") trick = number;
        return trick;
    }
}

module.exports = FizzbuzzService;