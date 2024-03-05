
var json = [{
    "Name" : "Tamilselvan", 
    "Role"   : "Fullstack Developer",
    "Company" : "xxx",
    "mail": "1233@gmail.com"
},
{
    "Name" : "selvan", 
    "Role"   : "fullstack developer",
    "Company" : "yyy",
    "mail": "2345@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.Name);
    console.log(obj.Role);
    console.log(obj.Company);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.Role); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].Name);

 
}
}
//for Of
let text = "";
for (let x of json[key].Name) {
 text += x; 
}
 console.log(text);




