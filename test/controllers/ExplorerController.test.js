const ExplorerController = require('../../lib/controllers/ExplorerController');
const FizzbuzzService = require('../../lib/services/FizzbuzzService');

describe("Pruebas para ExplorerController", ()=>{
    test('1) Test getExplorersByMission', ()=>{
        const explorers = ExplorerController.getExplorersByMission('node');

        expect(explorers.length).toBe(10);
    });
    test('2) Test getExplorersUsernamesByMission', ()=>{
        const explorers = ExplorerController.getExplorersUsernamesByMission('node');

        expect(explorers).toContain('ajolonauta2');
    });
    test('3) Test getExplorersAmonutByMission', ()=>{
        const noexplorers = ExplorerController.getExplorersAmonutByMission('node');

        expect(noexplorers).toBe(10);
    });
    test('4) Test applyValidationInNumber', ()=>{
        const trick = FizzbuzzService.applyValidationInNumber(15);

        expect(trick).toBe("FIZZBUZZ");
    });
});