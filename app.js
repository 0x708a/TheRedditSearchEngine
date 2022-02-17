const s = document.querySelector(".s");

s.addEventListener("click", () => {
    window.location.href = "https://reddit.com/search/?q=" + document.getElementById("stext").value.replace(" ", "+") + "&t=" + document.getElementById("opt1").value + "&sort=" +  document.getElementById("opt2").value;
})