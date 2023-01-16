let items = [
    { id: "1", name: "bananes", price: 25, qty: 150, category: "fruits" },
    { id: "2", name: "apples", price: 18, qty: 450, category: "fruits" },
    { id: "3", name: "potato", price: 10, qty: 850, category: "vegetables" },
    { id: "4", name: "tomatoes", price: 35, qty: 378, category: "vegetables" },
];

let shop = {
    title: "ATB",
    items,

    showItems() {
        // console.log(this.items);
        for (const item of this.items) {
            // console.log(item);
            console.log(
                `name: ${item.name}, price: ${item.price}, qty: ${item.qty}`
            );
        }
    },

    addItem(newItem) {
        this.items.push(newItem);
    },

    updateItem(productName, newName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.name = newName;
            }
        }
    },

    removeItem(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                // console.log("Found");
                let idx = this.items.indexOf(item);
                // console.log(item);
                // console.log(idx);
                this.items.splice(idx, 1);
            }
        }
    },
};

const pear = {
    id: "5",
    name: "pear",
    price: 50,
    qty: 754,
    category: "fruits",
};

// shop.addItem(pear);
// shop.updateItem("apples", "apples++");
shop.removeItem("apples");
shop.showItems();
