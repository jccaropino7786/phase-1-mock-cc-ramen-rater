// / write your code here
//1. get ramen
//2.
const ramenMenu = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")
// function updateRamenDetail(){
//     return ramenData
// }
//DISPLAY RAMEN DATA at top of page FUNCTION
const displayRamenTop = (ramenData) => {
const ramenImg = document.createElement("img")
ramenImg.src = ramenData.image
ramenMenu.appendChild(ramenImg)
}
//fetch function getRamensObj
function getRamensObj() {
  fetch('http://localhost:3000/ramens')
  // .then(res => console.log(res))
  .then(res => res.json())
  // .then(ramenData => console.log(ramenData))
  .then(ramenData => ramenData.forEach(displayRamenTop))
}
getRamensObj()
function getSingleRamen() {
  fetch('http://localhost:3000/ramens')
  // .then(res => console.log(res))
  .then(res => res.json())
  .then(ramenData => console.log(ramenData[0]))
  // .then(ramenData => ramenData[0])
}
const displayRamenMain = (ramenData) => {
  const insertDetailImage = document.querySelector("#ramen-detail > img")
  replace(insertDetailImage.src, ramenData.image)
  // const insertDishName
  // const insertResturantName
  // const ramenImg = document.createElement("img")
  // ramenImg.src = ramenData.image
   // ramenMenu.appendChild(ramenImg)
}
 getSingleRamen()
// UPDATE AN IMAGE ramenDetail is the container
const clickImg = document.querySelectorAll("img").addEventListener('click', e => {
})
 
 

