const actionButton = document.getElementById("actionButton");
const message = document.getElementById("message");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

actionButton.addEventListener("click", () => {
  message.textContent = "تم الضغط على الزر! يمكنك الآن تعديل المحتوى حسب ما تريد.";
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const messageText = document.getElementById("messageInput").value.trim();

  if (!name || !email || !messageText) {
    formStatus.textContent = "يرجى ملء جميع الحقول قبل الإرسال.";
    formStatus.style.color = "#b91c1c";
    return;
  }

  formStatus.textContent = "تم إرسال رسالتك بنجاح! سأعود إليك قريباً.";
  formStatus.style.color = "#16a34a";
  contactForm.reset();
});
