function updateQuantity(elementId, isIncrease) {
    const element = document.getElementById(elementId);
    let elementValue = parseInt(element.value);
    if (isIncrease === true) {
        return elementValue = elementValue + 1;
    } else {
        if (elementValue != 0) {
            return elementValue = elementValue - 1;
        } else {
            alert("you cant make negative quantity");
            return elementValue;
        }
    }
}
function setValue(elementId, value) {
    document.getElementById(elementId).value = value;
}
function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;
}
function getElementValueById(elementId) {
    const elementValueString = document.getElementById(elementId).innerText;
    const value = parseFloat(elementValueString);
    return value;
}
function singleProductTotal(containerId, singleProductPrice, quantity) {
    // single product price update
    const singleProductTotalContainer = document.getElementById(containerId);
    const SinglePorductTotalPrice = singleProductPrice * quantity;
    singleProductTotalContainer.innerText = SinglePorductTotalPrice;
}
function singleProductTotalById(elementId) {
    const singleProductTotalValueInString = document.getElementById(elementId).innerText;
    const singleProductTotal = parseInt(singleProductTotalValueInString);
    return singleProductTotal;

}
function subTotal() {
    const phoneTotal = singleProductTotalById("phone-product-total");
    const caseTotal = singleProductTotalById("case-product-total");
    const subTotal = phoneTotal + caseTotal;
    setInnerText("sub-total", subTotal);
}
function tax() {
    let subTotal = document.getElementById("sub-total").innerText;
    subTotal = parseInt(subTotal);
    let tax = (subTotal * 0.1).toFixed(2);
    setInnerText("tax", tax);
}
function total() {
    let subTotal = getElementValueById("sub-total")
    let tax = getElementValueById("tax")
    const total = subTotal + tax;
    setInnerText("total", total);
}