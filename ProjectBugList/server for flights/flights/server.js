const express = require('express');    // call express
const app = express();                 // define our app using express
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080;
const router = express.Router();

class Flight {
    constructor(id,
                origin,
                destination,
                departure,
                arrival) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;
        this.departure = departure;
        this.arrival = arrival;
    }
}

const flights = [
    new Flight(101, "Belfast International", "London Gatwick", new Date(), new Date()),
    new Flight(102, "Belfast City", "London Gatwick", new Date(), new Date()),
    new Flight(103, "Belfast City", "London Gatwick", new Date(), new Date()),
    new Flight(104, "Belfast City", "London Gatwick", new Date(), new Date()),
    new Flight(105, "Belfast City", "London Gatwick", new Date(), new Date()),
    new Flight(201, "Belfast City", "Birmingham", new Date(), new Date()),
    new Flight(202, "Belfast City", "Birmingham", new Date(), new Date()),
    new Flight(203, "Belfast City", "Birmingham", new Date(), new Date()),
    new Flight(204, "Belfast City", "Birmingham", new Date(), new Date()),
    new Flight(205, "Belfast City", "Birmingham", new Date(), new Date()),
    new Flight(301, "Dublin", "Edinburgh", new Date(), new Date()),
    new Flight(302, "Dublin", "Edinburgh", new Date(), new Date()),
    new Flight(303, "Dublin", "Edinburgh", new Date(), new Date()),
    new Flight(304, "Dublin", "Edinburgh", new Date(), new Date()),
    new Flight(305, "Dublin", "Edinburgh", new Date(), new Date()),
    new Flight(401, "Dublin", "Manchester", new Date(), new Date()),
    new Flight(402, "Dublin", "Manchester", new Date(), new Date()),
    new Flight(403, "Dublin", "Manchester", new Date(), new Date()),
    new Flight(404, "Dublin", "Manchester", new Date(), new Date()),
    new Flight(405, "Dublin", "Manchester", new Date(), new Date())
];

router.get('/', (req, res) => {
    res.json(flights);
});

router.get('/origin/:origin', (req, res) => {
    res.json(flights.filter(x => x.origin === req.params.origin));
});

router.get('/destination/:destination', (req, res) => {
    res.json(flights.filter(x => x.destination === req.params.destination));
});

router.get('/:id', (req, res) => {
    let flightId = Number(req.params.id);
    const flight = flights.find(x => x.id === flightId);
    if (flight) {
        res.json(flight);
    }
    else {
        console.log("Could not find");
        res.status(204);
        res.send("No flight found");
    }
});

router.put('/:id', (req, res) => {
    let flightId = Number(req.params.id);
    const index = flights.findIndex(x => x.id === Number(req.params.id));
    if (index != -1) {
        flights.splice(index, 1);
        flights.push(req.body);
        res.json(req.body);
    }
    else {
        res.status(204);
        res.send("No flight found");
    }
});

app.use('/flights', router);
app.listen(port);

console.log('Magic happens on port ' + port);