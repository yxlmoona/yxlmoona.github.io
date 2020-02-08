// console.log($);
$.ajax({
    url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka',

}).then(
    (data)=>{
        console.log(data);
    },
    ()=>{
        console.log('bad request');
    }
);
