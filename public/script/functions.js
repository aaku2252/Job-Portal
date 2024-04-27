function liked(id) {
    const svg = document.getElementById(id).querySelector("svg");
    svg.getAttribute("fill") == "none"
        ? fetch("/liked" + id, {
              method: "POST",
          })
              .then((res) => {
                  if (res.ok) {
                      svg.setAttribute("fill", "red");
                      svg.setAttribute("stroke", "red");
                      return res.text();
                  }
              })
              .then((res) => {
                  console.log(res);
              })
        : fetch("/unliked" + id, {
              method: "POST",
          })
              .then((res) => {
                  if (res.ok) {
                      svg.setAttribute("fill", "none");
                      svg.setAttribute("stroke", "currentColor");
                      return res.text();
                  }
              })
              .then((res) => {
                  console.log(res);
              });
}
