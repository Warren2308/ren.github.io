const main = document.querySelector(".main");
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
  let n = prompt("Enter your name")
  
  if(n == null){
    main.style.display= "none";
    cancel.style.display= "flex";
    msg.innerHTML = "thank you!!";
  }
  
  if (n.length >0) {
    alert("Hi " + n );
    alert('Kamusta kana?');
    var x;
    x = prompt("")
    alert('Tandaan mo nandito ako always' );
    alert('Aalagaan mo sarili mo ha');
    alert('all your red flags ay tanggap ko');
    alert('Dont pressure your self okay?');
    alert('kumain ka sa tamang oras ha');
    alert('pinag aalala moko lagi');
    alert('kiss kita dyan eh');
    alert('I love You ' + n + ' mwwuaa');
    alert('ehe ehe');
    main.style.display = "block";
    break;
  }
  
  
}