function toggleMode() {
  const html = document.documentElement

  if (!html.classList.contains("light")) {
    html.classList.add("light")
  } else if (html.classList.contains("light")) {
    html.classList.remove("light")
    html.classList.add("dark")
  }

  // html.classList.toggle("light")

  //trocar a foto ao trocar o tema
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}
