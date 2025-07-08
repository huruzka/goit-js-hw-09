
const formData = {
    email: "",
    message: ""
  };
  
  const STORAGE_KEY = "feedback-form-state";
  const form = document.querySelector(".feedback-form");
  
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      formData.email = parsed.email || "";
      formData.message = parsed.message || "";
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    } catch (e) {
      console.error("Помилка при парсингу даних:", e);
    }
  }
  
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
  
    console.log("Відправлено:", formData);
  
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
  });
  