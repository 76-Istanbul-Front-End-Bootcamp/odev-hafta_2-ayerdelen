/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

/*var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

person.message();*/
var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.bind(person)
messageFunc();



/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map(function(number, numberIndex){
        const result = number * this.numbers[1];
        console.log(result)
    }.bind(this))
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/

function isValidName(name){

if(typeof(name)===typeof("string")){
var trimmedA = name.trim();
var divideBySpaces = trimmedA.split(" ");
for(var i = 0; i<= divideBySpaces.length; i++){
  if(divideBySpaces[i].length<=1){
    return false

  }
  else {
    return true;
  }
  }
 
} else {
    console.log("Adınızı kontrol ediniz")
    return false;
  }
}
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);


/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/

function katilimSaati(dersSayisi, dersSuresi){
  var derSayisiCevir = parseInt(String(dersSayisi))
  var dersSuresiCevir = parseInt(String(dersSuresi))
  if(isNaN(derSayisiCevir) || isNaN(dersSuresiCevir)) {
 console.log("Girdiğiniz parametre yanlış")
  return false;
  }
  else{
    var sonuc = derSayisiCevir * dersSuresiCevir;
    console.log(sonuc)
    return true;
  }
}
console.log(katilimSaati(10,"6") === false);
console.log(katilimSaati("10",6) === false);
console.log(katilimSaati("10","6") === false);
console.log(katilimSaati("",6) === false);
console.log(katilimSaati(6,"") === false);
console.log(katilimSaati("","") === false);
console.log(katilimSaati("foo",6) === false);