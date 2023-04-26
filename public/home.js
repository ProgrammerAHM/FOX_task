
loadFolder()


function loadFolder() {
    var settings = {
        "url": "/api/v1/folders",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    };

    $.ajax(settings).done(function (response) {
        setfolders(response)
    }).fail(function (data) {
        location.href = "/login"
    });
}


function setfolders(lis) {
    $('.the-folder-grid').empty()
    for (let i = 0; i < lis.length; i++) {
        $(`
        <div class="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
            <div class="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                <a href="/file?path=${lis[i].name}" class="w-3/5 file__icon file__icon--directory mx-auto"></a> <a class="block font-medium mt-4 text-center truncate">${lis[i].name}</a> 
                <div class="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false" data-tw-toggle="dropdown"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="more-vertical" data-lucide="more-vertical" class="lucide lucide-more-vertical w-5 h-5 text-slate-500"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg> </a>
                <div class="dropdown-menu w-40" id="_ur6u88q04" data-popper-placement="bottom-end" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 20px);">
                <ul class="dropdown-content">
                    <li>
                        <button onclick="getImgs('${lis[i].name}',this)" class="btn py-1 px-2 btn-outline-secondary"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="file" data-lucide="file" class="lucide lucide-file w-4 h-4 mr-2"><path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> Copy to clip </button>
                    </li>
                </ul>
            </div>
            </div>
            </div>
            </div>
        </div>`).appendTo('.the-folder-grid')
    }
}

function copy_all(dom){
    $(dom).html('wait ...')
    var settings = {
        "url": "/api/v1/allfile",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    };
    
    $.ajax(settings).done(async function (response) {
        setTimeout(() => {
            $(dom).html('Copy to clip')
        }, 1500);
        copyallfiles(response)
        $(dom).html('Copied')
    }).fail(function (data) {
        $(dom).html('not Copied')
    });
}

function getImgs(file,dom) {
    $(dom).html('wait ...')
    var settings = {
        "url": "/api/v1/files?path=" + file,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    };

    $.ajax(settings).done(async function (response) {
        setTimeout(() => {
            $(dom).html('Copy to clip')
        }, 1500);
        copyfiles(response)
        $(dom).html('Copied')
    }).fail(function (data) {
        $(dom).html('not Copied')
    });
}

function copyfiles(value) {
    var list = ""
    value.forEach((e)=>{
        list+=e.url+"\n"
    })
    navigator.clipboard.writeText(list);
  }
function copyallfiles(value) {
    var list = ""
    value.forEach((e)=>{
        list+=e.name+"\n"
    })
    navigator.clipboard.writeText(list);
  }
