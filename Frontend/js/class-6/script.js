console.log("Hey i am js");


const product = {
    id: 1001,
    name: "Smartphone",
    isAvailable: true,
    details: {
        manufacturer: "TechCorp",
        specs: {
            processor: "Octa-core 2.2GHz",
            memory: {
                ram: "8GB",
                colors: ["black", "silver", "blue"],
                "data-info": {
                    idf: 780,
                    user: {
                        name: "Lakhan",
                        kaam: "Nachna ",
                        colors: ["black", 24, 8.908, undefined],
                        123: function() {
                            console.log("hey karan namo namo ");
                        }
                    },
                    greet: function() {
                        console.log("Hey i am bot");
                    }
                },
                storage: "128GB",
                dimensions: {
                    getSum: function(a, b) {
                        return a + b;
                    },
                    width: "70mm"
                },
                height: "150mm",
            },

        },
        colors: ["black", "silver", "blue"]
    },
    tags: ["electronics", "mobile", "gadget"]
};



console.log(product.details.specs.memory["data-info"].user["123"]());



// let arr = ["Mohan", { id: 101, name: "Karan" }, 500, [9.6, 8.9, 7.8]];



let arr = ["Mohan", { id: 101, kam: "Hashna" }, 500, [9.6, 9.7, 9.8]];

console.log(arr[1].kam);



let tanishq = ["name", 3.5, "viashnav Dham", {
    place: "jammu",
    date: "26 / 05 / 2025",
    family: ["father", "mother", [50000, "prasad", {

        wapsaayga: true,
        ladaiakrega: "nhi",
        chalo: {
            temple: "Mahakal"
        }
    }]]
}]


console.log(tanishq[3].family[2][2].ladaiakrega);




let user = [3.5, false, undefined, null, 348, "Mukesh", "mu", {

    id: 101,
    name: "avraj",
    skills: ["MErn", "javafullstack", "php", ["C++", 9.7, {
        "s/w": true,
        did_getMarried: "no",
    }]]
}]


console.log(user[7].skills[3][2]["did_getMarried"]);