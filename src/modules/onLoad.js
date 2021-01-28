import renderMenu from "./renderMenu";
import renderHome from "./renderHome";
import renderContact from "./renderContact";

const onLoad = () => {
  const container = document.querySelector("#container");

  //RENDER NAV
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  navbar.innerHTML = `
  <div>
  <h3>RiverBoat</h3>
  <ul>
  <li><a href='#' id="home_link">Home</a></li>
  <li><a href='#' id="menu_link">Menu</a></li>
  <li><a href='#' id="contact_link">Contact</a></li>
  </ul>
  </div>`;

  //RENDER HEADER
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = "<div><h1>River Boat Restaurant</h1></div>";

  //RENDER MAIN CONTENT AREA
  const mainContent = document.createElement("main");
  mainContent.classList.add("mainContent");

  //RENDER FOOTER
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = `<footer class="footer"><div>All images and content used with permission or under appropriate license. </div></footer>`;

  //APPEND ITEMS TO CONTAINER
  container.appendChild(navbar);
  container.appendChild(header);
  container.appendChild(mainContent);
  container.appendChild(footer);

  //add event listeners to nav
  document
    .querySelector("#home_link")
    .addEventListener("click", () => renderHome());

  document
    .querySelector("#menu_link")
    .addEventListener("click", () => renderMenu());
  document
    .querySelector("#contact_link")
    .addEventListener("click", () => renderContact());
};

export default onLoad;
