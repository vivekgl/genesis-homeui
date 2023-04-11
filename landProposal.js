function readless(event, descId, readMoreId) {
    document.getElementById(event?.target?.id).style.display = "none";
    document.getElementById(readMoreId).style.display = "block";
    setTimeout(() => {
        document.getElementById(descId).style.height = "130px";
    }, 100);
}

function readmore(event, descId, readLessId) {
    document.getElementById(descId).style.height = "auto";
    document.getElementById(event?.target?.id).style.display = "none";
    document.getElementById(readLessId).style.display = "block";
}