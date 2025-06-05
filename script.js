// 🔄 Логика переключения вкладок меню
function showTab(tabName) {
  // Получаем все элементы с классом .menu-tab (все табы меню)
  const tabs = document.querySelectorAll(".menu-tab");

  // Скрываем все табы и убираем класс "active"
  tabs.forEach(tab => {
    tab.classList.add("hidden");       // Скрыть таб
    tab.classList.remove("active");    // Удалить активный класс
  });

  // Показываем нужный таб по его ID (например: 'allDay' или 'drinks')
  const activeTab = document.getElementById(tabName);
  if (activeTab) {
    activeTab.classList.remove("hidden"); // Отображаем таб
    activeTab.classList.add("active");    // Назначаем как активный
  }

  // Снимаем класс "active" со всех кнопок табов
  const buttons = document.querySelectorAll(".menu-tabs .tab");
  buttons.forEach(btn => btn.classList.remove("active"));

  // Добавляем класс "active" только к нажатой кнопке
  // (ищем по inline-атрибуту onclick)
  document.querySelector(`.menu-tabs .tab[onclick="showTab('${tabName}')"]`)?.classList.add("active");
}

// 📬 Логика формы подписки на рассылку
document.addEventListener("DOMContentLoaded", function () {
  // Ждём полной загрузки страницы
  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    // Обработка события отправки формы
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Отменяем стандартное поведение формы

      // Показываем сообщение благодарности и код на скидку
      alert("Спасибо за подписку на нашу рассылку! 🎉\n\nПолучите 10% скидку на следующий заказ с кодом:\nSWEET10");

      // Очищаем форму после отправки
      newsletterForm.reset();
    });
  }
});
