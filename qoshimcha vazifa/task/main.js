    function bol(){
    var Ason = document.getElementById('Ason').value
    var Bson = document.getElementById('Bson').value
    var amal = document.getElementById('amal').value
    var javob = 0

    if (Ason !== '' && Bson !== '') {

     switch (amal){
        case '+':
        javob = Ason + Bson
        break;

        case '-':
        javob = Ason - Bson
        break;

        case '*':
        javob = Ason * Bson
        break;

        case '/':
        javob = Ason / Bson
        break;
     }
      var a = document.getElementById('inner')
      a.innerHTML = "<h5> Javob: <span>" + javob + "</span></h5>"
    }
    if (Ason == '' && Bson == '') {
        alert('Ason va Bson kiriting')
    }
    else if (Ason == '') {
        alert('Ason kiriting')
    }
    else if (Bson == '') {
        alert('Bson kiriting')
    }

}
 
 function calc(){
    var Ason = document.getElementById('Ason').value
    var Bson = document.getElementById('Bson').value
    var amal = document.getElementById('amal').value
    var javob = 0
    if (Ason !== '' && Bson !== '') {
      console.log(Ason, Bson, amal)
      Ason = Ason*1
      Bson = Bson*1
     switch (amal){
        case '+':
        javob = Ason + Bson
        break;

        case '-':
        javob = Ason - Bson
        break;

        case '*':
        javob = Ason * Bson
        break;

        case '/':
        javob = Ason / Bson
        break;
     }
      var a = document.getElementById('inner')
      a.innerHTML = "<h5> Javob: <span>" + javob + "</span></h5>"
    }

}