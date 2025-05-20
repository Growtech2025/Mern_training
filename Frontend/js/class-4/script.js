// console.log("i am in class 4");
//Non Primitive data types -> If i wanna store more than one value into a single value, that time we use complex data types 
//1.object-> Its a collection of key value pairs 
// key should be unique but value can be same 


//if you give same key to the other value so that latest value will reflect on that key 

// const details = {
//     // id: 101,
//     id: 102,
//     name: "Grow tech",
//     NGO: "yes",
//     ownBy: "DRF",
//     1023: "rakesh",
//     "1025-234": "mohan das"
// }
// console.log(details);
// // console.log(typeof(details));// this tells the type of a details varible i.e object
// //access the object properties 
// console.log(details.id);
// console.log(details['1023']);
// console.log(details[1023]);
// console.log(details['1025-234']);


//get the object values from the nested object6=

// const nestedObject = {
//     lett: {
//         name: "Level 1",
//         id: 1,
//         le: {
//             name: "Level 2",
//             id: 2,
//             level31224: {
//                 name: "Level 3",
//                 id: 3,
//                 isActive: true,
//                 createdAt: "2025-01-03",
//                 description: "Third level object",
//                 levell: {
//                     name: "Level 4",
//                     id: 4,
//                     isActive: false,

//                     level: {
//                         name: "Level 5",

//                     },
//                     isActive: false,
//                 },
//                 isActive: "ttttt",
//             },
//         }
//     },
//     id: 5,
//     message: "Hello from the deepest level!"
// };

// console.log(nestedObject.lett.le.level31224.levell.level.name);


const complexObject = {
    appName: "DeepDive",
    version: "2.1.0",
    isProduction: false,
    settings: {
        environment: "staging",
        debugMode: true,
        limits: {
            maxUsers: 1000,
            maxConnections: 500,
            timeout: {
                request: 30,
                session: 3600,
                errorHandling: {
                    retries: 3,
                    backoffStrategy: "exponential",
                    meta: {
                        createdBy: "system",
                        lastUpdated: "2025-05-20T12:00:00Z",
                        flags: {
                            deprecated: false,
                            secure: true,
                            "loggingEnabled-syam": "ghsdhfgsdfjsfhg"
                        }
                    }
                }
            }
        },
        branding: {
            theme: "solarized",
            logo: "deep_logo.svg",
            ui: {
                roundedCorners: true,
                null: "undefined1",
                font: {
                    size: "14px",
                    fallback: {
                        primary: "Arial",
                        secondary: "Helvetica",
                        systemMeta: {
                            accessibility: {
                                highContrast: false,
                                screenReader: false,
                                76238213: "en-US"

                            }
                        },
                        family: "Inter",

                    }
                }
            }
        }, os: "Linux",
        dpi: 144,
    }
};


// console.log(complexObject.settings.limits.timeout.errorHandling.meta.flags['loggingEnabled-syam']);
console.log(complexObject.settings.branding.ui.font.fallback.systemMeta.accessibility['76238213']);
console.log();
