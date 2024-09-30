 function SendMail() {
    let params = {
      from_name : document.getElementById("fullname").value,
      email_id : document.getElementById("email").value,
      message : document.getElementById("message").value
    }
  
    const serviceID = "service_cwjmjoc";
    const templateID = "template_hirfbao";
  
  
    emailjs.send(serviceID, templateID, params).then(function (res) {
      document.getElementById("fullname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("Success!");
    })
    .catch(err=>console.log(err));

    
  }


