console.clear();
console.log(document.cookie, "here is the cookie data")
if(document.cookie.indexOf(',counter=')>=0)
{
    let counter = document.cookie.split(',')[1].split('=')[1]
    document.getElementById("badge").innerHTML = counter
}


let cartContainer = document.getElementById('cartContainer')

let boxContainerDiv = document.createElement('div')
boxContainerDiv.id = 'boxContainer'

// DYNAMIC CODE TO SHOW THE SELECTED ITEMS IN YOUR CART
function dynamicCartSection(ob,itemCounter)
{
    let boxDiv = document.createElement('div')
    boxDiv.id = 'box'
    boxContainerDiv.appendChild(boxDiv)

    let boxImg = document.createElement('img')
    boxImg.src = ob.image
    boxDiv.appendChild(boxImg)

    let boxh3 = document.createElement('h3')
    let h3Text = document.createTextNode(ob.title + ' × ' + itemCounter)
    // let h3Text = document.createTextNode(ob.name)
    boxh3.appendChild(h3Text)
    boxDiv.appendChild(boxh3)

    let boxh4 = document.createElement('h4')
    let h4Text = document.createTextNode('Amount: $' + ob.price + " USD")
    
    boxh4.appendChild(h4Text)
    
    boxDiv.appendChild(boxh4)

    // console.log(boxContainerDiv);

    buttonLink.appendChild(buttonText)
    cartContainer.appendChild(boxContainerDiv)
    cartContainer.appendChild(totalContainerDiv)


    return cartContainer
}

let totalContainerDiv = document.createElement('div')
totalContainerDiv.id = 'totalContainer'

let totalDiv = document.createElement('div')
totalDiv.id = 'total'
totalContainerDiv.appendChild(totalDiv)

let totalh2 = document.createElement('h2')
let h2Text = document.createTextNode('Total Amount')
totalh2.appendChild(h2Text)
totalDiv.appendChild(totalh2)

// TO UPDATE THE TOTAL AMOUNT
function amountUpdate(amount)
{
    let totalh4 = document.createElement('h4')
    // let totalh4Text = document.createTextNode(amount)
    let totalh4Text = document.createTextNode('Amount: $ ' + amount + " USD")
    totalh4Text.id = 'toth4'
    totalh4.id = 'amountinh4'
    let buttonDiv2 = document.createElement('button')
    buttonDiv2.id = 'button2'

    let convertText = document.createTextNode("Convert to CAD")
    buttonDiv2.appendChild(convertText)
    
    convertText.id = 'toCAD'
    totalh4.appendChild(totalh4Text)
    let flagCAD = 0
    
    buttonDiv2.onclick  =  function()
    {   if (flagCAD===0){
            let cad = 1.21*amount;
            cad = cad.toFixed(2)
            flagCAD = 1
            console.log(cad)
            document.getElementById('amountinh4').innerHTML = 'Amount: $ ' + cad + " CAD"
            document.getElementById('button2').innerHTML = 'Convert To USD'
        }
        else{

            flagCAD = 0
            document.getElementById('button2').innerHTML = 'Convert To CAD'
            document.getElementById('amountinh4').innerHTML = 'Amount: $ ' + amount + " USD"
        }
        
    }
    totalDiv.appendChild(totalh4)
    totalDiv.appendChild(buttonDiv2)
    totalDiv.appendChild(buttonDiv)
    console.log(totalh4);
}


let buttonDiv = document.createElement('div')
buttonDiv.id = 'button'
totalDiv.appendChild(buttonDiv)

let buttonTag = document.createElement('button')
buttonDiv.appendChild(buttonTag)

let buttonLink = document.createElement('a')
buttonLink.href = 'payment.html'
buttonTag.appendChild(buttonLink)

buttonText = document.createTextNode('Place Order')
buttonTag.onclick = function()
{
    console.log('clicked')
    window.location = "payment.html";
}  

// BACKEND CALL
let httpRequest = new XMLHttpRequest()
let totalAmount = 0
httpRequest.onreadystatechange = function()
{
    if(this.readyState === 4)
    {
        if(this.status == 200)
        {
            // console.log('call successful');
            contentTitle = JSON.parse(this.responseText)

            let counter = Number(document.cookie.split(',')[1].split('=')[1])
            document.getElementById("totalItem").innerHTML = ('Total Items: ' + counter)

            let item = document.cookie.split(',')[0].split('=')[1].split(" ")
            console.log(counter)
            console.log(item)

            let i;
            let totalAmount = 0
            for(i=0; i<counter; i++)
            {
                let itemCounter = 1
                for(let j = i+1; j<counter; j++)
                {   
                    if(Number(item[j]) == Number(item[i]))
                    {
                        itemCounter +=1;
                    }
                }
                totalAmount += Number(contentTitle[item[i]-1].price) * itemCounter
                dynamicCartSection(contentTitle[item[i]-1],itemCounter)
                i += (itemCounter-1)
            }
            amountUpdate(totalAmount)
        }
    }
        else
        {
            console.log('call failed!');
        }
}

httpRequest.open('GET', 'https://fakestoreapi.com/products', true)
httpRequest.send()




