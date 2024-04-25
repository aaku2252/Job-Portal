const liked = document.querySelectorAll("#liked").forEach((x) => {
    const svg = x.querySelector("svg");
    x.addEventListener("click", (e) => {
        svg.getAttribute("fill") == "none"
            ? svg.setAttribute("fill", "red")
            : svg.setAttribute("fill", "none");
        svg.getAttribute("stroke") == "currentColor"
            ? svg.setAttribute("stroke", "red")
            : svg.setAttribute("stroke", "currentColor");
    });
});
