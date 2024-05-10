function liked(id) {
  const svg = document.getElementById(id).querySelector("svg");

  if (svg.getAttribute("fill") === "none") {
    fetch("/liked/" + id, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        credentials: "include",
      },
    }).then((res) => {
      if (res.status === 200) {
        svg.setAttribute("fill", "red");
        svg.setAttribute("stroke", "red");
        return res.text();
      }
    });
  } else {
    fetch("/unLiked/" + id, {
      method: "POST",
      headers: { "content-type": "application/json", credentials: "include" },
    }).then((res) => {
      if (res.status === 200) {
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        return res.text();
      }
    });
  }
}

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
