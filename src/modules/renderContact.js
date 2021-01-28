const renderContact = () => {
  const mainContent = document.querySelector(".mainContent");

  mainContent.innerHTML = `
    <div class="contact__image">
        <img src="images/phone.svg">
    </div>
    <div class="contact__text">
        <h4>Phone</h4>
        <p>All Bookings: 01509 554 334</p>
        
        <p>Branch: 01509 554 334</p>
        <p>Head Office: 01509 554 334</p>
    </div>
    <div class="contact__text">
        <h4>Email</h4>
        <p>RiverBoat@Getinn.com
        <p>For general enquiries only. For all bookings and reservations please use the Bookings Number</p>
    </div>
    <div class="contact__text">
        <h4>Social Media</h4>
        <ul>
            <li>
                <i class="fab fa-facebook-square"></i><span>Facebook</span>
            </li>
            <li>
                <i class="fab fa-twitter-square"></i><span>Twitter</span>
            </li>
            <li>
            <i class="fab fa-instagram-square"></i></i><span>Instagram</span>
            </li>
        </ul>
    </div>
  `;
};

export default renderContact;
