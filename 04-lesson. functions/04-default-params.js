let userName = "Marina";

let greetUser = (name = "Sara", status = "Guest", age = 18) => {
    console.log(`Hello: ${name} status: ${status}, age: ${age}`);
};

// greetUser("Sveta");
greetUser("Sveta", "Admin");
