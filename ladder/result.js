//sessionStorage
let num = sessionStorage.number;
var person = JSON.parse( sessionStorage.input ).person;
var results = JSON.parse( sessionStorage.input ).results;

var ladder=[];

//사다리 그리기
drawTable();

function randomNumber(){
  let rand = Math.random();
  return Math.floor( rand * 2 );
}
function drawTable(){
  { // 참여자 표시
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    for(let i=0; i<num; i++){
      tr.innerHTML += `<td class='label'><strong>${person[i]}</strong></td>`;
    }
    table.appendChild(tr);
    document.querySelector('.result').appendChild(table);
  }
  { // 사다리 표시
    let table = document.createElement('table');
    for(let i=0; i<=10; i++){
      var bridge=[];
      let tr = document.createElement('tr');
      let pre = false;
      for(let j=0; j<num-1; j++){
        let td = document.createElement('td');
        if(i<10 && randomNumber()==1 && !pre){
          pre = true;
          bridge.push(true);
          td.style.borderBottom = "3px solid";
          //tr.innerHTML += '<td style="border-bottom: 3px solid"></td>';
        }else{
          pre = false;
          bridge.push(false);
          //tr.innerHTML += '<td></td>';
        }
        tr.appendChild(td);
      }
      ladder.push(bridge);
      table.appendChild(tr);
      document.querySelector('.result').appendChild(table);
    }
    sessionStorage.ladder = JSON.stringify({
      ladder: ladder,
    });
  }
  { // 결과 표시
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    for(let i=0; i<num; i++){
      tr.innerHTML += `<td class='label'><strong>${results[i]}</strong></td>`;
    }
    table.appendChild(tr);
    document.querySelector('.result').appendChild(table);
  }
}
