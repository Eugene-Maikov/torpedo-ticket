document.addEventListener("DOMContentLoaded", () => {

  const handleTabs = function (){
    document.getElementById('tab1').classList.add('active');
    document.getElementById('content1').classList.add('active');

    const tabs = document.querySelectorAll('.tab');
    const contentItems = document.querySelectorAll('.content-item');

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {

        const tabId = this.id;

        tabs.forEach(function(item) {
          item.classList.remove('active');
        });

        contentItems.forEach(function(item) {
          item.classList.remove('active');
        });

        this.classList.add('active');
        document.getElementById('content' + tabId.slice(3)).classList.add('active');
      });
    });
  }
  handleTabs()

  const handleAccordion = function (){
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');

      header.addEventListener('click', function() {
        const isActive = item.classList.contains('active');

        accordionItems.forEach(item => item.classList.remove('active'));
        accordionItems.forEach(item => {
          const content = item.querySelector('.accordion-content');
          content.style.display = 'none';
        });

        if (!isActive) {
          item.classList.add('active');
          content.style.display = 'block';
        }
      });
    });
  }
  handleAccordion()
})