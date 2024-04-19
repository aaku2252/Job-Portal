const liked = document.querySelectorAll("#liked").forEach((x) =>
    x.addEventListener("click", (e) => {
        e.target.getAttribute("fill") == "none"
            ? e.target.setAttribute("fill", "currentColor")
            : e.target.setAttribute("fill", "none");
    })
);
