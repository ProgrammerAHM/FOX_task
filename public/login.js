$('.save').on('click', () => {
    loadFolder()
})
$('.token-value').keyup(function (e) {
    if (e.keyCode == 13) {
        loadFolder()
    }
});
function loadFolder() {
    var settings = {
        "url": "/api/v1/cookie",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "value": decodeURIComponent($('.token-value').val())
        }
    };

    $.ajax(settings).done(function (response) {
        location.href = "/"
    }).fail(function (data) {
        alert(data)
    });
}


//s%3Aik-dash%3AMohamedkhaledfox%40gmail.com%3A758b04b5-4601-4281-b734-b3c5e68131b4.w4xlnYtnTqvWdQzkzSnYpXQGLjTBpyz0VIBO6o8bE8w
//s%3Aik-dash%3AMohamedkhaledfox%40gmail.com%3A758b04b5-4601-4281-b734-b3c5e68131b4.w4xlnYtnTqvWdQzkzSnYpXQGLjTBpyz0VIBO6o8bE8w
//s%3Aik-dash%253AMohamedkhaledfox%2540gmail.com%253A758b04b5-4601-4281-b734-b3c5e68131b4.w4xlnYtnTqvWdQzkzSnYpXQGLjTBpyz0VIBO6o8bE8w
//s%3Aik-dash%3AMohamedkhaledfox%40gmail.com%3A758b04b5-4601-4281-b734-b3c5e68131b4.w4xlnYtnTqvWdQzkzSnYpXQGLjTBpyz0VIBO6o8bE8w
//connect.sid=s%253Aik-dash%253AMohamedkhaledfox%2540gmail.com%253A758b04b5-4601-4281-b734-b3c5e68131b4.w4xlnYtnTqvWdQzkzSnYpXQGLjTBpyz0VIBO6o8bE8w