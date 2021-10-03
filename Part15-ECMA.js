//Bonus JSON : JSON treats all data as String so Key and Value is under quotes.
//eg; "Name" : "Devesh" , "Age" : 31 

/* 
JSON.stringify turns a JS object into JSON text and stores that JSON text in a string 

eg; */
var my_obj ={
    key_1 : "some text", key_2: true , key_3: 5};
    var obj_as_string =JSON.stringify(my_obj);

    /* JSON parse truns a  string of JSOn text into a JS Object */
    var obj_as_string_into_object= JSON.parse(obj_as_string)