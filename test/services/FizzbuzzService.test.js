const FizzbuzzService = require("../../lib/services/FizzbuzzService"); 

describe("Test Service FizzbuzzService",()=>{
    test("1) Score 1", ()=>{
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 

        expect(explorer1.trick).toBe(1);
    });
    test("1) Score 5", ()=>{
        const explorer5 = {name: "Explorer5", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}

        expect(explorer5.trick).toBe("BUZZ");
    });
    test("1) Score 15", ()=>{
        const explorer15 = {name: "Explorer15", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}

        expect(explorer15.trick).toBe("FIZZBUZZ");
    });
});