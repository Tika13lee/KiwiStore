function myFunction(){
    let name = document.getElementById(fullname).value;
    let text;
    if(name === ""){
        text = "Vui long dien ten";
        document.getElementById("demo").innerHTML = text;
    }
}