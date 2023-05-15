
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

function search()
{
  let userInput2 = document.querySelector("#searchBox").value;
  switch(userInput2)
  {
    case "k10Pro": location.assign('k10Pro Page.html'); break;
    case "Keychron C2": location.assign('Keychron C2.html'); break;
    case "Keychron K8 Pro": location.assign('Keychron K8 Pro.html'); break;
    case "Zoom TKL Ess": location.assign('Zoom TKL Ess.html'); break;
    case "Keydous NJ80-AP": location.assign('Keydous NJ80-AP.html'); break;
    case "Gateron G Pro Blue": location.assign('Gateron G Pro Blue.html'); break;
    case "Akko CS Lavender Purple": location.assign('Akko CS Lavender Purple.html'); break;
    case "Akko CS Crystal Silver": location.assign('Akko CS Crystal Silver.html'); break;
    case "Gateron G Pro Brown": location.assign('Gateron G Pro Brown.html'); break;
    case "Gateron G Pro Red": location.assign('Gateron G Pro Red.html'); break;
    case "Lube": location.assign('Lube.html'); break;
    case "Switch Opener": location.assign('Switch Opener.html'); break;
    case "Switch Puller": location.assign('Switch Puller.html'); break;
    case "Coil Cable": location.assign('Akko V3 Cream Yellow Pro.html'); break;
    case "Cases": location.assign('Cases.html'); break;
    case "Palm Rest": location.assign('Palm Rest.html'); break;
    default: alert("Goes nowhere");
  }



}