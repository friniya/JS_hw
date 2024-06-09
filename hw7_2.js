var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    
    price() {
        let totalPrice = 0;
        for (const key in this) {
            if (typeof this[key] !== "function") {
                totalPrice += Number.parseFloat(this[key].split(' ')[0]);
            }
        }
        return totalPrice;
    },
    
    getMinPrice() {
        let minPrice = Number.parseFloat(this['стрижка']);
        for (const key in this) {
            if (typeof this[key] !== "function" && Number.parseFloat(this[key]) < minPrice) {
                minPrice = Number.parseFloat(this[key]);
            }
        }
        return minPrice;
    },
    
    getMaxPrice() {
        let maxPrice = Number.parseFloat(this['стрижка']);
        for (const key in this) {
            if (typeof this[key] !== "function" && Number.parseFloat(this[key]) > maxPrice) {
                maxPrice = Number.parseFloat(this[key]);
            }
        }
        return maxPrice;
    }
};

console.log("Общая стоимость: " + services.price() + " грн");
console.log("Минимальная стоимость: " + services.getMinPrice() + " грн");
console.log("Максимальная стоимость: " + services.getMaxPrice() + " грн");