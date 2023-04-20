
// loadfiles()

getImgs()

function getImgs() {
    var settings = {
        "url": "/api/v1/files" + window.location.search,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    };

    $.ajax(settings).done(function (response) {
        loadfiles(response)

    }).fail(function (data) {
        location.href = "/login"

    });
}

function loadfiles(imgs) {
    
    for (let i = 0; i < imgs.length; i++) {
        var img = imgs[i]
        
        $(`
        <div class="inline-grid m-5"> 
            <img src="${img.url}" data-action="zoom" class="aspect-square rounded-md h-64 m-3"> 
        </div>`)
            .appendTo('.the-folder-grid')
    }
}