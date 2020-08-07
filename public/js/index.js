init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
      //console.log("workout", workout) // DEL
    if (workout) {
      location.search = "?id=" + workout._id;
        console.log("workout, id:", workout +  id) // DEL
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

