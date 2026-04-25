document.getElementById("devForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const project = document.getElementById("project").value;
  const details = document.getElementById("details").value;

  const email = "samuelasemewaien@gmail.com";
  const subject = `New Project Request from ${name}`;
  const body = `Project Type: ${project}%0D%0A%0D%0ADetails:%0D%0A${details}`;

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
