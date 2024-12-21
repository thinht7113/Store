//Snow 
window.onload = function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    var r, n, e, u;
    r = isMobile ? 20 : 40;

    if ($("#canvas").length > 0) {
        var f = document.getElementById("canvas"),
            o = f.getContext("2d"),
            t = window.innerWidth,
            i = window.innerHeight;

        function setCanvasSize() {
            t = window.innerWidth;
            i = window.innerHeight;
            f.width = t;
            f.height = i;
        }

        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        n = [];
        for (e = 0; e < r; e++) {
            n.push({
                x: Math.random() * t,
                y: Math.random() * i,
                r: Math.random() * 4 + 3,
                d: Math.random() * r
            });
        }

        function s() {
            var e = new Image;
            e.src = "https://clickbuy.com.vn/assets/themes/noel/snow.png";
            o.clearRect(0, 0, t, i);
            for (var f = 0; f < r; f++) {
                var u = n[f];
                o.drawImage(e, u.x, u.y, u.r * 2, u.r * 2);
            }
            h();
        }

        u = 0;

        function h() {
            for (var e = 0; e < r; e++) {
                var f = n[e];
                f.y += Math.cos(u + f.d) + 1 + f.r / 2;
                f.x += Math.sin(u) * 2;

                if (f.x > t + 5 || f.x < -5 || f.y > i) {
                    n[e] = e % 3 > 0 ? {
                        x: Math.random() * t,
                        y: -10,
                        r: f.r,
                        d: f.d
                    } : Math.sin(u) > 0 ? {
                        x: -5,
                        y: Math.random() * i,
                        r: f.r,
                        d: f.d
                    } : {
                        x: t + 5,
                        y: Math.random() * i,
                        r: f.r,
                        d: f.d
                    };
                }
            }
            u += 0.01;
        }

        setInterval(s, 33);
    }
};

// Mở Login
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const registerLink = document.getElementById("registerLink");
const loginLink = document.getElementById("loginLink");
const loginButton = document.getElementById("loginButton");
const body = document.body;

const closeLogin = document.getElementById("closeLogin");
const closeRegister = document.getElementById("closeRegister");

loginButton.onclick = function() {
    loginModal.style.display = "flex";
    body.style.overflow = "hidden";
};

registerLink.onclick = function() {
    body.style.overflow = "hidden";
    loginModal.style.display = "none";
    registerModal.style.display = "flex";
};

loginLink.onclick = function() {
    body.style.overflow = "hidden";
    registerModal.style.display = "none";
    loginModal.style.display = "flex";
};

closeLogin.onclick = function() {
    body.style.overflow = "scroll";
    loginModal.style.display = "none";
}
closeRegister.onclick = function() {
    body.style.overflow = "scroll";
    registerModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === loginModal) loginModal.style.display = "none";
    if (event.target === registerModal) registerModal.style.display = "none";
};

//check Login
const username = document.getElementById("username");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const password_reregister = document.getElementById("password1");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const confirm_password = document.getElementById("confirm_password");
const form = document.getElementById("registerForm");

username.oninvalid = function() {
    this.setCustomValidity("Vui lòng nhập số điện thoại hoặc email.");
};
username.oninput = function() {
    this.setCustomValidity("");
};


fullname.oninvalid = function() {
    this.setCustomValidity("Vui lòng nhập họ và tên.");
};
fullname.oninput = function() {
    this.setCustomValidity("");
};

phone.oninvalid = function() {
    this.setCustomValidity("Vui lòng nhập số điện thoại.");
};
phone.oninput = function() {
    this.setCustomValidity("");
};

email.oninput = function() {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Vui lòng nhập đúng định dạng email (ví dụ: example@gmail.com).");
    } else {
        email.setCustomValidity("");
    }
};

password.oninvalid = function() {
    this.setCustomValidity("Vui lòng nhập mật khẩu.");
};
password.oninput = function() {
    this.setCustomValidity("");
};

password_reregister.oninvalid = function() {
    this.setCustomValidity("Vui lòng nhập mật khẩu.");
};
password_reregister.oninput = function() {
    this.setCustomValidity("");
};

confirm_password.oninput = function() {
    if (confirm_password.value.trim() !== password_reregister.value.trim()) {
        confirm_password.setCustomValidity("Mật khẩu xác nhận không khớp.");
    } else {
        confirm_password.setCustomValidity("");
    }
};

// Chặn submit nếu có lỗi
form.onsubmit = function(event) {
    if (!email.checkValidity() || confirm_password.value.trim() !== password_reregister.value.trim()) {
        event.preventDefault();
        email.reportValidity();
        confirm_password.reportValidity();
    }
};

//Menu cấp 2
const menuItems = document.querySelectorAll('.menu-item');
const subMenus = document.querySelectorAll('.submenu');
const menuLevel2 = document.querySelector('.menu-level-2');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        menuItems.forEach(menu => menu.querySelector('a').classList.remove('active'));

        subMenus.forEach(menu => menu.classList.remove('active'));
        const targetMenu = document.getElementById(item.getAttribute('data-target'));
        if (targetMenu && targetMenu.innerHTML.trim() !== '') {
            targetMenu.classList.add('active');
            menuLevel2.classList.add('active');
        } else {
            menuLevel2.classList.remove('active');
        }

        item.querySelector('a').classList.add('active');
    });
});

menuLevel2.addEventListener('mouseenter', () => {
    menuLevel2.classList.add('active');
});

const menuContainer = document.querySelector('.sidebar-banner');
menuContainer.addEventListener('mouseleave', () => {
    subMenus.forEach(menu => menu.classList.remove('active'));
    menuLevel2.classList.remove('active');
    menuItems.forEach(menu => menu.querySelector('a').classList.remove('active'));
});


//Slide
const list = document.querySelector('.slider-list');
const items = document.querySelectorAll('.mySlides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let active = 0;
const lengItem = items.length - 1;
let autoSlide;

function reloadSlider() {
    const checklet = items[active].offsetLeft;
    list.style.transform = `translateX(${-checklet}px)`;

    dots.forEach((dot, index) => {
        if (index === active) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

next.onclick = function() {
    if (active + 1 > lengItem) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
};

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengItem;
    } else {
        active -= 1;
    }
    reloadSlider();
};

dots.forEach((dot, index) => {
    dot.onclick = function() {
        active = index;
        reloadSlider();
    };
});

function startAutoSlide() {
    autoSlide = setInterval(() => {
        next.onclick();
    }, 2500);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

startAutoSlide();

reloadSlider();


dots.forEach((dot, index) => {
    dot.onclick = function() {
        active = index;
        reloadSlider();
    };
});
reloadSlider();

//Thời gian
const countdown = () => {
    const countdownElements = document.querySelectorAll(".time");
    let timeRemaining = (1 * 24 * 60 * 60) + (20 * 60 * 60) + (11 * 60) + 56;

    const updateCountdown = () => {
        if (timeRemaining >= 0) {
            const days = Math.floor(timeRemaining / (24 * 60 * 60));
            const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / 3600);
            const minutes = Math.floor((timeRemaining % 3600) / 60);
            const seconds = timeRemaining % 60;

            countdownElements[0].innerText = String(days).padStart(2, "0");
            countdownElements[1].innerText = String(hours).padStart(2, "0");
            countdownElements[2].innerText = String(minutes).padStart(2, "0");
            countdownElements[3].innerText = String(seconds).padStart(2, "0");

            timeRemaining -= 1;
        }
    };

    setInterval(updateCountdown, 1000);
};

document.addEventListener("DOMContentLoaded", countdown);



//BackToTop
const backToTopButton = document.getElementById('backToTop');

// Xử lý ẩn/hiện nút Back to Top khi cuộn trang
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

// Đảm bảo nút ẩn khi load trang nếu ở đầu trang
window.addEventListener('load', () => {
    if (window.scrollY === 0) {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

// Xử lý cuộn mượt về đầu trang khi click nút Back to Top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt mà
    });
});

