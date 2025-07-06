
const formData = {
    email: "",
    message: ""
};
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

form.addEventListener("input", event => {
    const { name, value } = event.target;
    if (name in formData) {
      formData[name] = value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
});
  
form.addEventListener("submit", event => {
    event.preventDefault();
  
    const email = formData.email.trim();
    const message = formData.message.trim();
  
    if (!email || !message) {
        alert("Fill please all fields");
        return;
    }

localStorage.removeItem(STORAGE_KEY);
formData.email = "";
formData.message = "";
form.reset();
});