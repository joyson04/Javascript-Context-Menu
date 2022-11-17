let dropdown = document.querySelector('.dropdown')||docment.getElementsByTagName("dropdown")[0];
let isDropdown = false;
let isOpened = false

document.oncontextmenu = (e) => {
 e.preventDefault();
 
 
  if (isDropdown == false){ 
     dropdown.style.width = "100px";
     dropdown.style.height="150px";
	 console.log(e.offsetX+"px",e.offsetY+"px")
	 dropdown.style.marginLeft= e.offsetX+'px' 
     dropdown.style.marginTop= e.offsetY+'px'
	  isOpened = true;
  }else isDropdown = false;
  
  
  
};
dropdown.oncontextmenu = (e) => {
  e.preventDefault();
  isDropdown = true;
};
document.onclick = (e) => {
   if(!isDropdown){
  dropdown.style.width="0px"
  dropdown.style.height="0px";
   }
};

