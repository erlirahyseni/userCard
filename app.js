let form = document.querySelector(".search-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let search = document.querySelector(".form-input").value;
  let format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

  if(search > 83){
    document.querySelector('.list').innerHTML= "ID must be less than or equal to 83.";
  }
  if(search < 1){
    document.querySelector('.list').innerHTML= "The ID number starts from 1";
  }

  if(isNaN(search)){
    document.querySelector('.list').innerHTML= "You can only add numbers, chars aren't valid";
  }
  

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






