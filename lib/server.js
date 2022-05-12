const ExplorerController = require('./controllers/ExplorerController')
const express = require('express');
const { response } = require('express');

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get('/v1/explorers/:mission', (request, response)=>{
    const mission = request.params.mission;
    const explorers = ExplorerController.getExplorersByMission(mission);
    response.json(explorers)
})

app.get('/v1/explorers/amount/:mission', (request, response)=>{
    const mission = request.params.mission;
    const amount = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: mission, quantity: amount});
})

app.get('/v1/explorers/usernames/:mission', (request, response)=>{
    const mission = request.params.mission;
    const names = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: mission, explorers: names});
})

app.get('/v1/fizzbuzz/:score', (request, response)=>{
    const number = request.params.score;
    const trick = ExplorerController.applyValidationInNumber(number);
    response.json({score: number, trick: trick});
})

app.listen(port, ()=>{
    console.log(`app port ${port}`)
})