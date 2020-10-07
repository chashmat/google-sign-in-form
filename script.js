function btn1() {
    let email1 = "abc@gmail.com";
    let email2 = "123@gmail.com";
    let email = document.getElementById('inputEmail').value;
    let password1 = "abc";
    let password2 = 123;
    console.log(email1);
    console.log(email2);
    console.log(email);
    if (email == email1 && email != email2) {
        document.querySelector("#main2").style.display = "block";
        document.querySelector("#main").style.display = "none";
        document.getElementById('inputPassword').value = password1;
    }
    if (email == email2 && email != email1) {
        document.querySelector("#main2").style.display = "block";
        document.querySelector("#main").style.display = "none";
        document.getElementById('inputPassword').value = password2;
    } else {
        document.getElementById('error1').style.display = "block";
        document.getElementById('inputEmail').style.border = "2px solid #d93025";
        document.getElementById('label1').style.color = "#d93025";
    }
}

function btn2() {
    let email1 = "abc@gmail.com";
    let email2 = "123@gmail.com";
    let email = document.getElementById('inputEmail').value;
    let password1 = "abc";
    let password2 = 123;
    let password = document.getElementById('inputPassword').value;
    if (email == email1 && password == password1) {
        document.getElementById('main2').style.display = "none";
        document.getElementById('main3').style.display = "block";
        document.getElementById('signed').innerHTML = email1;
    }
    if (email == email2 && password == password2) {
        document.getElementById('main2').style.display = "none";
        document.getElementById('main3').style.display = "block";
        document.getElementById('signed').innerHTML = email2;
    } else {
        document.getElementById('error2').style.display = "block";
        document.getElementById('inputPassword').style.border = "2px solid #d93025";
        document.getElementById('label2').style.color = "#d93025";
    }
}

function Label1() {
    if (document.querySelector('#inputEmail').value == '') {
        document.querySelector('#label1').style.fontSize = '16px';
        document.querySelector('#label1').style.color = '#80868b';
        document.querySelector('#label1').style.background = 'transparent';
        document.querySelector('#label1').style.padding = '0';
        document.querySelector('#label1').style.transform = 'translate(-92px, -37px)';
    } else if (document.querySelector('#inputEmail').value != '') {
        document.querySelector('#label1').style.fontSize = '10px';
        document.querySelector('#label1').style.color = '#1a73e8';
        document.querySelector('#label1').style.background = '#fff';
        document.querySelector('#label1').style.padding = '0 4px';
        document.querySelector('#label1').style.transform = 'translate(-111px, -66px)';
    };
}

function Label2() {
    if (document.querySelector('#inputPassword').value == '') {
        document.querySelector('#label2').style.fontSize = '16px';
        document.querySelector('#label2').style.color = '#80868b';
        document.querySelector('#label2').style.background = 'transparent';
        document.querySelector('#label2').style.padding = '0';
        document.querySelector('#label2').style.transform = 'translate(-92px, -37px)';
    } else if (document.querySelector('#inputPassword').value != '') {
        document.querySelector('#label2').style.fontSize = '10px';
        document.querySelector('#label2').style.color = '#1a73e8';
        document.querySelector('#label2').style.background = '#fff';
        document.querySelector('#label2').style.padding = '0 4px';
        document.querySelector('#label2').style.transform = 'translate(-111px, -66px)';
    };
}

Label1();
Label2();