const header =
    document.querySelector("#header");

const menuButton =
    document.querySelector("#menuButton");

const nav =
    document.querySelector("#nav");


/* =========================================
   HEADER
========================================= */

function updateHeader() {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================
   MOBILE MENU
========================================= */

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   MENU FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter");

const menuItems =
    document.querySelectorAll(".menu-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedFilter =
            button.dataset.filter;


        filterButtons.forEach(item => {

            item.classList.remove("active");

        });


        button.classList.add("active");


        menuItems.forEach(item => {

            const category =
                item.dataset.category;


            if (
                selectedFilter === "all" ||
                selectedFilter === category
            ) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    });

});


/* =========================================
   BOOKING MODAL
========================================= */

const bookingModal =
    document.querySelector("#bookingModal");

const bookingOverlay =
    document.querySelector("#bookingOverlay");

const bookingClose =
    document.querySelector("#bookingClose");

const bookingButtons =
    document.querySelectorAll(".open-booking");


function openBooking() {

    bookingModal.classList.add("active");

    document.body.classList.add("modal-open");

}


function closeBooking() {

    bookingModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


bookingButtons.forEach(button => {

    button.addEventListener(
        "click",
        openBooking
    );

});


bookingOverlay.addEventListener(
    "click",
    closeBooking
);


bookingClose.addEventListener(
    "click",
    closeBooking
);


/* =========================================
   DATE LIMIT
========================================= */

const bookingDate =
    document.querySelector("#bookingDate");


const today =
    new Date();


const year =
    today.getFullYear();

const month =
    String(
        today.getMonth() + 1
    ).padStart(2, "0");

const day =
    String(
        today.getDate()
    ).padStart(2, "0");


bookingDate.min =
    `${year}-${month}-${day}`;


/* =========================================
   TIME SELECTOR
========================================= */

const timeOptions =
    document.querySelectorAll(".time-option");

const bookingTime =
    document.querySelector("#bookingTime");


timeOptions.forEach(button => {

    button.addEventListener("click", () => {

        timeOptions.forEach(item => {

            item.classList.remove("active");

        });


        button.classList.add("active");

        bookingTime.value =
            button.dataset.time;

    });

});


/* =========================================
   BOOKING FORM
========================================= */

const bookingForm =
    document.querySelector("#bookingForm");

const bookingResult =
    document.querySelector(
        "#bookingMessageResult"
    );


bookingForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        if (!bookingTime.value) {

            bookingResult.style.color =
                "#9c594e";

            bookingResult.textContent =
                "Please select an available time.";

            return;

        }


        const guestValue =
            document.querySelector(
                "#bookingGuests"
            ).value;


        const name =
            document.querySelector(
                "#bookingName"
            ).value;


        bookingResult.style.color =
            "#56745c";


        bookingResult.textContent =
            `Thank you, ${name}. ` +
            `Your demo reservation request for ` +
            `${guestValue} at ${bookingTime.value} ` +
            `has been prepared.`;


        /*
            Portfolio demo only.

            In a real client project this is where
            the request would be sent to a backend,
            booking API or reservation service.
        */

    }
);


/* =========================================
   GALLERY
========================================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");

const galleryModal =
    document.querySelector("#galleryModal");

const galleryPreview =
    document.querySelector("#galleryPreview");

const galleryClose =
    document.querySelector("#galleryClose");

const galleryOverlay =
    document.querySelector("#galleryOverlay");


const galleryBackgrounds = {

    1: `
        radial-gradient(circle at 50% 58%, #c89150 0 4%, #6b4028 5% 10%, #30351f 11% 13%, transparent 14%),
        radial-gradient(circle at 50% 58%, transparent 0 25%, #e4d6bd 26% 36%, #8c7d68 37% 38%, transparent 39%),
        radial-gradient(circle at 20% 15%, rgba(230,177,103,.16), transparent 18%),
        linear-gradient(145deg, #72553e, #211914)
    `,

    2: `
        linear-gradient(90deg, transparent 31%, rgba(224,181,107,.08) 32% 33%, transparent 34% 66%, rgba(224,181,107,.08) 67% 68%, transparent 69%),
        linear-gradient(0deg, transparent 55%, rgba(255,255,255,.06) 56% 57%, transparent 58%),
        radial-gradient(circle at 72% 24%, rgba(229,174,91,.24), transparent 17%),
        linear-gradient(135deg, #211c17, #4c392c)
    `,

    3: `
        radial-gradient(circle at 50% 51%, #f3d8a5 0 10%, #a86835 11% 18%, #70452d 19% 25%, transparent 26%),
        radial-gradient(circle at 50% 51%, transparent 0 29%, #e7ddca 30% 42%, #8e7e68 43% 44%, transparent 45%),
        radial-gradient(circle at 75% 20%, rgba(222,173,96,.16), transparent 18%),
        linear-gradient(135deg, #453228, #1d1713)
    `

};


function openGallery(id) {

    galleryPreview.style.background =
        galleryBackgrounds[id];

    galleryPreview.style.backgroundSize =
        "cover";

    galleryPreview.style.backgroundPosition =
        "center";

    galleryModal.classList.add("active");

    document.body.classList.add("modal-open");

}


function closeGallery() {

    galleryModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        openGallery(
            item.dataset.gallery
        );

    });

});


galleryClose.addEventListener(
    "click",
    closeGallery
);


galleryOverlay.addEventListener(
    "click",
    closeGallery
);


/* =========================================
   ESC CLOSE
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeBooking();

            closeGallery();

        }

    }
);


/* =========================================
   CURSOR LIGHT
========================================= */

const cursorLight =
    document.querySelector(".cursor-light");


document.addEventListener(
    "mousemove",
    event => {

        cursorLight.style.left =
            `${event.clientX}px`;

        cursorLight.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================
   HERO PARALLAX
========================================= */

const heroImage =
    document.querySelector(".hero-image");


window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.scrollY;


        if (scroll < window.innerHeight) {

            heroImage.style.transform =
                `scale(1.04)
                 translateY(${scroll * 0.08}px)`;

        }

    }
);


/* =========================================
   MENU DOWNLOAD DEMO
========================================= */

const menuDownload =
    document.querySelector(".menu-download");


menuDownload.addEventListener(
    "click",
    () => {

        document
            .querySelector(".menu-list")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);