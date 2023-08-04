document.addEventListener("DOMContentLoaded", () => {
  // Активация первого таба при загрузке страницы
  document.getElementById('tab1').classList.add('active');
  document.getElementById('content1').classList.add('active');

  // Получение всех вкладок и содержимого
  var tabs = document.querySelectorAll('.tab');
  var contentItems = document.querySelectorAll('.content-item');

  // Перебор вкладок и добавление события клика
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      // Получение значения id выбранной вкладки
      var tabId = this.id;

      // Удаление класса "active" у всех вкладок и содержимого
      tabs.forEach(function(item) {
        item.classList.remove('active');
      });

      contentItems.forEach(function(item) {
        item.classList.remove('active');
      });

      // Добавление класса "active" выбранной вкладке и соответствующему содержимому
      this.classList.add('active');
      document.getElementById('content' + tabId.slice(3)).classList.add('active');
    });
  });
})