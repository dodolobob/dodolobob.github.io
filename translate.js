// document.getElementById("Submit").onclick = doFunction;

String.prototype.replaceAll = function(str1, str2, ignore)
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

function doFunction(){
  var old_string = document.getElementById('To_Doodle').value;
  var symbols = "_.,<>:;{}[]\\/|@#$%^&*~`()+-='";
  var new_list = [];
  var new_string = '';

  old_string = old_string.replace(/!/g,' ! ');
  old_string = old_string.replaceAll('?',' ? ');
  old_string = old_string.replaceAll('"',' ! ');

  old_string = old_string.toLowerCase();

  for (index = 0; index < symbols.length; index++) {
    var char = symbols[index]
    old_string = old_string.replaceAll(char,' ! ')
  };

  var word_list = old_string.split(" ");

  for(var i = word_list.length-1; i--;){
    if (word_list[i] === '') word_list.splice(i, 1);
  };

  for(var i = word_list.length-1; i--;){
    if (word_list[i].length === 0) word_list.splice(i, 1);
  };

  for (index = 0; index < word_list.length; index++) {
    var translated_word = definitions[word_list[index]]
    if (translated_word === undefined){
      new_list.push(word_list[index]);
    }
    else {
      new_list.push(translated_word);
    };
  };
  new_string = ' '+(new_list.join(' '))+' ';
  new_string = new_string.replace(/ ! /g,'!').replaceAll(' ? ','?');
  if (new_string[0] === ' '){
    new_string = new_string.slice(1)
  };
  if ((new_string.substr(new_string.length - 1)) === ' '){
    new_string = new_string.slice(0,-1)
  };

  translate = document.getElementById('Doodled');
  translate.value = new_string.toUpperCase();
};

var el = document.getElementById("Submit");
if (el.addEventListener) {
    el.addEventListener("click", doFunction, false);
  }
else if (el.attachEvent) {
    el.attachEvent('onclick', doFunction);
  };
