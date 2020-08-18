

function validation()
{
    var Fullname = document.getElementById("FName").value;
    var FGender = document.getElementById("Gender").value;
    var FAdd = document.getElementById("Address").value;
    var FEmail = document.getElementById("email").value;
    var FPhn = document.getElementById("PhnNo").value;
    var FLevel = document.getElementById("EduLevel").value;
    var FYear =document.getElementById("Year").value;
    var FPerc = document.getElementById("Perc").value;
    var FSkills =document.getElementById("Skills").value;
    var FRating = document.getElementById("Rating").value;
    var FHobbies =document.getElementById("Hobbies").value;
    var FPhoto = document.getElementById("Photo").value;
    var LError = document.getElementById("Error");
    var text;
    var RegxName = /^([a-zA-Z\s]{2,15})$/;
    var RegxEmail = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    var RegxPhn = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
    var RegxUrl =/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    
    


    if(!RegxName.test(Fullname))
    {
        text="Please enter valid Name"
        document.getElementById("Error").style.visibility="visible";
        document.getElementById("Error").innerHTML= text;
        return false;
    }

    else if (FAdd.length > 20)
    {
        text="Length of Address exceeds"
        document.getElementById("Error").style.visibility="visible";
        document.getElementById("Error").innerHTML= text;
        return false;
    }

    else if(!RegxEmail.test(FEmail))
    {
        text="Please enter valid Email"
        document.getElementById("Error").style.visibility="visible";
        document.getElementById("Error").innerHTML= text;
        return false;
    }
    else if(!RegxPhn.test(FPhn))
    {
        text="Please enter valid Phone Number"
        document.getElementById("Error").style.visibility="visible";
        document.getElementById("Error").innerHTML= text;
        return false;
    }

    else if(!RegxUrl.test(FPhoto))
    {
        text="Please enter valid URL"
        document.getElementById("Error").style.visibility="visible";
        document.getElementById("Error").innerHTML= text;
        return false;
    }

    //Setting Items To LocalHost

    var arr = [FLevel,FYear,FPerc];
    var arr2 =[FSkills,FRating];
    var Data = {Name:Fullname,
    Gender : FGender ,
    Address : FAdd , 
    Email : FEmail,
    Phone : FPhn , 
    Education : arr , 
    Skills : arr2, 
    Hobbies : FHobbies,
    Photo :  FPhoto
    }
    localStorage.setItem('Data',JSON.stringify(Data));

    



}


function removeLoc(){
localStorage.removeItem('Data');
}




function add(){

    // var tableRef = document.getElementById('EduTable').getElementsByTagName('tbody')[0];
    
    // // Insert a row in the table at the last row
    // var newRow   = tableRef.insertRow();
    
    // // Insert a cell in the row at index 0
    // var newCell  = newRow.insertCell(0);
    
    // // Append a text node to the cell
    // var tab=document.getElementById('EduTable').getElementsByTagName('tbody')[1];
    // var newText  = document.createTextNode(tab);
    // newCell.appendChild(newText);
    
    // }