alert("Are you want to calculate?");





function productPriceCalculation(){
    let product_price = document.getElementById("productprice").value;

    let product_qut = document.getElementById("productqut").value;

    let total_price = document.getElementById("totalprice").value=product_price*product_qut;

    let discoutn_rate = 10;
    let installment_payment = 4;

    let discountRate_on_total_sale = document.getElementById("discountrate").value = ((total_price*discoutn_rate)/100 );

    let after_discount_total_sale = document.getElementById("afterdiscounttotalsale").value = ((total_price-discountRate_on_total_sale));

    let installment_pay = document.getElementById("installmentpay").value = ((after_discount_total_sale/installment_payment));
}