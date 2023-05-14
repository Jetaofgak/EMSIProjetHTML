
function connection()
{
    let userInput = document.querySelector("#fname").value;
    let mdpInput = document.querySelector("#mdp").value;

    if(userInput == "Jeta" && mdpInput == "Jeta")
    {
      location.assign('Main Page.html');

    }
    else
    {
        alert(userInput + " and " + mdpInput);
    }
        
}