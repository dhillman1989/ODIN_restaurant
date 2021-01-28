const renderMenu = () => {
  const mainContent = document.querySelector(".mainContent");

  mainContent.innerHTML = `
    <div class="menu__text">
        <h2>Our Menu</h2>
        <p>
            This is a sample of our main menu, but we have specials and fresh recipes coming out of our kitchen all the time.
            Make sure you book your table to experience it for yourself, and see what all the locals are talking about.
        </p>
        <img class="menu__promo" src="./images/25percent.png"/>
        <p>
        Call us now and make your booking to receive 25% off your entire bill.* (Subject to terms and conditions)
        </p>
    </div>
    <img class="menu__image" src="./images/menu.jpg">`;
};

export default renderMenu;
