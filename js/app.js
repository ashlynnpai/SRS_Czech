var set = [];
var easySet=[];
var medSet=[];
var hardSet=[];
var newSet=[];
var Card;  
var newCard;
var count;
var origset = set.slice(0);

$.getJSON('js/set.json', function(data) {
    $.each(data, function(index, item) {
        set.push(item);       
    });
  set = shuffle(set);
  cycle();
});

function cycle(){
Card = set.shift();  
$("#card").html(Card.front);
count = set.length + 1;
$("#numCount").html(count);
}

$("#card").click(function(){
    $("#card").html($("#card").text() == Card.front ? Card.back : Card.front);
    });

$( "#easybutton" ).click(function() {
easySet.push(Card);
cycle();
   });        

$( "#medbutton" ).click(function() {
medSet.push(Card);
cycle();
   });

$( "#hardbutton" ).click(function() {
hardSet.push(Card);
cycle();
   });       

$( "#knownbutton" ).click(function() {
set.pop();
cycle();
   });     

$( "#newbutton" ).click(function() {
if (hardSet.length > 5){
    var easyNew = Math.ceil(hardSet.length/4);
    var medNew = Math.ceil(hardSet.length/2);
    var x = easySet.slice(0, easyNew);
    easySet.splice(0, easyNew);
    console.log(x);
    var y = medSet.slice(0, medNew);
    console.log(y);
    medSet.splice(0, medNew);
    var z = hardSet;
    newSet = set.concat(x, y, z);
    set = newSet;
    set = shuffle(set);
}
else if (medSet.length > 5 && hardSet.length <= 5){
    easyNew = Math.ceil(medSet.length/4);
    medNew = Math.ceil(medSet.length/2);
    var x = easySet.slice(0, easyNew);
    easySet.splice(0, easyNew);
    console.log(x);
    var y = medSet.slice(0, medNew);
    console.log(y);
    medSet.splice(0, medNew);
    var z = hardSet;
    newSet = set.concat(x, y, z);
    set = newSet;
    set = shuffle(set);
}
else {
    newSet = set.concat(easySet, medSet, hardSet);
    set = newSet;
    set = shuffle(set);
}
cycle();
   });   

 $( "#resetbutton" ).click(function() {
set = origset;
cycle();
   });    

function shuffle(o){
for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
