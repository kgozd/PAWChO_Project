// // Funkcja do ustawiania pliku cookie
// function setCookie(name, value, days) {
//     const d = new Date();
//     d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + d.toUTCString();
//     document.cookie = `${name}=${value}; ${expires}; path=/`;
// }

// // Funkcja do pobierania wartości z pliku cookie
// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//     return "";
// }




// // Inicjalizacja strony
// // document.addEventListener('DOMContentLoaded', () => {
// //     const cookiesAccepted = getCookie('cookiesAccepted');
// //     if (cookiesAccepted !== 'true') {
// //         $('#cookieconsent2').modal('show'); // Pokaż modal jeśli cookies nie zostały zaakceptowane
// //     }

// //     const savedLanguage = getCookie('language') || 'pl'; // Domyślnie 'pl' jeśli brak cookie

// //     // Pobierz aktualny język z URL
// //     const urlParts = window.location.pathname.split('/');
// //     const currentLanguage = urlParts[1];

// //     // Sprawdź, czy język w URL jest zgodny z zapisanym językiem
// //     if (currentLanguage !== savedLanguage) {
// //         // Przekieruj do właściwego URL z zapisanym językiem
// //         const newUrl = `/${savedLanguage}${window.location.pathname.substring(3)}`;
// //         window.location.replace(newUrl);
// //     } else {
// //         // Załaduj tłumaczenia i zainicjalizuj stronę
// //         loadTranslations(savedLanguage, () => {
// //             updatePageContent(savedLanguage);
// //         });
// //     }
// // });


// // Function to accept cookies (set cookie and hide modal)
// function acceptCookies() {
//     setCookie('cookiesAccepted', 'true', 30); // Set cookie for 30 days
//     $('#cookieconsent2').modal('hide'); // Hide Bootstrap modal
// }

// // Function to decline cookies (set cookie and hide modal)
// function declineCookies() {
//     setCookie('cookiesAccepted', 'false', 30); // Set cookie for 30 days
//     $('#cookieconsent2').modal('hide'); // Hide Bootstrap modal
// }


// //kod do obslugi karuzeli
// $(document).ready(function () {
//     var multipleCardCarousel = document.querySelector(
//         "#carouselExampleControls"
//     );
//     if (window.matchMedia("(min-width: 576px)").matches) {
//         var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//             interval: false,
//             wrap: false
//         });
//         var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//         var cardWidth = $(".carousel-item").width();
//         var scrollPosition = 0;
//         var autoScrollInterval = 2000; // Interwał w milisekundach

//         function autoScroll() {
//             if (scrollPosition < carouselWidth - cardWidth * 3) {
//                 scrollPosition += cardWidth;
//                 $("#carouselExampleControls .carousel-inner").animate(
//                     { scrollLeft: scrollPosition },
//                     600
//                 );
//             } else {
//                 // Jeśli osiągnięto koniec, przewiń z powrotem na początek
//                 scrollPosition = 0;
//                 $("#carouselExampleControls .carousel-inner").animate(
//                     { scrollLeft: scrollPosition },
//                     600
//                 );
//             }
//         }

//         // Rozpocznij automatyczne przewijanie co określony interwał
//         var scrollInterval = setInterval(autoScroll, autoScrollInterval);

//         // Zatrzymaj automatyczne przewijanie, gdy mysz znajduje się nad karuzelą
//         $("#carouselExampleControls").hover(
//             function () {
//                 clearInterval(scrollInterval);
//             },
//             function () {
//                 scrollInterval = setInterval(autoScroll, autoScrollInterval);
//             }
//         );


//     } else {
//         $(multipleCardCarousel).addClass("slide");
//     }
// });


// //podsiwetlenie akualnego wybraego opcji z navu
// document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
//     const currentPageURL = window.location.href.split('#')[0];
//     const linkURL = link.href.split('#')[0];
//     const origin = window.location.origin;

//     // Reset the aria-current attribute for all links
//     link.removeAttribute('aria-current');

//     // Highlight the link if it matches the current page URL
//     if (linkURL === currentPageURL) {
//         link.setAttribute('aria-current', 'page');

//         // If the link is a dropdown item, also highlight its parent "Usługi" link
//         if (link.classList.contains('dropdown-item')) {
//             const servicesLink = document.querySelector('.nav-link-uslugi');
//             if (servicesLink) {
//                 servicesLink.setAttribute('aria-current', 'page');
//             }
//         }
//     }

//     // Special case: Highlight "O nas" link if the current URL is the root
//     if (currentPageURL === origin + '/' && link.getAttribute('href') === 'index.html') {
//         link.setAttribute('aria-current', 'page');
//     }
// });
// //do uslugi 
// const servicesLink = document.querySelector('.nav-link-uslugi');
// const dropdownItems = document.querySelectorAll('.dropdown-item');
// let anyDropdownItemActive = false;

// dropdownItems.forEach(item => {
//     if (item.getAttribute('aria-current') === 'page') {
//         anyDropdownItemActive = true;
//     }
// });

// if (servicesLink) {
//     if (anyDropdownItemActive) {
//         servicesLink.setAttribute('aria-current', 'page');
//     } else {
//         servicesLink.removeAttribute('aria-current');
//     }
// }




// //ukrywanie scroll buttona jesli wsytepuje hamburgerowe menu
// document.addEventListener('DOMContentLoaded', function () {
//     var navbarToggler = document.querySelector('.navbar-toggler');
//     var scrollBtn = document.getElementById('scroll-btn');
//     var navbarCollapse = document.getElementById('navbarSupportedContent');

//     navbarToggler.addEventListener('click', function () {
//         if (navbarCollapse.classList.contains('show')) {
//             scrollBtn.classList.remove('hidden');
//         } else {
//             scrollBtn.classList.add('hidden');
//         }
//     });

//     if (!navbarCollapse.classList.contains('show')) {
//         scrollBtn.classList.add('hidden');
//     }
// });




// //funckja do chowania headera jesli roziwniete haburger menu
// document.addEventListener("DOMContentLoaded", function () {
//     var servicesDropdown = document.querySelector('.nav-link-uslugi');
//     var headerDescription = document.getElementById('opisnaglowka');
//     var headerSection = document.getElementById('header');
//     var navbarToggler = document.querySelector('.navbar-toggler');

//     function toggleHeader() {
//         var isExpanded = servicesDropdown.getAttribute('aria-expanded') === 'true';

//         if (isExpanded) {
//             headerSection.style.display = 'none';
//             headerDescription.style.display = 'none';
//             servicesDropdown.setAttribute('aria-expanded', 'false');
//         } else {
//             headerSection.style.display = 'none';
//             headerDescription.style.display = 'none';
//             servicesDropdown.setAttribute('aria-expanded', 'true');
//         }
//     }

//     function toggleNavbar() {
//         var isNavbarOpen = navbarToggler.getAttribute('aria-expanded') === 'true';

//         if (isNavbarOpen) {
//             headerSection.style.display = 'none';
//             headerDescription.style.display = 'none';
//         } else {
//             headerSection.style.display = 'block';
//             headerDescription.style.display = 'block';
//         }
//     }

//     function addEventListeners() {
//         servicesDropdown.addEventListener('click', toggleHeader);
//         navbarToggler.addEventListener('click', toggleNavbar);
//     }

//     function removeEventListeners() {
//         servicesDropdown.removeEventListener('click', toggleHeader);
//         navbarToggler.removeEventListener('click', toggleNavbar);
//     }

//     function toggleHeaderOnResize() {
//         if (window.innerWidth < 992) {
//             addEventListeners();
//         } else {
//             removeEventListeners();
//             headerSection.style.display = 'block';
//             headerDescription.style.display = 'block';
//         }
//     }

//     window.addEventListener('resize', toggleHeaderOnResize);

//     toggleHeaderOnResize(); // Uruchom funkcję raz przy załadowaniu strony
// });




