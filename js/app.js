
var set = [
{front: "Dobrý den.", back: "Hello."},
{front: "Jak se máte?", back: "How are you?"},
{front: "Děkuji", back: "Thanks"},
{front: "Prosím ", back: "Please"},
{front: "Promiňte", back: "Excuse me."},
{front: "Na shledanou.", back: "Goodbye."},
{front: "dnes", back: "today"},
{front: "včera", back: "yesterday"},
{front: "zítra", back: "tomorrow"},
{front: "dopoledne", back: "morning"},
{front: "tento týden", back: "this week"},   
{front: "minulý týden", back: "last week"}, 
{front: "příští týden", back: "next week"},
{front: "pondělí", back: "Monday"},
{front: "úterý", back: "Tuesday"},
{front: "středa", back: "Wednesday"},
{front: "čtvrtek", back: "Thursday"},
{front: "pátek", back: "Friday"},
{front: "sobota", back: "Saturday"},
{front: "snídaně ", back: "breakfast"},
{front: "oběd", back: "lunch"},
{front: "večeře", back: "dinner"},
{front: "chelba", back: "bread"},
{front: "voda", back: "water"},
{front: "pivo", back: "beer"},
]; 

var origset = set.slice(0);

var easySet=[];
var medSet=[];
var hardSet=[];
var newSet=[];
var Card;  
var newCard;
var count;

function cycle(){
Card = set.shift();  
$("#card").html(Card.front);
count = set.length;
$("#numCount").html(count);
}

cycle();
 
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
    console.log(set);
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
    console.log(set);
}
else {
    newSet = set.concat(easySet, medSet, hardSet);
    set = newSet;
    console.log(set);
}
cycle();
   });   

 $( "#resetbutton" ).click(function() {
set = origset;
cycle();
   });    


