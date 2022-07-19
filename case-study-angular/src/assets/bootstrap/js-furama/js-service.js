function deleteModalService(id, code, name) {
    document.getElementById("idDelete").value = id;
    document.getElementById("bodyDeleteService").innerHTML = `Mã dịch vụ: <b style='color: #005cbf'>${code}</b><br>
        Tên dịch vụ <b style='color: #005cbf'>${name}</b><br>
        Xóa dịch vụ này chứ ?`;
}

function editModalService(id, code, name, area, maxPeople, rentType, serviceType, standardRoom, poolArea, floor, serviceCost, description) {
    document.getElementById("idEdit").value = id;
    document.getElementById("codeEdit").value = code;
    document.getElementById("nameEdit").value = name;
    document.getElementById("areaEdit").value = area;
    document.getElementById("maxPeopleEdit").value = maxPeople;
    document.getElementById("rentTypeEdit").value = rentType;
    document.getElementById("serviceTypeEdit").value = serviceType;
    document.getElementById("standardRoomEdit").value = standardRoom;
    document.getElementById("poolAreaEdit").value = poolArea;
    document.getElementById("floorEdit").value = floor;
    document.getElementById("serviceCostEdit").value = serviceCost;
    document.getElementById("descriptionEdit").value = description;
}


//addnew
$(document).ready(function () {
    $('#buttonAddNewService').click(function (event) {

        var code = document.getElementById("code").value;
        var name = document.getElementById("name").value;
        var area = document.getElementById("area").value;
        var maxPeople = document.getElementById("maxPeople").value;
        var rentType = document.getElementById("rentType").value; //model
        var serviceType = document.getElementById("serviceType").value; //model
        var standardRoom = document.getElementById("standardRoom").value;
        var poolArea = document.getElementById("poolArea").value;
        var numberFloors = document.getElementById("numberFloors").value;
        var serviceCost = document.getElementById("serviceCost").value;
        var description = document.getElementById("description").value;
        var jsonModel = {
            code: code,
            name: name,
            area: area,
            maxPeople: maxPeople,
            standardRoom: standardRoom,
            poolArea: poolArea,
            floor: numberFloors,
            serviceCost: serviceCost,
            description: description,
            rentType: {
                id: rentType
            },
            serviceType: {
                id: serviceType
            },
        }
        $.ajax({
            type: 'post',
            url: '/service/create',
            data: JSON.stringify(jsonModel),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                $('#addNew').modal('hide')
                let content = '';
                for (let i = 0; i < data.content.length; i++) {
                    content += getelementService(data.content[i]);
                }
                document.getElementById('bodyTable').innerHTML = content;
                document.getElementById("message").innerHTML = "<h4 style='font-weight: bold;color: dodgerblue'>Thêm thành công</h4>";

            },
            error : function() {
                document.getElementById("messageCreateEmployee").innerHTML = "<p style='font-weight: bold;color: red'>tạo tài khoản không thành công</p>";
            }

        });
        event.preventDefault();
    });
})

//edit
$(document).ready(function () {
    $('#buttonEditEmployee').click(function (event) {

        var id = document.getElementById("idEdit").value;
        var code = document.getElementById("codeEdit").value;
        var name = document.getElementById("nameEdit").value;
        var area = document.getElementById("areaEdit").value
        var maxPeople = document.getElementById("maxPeopleEdit").value
        var rentType = document.getElementById("rentTypeEdit").value
        var serviceType = document.getElementById("serviceTypeEdit").value
        var standardRoom = document.getElementById("standardRoomEdit").value
        var poolArea = document.getElementById("poolAreaEdit").value
        var floor = document.getElementById("floorEdit").value
        var serviceCost = document.getElementById("serviceCostEdit").value
        var description = document.getElementById("descriptionEdit").value
        var jsonModel = {
            "id": id,
            "code": code,
            "name": name,
            "area": area,
            "maxPeople": maxPeople,
            "serviceCost": serviceCost,
            "description": description,
            "standardRoom": standardRoom,
            "poolArea": poolArea,
            "floor": floor,
            "rentType": {
                "id": rentType
            },
            "serviceType": {
                "id": serviceType
            }
        }
        $.ajax({
            type: 'post',
            url: '/service/edit',
            data: JSON.stringify(jsonModel),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                $('#edit').modal('hide')
                let content = '';
                for (let i = 0; i < data.content.length; i++) {
                    content += getelementService(data.content[i]);
                }
                document.getElementById('bodyTable').innerHTML = content;
                document.getElementById("message").innerHTML = "<h4 style='font-weight: bold;color: dodgerblue'>Sửa thành công</h4>";


            },
            error : function() {

                document.getElementById("message").innerHTML = "<p style='font-weight: bold;color: red'>không thành công</p>";
            }

        });
        event.preventDefault();
    });
})

// loop
function getelementService(elements) {
    return `<tr>
               <td >${elements.code}</td>
               <td >${elements.name}</td>
               <td >${elements.area}</td>
               <td >${elements.maxPeople}</td>
               <td >${elements.rentType.name}</td>
               <td >${elements.serviceType.name}</td>
               <td >${elements.standardRoom}</td>
               <td >${elements.poolArea}</td>
               <td >${elements.poolArea}</td>
               <td >${elements.serviceCost}</td>
               <td >${elements.description}</td>
               <td>
        <button type="button" class="btn btn-outline-primary m-1" data-toggle="modal" data-target="#edit"
        onclick= "editModalService('${elements.id}','${elements.code}','${elements.name}'
                                                        , '${elements.area}', '${elements.maxPeople}', '${elements.rentType.id}'
                                                        , '${elements.serviceType.id}', '${elements.standardRoom}', '${elements.poolArea}'
                                                        , '${elements.poolArea}', '${elements.serviceCost}', '${elements.description}')">Sửa</button>
        <button type="button" class="btn btn-outline-danger m-1" data-toggle="modal" data-target="#delete"
         onclick="deleteModalService('${elements.id}', '${elements.code}', '${elements.name}')">Xóa</button></td></tr>`;
}

// delete
$(document).ready(function () {
    $('#buttonDeleteService').click(function (event) {

        var idDelete = document.getElementById("idDelete").value;
        $.ajax({
            type: "GET",
            //tên API
            url: `/service/delete/${idDelete}`,
            success: function (data) {
                $('#delete').modal('hide')
                let content = '';
                for (let i = 0; i < data.content.length; i++) {
                    content += getelementService(data.content[i]);
                }
                document.getElementById('bodyTable').innerHTML = content;
                document.getElementById("message").innerHTML = "<h4 style='font-weight: bold;color: dodgerblue'>Xóa thành công</h4>";

            }
        });
        event.preventDefault();
    });
})

// search
$(document).ready(function () {
    $('#buttonSearchService').click(function (event) {
        callLoading()
        var key = document.getElementById("key").value;
        $.ajax({
            type: "GET",
            //tên API
            url: `/service/search/${key}`,
            success: function (data) {
                let content = '';
                for (let i = 0; i < data.content.length; i++) {
                    content += getelementService(data.content[i]);
                }
                document.getElementById("message").innerHTML = "";

                document.getElementById('bodyTable').innerHTML = content;
                callLoading()
            },
            error : function() {
                callLoading()
                document.getElementById("message").innerHTML = "<h4 style='font-weight: bold;color: red'>Không tìm thấy</h4>";
            }
        });
        event.preventDefault();
    });
})

function changeServiceTypeEdit(){
    if (document.getElementById("serviceTypeEdit").value == "1"){
        document.getElementById("poolAreaEdit").placeholder = "Nhập diện tích hồ bơi"
        document.getElementById("floorEdit").placeholder = "Nhập số tầng"
        document.getElementById("poolAreaEdit").disabled = false;
        document.getElementById("floorEdit").disabled = false;
    }else if (document.getElementById("serviceTypeEdit").value == "2"){
        document.getElementById("poolAreaEdit").value = "";
        document.getElementById("poolAreaEdit").placeholder = "House không có hồ bơi"
        document.getElementById("floorEdit").placeholder = "Nhập số tầng"
        document.getElementById("poolAreaEdit").disabled = true;
        document.getElementById("floorEdit").disabled = false;
    }else {
        document.getElementById("poolAreaEdit").value = "";
        document.getElementById("poolAreaEdit").placeholder = "Room không có hồ bơi"
        document.getElementById("floorEdit").value = "";
        document.getElementById("floorEdit").placeholder = "Room không có tầng"
        document.getElementById("poolAreaEdit").disabled = true;
        document.getElementById("floorEdit").disabled = true;
    }
}
function changeServiceType(){
    if (document.getElementById("serviceType").value == "1"){ //villa
        document.getElementById("poolArea").placeholder = "Nhập diện tích hồ bơi"
        document.getElementById("numberFloors").placeholder = "Nhập số tầng"
        document.getElementById("poolArea").disabled = false;
        document.getElementById("numberFloors").disabled = false;
    }else if (document.getElementById("serviceType").value == "2"){ //house
        document.getElementById("poolArea").value = "";
        document.getElementById("poolArea").placeholder = "House không có hồ bơi"
        document.getElementById("numberFloors").placeholder = "Nhập số tầng"
        document.getElementById("poolArea").disabled = true;
        document.getElementById("numberFloors").disabled = false;
    }else {  //room
        document.getElementById("poolArea").value = "";
        document.getElementById("poolArea").placeholder = "Room không có hồ bơi"
        document.getElementById("numberFloors").value = "";
        document.getElementById("numberFloors").placeholder = "Room không có tầng"
        document.getElementById("poolArea").disabled = true;
        document.getElementById("numberFloors").disabled = true;
    }
}