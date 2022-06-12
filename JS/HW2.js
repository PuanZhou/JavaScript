

let inputAccount = document.getElementById("account");
inputAccount.addEventListener("blur", () => {

    let accountVal = inputAccount.value;

    let accountSp = document.getElementById("accountSp");

    if (accountVal.length == 0) {
        accountSp.innerHTML = `<i style="color:red" class="fa-solid fa-circle-exclamation">請輸入文字</i>`;
        return;
    }
    else if (accountVal.length < 2) {
        accountSp.innerHTML = `<i style="color:red" class="fa-solid fa-circle-exclamation">長度請至少兩個字</i>`;
        return;
    }

    for (var i = 0; i < accountVal.length; i++) {
        let ch = accountVal.charCodeAt(i);
        if (ch < 0x4e00 || ch > 0x9fff) {
            accountSp.innerHTML = `<i style="color:red" class="fa-solid fa-circle-exclamation">請輸入中文字</i>`;
        }
        else {
            accountSp.innerHTML = `<i style="color:#8B8970" <i class="fa-solid fa-paw">輸入正確</i>`;
        }

    }
})



let pwd = document.getElementById("pwd");
pwd.addEventListener("blur", () => {

    let pwdValue = pwd.value;

    let pwdSp = document.getElementById("pwdSp");

    if (pwdValue.length == 0) {
        pwdSp.innerHTML = `<i style="color:red" class="fa-solid fa-circle-exclamation">請輸入文字</i>`;
        return;
    }
    else if (pwdValue.length < 6) {
        pwdSp.innerHTML = `<i style="color:red" class="fa-solid fa-circle-exclamation">長度請至少6個字</i>`;
        return;
    }

    let flag1 = false, flag2 = false, flag3 = false;

    for (var i = 0; i < pwdValue.length; i++) {

        let ch = pwdValue.charAt(i).toUpperCase();

        if (ch >= "A" && ch <= "Z") {
            flag1 = true;
        }
        else if (ch > "0" && ch <= "9") {
            flag2 = true;
        }
        else if (ch == "!" ||
            ch == "@" ||
            ch == "#" ||
            ch == "$" ||
            ch == "%" ||
            ch == "^" ||
            ch == "&" ||
            ch == "*") {
            flag3 = true
        }

        if (flag1 && flag2 && flag3) {
            break;
        }
    }
    if (flag1 && flag2 && flag3) {
        pwdSp.innerHTML = `<i style="color:#8B8970" <i class="fa-solid fa-paw">輸入正確</i>`;
    }
    else {
        pwdSp.innerHTML = `<i style="color:red" class="fa-solid fa-circle-exclamation">必須包含英數字、特殊字元[!@#$%^&*]</i>`;
    }
})



let date = document.getElementById("date");

date.addEventListener("blur", () => {

    let dateSp = document.getElementById("dateSp");

    let datevalue = date.value;


    let splitdate = datevalue.split(`/`);

    let yyyy = splitdate[0];

    let mm = splitdate[1]-1;

    let dd = splitdate[2];

    let newDate = new Date(yyyy, mm, dd)

    if (newDate.getFullYear() == yyyy && newDate.getMonth() == mm && newDate.getDate() == dd) {
        dateSp.innerHTML = `<i style="color:#8B8970" <i class="fa-solid fa-paw">輸入正確</i>`;
    }
    
    else {
        dateSp.innerHTML = `<i style="color:red" class="fa-solid fa-circle-exclamation">請輸入正確日期</i>`;
    }
})