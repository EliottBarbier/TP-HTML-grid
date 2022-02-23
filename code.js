document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  let mon_ul = document.getElementById("compteur")
 
  mon_gosse1=document.createElement("li")
  mon_gosse1.innerHTML = "Original Squares : 30"
  mon_ul.appendChild( mon_gosse1)
  
  mon_gosse2=document.createElement("li")
  mon_gosse2.innerHTML = "Clicked Squares : 0"
  mon_ul.appendChild( mon_gosse2)
  
  mon_gosse3=document.createElement("li")
  mon_gosse3.innerHTML = "Blue Squares : 0"
  mon_ul.appendChild( mon_gosse3)
  
  mon_gosse4=document.createElement("li")
  mon_gosse4.innerHTML = "Total squares : " + document.querySelectorAll("#grid > div").length
  mon_ul.appendChild( mon_gosse4)
  
  function comptage(){
    mon_gosse2.innerHTML = "Clicked Squares : " + document.querySelectorAll(".cliqué").length
    mon_gosse3.innerHTML =  "Blue Squares : " + document.querySelectorAll(".est_blue").length
    mon_gosse4.innerHTML =  "Total Squares : " + document.querySelectorAll("#grid > div").length
    mon_gosse1.innerHTML = "Original Squares : " + (document.querySelectorAll("#grid > div").length - document.querySelectorAll(".est_blue").length - document.querySelectorAll(".cliqué").length)

  }


  setInterval(comptage, 500) //EXECUTION DE COMPTAGE TOUTES LES 500ms, plus simple que de mettre dans tous les events, mais moins du tac au tac


  document.getElementById("btn-remove-line").addEventListener("click", () => {let ma_grid = document.getElementById("grid") 
  let longueur= ma_grid.childNodes.length
  for(let k=1;k<=10;k++){
    ma_grid.removeChild( ma_grid.childNodes[longueur-k] )
  }
  comptage()
})


  document.getElementById("btn-add-line").addEventListener("click",() => { let ma_grid = document.getElementById("grid")
  for(let i=1;i<=10;i++){
    let mon_gosse = document.createElement("div")
    ma_grid.appendChild(mon_gosse)

    //Changement des carrés ajoutés :
    document.getElementById("grid").childNodes.forEach( (child) => {

      child.addEventListener("mouseenter", (event) => {
        if(child.className=='cliqué'){
        }
        else{
        child.className='est_blue'
        event.srcElement.style.backgroundColor='blue';}
        comptage()
      });
  
      child.addEventListener("click", (event) => {
        child.className="cliqué";
        event.srcElement.style.backgroundColor=getRandomColor();
        comptage()
      
      }) } )
    
    comptage()
  

  }
  
})

  //Changement des carrés de bases
  document.getElementById("grid").childNodes.forEach( (child) => {

    child.addEventListener("mouseenter", (event) => {
      if(child.className=='cliqué'){
      }
      else{
      child.className='est_blue'
      event.target.style.backgroundColor='blue';}
      comptage()
      
    });

    child.addEventListener("click", (event) => {
      child.className="cliqué";
      event.srcElement.style.backgroundColor=getRandomColor();
      comptage()
    })
    
  } )

// Mois nrubuste :   document.getElementById("grid").childNodes.forEach( (child) => { child.addEventListener("click", () => {child.style.backgroundColor="red"}) } )

  // Hey! Pssst! In here ...
});


/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();

  }

  
  }

//OU

//(#grid > div).addEventListener('click', () )

//function line(){
//let ma_grid = document.getElementById("grid")
//for( let i=1;i<=10;i++){
//  let mon_gosse = document.createElement("div")
//  ma_grid.appendChild(mon_gosse)
//}
//}
