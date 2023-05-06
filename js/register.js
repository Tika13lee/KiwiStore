function ktFullname(){
    let name = document.getElementById('fullname').value;
    let patten = /^[a-zA-Z]+$/;
    if(patten.test(name)){
        document.getElementById('errfullname').innerHTML = "";
        return true; 
    }else {
        document.getElementById('errfullname').innerHTML = "Không hợp lệ";
        return false; 
    }
}
function ktphone(){
    let sdt = document.getElementById('phone-number').value;
    let patten = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if(patten.test(sdt)){
        document.getElementById('errsdt').innerHTML = "";
        return true;
    }else {
        document.getElementById('errsdt').innerHTML = "Số điện thoại không hợp lệ";
        return false;
    }
}
function ktusername(){
    let uname = document.getElementById('username').value;
    let patten = /\b/;
    if (patten.test(uname)) {
        document.getElementById('errusername').innerHTML = "";
        return true;
    } else {
        document.getElementById('errusername').innerHTML = "Không hợp lệ";
        return false;
    }
}
function ktMK(){
    let mk = document.getElementById('psw').value;
    let patten = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ ;
    if (patten.test(mk)) {
        document.getElementById('errpsw').innerHTML = "";
        return true;
    } else {
        document.getElementById('errpsw').innerHTML = "Bao gồm cả chữ hoa, chữ thường, số, ký tự đặc biệt và ít nhất 8 ký tự";
        return false;
    }  
}
function ketqua(){
    if(ktFullname() && ktphone() && ktusername() && ktMK()){
        let name = document.getElementById('fullname').value;
        let sdt = document.getElementById('phone-number').value;
        let uname = document.getElementById('username').value;
        let mk = document.getElementById('psw').value;

        let members = localStorage.getItem('members') ? JSON.parse(localStorage.getItem('members')) : [];

        members.push({
            name: name,
            sdt: sdt,
            uname: uname,
            mk: mk,
        });
        localStorage.setItem('members',JSON.stringify(members));
    }
}