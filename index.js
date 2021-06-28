window.onload = function(){

  const title = document.querySelectorAll(".title");
  const text = document.querySelectorAll(".text");
  const information = document.querySelectorAll(".information");
  const description = document.querySelectorAll(".description");


  document.querySelector("input").addEventListener('change', function(e){
    
    if (e.target.checked){
      title.classList.remove("title");
      title.classList.add("title dark-mode");
      text.classList.remove("text");
      text.classList.add("text dark-mode");
      information.classList.remove("information");
      information.classList.add("information dark-mode");
      description.classList.remove("description");
      description.classList.add("description dark-mode");
    }
  
  })
}