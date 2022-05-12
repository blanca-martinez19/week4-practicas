const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService');
const Reader = require('../utils/Reader');

class ExplorerController{
    //ExplorerService
    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(Reader.readJsonFile("explorers.json"), mission);
    }

    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(Reader.readJsonFile("explorers.json"), mission);
    }

    static getExplorersAmonutByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(Reader.readJsonFile("explorers.json"), mission);
    }

    //FizzbuzzService
    static applyValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number)
    }
}

module.exports = ExplorerController;