document.querySelectorAll('input[type="radio"][value="4"]').forEach(radio => {
    radio.checked = true;
    const parentLi = radio.closest("li");
    if (parentLi) {
        parentLi.style.backgroundColor = "yellow";
        parentLi.style.transition = "background-color 0.5s ease";
    }
});

const commentBox = document.getElementById("Comment");
if (commentBox) {
    commentBox.value = "Blah blah blah";
    commentBox.style.backgroundColor = "yellow";
    commentBox.style.transition = "background-color 0.5s ease";
}

setTimeout(() => {
    const submitButton = document.querySelector('input[type="submit"]') || document.querySelector('button[type="submit"]');
    if (submitButton) {
        console.log("Submitting form automatically...");
        submitButton.click();
    } else {
        console.log("Submit button not found. Please submit manually.");
    }
}, 5000);

console.log("Form filled and highlighted. Auto-submitting in 5 seconds...");