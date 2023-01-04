/* function onSubmit() {
    var name = document.getElementById("formName").value.trim();
    var email = document.getElementById("formEmail").value.trim();
    var message = document.getElementById("formMessage").value.trim();
    if (name == '' || email == '' || message == '') {
      alert('Please fill out all the required fields');
      return false;
    }
    // regex got from w3 schools
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(regex.test(email) === false){
      alert('invalid email adress');
      return false;
     }
     alert('success')
    console.log(name, email, message)
  }
 */