loadEvents();

// 이벤트 리스너 추가하기
// form submit(추가): submit(e)
// clear(초기화): clearList(e)
// ul(task 완료표시, 삭제): deleteOrTick(e)
function loadEvents(){
 document.querySelector('form').addEventListener('submit',submit);
 document.getElementById('clear').addEventListener('click',clearList);
 document.querySelector('ul').addEventListener('click',deleteOrTick);
}

// submit 이벤트 리스너
function submit(e){
  e.preventDefault(); // submit 했을 때 redirect를 막음
  let input = document.querySelector('input');
  let val = input.value;
  //alert(document.getElementsByName("task")[0].value);
  document.getElementsByName("task")[0].value="";
  if(val != '')
    addTask(val);
}

// 추가 기능
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete">×</span>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

// 초기화(clear) 리스너
function clearList(e){
  // ul 요소를 null로 만든다.
  let ul = document.querySelector('ul').innerHTML = '';
}

// task 완료표시,삭제에 대한 리스너
function deleteOrTick(e){
 if(e.target.className == 'delete') // x표시 눌렀을때
   deleteTask(e);
 else { // checkbox 눌렀을때
   tickTask(e);
 }
}

// 삭제 기능
function deleteTask(e){
 let remove = e.target.parentNode;
 let parentNode = remove.parentNode;
 parentNode.removeChild(remove);
}

// 줄긋는 기능
function tickTask(e){
 const task = e.target.nextSibling;
 if(e.target.checked){
   task.style.textDecoration = "line-through";
   task.style.color = "#a0bbff";
 }else {
   task.style.textDecoration = "none";
   task.style.color = "#2f4f4f";
 }
}

//<ul> -- parentNode
//...
//  <li> -- remove
//     <input type="checkbox"> -- e.target(tickTask(e))
//     <label>나의할일</label> -- task
//     <span class="delete">x</span> -- e.target(deleteTask(e))
//  </li>
//...
//</ul>
