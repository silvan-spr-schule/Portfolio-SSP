const sendBtn = document.getElementById("send-btn");
const firstnameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

function sendForm() {

    const firstnameValue = firstnameInput.value.trim();
    const lastnameValue = lastnameInput.value.trim();
    const subjectValue = subjectInput.value.trim();
    const messageValue = messageInput.value.trim();

    // Validate empty fields
    if (
        !firstnameValue ||
        !lastnameValue ||
        !subjectValue ||
        !messageValue
    ) {
        console.log("Please fill in all fields.");
        return;
    }

    console.log(firstnameValue);
    console.log(lastnameValue);
    console.log(subjectValue);
    console.log(messageValue);

    // Clear inputs
    firstnameInput.value = "";
    lastnameInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
}