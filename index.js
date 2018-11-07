var listArr = [];
var list = document.querySelector('.list');
document.addEventListener('keypress',function(event){
    if(event.keyCode === 13 || event.which === 13) {
        var listValue = document.querySelector('.insertList').value;
        var obj ={
            status:false,
            descriptionTask:listValue
        }
        listArr.push(obj);
        buildList(listArr);
        document.querySelector('.insertList').value = '';
    }
});

function okTask() {
    if(listArr[this.parentNode.id].status == true){
        listArr[this.parentNode.id].status = false;
    }else{
        listArr[this.parentNode.id].status = true;
    };
    buildList(listArr);
}

function deleteTask() {
  listArr.splice(this.parentNode.id,1);
  buildList(listArr);
}

function allCheck(){
    for(var y = 0; y < listArr.length; y++){
        var checkedState = document.querySelector('.allCheck').checked;
        if(checkedState == true){
            listArr[y].status = true;
            document.querySelector('.itemList').textContent= 0 + ' items';
        }else{
            listArr[y].status = false;
        }          
    }
    buildList(listArr);
}

document.querySelector('.allCheck').addEventListener('click',allCheck);

function buildList(listArr) {
  list.innerHTML = '';
  var count = 0;
    for(var x = 0 ; x < listArr.length ; x++){
      var elem = document.createElement("div");
      elem.setAttribute("class", "listCard");
      elem.setAttribute("id", x);

      var okButton = document.createElement("button");
      okButton.setAttribute("class", "checkButton btn");
      okButton.innerHTML = "&#10003";
      okButton.addEventListener("click",okTask);
      elem.appendChild(okButton);

      var text = document.createElement("p");
    //   text.setAttribute("class", "contentList");
      if(listArr[x].status == true){
        text.setAttribute("class", "contentList done");
      }else{
        text.setAttribute("class", "contentList");
      }
      text.appendChild(document.createTextNode(`${listArr[x].descriptionTask}`));

      elem.appendChild(text);

      var deleteButton = document.createElement("button");
      deleteButton.setAttribute("class", "deleteButton btn");
      deleteButton.innerHTML = "x";
      deleteButton.addEventListener("click", deleteTask);
      elem.appendChild(deleteButton);

      list.appendChild(elem);

      if(listArr[x].status ==false){
          count +=1;
          document.querySelector('.itemList').textContent=count + ' items';
      }else{
        document.querySelector('.itemList').textContent=0 + ' items';
      }
    }
}
