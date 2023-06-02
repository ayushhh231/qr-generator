function genQR(){
    var gapi = "https://api.qrserver.com/v1/create-qr-code/?size=";
    var myimg = document.getElementById("img");
    var text = document.getElementById("qrText").value;
    var size = document.getElementById("size").value;
    

     if(text !== "" && size == "150"){
        myimg.src = gapi+ "150x150"+"&data="+text;
        // https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=Hello%20World
    }
    else if(text !== "" && size == "200"){
        myimg.src = gapi+ "250x250"+"&data="+text;
    }
    if(text !== "" && size == "250"){
        myimg.src = gapi+ "250x250"+"&data="+text;
    }
    
    else if(text !== "" && size == "300"){
        myimg.src = gapi+ "300x300"+"&data="+text;
    }
    

}