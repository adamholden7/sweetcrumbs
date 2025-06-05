// Tab switching logic
function showTab(tabName) {
  const tabs = document.querySelectorAll(".menu-tab");
  tabs.forEach(tab => {
    tab.classList.add("hidden");
    tab.classList.remove("active");
  });

  const activeTab = document.getElementById(tabName);
  if (activeTab) {
    activeTab.classList.remove("hidden");
    activeTab.classList.add("active");
  }

  const buttons = document.querySelectorAll(".menu-tabs .tab");
  buttons.forEach(btn => btn.classList.remove("active"));

  // Use 'this' inside the inline onclick or pass the event properly
  // For now we fix it like this:
  document.querySelector(`.menu-tabs .tab[onclick="showTab('${tabName}')"]`)?.classList.add("active");
}

// Newsletter form thank-you popup
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Спасибо за подписку на нашу рассылку! 🎉\n\nПолучите 10% скидку на следующий заказ с кодом:\nSWEET10");

      newsletterForm.reset();
    });
  }
});
