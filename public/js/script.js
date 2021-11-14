// All this does is beg the Node "API" for updated metadata every second and updates the HTML
var interval = 1000;
function doAjax() {
    $.ajax({
        type: 'GET',
        url: '/meta',
        success: function(meta){                        
            if (meta.artist){
                $("#artist").text(meta.artist + " - ");
            }   
            else{
                $("#artist").text(meta.artist);
            }                     
            if (meta.title){
                $("#title").text("\"" + meta.title + "\"");    
            }             
            else{
                $("#title").text(meta.title);
            }                                        
        },
        complete: function(meta){
            setTimeout(doAjax, interval)
        }
    })
}
setTimeout(doAjax, 1000);