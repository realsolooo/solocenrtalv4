function loadParticles(color) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 168 },
      color: { value: color },
      shape: { type: "circle" },
      size: { value: 4, random: true },
      move: { enable: true, speed: 2, direction: "none" },
      line_linked: { enable: false }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 }
      }
    }
  });
}

function changeParticleColor(color) {
  localStorage.setItem("particleColor", color)
  document.querySelector("#particles-js").innerHTML = ""
  loadParticles(color)
}

document.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("particleColor") || "#00c3ff"
  loadParticles(savedColor)

  const picker = document.getElementById("colorPicker")
  if (picker) {
    picker.value = savedColor
    picker.addEventListener("input", () => changeParticleColor(picker.value))
  }
})