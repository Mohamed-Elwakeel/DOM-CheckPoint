let addToCartBtn = document.getElementsByClassName("btn-primary");
let mainContainer = document.getElementsByTagName('tbody')[0];
let priceField = document.getElementsByClassName('num');
let removeBtn = document.getElementsByClassName('uk-button-danger');




for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", addToCart);
}

function addToCart(e) {
    let btn = e.target;
    let btnGrandParent = btn.parentElement.parentElement;
    let btnParent = btn.parentElement;
    let itemImage = btnGrandParent.children[0].src;
    let itemName = btnParent.children[0].innerText;
    let itemPrice = btnParent.children[1].innerText;

    let itemContainer = document.createElement("tr");

    itemContainer.innerHTML = `
        <td><input class="uk-checkbox" type="checkbox"></td>
        <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
        <td class="uk-table-link">
            <h3 class = "item-name">${itemName}</h3>
        </td>
        <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
        <td><input type = 'number' class = 'num' value = '1'></td>
        <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
        <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>
    `;

    mainContainer.append(itemContainer);

    for (let i = 0; i < priceField.length; i++) {
        priceField[i].addEventListener("click", updateTotal);
    }

    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener("click", removeItem);
    }
    

    groundTotal ()

}

function updateTotal(e) {
    let numOfItems = e.target;
    let numOfItemsParent = numOfItems.parentElement.parentElement;
    let priceField = numOfItemsParent.getElementsByClassName('item-price')[0];
    let totalField = numOfItemsParent.getElementsByClassName('total-price')[0];
    let priceFieldContent = priceField.children[0].innerText.replace('$', '');
    totalField.children[0].innerText = '$' + numOfItems.value * priceFieldContent;

    if (numOfItems.value <= 0 ) {
        numOfItems.value = 1;
    }

    groundTotal ()

}

function groundTotal () {
    let total = 0;
    let grandTotal = document.getElementsByClassName('grand-total')[0];
    let totalPrice = document.getElementsByClassName('total-price');

    for (let i = 0; i < totalPrice.length; i++) {
        totalPriceContent = Number(totalPrice[i].innerText.replace('$', ''));
        total += totalPriceContent;
    }

    grandTotal.children[0].innerText = '$' + total;
}

function removeItem(e){
    removeBtn = e.target;
    removeBtnGrandparent = removeBtn.parentElement.parentElement;
    removeBtnGrandparent.remove();
    groundTotal ();
}


