const getHtml = (package, file) =>{ //Gets a HTML file to show, without reloading the browser
    let url = "";
    if(file == ""){
      file = "home";
    }
    if(package != "settings"){
        url = `packages/${package}/${file}_${package}.html`;
    } else {
        url = `settings/${file}_${package}.html`;
    }
    fetch(url)
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        document.getElementById("main").innerHTML = html;
      })
      .catch(function(error) {
        console.log('Hubo un error al cargar la página: ', error);
    });
}

const renameList = () => {  //Renames the current list
  let nameList = document.getElementById("txtTitleList").value;
  document.getElementById("txtNameList").innerText = nameList;
};

const getIdLastIdItemList = (idList) => { //Gets the index of last item inserted at list
  let list = document.getElementById(idList);
  let lastItem = list.lastChild;
  if(lastItem != null){
    let arr = lastItem.id.split("_");
    return arr[1];
  } else {
    return 0; //If no items are found, returns 0
  }
}

const addItemList = (e) => {  //Adds a new item to the current list
  if(e.keyCode == 13){
    let newItem = document.getElementById("txtNewItemList").value;
    if(newItem != ""){
      let itemCount = getIdLastIdItemList("listing");
      if(itemCount > 0){
        itemCount++;
      } else {
        itemCount = 1;
      }

      const li = document.createElement("li");
      li.className = "list-group-item";
      li.id = `li_${itemCount}`;
  
      const input = document.createElement("input");
      input.type = "checkbox";
      input.className = "form-check-input me-1";
      input.id = `input_${itemCount}`;
  
      const label = document.createElement("label");
      label.className = "form-check-label";
      label.textContent = newItem;
      label.htmlFor = `input_${itemCount}`;
  
      li.appendChild(input);
      li.appendChild(label);
  
      document.getElementById("listing").appendChild(li);
      document.getElementById("txtNewItemList").value = "";
    } else {
      alert("Item no valido");
    }
  }
};