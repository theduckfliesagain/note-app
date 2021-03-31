function copyURL () {
    const path = window.location.host + window.location.pathname;
    const temp = document.body.appendChild(document.createElement("input"));
    // temp.style.display = "none";
    temp.value = path;
    temp.focus();
    temp.select();
    document.execCommand("copy");
    temp.parentNode.removeChild(temp);
}