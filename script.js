//your JS code here. If required.
let pannel=document.querySelectorAll(".panel");
pannel.forEach((e)=>{
  e.addEventListener("click",func)
})
function func(e)
{
  document.querySelectorAll(".panel").forEach((item)=>{
    if(item.classList.contains("active"))
    {
      item.classList.remove("active")
    }
  })
  // e.classList().toggle("active");
  e.target.classList.add("active");
  // e.target.children[0].style.display="block";
}
