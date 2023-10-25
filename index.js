function sendMail() {
    var params ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
        phoneNumber:document.getElementById("phoneNumber").value,
    };
    
const serviceID = "service_qixvn99";
const templateID = "template_ot8rcsk"

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        document.getElementById("phoneNumber").value="";
        console.log(res);
        alert("Your message is sent successfully")
    }
)
.catch((err) => console.log(err));
}
