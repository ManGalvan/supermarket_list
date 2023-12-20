const getHtml = (package, file) =>{
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
        // Insertar el contenido de la nueva página en algún elemento en tu página actual
        document.getElementById("main").innerHTML = html;
      })
      .catch(function(error) {
        console.log('Hubo un error al cargar la página: ', error);
    });
}

const renameList = () => {
  let nameList = document.getElementById("txtTitleList").value;
  document.getElementById("txtNameList").innerText = nameList;
};


const addItemList = (e) => {
  //let countElement = 0;
  if(e.keyCode == 13){
    let newItem = document.getElementById("txtNewItemList").value;

    const li = document.createElement("li");
    li.className = "list-group-item";
    //li.id = `li_${countElement}`;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "form-check-input me-1";

    const label = document.createElement("label");
    label.className = "form-check-label";
    //label.htmlFor = `li_${countElement}`;
    label.textContent = newItem;

    li.appendChild(input);
    li.appendChild(label);

    //let content = ul.appendChild(li);

    document.getElementById("listing").appendChild(li);
    document.getElementById("txtNewItemList").value = "";

    //let element = liElement.append(newItem);
    console.log(li);
    //countElement++;
  }
};