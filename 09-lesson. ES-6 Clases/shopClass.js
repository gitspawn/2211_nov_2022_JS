//  Shop Class

class Shop {
    constructor(title, items) {
        this.title = title;
        this.items = items;
    }
    showItems() {
        for (const item of this.items) {
            console.log(
                `name: ${item.name}, price: ${item.price}, qty: ${item.qty}`
            );
        }
    }

    addItem(newItem) {
        this.items.push(newItem);
    }

    updateItem(productName, newName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.name = newName;
            }
        }
    }

    removeItem(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                let idx = this.items.indexOf(item);
                this.items.splice(idx, 1);
            }
        }
    }
}

let items = [
    { id: "1", name: "bananes", price: 25, qty: 150, category: "fruits" },
    { id: "2", name: "apples", price: 18, qty: 450, category: "fruits" },
    { id: "3", name: "potato", price: 10, qty: 850, category: "vegetables" },
    { id: "4", name: "tomatoes", price: 35, qty: 378, category: "vegetables" },
];

const ATB = new Shop("ATB", items);
const Silpo = new Shop("Silpo", items);
const Novus = new Shop("Novus", items);
const Fora = new Shop("Fora", items);

// console.log(ATB);

// ATB.removeItem("apples");
// ATB.showItems();
