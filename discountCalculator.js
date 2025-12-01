function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = pricePerItem * quantity
  

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}



module.exports = calculateDiscountedPrice;