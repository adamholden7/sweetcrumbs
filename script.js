// Newsletter form submission with a variable, conditional, and event listener
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletterForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;

      if (email.includes("@")) {
        const messageEl = document.getElementById("thankYouMessage");
        messageEl.textContent = `Thanks for signing up, ${email}!`;

        // Time-based behavior: style the message after 2 seconds
        setTimeout(() => {
          messageEl.style.color = "#f7b267";
          messageEl.style.fontWeight = "bold";
        }, 2000);
      } else {
        alert("Please enter a valid email.");
      }
    });
  }

  // Menu list example (for menu.html if you create it)
  const menuList = document.getElementById("menuList");
  if (menuList) {
    const items = [
      "Chocolate Chip Cookies",
      "Almond Croissant",
      "Blueberry Muffin",
      "Lemon Tart",
      "Vanilla Bean Cake"
    ];
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      menuList.appendChild(li);
    });
  }
});
