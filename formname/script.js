function formName(event) {
    event.preventDefault();
    let name = document.getElementById("name_form");
    let Fname = name[0].value;
    let Lname = name[1].value;
    let Pname = document.getElementById("Pname");
    Pname.setAttribute('style', 'white-space: pre;');
    Pname.textContent = "First Name : "+Fname+ "\r\n" 
    Pname.textContent += "Last Name : "+Lname;
}