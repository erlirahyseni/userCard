let form = document.querySelector(".search-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let search = document.querySelector(".form-input").value;

  let request = async () => {
    try {
      let res = await axios.get("https://swapi.dev/api/people/" + search);
      let data = res.data;

      document.querySelector(".list").innerHTML = `<b>Name:</b> ${data.name}<br> <b>Height:</b> ${data.height} <br> <b>Mass:</b> ${data.mass} <br> <b>Birth:</b> ${data.birth_year}`;   
    }
    catch (e) {
      console.log(e, "Error Found");
    }

  };
  request();
});





