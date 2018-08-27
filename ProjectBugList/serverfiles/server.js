const express = require('express');    // call express
const app = express();                 // define our app using express
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080;
const router = express.Router();

class Bug {
    constructor(id,
                bugReference,
                summary,
                dateOpened,
                owner,
                developer,
                requirementsReference,
                priority,
                type,
                status,
                severity,
                currentAction,
                suggestedAction,
                comments) {
        this.id = id;
        this.bugReference = bugReference;
        this.summary = summary;
        this.dateOpened = dateOpened;
        this.owner = owner;
        this.developer = developer;
        this.requirementsReference = requirementsReference;
        this.priority = priority;
        this.type = type;
        this.status = status;
        this.severity = severity;
        this.currentAction = currentAction;
        this.suggestedAction = suggestedAction;
        this.comments = comments;
    }
}

class User{
    constructor( user_id,
     user_email,
     forename,
     surname,
     role){
        this.user_id = user_id;
        this.user_email = user_email;
        this.forename = forename;
        this.surname = surname;
        this.role = role;
    }
}

const users = [
    new User(65321, "conorj.murphy@randox.com","Conor","Murphy","Developer"),
    new User(12529, "stephen.quinn@randox.com","Stephen","Quinn","Developer"),
    new User(46983, "stephen.kennedy@randox.com","Stephen","Kennedy","Developer")
];

const bugs = [
    new Bug(1,"M28","\"Begin Telemedicine?\" prompt indicates there is a time limit to the link sent in the email " +
        "yet there is no time limit",new Date(2018,8,10),"Aidan Doyle","Conor Murphy","Telemedicine",
        "M","Defect","Open","S3", "\"1. Log in as admin user and navigate to the 'Telemedicine' page.\n" +
        "\n" +
        "2. Search for \"\"everyman\"\" and begin a Telemedicine call.\n" +
        "\n" +
        "3. Click on the 'Settings' button at the top-right of the page.\n" +
        "\n" +
        "Negative outcome: In the 'Camera' dropdown there is no option to select another camera or see that" +
        " our installed camera is available. The only option is 'None'. Our camera is functional and visible " +
        "in the preview window.\"","","comments"),
    new Bug(2,"M27","Downloaded JSON file will display incorrect DateOfBirth in the \"personalhealthPlans\" section."
        ,new Date(2018,8,8),"Aidan Doyle","Conor Murphy","Profile Management",
        "M","Defect","Open","S3","1. Log in as an admin and navigate to the \"\"Telemedicine\"\" grid\n" +
        "\n" +
        "2. Double-click on a user\n" +
        "\n" +
        "Negative Outcome: The \"\"Begin Telemedicine\"\" pop-up prompt will be displayed and it will display the " +
        "following information:\n" +
        "\n" +
        "\"\"Would you like to send a video link to this patient? They will have five minutes to join the room.\"\"\n" +
        "\n" +
        "This information is incorrect as there is no time limit to set for the user to join the room. When the" +
        " email is sent to the user requesting the call it will contain a linlk. It you wait more than five minutes " +
        "to click on the link the user will still be sent to the \"\"Telemedicine\"\" page where they can make the " +
        "call.\n" +
        "\n" +
        "I had a discussion with Peter Lynas and he confirmed that there is no time limit set on the link.\"","",
        "comments"),
    new Bug(3,"L21","Summary",new Date(2018,7,23),"Sean Rafferty","Conor Murphy","Edit Profile","L","Defect","Open",
        "S4","Current action","Suggested Action","Comments")

];

router.get('/bugs', (req, res) => {
    res.json(bugs);
});

router.get('/users', (req, res) => {
    res.json(users);
});

// router.get('/status/:status', (req, res) => {
//     res.json(bugs.filter(x => x.status === req.params.status));
// });
//
// router.get('/severity/:severity', (req, res) => {
//     res.json(bugs.filter(x => x.severity === req.params.severity));
// });

// router.get('/:id', (req, res) => {
//     let bugId = Number(req.params.id);
//     const bug = bugs.find(x => x.id === bugId);
//     if (bug) {
//         res.json(bug);
//     }
//     else {
//         console.log("Could not find");
//         res.status(204);
//         res.send("No bug found");
//     }
// });

// router.put('/:id', (req, res) => {
//     let bugId = Number(req.params.id);
//     const index = bugs.findIndex(x => x.id === Number(req.params.id));
//     if (index != -1) {
//         bugs.splice(index, 1);
//         bugs.push(req.body);
//         res.json(req.body);
//     }
//     else {
//         res.status(204);
//         res.send("No bugs found");
//     }
// });

app.use('/bugs', router);
app.listen(port);

console.log('Magic happens on port ' + port);