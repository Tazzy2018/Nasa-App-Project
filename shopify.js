async function nasaApp() {

    urlApi = "https://api.nasa.gov/planetary/apod?api_key=G8xdCfBxJgsL6X79PvUWZdSve0U28bZOvb6slnqS";

    const dateInput = document.querySelector("#datePicker");
    let newDate = "&date=" + dateInput.value + "&";


    const response = await fetch(urlApi + newDate);

    //converting data to JSON
    const data = await response.json();

    console.log(data);



    //display data on frontend

    document.getElementById("date").textContent = "Date: " + data.date;
    document.getElementById("exp").textContent = data.explanation;
    document.getElementById("title").textContent = data.title;
    document.getElementById("media").src = data.url;


    dateInput.addEventListener("change", (e) => {
        e.preventDefault();
        nasaApp().onload;
    })

}

//clear date selection on refresh and take you back to current day

document.getElementById("datePicker").value = "";


//like/unlike feature with heart

    function like() {
    let myLike = document.getElementById("heart")
    myLike.classList.toggle("heart")
}

nasaApp();