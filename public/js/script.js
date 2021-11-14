// All this does is beg the Node "API" for updated metadata every second and updates the HTML
var interval = 1000;
function doAjax() {
    $.ajax({
        type: 'GET',
        url: '/meta',
        success: function(meta){
            // This is where you can modify exactly what data gets displayed, and where it goes
            // By default it's just '♫ {artist} - "{title}"'
            message = "";
            if (meta.artist && meta.title){
                message = "♫ " + meta.artist + " - \"" + meta.title + "\"";                                         
            }
            $("#message").text(message);
        },
        complete: function(meta){
            setTimeout(doAjax, interval)
        }
    })
}
setTimeout(doAjax, 1000);