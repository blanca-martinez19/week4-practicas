const Reader = require('../../lib/utils/Reader'); 

describe("Test Reader util",()=>{
    test("Prueba lectura archivo", ()=>{
        const explorers = Reader.readJsonFile('explorers.json');

        expect(explorers.length).toBe(15);
    });
})