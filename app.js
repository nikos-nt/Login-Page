let objPeople=[
    {   
        username:"nikos",
        password:"nikos123"
    },
    {   username:"panos",
        password:"panos123"
    },    
    {   username:"elena",
        password:"elena123"
    }
]

function getInfo(){
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    for(i=0; i<objPeople.length; i++)
    {
        if(username==objPeople[i].username && password == objPeople[i].password)
        {
            alert("Welcome " + username + "!");
            return false;
        }
        else{
            alert("Login failed!");
        }
    }
    
}