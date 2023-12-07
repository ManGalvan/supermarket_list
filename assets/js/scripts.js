const getHtml = (package) =>{
    let url = "";
    if(package != "settings"){
        url = `packages/${package}/home_${package}.html`;
    } else {
        url = `settings/home_${package}.html`;
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