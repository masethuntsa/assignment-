document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.querySelector("#bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!bookingForm.checkValidity()) {
        bookingForm.classList.add("was-validated");
        return;
      }
      const message = document.querySelector("#formMessage");
      message.textContent = "Thank you! Your enquiry has been checked. This demo does not send bookings to a server.";
      message.className = "alert alert-success mt-3";
      message.style.display = "block";
      bookingForm.reset();
      bookingForm.classList.remove("was-validated");
    });
  }

  const registrationForm = document.querySelector("#registrationForm");
  if (registrationForm) {
    registrationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const password = document.querySelector("#password");
      const confirmPassword = document.querySelector("#confirmPassword");
      const message = document.querySelector("#registrationMessage");
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
      } else {
        confirmPassword.setCustomValidity("");
      }
      if (!registrationForm.checkValidity()) {
        registrationForm.classList.add("was-validated");
        message.textContent = "Please check the highlighted fields and try again.";
        message.className = "alert alert-danger mt-3";
        message.style.display = "block";
        return;
      }
      message.textContent = "Thank you! Your details passed the demo validation.";
      message.className = "alert alert-success mt-3";
      message.style.display = "block";
      registrationForm.reset();
      registrationForm.classList.remove("was-validated");
    });
    const confirmPassword = document.querySelector("#confirmPassword");
    confirmPassword.addEventListener("input", () => confirmPassword.setCustomValidity(""));
  }

  document.querySelectorAll("[data-gallery-image]").forEach((image) => {
    image.addEventListener("click", () => {
      const preview = document.querySelector("#galleryPreview");
      if (!preview) return;
      document.querySelector("#previewImage").src = image.src;
      document.querySelector("#previewImage").alt = image.alt;
      document.querySelector("#previewTitle").textContent = image.dataset.title || image.alt;
      bootstrap.Modal.getOrCreateInstance(preview).show();
    });
  });
});
