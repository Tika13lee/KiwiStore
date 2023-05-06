function ketqua(){
    event.preventDefault();
    var uname = document.getElementById("txtUser").value;
    var mk = document.getElementById("pwd").value; 
    var user = localStorage.getItem(uname);
    var data = JSON.parse(user);
    if(data == null){
        alert("Tài khoản không tồn tại")
    }
    else if(uname == data.uname && mk == data.mk){
        var json = JSON.stringify(uname);
        localStorage.setItem('tam',json);
        window.location.href="TrangChu.html"
    }
    else if(uname != data.uname || mk != data.mk){
        alert("Tên hoặc mật khẩu không chính xác")
    }
}