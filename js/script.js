// cart quantity update 
document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const quantity = updateQuantity("phone-quantity", true);
    setValue("phone-quantity", quantity);

    // single product price update
    const SingleProductPrice = 1219;
    singleProductTotal("phone-product-total", SingleProductPrice, quantity);

    // subtotal 
    subTotal();

    // tax
    tax();

    // final total 
    total();


});
document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const quantity = updateQuantity("phone-quantity", false);
    setValue("phone-quantity", quantity);

    // single product price update
    const SingleProductPrice = 1219;
    singleProductTotal("phone-product-total", SingleProductPrice, quantity);

    // subtotal 
    subTotal();

    // tax
    tax();

    // final total 
    total();
});
document.getElementById("btn-case-plus").addEventListener("click", function () {
    const quantity = updateQuantity("case-quantity", true);
    setValue("case-quantity", quantity);

    // single product price update
    const SingleProductPrice = 59;
    singleProductTotal("case-product-total", SingleProductPrice, quantity);

    // subtotal 
    subTotal();

    // tax
    tax();

    // final total 
    total();
});
document.getElementById("btn-case-minus").addEventListener("click", function () {
    const quantity = updateQuantity("case-quantity", false);
    setValue("case-quantity", quantity);

    // single product price update
    const SingleProductPrice = 59;
    singleProductTotal("case-product-total", SingleProductPrice, quantity);

    // subtotal 
    subTotal();

    // tax
    tax();

    // final total 
    total();
});
