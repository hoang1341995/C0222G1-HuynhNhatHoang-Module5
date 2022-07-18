function menu(url) {
    callLoading();
    $.ajax({
        url: `/${url}`,
        type: "get",
        dataType: 'html',
        success: function(data) {
            $('#body').html(data);
            $('#body').children('meta,link,title,style').remove();
        },
        error: function(data) {
            alert("Lỗi tải trang "+ data.status)
            callLoading();
        }
    });
}

function callLoading() {
    var x = document.getElementById('loading');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}