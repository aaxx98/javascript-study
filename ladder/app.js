let num = 2;
let MAX = 10;
let lastParticipate;
let lastResult;

loadEvents();
drawResult();
drawParticipate();

function loadEvents(){
 document.getElementById('plus').addEventListener('click', addlist);
 document.getElementById('minus').addEventListener('click', deletelist);
 document.querySelector('form').addEventListener('submit', storedata);
}

function addlist(e){
  if(num==MAX){
    alert('참가자 수는 '+MAX+'가 최대입니다.');
  }else{
    num++;
    document.getElementsByName("num")[0].value=num;
    let li = document.createElement('li');
    li.innerHTML += `<input type="text" name="results" value="" maxlength=5>`;
    lastResult.parentNode.appendChild(li);
    lastResult=li;
    li = document.createElement('li');
    li.innerHTML += `<input type="text" name="person" value="" maxlength=5>`;
    lastParticipate.parentNode.appendChild(li);
    lastParticipate=li;
  }
}

function deletelist(e){
  if(num==2){
    alert('참가자 수는 2명 이상이어야 합니다.');
  }else{
    num--;
    document.getElementsByName("num")[0].value=num;
    let remove = lastResult;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
    lastResult=parentNode.childNodes[num-1];
    remove = lastParticipate;
    parentNode = remove.parentNode;
    parentNode.removeChild(remove);
    lastParticipate=parentNode.childNodes[num-1];
  }
}

function drawParticipate(){
  document.querySelector('.participate').innerHTML = '<p>참가자 목록</p>';
  let participate = document.querySelector('.participate');
  let ol = document.createElement('ol');
  for(var j=0; j<num; j++){
    let li = document.createElement('li');
    li.innerHTML += `<input type="text" name="person" value="" maxlength=5>`;
    ol.appendChild(li);
  }
  participate.appendChild(ol);
  lastParticipate = ol.childNodes[num-1];
  document.querySelector('.participate').style.display = 'inline-block';
}

function drawResult(){
  document.querySelector('.result').innerHTML = '<p>결과 목록</p>';
  let participate = document.querySelector('.result');
  let ol = document.createElement('ol');
  for(var j=0; j<num; j++){
    let li = document.createElement('li');
    li.innerHTML += `<input type="text" name="results" value="" maxlength=5>`;
    ol.appendChild(li);
  }
  participate.appendChild(ol);
  lastResult = ol.childNodes[num-1];
  document.querySelector('.result').style.display = 'inline-block';
}

function storedata(e){
  e.preventDefault();
  sessionStorage.number = num;
  var person = [];
  var results = [];
  for(var i=0; i<num; i++){
    person.push(document.getElementsByName('person')[i].value);
    results.push(document.getElementsByName('results')[i].value);
  }
  sessionStorage.input = JSON.stringify({
    person: person,
    results: results,
  });
  location.href='result.html';
}
