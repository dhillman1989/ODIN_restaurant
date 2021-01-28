const renderHome = () => {
  const mainContent = document.querySelector(".mainContent");

  mainContent.innerHTML = `<img
    class="main__image"
    src="https://pngimg.com/uploads/steak/steak_PNG4.png"
  />
  <div class="main__text">
    <h1>Our Famous Steaks</h1>
    <p>
      One of the many reasosn people love our restaurant is our famous
      steaks. We have been grilling in our kitchen since 1989 and we know
      just what makes a perfect steak, and our chefs are professionally
      trained by industry experts. It is for this reason that we can claim
      to be the best steak restaurant in town, but don't just take our
      word for it, book with us now and try for yourself.
    </p>
    <p>
      Not a meat eater, or just dont fancy a steak? Well that's no problem
      either. We cook homemade pies, soups, pastas, salads and more fresh
      each day, so now there is no excuse for not dropping in.
    </p>
  </div>`;
};

export default renderHome;
