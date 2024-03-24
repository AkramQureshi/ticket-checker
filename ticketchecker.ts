
/*

let visitor1 = "senior citizen";
let visitor2 = "adult";
let visitor3 = "children";
let visitor4 = "infant";

if (visitor1 === "senior citizen" || visitor2 === "adult" || visitor3 === "children" || visitor4 === "infant") {
    console.log("Senior Citizen Ticket is  = 50,  Adult Ticket is = 100, Children Ticket is = 50,  Infant Ticket is = Free");
} else {
    console.log("Wrong Visitor");
}

*/

/*

    let visitor1 = "senior citizen"
    let visitor2 = "adult"
    let visitor3 = "children"
    let visitor4 = "infant"

if (visitor1 !== "senior citizen"){
    console.log("Ticket Prices is 50 for = ", visitor1)
    } 
    else if(visitor2 === "adult"){
        console.log("Ticket Prices is 100 for = ", visitor2)
    }else if(visitor3 !== "children"){
        console.log("Ticket Prices is 50 for = ", visitor3)
    }
    else if(visitor4 === "infant"){
        console.log("Ticket is Free for = ", visitor3)
          }
                  else 
                  {
                    console.log("Wrong Visitor")  
        }


 */


        
let visitor1 = "senior citizen";
let visitor2 = "adult";
let visitor3 = "children";
let visitor4 = "infant";

if (visitor1 !== "senior citizen") {
    console.log("Senior Citizen Ticket Rate is = 50");
} else {
    console.log("Visitor is not a senior citizen, Please Check Ticket Rate");
}

if (visitor2 === "adult") {
    console.log("Adult Ticket Rate is = 100");
} else {
    console.log("Visitor 2 is not an adult");
}

if (visitor3 === "children") {
    console.log("Children Ticket Rate is = 50");
} else {
    console.log("Visitor 3 is not a child");
}

if (visitor4 === "infant") {
    console.log("Infant Ticket Rate is = Free");
} else {
    console.log("Visitor is not an infant, please check Ticket Rate");
}