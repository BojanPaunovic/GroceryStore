let inputBudget = document.getElementById('budget');

let confirmBtn = document.getElementById('confirm');

let checkSpan = document.querySelector('#check');

function redirect1() {
    location.href="shop.html";

    var inputBudgetValue = inputBudget.value;
    localStorage.setItem("inputBudgetValue", inputBudgetValue);
}

let groceryList = document.getElementById('list');

function redirect2() {
    location.href="payment.html";

    var groceryListDemo = groceryList.innerText;
    var groceryListContent = groceryListDemo.replace(/Delete/g, '');
    localStorage.setItem("List", groceryListContent);
}


let budgetValue = document.querySelector('#budgetValue');
budgetValue.innerHTML += localStorage.getItem("inputBudgetValue") +"RSD";


let itemName = document.querySelectorAll('#itemName');
let quantityInput = document.querySelectorAll('.items1 input[type="number"], .items2 input[type="number"]')
let submitBtns = document.querySelectorAll('.items1 button, .items2 button');
let price = {
    cucumber : 200,
    tomato : 320,
    broccoli : 400,
    mushrooms : 300,
    yellowOn : 130,
    redOn : 160
};

// Preuzmi vrednosti iz svakog span elementa
itemName.forEach((x) => {
    console.log(x.innerHTML);
});

let totalPrice = 0;
function calculateTotalPrice(x) {
    let totalPriceDiv = document.getElementById('totalPrice');
    totalPrice = totalPrice + x;
    totalPriceDiv.innerHTML = totalPrice +"RSD";
}

function check() {
    let proceedButton = document.querySelector('#proceed');

    if(localStorage.getItem("inputBudgetValue") >= totalPrice) {
        checkSpan.style.color = "green";
        checkSpan.style.background = "#fff";
        checkSpan.innerHTML += "You have enough money for this shopping.";

        proceedButton.style.display="block";
    }
    else {
        checkSpan.style.color = "red";
        checkSpan.style.background = "#fff";
        checkSpan.innerHTML += "You don't have enough money for this shopping.";

        proceedButton.style.display="none";
    }
}


let cucumberSubmit = document.getElementById('cucumberSubmit');
let tomatoSubmit = document.getElementById('tomatoSubmit');
let broccoliSubmit = document.getElementById('broccoliSubmit');
let mushroomsSubmit = document.getElementById('mushroomsSubmit');
let yellowOnSubmit = document.getElementById('yellowOnSubmit');
let redOnSubmit = document.getElementById('redOnSubmit');

cucumberSubmit.addEventListener('click', () => {
    let cucumberPriceTotal = price.cucumber * document.getElementById('quantityCucumber').value;

    let cartList = document.getElementById('list');
        cartList.innerHTML +=
        `<li class="cart-item">
        <h3><span>Item name:</span> Cucumber</h3>
        <h3><span>Quantity:</span> ${document.getElementById('quantityCucumber').value}KG</h3>
        <h3><span>Price:</span> ${cucumberPriceTotal}RSD</h3>
        <button onclick="Delete(this, ${cucumberPriceTotal})" class="delete">Delete</button>
        <br><br>
    </li><br>`;

    calculateTotalPrice(cucumberPriceTotal);
    checkSpan.innerHTML = "";
    check();
});


tomatoSubmit.addEventListener('click', () => {
    let tomatoPriceTotal = price.tomato * document.getElementById('quantityTomato').value;

    let cartList = document.getElementById('list');
        cartList.innerHTML +=
        `<li class="cart-item">
        <h3><span>Item name:</span> Tomato</h3>
        <h3><span>Quantity:</span> ${document.getElementById('quantityTomato').value}KG</h3>
        <h3><span>Price:</span> ${tomatoPriceTotal}RSD</h3>
        <button onclick="Delete(this, ${tomatoPriceTotal})" class="delete">Delete</button>
        <br><br>
    </li><br>`;

    calculateTotalPrice(tomatoPriceTotal);
    checkSpan.innerHTML = "";
    check();
});


broccoliSubmit.addEventListener('click', () => {
    let broccoliPriceTotal = price.broccoli * document.getElementById('quantityBroccoli').value;

    let cartList = document.getElementById('list');
        cartList.innerHTML +=
        `<li class="cart-item">
        <h3><span>Item name:</span> Broccoli</h3>
        <h3><span>Quantity:</span> ${document.getElementById('quantityBroccoli').value}KG</h3>
        <h3><span>Price:</span> ${broccoliPriceTotal}RSD</h3>
        <button onclick="Delete(this, ${broccoliPriceTotal})" class="delete">Delete</button>
        <br><br>
    </li> <br>`;

    calculateTotalPrice(broccoliPriceTotal);
    checkSpan.innerHTML = "";
    check();
});


mushroomsSubmit.addEventListener('click', () => {
    let mushroomsPriceTotal = price.mushrooms * document.getElementById('quantityMushrooms').value;

    let cartList = document.getElementById('list');
        cartList.innerHTML +=
        `<li class="cart-item">
        <h3><span>Item name:</span> Mushrooms</h3>
        <h3><span>Quantity:</span> ${document.getElementById('quantityMushrooms').value}KG</h3>
        <h3><span>Price:</span> ${mushroomsPriceTotal}RSD</h3>
        <button onclick="Delete(this, ${mushroomsPriceTotal})" class="delete">Delete</button>
        <br><br>
    </li><br>`;

    calculateTotalPrice(mushroomsPriceTotal);
    checkSpan.innerHTML = "";
    check();
});


yellowOnSubmit.addEventListener('click', () => {
    let yellowOnPriceTotal = price.yellowOn * document.getElementById('quantityYellowOn').value;

    let cartList = document.getElementById('list');
        cartList.innerHTML +=
        `<li class="cart-item">
        <h3><span>Item name:</span> Yellow Onion</h3>
        <h3><span>Quantity:</span> ${document.getElementById('quantityYellowOn').value}KG</h3>
        <h3><span>Price:</span> ${yellowOnPriceTotal}RSD</h3>
        <button onclick="Delete(this, ${yellowOnPriceTotal})" class="delete">Delete</button>
        <br><br>
    </li><br>`;

    calculateTotalPrice(yellowOnPriceTotal);
    checkSpan.innerHTML = "";
    check();
});


redOnSubmit.addEventListener('click', () => {
    let redOnPriceTotal = price.redOn * document.getElementById('quantityRedOn').value;

    let cartList = document.getElementById('list');
        cartList.innerHTML +=
        `<li class="cart-item">
        <h3><span>Item name:</span> Red Onion</h3>
        <h3><span>Quantity:</span> ${document.getElementById('quantityRedOn').value}KG</h3>
        <h3><span>Price:</span> ${redOnPriceTotal}RSD</h3>
        <button onclick="Delete(this, ${redOnPriceTotal})" class="delete">Delete</button>
        <br><br>
    </li><br>`;

    calculateTotalPrice(redOnPriceTotal);
    checkSpan.innerHTML = "";
    check();
});

function Delete(element, x) {
    let e = element.parentElement;
    let totalPriceDiv = document.getElementById('totalPrice');

    e.remove();
    
    totalPrice = totalPrice - x;
    totalPriceDiv.innerHTML = totalPrice +"RSD";

    checkSpan.innerHTML = "";
    check();
}

//Clear All function
function clearAll(){
    document.body.insertAdjacentHTML('beforeend',`<div class="modal">
    <div class="modal-content">
        <h2>Are you sure?</h2><br>
        <button id="yes">YES, delete all items from cart</button>
        &nbsp;&nbsp;
        <button id="no">NO, don't delete</button>
    </div> </div>`);
    
    let yes = document.getElementById('yes');
    let no = document.getElementById('no');

    yes.addEventListener('click', (z) => {
        let e = document.querySelectorAll('li');
        let totalPriceDiv = document.getElementById('totalPrice');
        document.querySelector('.modal').remove();

        e.forEach((x) =>{
            x.remove();
        });

        totalPrice = 0;
        totalPriceDiv.innerHTML = 0+"RSD";

        checkSpan.innerHTML = "";
        check();
    });

    no.addEventListener('click', (z) => {
        document.querySelector('.modal').remove();

        checkSpan.innerHTML = "";
        check();
    });
    
}


