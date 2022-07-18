function deleteModalCustomer(id, code, name) {
    document.getElementById("idDeleteCustomer").value = id;
    document.getElementById("bodyDeleteCustomer").innerHTML = "Mã khách hàng: <b style='color: #005cbf'>" + code + "</b><br>" +
        "Tên khách hàng <b style='color: #005cbf'>" + name + "</b><br>" +
        "Xóa khách hàng này chứ ?";
}
function editModalCustomer(id, code, name, gender, birthday, idCard, phone, email, address, customerType) {
    document.getElementById("idEdit").value = id;
    document.getElementById("codeEdit").value = code;
    document.getElementById("nameEdit").value = name;
    document.getElementById("genderEdit").value = gender;
    document.getElementById("birthdayEdit").value = birthday;
    document.getElementById("idCardEdit").value = idCard;
    document.getElementById("phoneEdit").value = phone;
    document.getElementById("emailEdit").value = email;
    document.getElementById("addressEdit").innerText = address;
    document.getElementById("customerTypeEdit").value = customerType;
}

//edit
$(document).ready(function () {
    $('#buttonEditCustomer').click(function (event) {
        var id = document.getElementById("idEdit").value;
        var code = document.getElementById("codeEdit").value;
        var name = document.getElementById("nameEdit").value;
        var gender = document.getElementById("genderEdit").value;
        var birthday = document.getElementById("birthdayEdit").value;
        var idCard = document.getElementById("idCardEdit").value;
        var phone = document.getElementById("phoneEdit").value;
        var email = document.getElementById("emailEdit").value;
        var address = document.getElementById("addressEdit").value;
        var customerType =  document.getElementById("customerTypeEdit").value;

        var jsonModel = {
            id: id,
            code: code,
            name: name,
            gender: gender,
            birthday: birthday,
            idCard: idCard,
            phone: phone,
            email: email,
            address: address,
            customerType: {
                id: customerType
            }
        }
        $.ajax({
            type: 'post',
            url: '/customer/edit',
            data: JSON.stringify(jsonModel),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                menu('customer')
                },
            error : function() {

                document.getElementById("message").innerHTML = "<p style='font-weight: bold;color: red'>không thành công</p>";
            }

        });
        event.preventDefault();
    });
})

//addNew
$(document).ready(function () {
    $('#buttonCreateCustomer').click(function (event) {

        var id = document.getElementById("id").value;
        var code = document.getElementById("code").value;
        var name = document.getElementById("name").value;
        var gender = document.getElementById("gender").value;
        var birthday = document.getElementById("birthday").value;
        var idCard = document.getElementById("idCard").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var customerType =  document.getElementById("customerType").value;

        var jsonModel = {
            id: id,
            code: code,
            name: name,
            gender: gender,
            birthday: birthday,
            idCard: idCard,
            phone: phone,
            email: email,
            address: address,
            customerType: {
                id: customerType
            }
        }
        $.ajax({
            type: 'post',
            url: '/customer/create',
            data: JSON.stringify(jsonModel),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                menu('customer')
                },
            error : function() {

                document.getElementById("message").innerHTML = "<p style='font-weight: bold;color: red'>không thành công</p>";
            }

        });
        event.preventDefault();
    });
})

// delete
$(document).ready(function () {
    $('#buttonDeleteCustomer').click(function (event) {

        var idDeleteCustomer = document.getElementById("idDeleteCustomer").value;
        $.ajax({
            type: "GET",
            //tên API
            url: `/customer/delete/${idDeleteCustomer}`,
            success: function (data) {
                menu('customer')

            }
        });
        event.preventDefault();
    });
})

// search
$(document).ready(function () {
    $('#buttonSearchCustomer').click(function (event) {
        callLoading()
        var key = document.getElementById("keySearchCustomer").value;
        $.ajax({
            type: "GET",
            //tên API
            url: `/customer/search/${key}`,
            success: function (data) {
                let content = '';
                for (let i = 0; i < data.content.length; i++) {
                    content += getElementCustomer(data.content[i]);
                }
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

// loop
function getElementCustomer(elements) {
    return `<tr>
               <td >${elements.id}</td>
               <td >${elements.code}</td>
               <td >${elements.name}</td>
               <td >${elements.birthday}</td>
               <td >${elements.gender}</td>
               <td >${elements.idCard}</td>
              <td >${elements.phone}</td>
               <td >${elements.email}</td>
              <td >${elements.address}</td>
               <td >${elements.customerType.name}</td>
               <td>
        <button type="button" class="btn btn-outline-primary m-1" data-toggle="modal" data-target="#edit"
        onclick= "editModalCustomer('${elements.id}','${elements.code}','${elements.name}'
                                                        , '${elements.gender}', '${elements.birthday}', '${elements.idCard}'
                                                        , '${elements.phone}', '${elements.email}', '${elements.address}'
                                                        , '${elements.customerType.id}')">Sửa</button>
        <button type="button" class="btn btn-outline-danger m-1" data-toggle="modal" data-target="#delete"
         onclick="deleteModalCustomer('${elements.id}', '${elements.code}', '${elements.name}')">Xóa</button></td></tr>`;

}