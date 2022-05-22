function seterror(id, error) {
    Element = document.getElementById(id);
    Element.getelementbyid('formerror')[0].innerhtml = error;
}


function formvalidation(){
    returnval = true;
    var name = document.forms['myform']['fname'].value;
    console.log(name);
    if (name.length < 5) {
        seterror("fname", "*invalid name")
        returnval = false;
    }
    if (name.length == 0) {
        seterror("fname", "*name cannot be empty")
        returnval = false;
    }

    //for last name
    var lname = document.forms['myform']['lname'].value;
    if (lname.length<5) {
        seterror("lname", "*not valid");
        returnval = false;
    }
    if (lname.length == 0) {
        seterror("lname", "*not valid");
        returnval = false;
    }
    //for age verification
    var age=document.forms['myofrm']['age'].value;
    if (age < 20) {
        seterror("age", "you need parent confirmation to proceed furthur")
        returnval = false;
    }
    if (age < 18) {
        seterror("age", "you are not eligible yet")
        returnval = false;
    }
}
