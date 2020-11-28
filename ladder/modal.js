// modal에 결과 띄우기
showResult();
function swap(arr,x,y){
    [arr[x],arr[y]]=[arr[y],arr[x]];
}
function showResult(){
  for(var i=0; i<=10; i++){
    for(var j=0; j<num-1; j++){
      if(ladder[i][j]){
        swap(person,j,j+1);
      }
    }
  }
  var content = document.querySelector('.modal-content');
  for(var i=0; i<num; i++){
    content.innerHTML += `<p>${results[i]} ➡ ${person[i]}</p>`;
  }
}

// modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
