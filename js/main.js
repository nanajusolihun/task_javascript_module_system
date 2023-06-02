// ! Import file

// import { profile } from "./module/module1.js";
// console.log(profile);


import { profiles } from "./module/module1.js";
import email from "../js/module/module2.js";

const newProfile = profiles.map((data, index) => {
    return {
        ...data,
        emails : email[index],
    }
});

// GridJS
new gridjs.Grid ({
    columns : ["ID", "Name", "Position", "Emails"],
    data : newProfile,
})
.render(document.getElementById("wrapper"));
