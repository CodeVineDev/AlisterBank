// HIDDEN NAV REUSEABLE SCRIPT
class HiddenNav extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
           <nav class="nav-wrap" id="hidden-nav">
        <div class="navbar">
          <div class="logo">
            <img src="IMAGES/alisterbank-logo.png" alt="logo" />
            <h3>Alister</h3>
          </div>
          <div class="navLink-con">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="PAGES/about.html">About Us</a></li>
              <li class="dropdown">
                <p class="link">Product
                  <iconify-icon class="icon" icon="teenyicons:down-solid"></iconify-icon>
                </p>
                <div class="dropdown_content">
                  <div href="#" class="dropdown-child">
                    <a href="#" class="link-child">
                      Account
                      <iconify-icon class="icon" icon="teenyicons:right-solid"></iconify-icon></a>
                    <div class="dropdown_content-child">
                      <a href="#"> Account</a>
                      <a href="#"> Details</a>
                    </div>
                  </div>
                  <a href="#"> Product</a>
                  <div href="#" class="dropdown-child">
                    <a href="#" class="link-child">
                      Loan
                      <iconify-icon class="icon" icon="teenyicons:right-solid"></iconify-icon></a>
                    <div class="dropdown_content-child">
                      <a href="#"> Business Loan</a>
                      <a href="#"> Education Loan</a>
                      <a href="#"> Home Loan</a>
                      <a href="#"> Car Loan</a>
                      <a href="#"> Personal Loan</a>
                    </div>
                  </div>
                  <a href="#"> Card</a>
                </div>
              </li>
    
              <li class="dropdown">
                <p class="link">Pages
                  <iconify-icon class="icon" icon="teenyicons:down-solid"></iconify-icon>
                </p>
                <div class="dropdown_content">
                  <a href="#"> Affiliate</a>
                  <a href="#"> Blog</a>
                  <a href="#"> Remittance</a>
                  <a href="#"> Faqs</a>
                  <a href="#"> Login</a>
                  <a href="#"> Password Set</a>
                  <a href="#"> Varify Number</a>
                  <a href="#"> OTP</a>
                  <a href="#"> Terms Conditions</a>
                  <a href="#"> Privacy Policy</a>
                </div>
              </li>
              <li><a href="#blog">Contact Us</a></li>
            </ul>
          </div>
          <div class="nav-btns">
            <button href="#" class="login">
              <span class="material-symbols-outlined"> shield_person </span>Open
              An Account
            </button>
            <button class="dropnav-btn" data-target=".container1">
              <span class="bars"></span>
            </button>
          </div>
          <div class="dropnav-container container1">
           
              <div class="nav-accordion">
                <div class="drop"><a href="index.html">Home</a></div>
                <div class="drop"><a href="PAGES/about.html">About Us</a></div>
                <div class="nav-accordion-item">
                  <div class="nav-accordion-header drop">Product</div>
                  <div class="nav-accordion-content">
                    <div class="nav-accordion-item_2">
                      <div class="nav-accordion-header_2  drop-2">Account</div>
                      <div class="nav-accordion-content_2 drop-3">
                        <div><a href="#">Account</a></div>
                        <div><a href="#">Details</a></div>
                      </div>
                    </div>
                    <div class="drop-2"><a href="#">Product</a></div>
                    <div class="nav-accordion-item_2">
                      <div class="nav-accordion-header_2  drop-2">Loan</div>
                      <div class="nav-accordion-content_2 drop-3">
                        <div><a href="#"> Business Loan</a></div>
                        <div><a href="#"> Education Loan</a></div>
                        <div><a href="#"> Home Loan</a></div>
                        <div><a href="#"> Car Loan</a></div>
                        <div><a href="#"> Personal Loan</a></div>
                      </div>
                    </div>
                    <div class="drop-2"><a href="#">Card</a></div>
                  </div>
                </div>
                <div class="nav-accordion-item">
                  <div class="nav-accordion-header drop">Pages</div>
                  <div class="nav-accordion-content drop-4">
                    <div><a href="#"> Affiliate</a></div>
                    <div><a href="#"> Blog</a></div>
                    <div><a href="#"> Remittance</a></div>
                    <div><a href="#"> Faqs</a></div>
                    <div><a href="#"> Login</a></div>
                    <div><a href="#"> Password Set</a></div>
                    <div><a href="#"> Varify Number</a></div>
                    <div><a href="#"> OTP</a></div>
                    <div><a href="#"> Terms Conditions</a></div>
                    <div><a href="#"> Privacy Policy</a></div>
                  </div>
                </div>
                <div class="drop"><a href="PAGES/about.html">Contact Us</a></div>
                <a href="#"><button>Sign In</button></a>
              </div>
          </div>
        </div>
      </nav>
        `;
    }
  }
  
customElements.define('hidden-navbar', HiddenNav);
  




// MAIN NAV REUSEABLE SCRIPT

class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="preloader">
      <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  
    <div class="chatUs">
      <i class="material-symbols-outlined" id="fa"> support_agent </i>
      <div class="tag-message">
        <p>Chat with us !</p>
      </div>
    </div>
  
    <nav class="nav-wrap" id="main-nav">
      <div class="navbar">
        <div class="logo">
          <img src="IMAGES/alisterbank-logo.png" alt="logo" />
          <h3>Alister</h3>
        </div>
        <div class="navLink-con">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="PAGES/about.html">About Us</a></li>
            <li class="dropdown">
              <p class="link">Product
                <iconify-icon class="icon" icon="teenyicons:down-solid"></iconify-icon>
              </p>
              <div class="dropdown_content">
                <div href="#" class="dropdown-child">
                  <a href="#" class="link-child">
                    Account
                    <iconify-icon class="icon" icon="teenyicons:right-solid"></iconify-icon></a>
                  <div class="dropdown_content-child">
                    <a href="#"> Account</a>
                    <a href="#"> Details</a>
                  </div>
                </div>
                <a href="#"> Product</a>
                <div href="#" class="dropdown-child">
                  <a href="#" class="link-child">
                    Loan
                    <iconify-icon class="icon" icon="teenyicons:right-solid"></iconify-icon></a>
                  <div class="dropdown_content-child">
                    <a href="#"> Business Loan</a>
                    <a href="#"> Education Loan</a>
                    <a href="#"> Home Loan</a>
                    <a href="#"> Car Loan</a>
                    <a href="#"> Personal Loan</a>
                  </div>
                </div>
                <a href="#"> Card</a>
              </div>
            </li>
  
            <li class="dropdown">
              <p class="link">Pages
                <iconify-icon class="icon" icon="teenyicons:down-solid"></iconify-icon>
              </p>
              <div class="dropdown_content">
                <a href="#"> Affiliate</a>
                <a href="#"> Blog</a>
                <a href="#"> Remittance</a>
                <a href="#"> Faqs</a>
                <a href="#"> Login</a>
                <a href="#"> Password Set</a>
                <a href="#"> Varify Number</a>
                <a href="#"> OTP</a>
                <a href="#"> Terms Conditions</a>
                <a href="#"> Privacy Policy</a>
              </div>
            </li>
            <li><a href="#blog">Contact Us</a></li>
          </ul>
        </div>
        <div class="nav-btns">
          <button href="#" class="login">
            <span class="material-symbols-outlined"> shield_person </span>Open
            An Account
          </button>
          <button class="dropnav-btn" data-target=".container2">
            <span class="bars"></span>
          </button>
        </div>
        <div class="dropnav-container container2">
          <div class="nav-accordion">
            <div class="drop"><a href="index.html">Home</a></div>
            <div class="drop"><a href="PAGES/about.html">About Us</a></div>
            <div class="nav-accordion-item">
              <div class="nav-accordion-header drop">Product</div>
              <div class="nav-accordion-content">
                <div class="nav-accordion-item_2">
                  <div class="nav-accordion-header_2  drop-2">Account</div>
                  <div class="nav-accordion-content_2 drop-3">
                    <div><a href="#">Account</a></div>
                    <div><a href="#">Details</a></div>
                  </div>
                </div>
                <div class="drop-2"><a href="#">Product</a></div>
                <div class="nav-accordion-item_2">
                  <div class="nav-accordion-header_2  drop-2">Loan</div>
                  <div class="nav-accordion-content_2 drop-3">
                    <div><a href="#"> Business Loan</a></div>
                    <div><a href="#"> Education Loan</a></div>
                    <div><a href="#"> Home Loan</a></div>
                    <div><a href="#"> Car Loan</a></div>
                    <div><a href="#"> Personal Loan</a></div>
                  </div>
                </div>
                <div class="drop-2"><a href="#">Card</a></div>
              </div>
            </div>
            <div class="nav-accordion-item">
              <div class="nav-accordion-header drop">Pages</div>
              <div class="nav-accordion-content drop-4">
                <div><a href="#"> Affiliate</a></div>
                <div><a href="#"> Blog</a></div>
                <div><a href="#"> Remittance</a></div>
                <div><a href="#"> Faqs</a></div>
                <div><a href="#"> Login</a></div>
                <div><a href="#"> Password Set</a></div>
                <div><a href="#"> Varify Number</a></div>
                <div><a href="#"> OTP</a></div>
                <div><a href="#"> Terms Conditions</a></div>
                <div><a href="#"> Privacy Policy</a></div>
              </div>
            </div>
            <div class="drop"><a href="PAGES/about.html">Contact Us</a></div>
            <a href="#"><button>Sign In</button></a>
          </div>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define('nav-bar', Navbar);

// FOOTER REUSEABLE SCRIPT

class BottomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer" id="footer">
        <div class="footer-container">
          <div class="footer-container__top">
            <div class="box left">
              <div class="logo">
                <img src="IMAGES/alisterbank-logo.png" alt="logo" />
                <h3>Alister</h3>
              </div>
              <p class="normal-text">A modern, technology-first bank built for you and your growing
                business.</p>
              <div class="social-icons">
                <iconify-icon class="icon" icon="ri:facebook-circle-line"></iconify-icon>
                <iconify-icon class="icon" icon="jam:twitter-circle"></iconify-icon>
                <iconify-icon class="icon" icon="jam:linkedin-circle"></iconify-icon>
                <iconify-icon class="icon" icon="mage:instagram-circle"></iconify-icon>
              </div>
            </div>
            <div class="box center">
              <h3>Company</h3>
              <div class="links">
                <div class="link"><iconify-icon class="icon" icon="material-symbols-light:chevron-right"></iconify-icon><a
                    href="#">About Us</a></div>
                <div class="link"><iconify-icon class="icon" icon="material-symbols-light:chevron-right"></iconify-icon><a
                    href="#">Awards</a></div>
                <div class="link"><iconify-icon class="icon" icon="material-symbols-light:chevron-right"></iconify-icon><a
                    href="#">Careers</a></div>
              </div>
            </div>
            <div class="box center">
              <h3>Useful Links</h3>
              <div class="links">
                <div class="link"><iconify-icon class="icon" icon="material-symbols-light:chevron-right"></iconify-icon><a
                    href="#">Products</a></div>
                <div class="link"><iconify-icon class="icon" icon="material-symbols-light:chevron-right"></iconify-icon><a
                    href="#">Business loan</a></div>
                <div class="link"><iconify-icon class="icon" icon="material-symbols-light:chevron-right"></iconify-icon><a
                    href="#">Affiliate Program</a></div>
                <div class="link"><iconify-icon class="icon" icon="material-symbols-light:chevron-right"></iconify-icon><a
                    href="#">Blog</a></div>
              </div>
            </div>
            <div class="box center">
              <h3>Support</h3>
              <div class="links">
                <div class="link"><iconify-icon class="icon" icon="material-symbols-light:chevron-right"></iconify-icon><a
                    href="#">Support@Alister</a></div>
                <div class="link"><iconify-icon class="icon" icon="material-symbols-light:chevron-right"></iconify-icon><a
                    href="#">Contact Us</a></div>
                <div class="link"><iconify-icon class="icon" icon="material-symbols-light:chevron-right"></iconify-icon><a
                    href="#">FAQ</a></div>
              </div>
            </div>
            <div class="box right">
              <h3>Suscribe</h3>
              <input type="email" name="email" id="email" placeholder="Enter Your Email Address" />
              <a href="#"><button>Suscribe</button></a>
              <p class="normal-text">Get the latest updates via email. Any time you may
                unsubscribe</p>
            </div>
          </div>
          <div class="footer-container__lower">
            <div class="left">
              <span>Copyright <i class="fa fa-copyright"></i>
                <a href="#">Alister</a></span>
            </div>
            <div class="right">
              <span><a href="#">Privacy</a></span>
              <span><a href="#">Terms and Condition</a></span>
            </div>
          </div>
        </div>
      </footer>
      `;
  }
}

customElements.define('bottom-footer', BottomFooter);
// FOOTER REUSEABLE SCRIPT

// class BottomFooter extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
      
//       `;
//   }
// }

// customElements.define('nav-bar', Navbar);
