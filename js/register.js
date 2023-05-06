function ktFullname(){
    let name = document.getElementById('fullname').value;
    let patten = /^[a-zA-Z ]+$/;
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
        event.preventDefault();
        var name = document.getElementById('fullname').value;
        var sdt = document.getElementById('phone-number').value;
        var uname = document.getElementById('username').value;
        var mk = document.getElementById('psw').value;

        var user = {
            name : name,
            sdt : sdt,
            uname : uname,
            mk : mk
        }
        var key = localStorage.getItem(uname);
        var data = JSON.parse(key);
        if(data == null){
            if(name =="" && sdt == "" && uname == "" && mk ==""){
                alert("Nhập đủ các trường");
            } else {
                   var json = JSON.stringify(user);
                   localStorage.setItem(uname, json);
                   alert("Đăng ký thành công")
                   window.location.href=('DangNhap.html')
            }
        } else if (uname == data.uname){
            alert("Tên đăng nhập đã tồn tại")
        }
    }
}