//addnew
$(document).ready(function () {
    $('#buttonCreateContract').click(function (event) {

        var service = document.getElementById("service").value;
        var customer = document.getElementById("customer").value;
        var startDate = document.getElementById("startDate").value;
        var endDate = document.getElementById("endDate").value;
        var deposit = document.getElementById("deposit").value;
        var jsonModel = {
            service : {
                id : service
            },
            customer : {
                id : customer
            },
            startDate : startDate,
            endDate : endDate,
            deposit : deposit
        }
        console.log(JSON.stringify(jsonModel))
        $.ajax({
            type: 'post',
            url: '/contract/create',
            data: JSON.stringify(jsonModel),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                menu("contract");
            },
            error : function() {
                document.getElementById("messageCreateEmployee").innerHTML = "<p style='font-weight: bold;color: red'>tạo contract không thành công</p>";
            }

        });
        event.preventDefault();
    });
})


//addAttachService
function addAttachService(id){
    document.getElementById("idContract").value = id;
}

//AttachServiceIn
function AttachServiceIn(idAttachService,values,cost){
    let totalCost = 0;
    let id  = document.getElementById("idContract").value;
    let valuesButton  = document.getElementById("values"+values);
    var jsonModel = {
        attachService : {
            attachServiceId : idAttachService
        },
        contract : {
            contractId : id
        },
        quantity : 1,
    }
    $.ajax({
        type: 'post',
        url: '/contract/attach-service-in',
        data: JSON.stringify(jsonModel),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            valuesButton.value = parseInt(valuesButton.value) + 1;
            document.getElementById("messAddAttachService").innerHTML = "thêm thành công"
             // menu("contract");
        },
        error : function() {
            document.getElementById("messageCreateEmployee").innerHTML = "<p style='font-weight: bold;color: red'>tạo contract không thành công</p>";
        }

    });
    event.preventDefault();

}


//showListAttachService
function showListAttachService(id){
    document.getElementById("idContract").value = id;
    $.ajax({
        type: "GET",
        //tên API
        url: `/contract/detail-of-contract/${id}`,
        success: function (data) {
            console.log(data)
            let content = '';
            for (let i = 0; i < data.length; i++) {
                content += getElementContract(data[i]);
            }
            document.getElementById('bodyTableListDetail').innerHTML = content;
            // callLoading()
        },
        error : function() {
            // callLoading()
            document.getElementById('bodyTableListDetail').innerHTML = "<p style='color: red'>Hợp đồng này chưa có các dịch vụ đi kèm</p>";
        }
    });
    event.preventDefault();
}

// loop
function getElementContract(elements) {
    return `<tr>
               <td >${elements.attachService.attachServiceName}</td>
               <td >${elements.attachService.attachServiceCost}</td>
               <td >${elements.quantity}</td>
               <td ><button type="button" class="btn btn-outline-danger" onclick="deleteServiceDetail('2')">
                        xóa
                    </button></td>
                </tr>`;

}

function chooseService() {
    let id = document.getElementById('service').value;
    $.ajax({
        type: "GET",
        //tên API
        url: `/contract/get-service-by-id/${id}`,
        success: function (data) {
            console.log(data)
        document.getElementById("serviceCost").value = data.serviceCost;
        },
        error : function(data) {
        alert("lỗi chooseService " + data.status)
        }
    });

}

function getTotalCost() {
    var deposit = parseInt(document.getElementById("deposit").value);
    var serviceCost = parseInt(document.getElementById("serviceCost").value);
    document.getElementById("totalCost").value = serviceCost - deposit;


}


$(document).ready(function () {
    $('#addAttachService').on('hidden.bs.modal', function () {
       menu("contract");
    })
})
