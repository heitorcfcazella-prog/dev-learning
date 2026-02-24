async function fetchData() {
  try{
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value.padStart(2, "0");;
    const day = document.getElementById("day").value.padStart(2, "0");;
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}`)

    if(!response.ok){
      throw new Error("Não foi encontarda");
    }

    const data = await response.json();
    const imgElement = document.getElementById("image");

    if (data.media_type === "image") {
      imgElement.src = data.url;
      imgElement.style.display = "block";
    } else {
      alert("A data selecionada não contém uma imagem.");
    }
  }
  catch(error){
    console.log(error);
  }
}