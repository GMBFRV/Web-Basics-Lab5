const menuData = [
    { title: "1", href: "#page-1" },
    { title: "2", href: "#page-2" },
    { title: "3", href: "#page-3" },
  ];
  
  const mainMenu = document.getElementById("main-menu");
  const pageContent = document.getElementById("main-content");
  
  function generateMenu(menuItems, parentElement) {
    const ul = document.createElement("ul");
    parentElement.appendChild(ul);
  
    menuItems.forEach(menuItem => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = menuItem.title;
      link.href = menuItem.href;
  
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Запобігаємо перезавантаженню сторінки
        showPage(menuItem.href); // Відображаємо відповідну сторінку
      });
  
      li.appendChild(link);
      ul.appendChild(li);
    });
  }
  
  function showPage(pageId) {
    const pages = document.querySelectorAll("[id^='page-']"); // Вибираємо всі елементи з ID, що починаються з "page-"
    pages.forEach(page => page.style.display = "none"); // Приховуємо всі сторінки
    const pageToShow = document.querySelector(pageId); // Знаходимо сторінку за ID
    if (pageToShow) pageToShow.style.display = "block"; // Відображаємо знайдену сторінку
  }
  
  generateMenu(menuData, mainMenu);
  showPage("#page-1"); // Відображаємо сторінку 1 за замовчуванням
  