// Load Node modules
const fs = require('fs');
var express = require('express');
const { VLC } = require('node-vlc-http');
const { exit, config } = require('process');

// Manage config file
app_config = {};
config_path = "config.json"
if (fs.existsSync(config_path)){
    file_data = fs.readFileSync("config.json");
    app_config = JSON.parse(file_data);
}
else{
    console.log("Config file missing!");
    exit();
}

// metadata template variable
metadata_template = {
    description: '',
    date: '',
    encoded_by: '',
    genre: '',
    album: '',
    track_number: '',
    filename: '',
    artist: '',
    publisher: '',
    title: ''
};

current_metadata = metadata_template;

// Init VLC
const vlc = new VLC(app_config.vlc);

// Repeatedly ping VLC for updates
vlc.on("update", (status, playlist) => {
    try{
        // Get new metadata
        current_metadata = status.information.category.meta;
    } catch {
        // If VLC is not running (or some other nonsense) - do not display anything
        current_metadata = metadata_template;
    }   
});

// Initialise Express
var app = express();

// Render static files
app.use(express.static('public'));
app.set('view engine', 'html');

// Port website will run on
app.listen(app_config.app.port);

// Primary Route
app.get('/', function (req, res) {    
    res.render('public/html');
});

// Metadata baby api
app.get('/meta', function(req, res){
    res.send(current_metadata);
});