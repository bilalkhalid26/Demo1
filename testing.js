


let h2 = document.querySelector("h2");
  console.dir(h2.innerText);
  h2.innerText = h2.innerText +  " wlcome from apna college";

  let divs = document.querySelectorAll(".box");
 
  idx = 1;
  for(div of divs){
    div.innerText = ` new unique value ${idx}`;
    idx++;
  }
   