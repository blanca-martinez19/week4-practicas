const Reader = require("../../lib/utils/Reader");
const ExplorerService = require('../../lib/services/ExplorerService'); 

describe("Test Service ExplorerSevice",()=>{
    const explorers = Reader.readJsonFile("explorers.json");
    test("1) Filtrar por mision", ()=>{
        const nodeExplorers = ExplorerService.filterByMission(explorers, "node");

        expect(nodeExplorers).not.toBeUndefined();
    });
    test("2) Cantidad por mision", ()=>{
        const cantNodeExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");

        expect(cantNodeExplorers).toBe(10);
    });
    test("1) Nombres de exlorers por mision", ()=>{
        const explorersNames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        expect(explorersNames).toContain('ajolonauta13');
        expect(explorersNames).not.toContain('ajolonauta9');
    });
})