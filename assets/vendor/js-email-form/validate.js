document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      full_name: form.full_name.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      website_url: form.website_url.value || "n/a",
      message: form.message.value,
      consent: form.consent.checked
    };

    try {
      const response = await fetch("https://contact-form-worker.russserafin158061.workers.dev/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.text();

      if (response.ok) {
        window.location.href = "thank-you.html";
      } else {
        alert("Error: " + result);
      }
    } catch (error) {
      alert("Submission failed. Please try again.");
    }
  });
});
