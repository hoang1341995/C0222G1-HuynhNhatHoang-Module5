function deleteModalEmployee(id, name) {
    document.getElementById("idDelete").value = id;
    document.getElementById("bodyDeleteEmployee").innerHTML = "ID nhân viên: <b style='color: #005cbf'>" + id + "</b><br>" +
        "Tên nhân viên <b style='color: #005cbf'>" + name + "</b><br>" +
        "Xóa nhân viên này chứ ?";
}

function editModal(id, name, birthday, idCard, phone, email, address, position, education, division, salary, user) {
    document.getElementById("idEdit").value = id;
    document.getElementById("nameEdit").value = name;
    document.getElementById("birthdayEdit").value = birthday;
    document.getElementById("idCardEdit").value = idCard;
    document.getElementById("phoneEdit").value = phone;
    document.getElementById("emailEdit").value = email;
    document.getElementById("addressEdit").value = address;
    document.getElementById("salaryEdit").value = salary;
    document.getElementById("positionEdit").value = position;
    document.getElementById("educationEdit").value = education;
    document.getElementById("divisionEdit").value = division;
    document.getElementById("usernameEdit").value = user;
}


//addnew
$(document).ready(function () {
    $('#buttonAddNewEmployee').click(function (event) {

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var jsonModel = {
            "username": username,
            "password": password
        }
        $.ajax({
            type: 'post',
            url: '/employee/create/user',
            data: JSON.stringify(jsonModel),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var name = document.getElementById("name").value;
                var birthday = document.getElementById("birthday").value;
                var idCard = document.getElementById("idCard").value;
                var phone = document.getElementById("phone").value;
                var email = document.getElementById("email").value;
                var address = document.getElementById("address").value;
                var salary = document.getElementById("salary").value;
                var position = document.getElementById("position").value;
                var education = document.getElementById("education").value;
                var division = document.getElementById("division").value;
                var username = document.getElementById("username").value;
                var jsonModel = {
                    "name": name,
                    "birthday": birthday,
                    "idCard": idCard,
                    "phone": phone,
                    "email": email,
                    "address": address,
                    "salary": salary,
                    "position": {
                        "id": position
                    },
                    "education": {
                        "id": education
                    },
                    "division": {
                        "id": division
                    },
                    "user": {
                        "username": username
                    }
                }
                $.ajax({
                        type: 'post',
                        url: '/employee/create/employee',
                        data: JSON.stringify(jsonModel),
                        contentType: "application/json; charset=utf-8",
                    success: function (data) {

                        menu('employee')
                        }
                })
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
        var name = document.getElementById("nameEdit").value;
        var birthday = document.getElementById("birthdayEdit").value;
        var idCard = document.getElementById("idCardEdit").value;
        var phone = document.getElementById("phoneEdit").value;
        var email = document.getElementById("emailEdit").value;
        var address = document.getElementById("addressEdit").value;
        var salary = document.getElementById("salaryEdit").value;
        var position = document.getElementById("positionEdit").value;
        var education = document.getElementById("educationEdit").value;
        var division = document.getElementById("divisionEdit").value;
        var username = document.getElementById("usernameEdit").value;
        var jsonModel = {
            "id": id,
            "name": name,
            "birthday": birthday,
            "idCard": idCard,
            "phone": phone,
            "email": email,
            "address": address,
            "salary": salary,
            "position": {
                "id": position
            },
            "education": {
                "id": education
            },
            "division": {
                "id": division
            },
            "user": {
                "username": username
            }
        }
        $.ajax({
            type: 'post',
            url: '/employee/edit',
            data: JSON.stringify(jsonModel),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                menu('employee')

            },
            error : function() {

                document.getElementById("messageCreateEmployee").innerHTML = "<p style='font-weight: bold;color: red'>tạo tài khoản không thành công</p>";
            }

        });
        event.preventDefault();
    });
})

// loop
function getelementEmployee(elements) {
    return `<tr>`+
        `       <td >`+elements.id+`</td>`+
        `       <td >`+elements.name+`</td>`+
        `       <td >`+elements.birthday+`</td>`+
        `       <td >`+elements.idCard+`</td>`+
        `       <td >`+elements.phone+`</td>`+
        `       <td >`+elements.email+`</td>`+
        `       <td >`+elements.address+`</td>`+
        `       <td >`+elements.position.name+`</td>`+
        `       <td >`+elements.education.name+`</td>`+
        `       <td >`+elements.division.name+`</td>`+
        `       <td >`+elements.salary+`</td>`+
        `       <td >`+elements.user.username+`</td>`+
        `       <td>`+
        `<button type="button" class="btn btn-outline-primary m-1" data-toggle="modal" data-target="#edit"`+
    `onclick="editModal('`+elements.id+`','`+elements.name+`','`+elements.birthday+`',`+
    +`'`+elements.idCard+`','`+elements.phone+`','`+elements.email+`',`+
    +`'`+elements.address+`','`+elements.position.name+`','`+elements.education.name+`',`+
    +`'`+elements.division.name+`','`+elements.salary+`','`+elements.user.username+`')">Sửa</button>`+
    `<button type="button" class="btn btn-outline-danger m-1" data-toggle="modal" data-target="#delete"`+
    `onclick="deleteModal('`+elements.id+`','`+elements.name+`')" >Xóa</button></td></tr>`;
}

// delete
$(document).ready(function () {
    $('#buttonDelete').click(function (event) {

        var idDelete = document.getElementById("idDelete").value;
        $.ajax({
            type: "GET",
            //tên API
            url: `/employee/delete/${idDelete}`,
            success: function (data) {
                menu('employee')

            }
        });
        event.preventDefault();
    });
})

// search
$(document).ready(function () {
    $('#buttonSearch').click(function (event) {
        callLoading()
        var key = document.getElementById("key").value;
        $.ajax({
            type: "GET",
            //tên API
            url: `/employee/search/${key}`,
            success: function (data) {
                let content = '';
                for (let i = 0; i < data.content.length; i++) {
                    content += getelementEmployee(data.content[i]);
                }
                document.getElementById('bodyTable').innerHTML = content;
                callLoading()
                },
            error : function() {
                callLoading()
                document.getElementById("messageEmployee").innerHTML = "<h4 style='font-weight: bold;color: red'>Không tìm thấy</h4>";
            }
        });
        event.preventDefault();
    });
})