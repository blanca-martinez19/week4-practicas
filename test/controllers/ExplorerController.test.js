const ExplorerController = require('../../lib/controllers/ExplorerController')

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
});