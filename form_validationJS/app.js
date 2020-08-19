function formValidation() {
    var name = document.getElementById("name").value;
    var isNameValid = false;
    var nameError = document.getElementById('nameError');
    if (name.length >= 6 && name.length <= 10) {
        isNameValid = true;
        nameError.innerHTML = "success";
        nameError.style.display = "block";
        nameError.setAttribute("class", "success");
    } else {
        isNameValid = false;
        nameError.innerHTML = "Name should be minimum 6 charcter and maximum 10 charcter";
        nameError.style.display = "block";
        nameError.setAttribute("class", "error-span");

    }
    var phone = document.getElementById("mobile").value;
    var isMobValid = false;
    var mobError = document.getElementById('mobError');
    if (!isNaN(phone)) {
        isMobValid = true;
        mobError.innerHTML = "success";
        mobError.style.display = "block";
        mobError.setAttribute("class", "success");
        if (phone.length == 10) {
            isMobvalid = true;
            mobError.innerHTML = "success";
            mobError.style.display = "block"
            mobError.setAttribute("class", "success");
            // console.log("success")
        } else {
            isMobValid = false;
            mobError.innerHTML = "Mobile no should be 10 digits";
            mobError.style.display = "block";
            mobError.setAttribute("class", "error-span");
        }
    } else {
        isMobValid = false;
        mobError.innerHTML = "Only Numbers Allowed For Phone Number";
        mobError.style.display = "block";
        mobError.setAttribute("class", "error-span");
    }
    var gender = document.getElementById("gender");
    var checkedValue = document.querySelector('.gender:checked') ? document.querySelector('.gender:checked').value : "";
    console.log(checkedValue);
    var isGender = false;
    var genError = document.getElementById("genError");
    // console.log(genError)
    if (document.form1.gender[0].checked == true || document.form1.gender[1].checked == true || document.form1.gender[2].checked == true) {
        isGender = true;
        genError.style.display = "block";
        genError.innerHTML = "success";
        genError.setAttribute("class", "success");
    } else {
        isGender = false;
        mobError.style.display = "block";
        genError.innerHTML = "choose one value";
        genError.setAttribute("class", "error-span");
    }
    var address = document.getElementById("validationTextarea").value;

    var isAddressValid = false;
    var addError = document.getElementById("addError");

    if (address.length <= 20 && address.length != 0) {
        // console.log(address.length);
        isAddressValid = true;
        addError.innerHTML = "success";
        addError.style.display = "block";
        addError.setAttribute("class", "success");
        // console.log(address);
    } else {
        isAddressValid = false;
        addError.innerHTML = "Address shouldnot empty and should less than 20 charcters";
        addError.style.display = "block";
        addError.setAttribute("class", "error-span");
    }
    var listValue = document.getElementById("ddlcheck").value;
    // console.log(listValue);
    var testDropDown = false;
    var clsError = document.getElementById("clsError");
    if (listValue == "") {
        testDropDown = false;
        clsError.innerHTML = "choose one option";
        clsError.style.display = "block";
        clsError.setAttribute("class", "error-span");
        // alert("choose one option");

    } else {
        testDropDown = true;
        clsError.innerHTML = "success"; //clsError.innerHTML = "";
        clsError.style.display = "block"; //clsError.style.display = "none";withoutSetAttribute
        clsError.setAttribute("class", "success");
    }
    var multiCheckBox = document.getElementsByName("subject")
        // console.log(multiCheckBox);
    var chkBox = false;
    var chkError = document.getElementById("chkError");
    for (i = 0; i < multiCheckBox.length; i++) {

        if (multiCheckBox[i].checked == true) {
            chkBox = true;
            chkError.innerHTML = "Success";
            chkError.style.display = "block";
            chkError.setAttribute("class", "success");
            break;
        } else {
            chkBox = false;
            chkError.innerHTML = "Atleast select one or multiple value";
            chkError.style.display = "block";
            chkError.setAttribute("class", "error-span");
        }
        // console.log(multiCheckBox);
    }
    if (isNameValid && isMobValid && isGender && isAddressValid && chkBox && testDropDown) {
        var student = { name: name, mob: phone, gender: checkedValue, address: address, dropdown: listValue, checkbox: multiCheckBox }
        console.log(student);
        document.getElementById("validationFailed").innerHTML = "form validation success";
        document.getElementById("validationFailed").style.display = "inline";
        document.getElementById("validationFailed").setAttribute("class", "success");
    } else {
        document.getElementById("validationFailed").innerHTML = "form validation failed";
        document.getElementById("validationFailed").style.display = "inline";
        document.getElementById("validationFailed").setAttribute("class", "error-span");
    }
}

// var students = [
//     { id: 1, name: "abc", address: "BBSR" },
//     { id: 2, name: "def", address: "ctc" },
//     { id: 3, name: "ghi", address: "puri" },
//     { id: 4, name: "jkl", address: "khorda" },
// ]

// for (i = 0; i < students.length; i++) {
//     // console.log(i, students[i].name);
//     console.log("my name is " + students[i].name, " and i am from " + students[i].address, " with ID " + students[i].id);


function nameValidate() {
    var name = document.getElementById("name").value;
    var isNameValid = false;
    var nameError = document.getElementById('nameError');
    if (name.length >= 6 && name.length <= 10) {
        isNameValid = true;
        nameError.innerHTML = "success";
        nameError.style.display = "block";
        nameError.setAttribute("class", "success");
    } else {
        isNameValid = false;
        nameError.innerHTML = "Name should be minimum 6 charcter and maximum 10 charcter";
        nameError.style.display = "block";
        nameError.setAttribute("class", "error-span");
    }
}

function phNoValidate() {
    var phone = document.getElementById("mobile").value;
    var isMobValid = false;
    var mobError = document.getElementById('mobError');
    if (!isNaN(phone)) {
        isMobValid = true;
        mobError.innerHTML = "success";
        mobError.style.display = "block";
        mobError.setAttribute("class", "success");
        if (phone.length == 10) {
            isMobvalid = true;
            mobError.innerHTML = "success";
            mobError.style.display = "block"
            mobError.setAttribute("class", "success");
            // console.log("success")
        } else {
            isMobValid = false;
            mobError.innerHTML = "Mobile no should be 10 digits";
            mobError.style.display = "block";
            mobError.setAttribute("class", "error-span");
        }
    } else {
        isMobValid = false;
        mobError.innerHTML = "Only Numbers Allowed For Phone Number";
        mobError.style.display = "block";
        mobError.setAttribute("class", "error-span");
    }
}

function AddressValidate() {
    var address = document.getElementById("validationTextarea").value;
    var isAddressValid = false;
    var addError = document.getElementById("addError");
    if (address.length <= 20 && address.length != 0) {
        // console.log(address.length);
        isAddressValid = true;
        addError.innerHTML = "success";
        addError.style.display = "block";
        addError.setAttribute("class", "success");
        // console.log(address);
    } else {
        isAddressValid = false;
        addError.innerHTML = "Address shouldnot empty and should less than 20 charcters";
        addError.style.display = "block";
        addError.setAttribute("class", "error-span");
    }

}