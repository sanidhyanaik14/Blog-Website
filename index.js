const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    const query = searchInput.value.toLowerCase().trim(); // Get and clean the search input
  
//function handleEvent(){
        if(query==="Artificial Intelligence & Machine learning" || query=== "ai"||query=== "ml"){
            window.location.href="ai.html";
        }
        else if(query==="cloud computing" || query=== "devops"||query=== "cloud"){
            window.location.href="cloud.html";
        } else if (query==="cybersecurity"||query==="cyber") { 
            window.location.href="cybersecurity.html";
        }else if (query==="europe") { 
            window.location.href="europe.html";
        }
        else if (query==="asia") { 
            window.location.href="asia.html";
        }else if (query==="africa") { 
            window.location.href="africa.html";
        }
        else{
            alert("Enter Valid input");
        }
   // }
  });

  //ai comment

    