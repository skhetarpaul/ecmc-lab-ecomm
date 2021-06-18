// console.clear();

let contentTitle;

console.log(document.cookie);
function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

 

  let imgTag = document.createElement("img");
  // imgTag.id = 'image1'
  // imgTag.id = ob.photos
  imgTag.src = ob.image;
  imgTag.height = "200"
  imgTag.width = "100"

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.title);
  h3.appendChild(h3Text);
  let id = ob.id;
  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.category);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("$  " + ob.price);
  h2.appendChild(h2Text);


  let buttonDiv = document.createElement('div')
  buttonDiv.id = 'add-to-cart'

  let buttonTag = document.createElement('button')
  buttonDiv.appendChild(buttonTag)

  buttonText = document.createTextNode('Add to Cart')
  


  let h3Buy = document.createElement("h3");
  let boxLink = document.createElement("a");
  h3Buy.id = "add-to-cart"
  let h3BuyText = document.createTextNode("Add To Cart");
  h3Buy.appendChild(h3BuyText);
  h3Buy.onclick  =  function()
  {
    
    let order = id+" "
    let counter = 1
    if(document.cookie.indexOf(',counter=')>=0)
    {
        order = id + " " + document.cookie.split(',')[0].split('=')[1]
        counter = Number(document.cookie.split(',')[1].split('=')[1]) + 1
    }
    document.cookie = "orderId=" + order + ",counter=" + counter
    document.getElementById("badge").innerHTML = counter
    console.log(document.cookie)

  }
  buttonTag.appendChild(buttonText)
  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag); 
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);
  detailsDiv.appendChild(h3Buy)

  return boxDiv;
}

//  TO SHOW THE RENDERED CODE IN CONSOLE
// console.log(dynamicClothingSection());

// console.log(boxDiv)

let mainContainer = document.getElementById("mainContainer");
let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");
// mainContainer.appendChild(dynamicClothingSection('hello world!!'))

// BACKEND CALLING

let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status == 200) {
      // console.log('call successful');
      contentTitle = JSON.parse(this.responseText);
      if (document.cookie.indexOf(",counter=") >= 0) {
        var counter = document.cookie.split(",")[1].split("=")[1];
        document.getElementById("badge").innerHTML = counter;
      }
      for (let i = 0; i < contentTitle.length; i++) {
        if (contentTitle[i].category=="electronics") {
          console.log(contentTitle[i]);
          containerAccessories.appendChild(
            dynamicClothingSection(contentTitle[i])
          );
        } else {
          console.log(contentTitle[i]);
          containerClothing.appendChild(
            dynamicClothingSection(contentTitle[i])
          );
        }
      }
    } else {
      console.log("call failed!");
    }
  }
};
httpRequest.open(
  "GET",
  "https://fakestoreapi.com/products",
  true
);
httpRequest.send();
// https://fakestoreapi.com/products
// https://5d76bf96515d1a0014085cf9.mockapi.io/product