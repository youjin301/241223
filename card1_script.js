let isClassAdded = false;
const ic = document.querySelector(".interactive-container");
ic.addEventListener("click", function() {
    if( isClassAdded === false ) {
        ic.classList.add("active");
        isClassAdded = true;
    } else if( isClassAdded === true ) {
        ic.classList.remove("active");
        isClassAdded = false;
    }
});