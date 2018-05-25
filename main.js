var cardNumber = 1;

function createCard(){
    
    console.log("button clicked");
    var text = document.getElementById("input").value;
    var newCard = document.createElement("div");
    newCard.className = cardNumber + "card";
    var input1 = document.createElement("select");
    input1.id = "input1";
    input1.className = cardNumber;
    var input2 = document.createElement("select");
    input2.id = "input2";
    input2.className = cardNumber;
    var deleteButton = document.createElement("button");
    deleteButton.className = cardNumber;

    

    function deleteCard(e){
        console.log(document.getElementsByClassName(e.currentTarget.className));

        document.getElementsByClassName(e.currentTarget.className + "card").item(0).remove();
    }

    deleteButton.addEventListener("click", deleteCard);

    newCard.style.width = "500px";
    newCard.style.height= "400px";
    newCard.style.backgroundColor = "teal";
    newCard.style.border = "2px solid black";
    newCard.style.borderRadius = "8px";

    function populateOptions(target, options){
        for(let i = 0; i < options.length; i++){
            let newElement = document.createElement("option");
            newElement.value = options[i];
            newElement.text = options[i];
            newElement.className = cardNumber;
            target.appendChild(newElement);       
        }
        function change(x){
            if(x.target.value != "select color"){
                let a = x.target.value;
                let b = x.target.className;
                console.log(a);
                if(x.target.id === "input1"){
                    document.getElementsByClassName(b+"card").item(0).style.backgroundColor = a;
                    console.log("input1");
                }else {
                    document.getElementsByClassName(b+"paragraph").item(0).style.color = a;
                    console.log("input2");
                }
            }
        }

        target.addEventListener("click", change)
    }
    
    var colors = ["select color", "Red", "Blue", "Green", "Black", "White", "Yellow"]

    populateOptions(input1, colors);
    populateOptions(input2, colors);

    var deleteText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteText);

    var paragraph = document.createElement("p");
    paragraph.className = cardNumber + "paragraph";
    var paragraphText = document.createTextNode(text);
    paragraph.appendChild(paragraphText);
    paragraph.style.marginLeft = "20px";

    newCard.appendChild(input1);
    newCard.appendChild(input2);
    newCard.appendChild(deleteButton);
    newCard.appendChild(paragraph);

    document.getElementById("empty").appendChild(newCard);
    newCard.id = "newCard";
    
   cardNumber++;
}






document.getElementById("button").addEventListener("click", createCard);
