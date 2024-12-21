
const product = JSON.parse(localStorage.getItem('selectedProduct'));
if (product) {
    document.getElementById('header-breadcrumb').innerHTML = 
    `
    <div class="breadcrumb">
        <a href="./index.html"><i class="fa-solid fa-house"></i>Trang chủ</a>
        <span>&raquo;</span>
        <a href="list.html?type=all">Điện thoại</a>
        <span>&raquo;</span>
        <a href="list.html?type=${product.type}">${product.type}</a>
    </div>
    `
;
} else {
    document.getElementById('header-breadcrumb').innerHTML = '<p>Product not found!</p>';
}
if (product) {
    document.getElementById('product-detail').innerHTML = `
<h3>${product.name}</h3>
<div class="custom-rating">
    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    <span class="custom-rating-text">(${product.reviews} đánh giá)</span>
</div>
<div class="row">
    <div class="image-gallery">
        <div class="main-image">
          <img id="current-image" src="${product.image}" alt="Main Image" />
          <button class="nav left">&lt;</button>
          <button class="nav right">&gt;</button>
        </div>
        <div class="thumbnail-gallery">
          <img src="${product.image}" alt="Thumbnail 1" onclick="changeImage('${product.image}')" />
          <img src="${product.image1}" alt="Thumbnail 2" onclick="changeImage('${product.image1}')" />
          <img src="${product.image2}" alt="Thumbnail 3" onclick="changeImage('${product.image2}')" />
          <img src="${product.image3}" alt="Thumbnail 4" onclick="changeImage('${product.image3}')" />
          <img src="${product.image4}" alt="Thumbnail 5" onclick="changeImage('${product.image4}')" />
        </div>
        <img src="https://clickbuy.com.vn/uploads/media/657-vnzAb.png" width="468px" style="border-radius: 10px;" alt="">
        <div class="detail">
            <div class="title">Thông tin sản phẩm</div>
            <p>${product.description}</p>
        </div>
        <div class="endow">
            <div class="endow-title">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path>
                    </svg>
                    Ưu đãi thêm
                </p>
            </div>
            <div class="endow-content">
                <p><span style="color:#003300">Giảm thêm đến 100.000đ cho khách hàng là Học sinh - Sinh viên</span></p>
                <p><span style="color:#003300">Giảm thêm 100.000đ&nbsp;cho khách hàng cũ đã mua hàng tại Clickbuy</span></p>
                <p><span style="color:#003300">Giảm thêm đến 100.000đ&nbsp;khi mua hàng online</span></p>
            </div>
        </div>
    </div>
    <div class="product-price-container">
        <div class="price-container">
            <div>
                <div class="oldPrice">${product.oldPrice.toLocaleString()} ₫</div>
                <div class="price">${product.price.toLocaleString()} ₫</div>
            </div>
            <div class="discount">Trả góp 0%</div>
            <div style="font-size: 13px;margin-top:10px">Trả góp chỉ từ <b>0₫</b> </div>
        </div>
        <div style="font-weight: bold;font-size:14px">Phiên bản khác:</div>
        <div class="related_versions_list">
            <div class="related_versions_item" style="border: 1px solid red;">${product.data}<br><span>${product.price.toLocaleString()}</span></div>
            <div class="related_versions_item" >${product.data1}<br><span>${product.price1.toLocaleString()}</span></div>
        </div>
        <div style="font-weight: bold;font-size:14px">Màu sác:</div>
        <div class="related_versions_list">
            <div class="related_versions_item" style="border: 1px solid red;" >${product.color}<br><span>${product.price.toLocaleString()}</span></div>
            <div class="related_versions_item" >${product.color1}<br><span>${product.price1_color.toLocaleString()}</span></div>
            <div class="related_versions_item" >${product.color2}<br><span>${product.price2_color.toLocaleString()}</span></div>
        </div>
        <div class="warranty">
            <div class="warranty-title"><i class="fa-sharp fa-regular fa-shield-check"></i><span>Bảo Hành</span></div>
            <div class="related_versions_list">
                <div class="related_versions_item" style="border: 1px solid red;" >Bảo hành chính hãng<br><span style="color: red;">Miễn phí</span></div>
                <div class="related_versions_item" >1 đổi 1 24 tháng<br><span style="color: red;">+ 1.500.000</span></div>
            </div>
            <div class="button-buy">
                <a href="">
                    <div class="buy">Mua Ngay</div>
                    <div>(Mua tại cửa hành hoặc giao tận nhà)</div>
                </a>
            </div>
        </div>
        <div class="product-action-installment">
            <a href="">Trả góp cty tài chính <div>(xét duyệt online)</div></a>
            <a href="">Trả góp 0% thẻ tín dụng <div>(Visa, MasterCard, JCB)</div></a>
        </div>
        <div class="gift-title"><i class="fa-sharp fa-solid fa-gift fa-2x"></i>Khuyến Mãi</div>
        <ul class="promotion-list">
            <li>Trả góp 0% lãi - 0 phụ phí - Trả trước 0 đồng kỳ hạn 3-6 tháng <a href="" class="detaill">chi tiết</a></li>
            <li>Tặng gói bảo hành rơi vỡ - vào nước</li>
            <li>Ưu đãi giảm giá lên đến <span class="highlight">500.000đ</span> khi mở thẻ qua SenID</li>
            <li>Giảm <span class="highlight">500.000đ</span> khi mua kèm Macbook Air M2, Air M3, Apple Watch Ultra 2 (2024)</li>
            <li>Giảm <span class="highlight">300.000đ</span> khi mua kèm Macbook Air M1, iPad Pro, iPad Air 6, Apple Watch Series 10</li>
            <li style="padding-bottom: 20px;">Giảm <span class="highlight">200.000đ</span> khi mua kèm iPad Gen 9, iPad Gen 10, AirPods, Ốp lưng Apple chính hãng.</li>
        </ul>
    </div>
    <div class="right">
        <div class="product-policy">
            <div class="product-policy__title">
                <p>Chính sách bảo hành</p>
            </div>
            <div class="product-policy__content">
                <div class="product-policy__content">
                <p><span style="color:#006600">Bảo hành chính hãng 12 tháng </span><span style="color:#ff0000">( Miễn phí ):</span><span style="color:#333300"> </span>Bảo hành sửa chữa thay thế linh kiện tại các trung tâm bảo hành ủy quyền của Apple.</p>
                <p><span style="color:#006600">Bảo hành 1 đổi 1 24 tháng </span><span style="color:#ff0000">( + 1.500.000đ):</span> Năm đầu đổi máy mới chính hãng nguyên hộp, năm 2 bảo hành 1 đổi 1 máy tương đương. Bảo hành rơi vỡ, vào nước 24 tháng.</p>
                </div>
            </div>
        </div>
        <div class="product-policy">
            <div class="product-policy__title">
                <p>Khách hàng doanh nghiệp</p>
            </div>
            <div class="product-policy__content">
                <p><span style="color: #006600; font-weight: 700; font-size: 12px !important;">Các đối tác doanh nghiệp, vui lòng liên hệ Phòng Kinh Doanh B2B để được hỗ trợ tốt nhất</span></p>
                <ul>
                    <li>
                        <strong style="font-size: 12px !important;">Mr.Thịnh:
                            <span style="color: #ff0000;">0342 549 974</span>
                        </strong>
                    </li>
                    <li>
                        <strong style="font-size: 12px !important;">Email:
                            <span style="color: #ff0000; font-size: 12px !important;">thinht7113@gmail.com</span>
                        </strong>
                    </li>
                </ul>
            </div>
        </div>
        <div class="area">
            <div class="area-title">
                <p>Địa chỉ cửa hàng</p>
            </div>
            <div class="area-list">
                <div class="area-list__item store-list__item" store-id="7">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                    </svg>
                    <p>
                        375 Cầu Giấy, Hà Nội: <a href="tel:0911542468" title="Hotline" aria-label="Hotline"><span class="phone-number">0911.542.468</span></a> - <b>Bản đồ đường đi</b>
                    </p>
                </div>
                
                <div class="area-list__item store-list__item" store-id="8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                    </svg>
                    <p>
                        111 Trần Đăng Ninh, Cầu Giấy, Hà Nội: <a href="tel:0976732468" title="Hotline" aria-label="Hotline"><span class="phone-number">0976.732.468</span></a> - <b>Bản đồ đường đi</b>
                    </p>
                </div>
                
                <div class="area-list__item store-list__item" store-id="10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                    </svg>
                    <p>
                        118 Thái hà, Đống Đa, Hà Nội: <a href="tel:0964242468" title="Hotline" aria-label="Hotline"><span class="phone-number">0964.242.468</span></a> - <b>Bản đồ đường đi</b>
                    </p>
                </div>
                
                <div class="area-list__item store-list__item" store-id="9" style="padding-bottom: 30px;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                    </svg>
                    <p>
                        446 Xã Đàn, Đống Đa, Hà Nội: <a href="tel:0961112468" title="Hotline" aria-label="Hotline"><span class="phone-number">0961.112.468</span></a> - <b>Bản đồ đường đi</b>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`;
} else {
    document.getElementById('product-detail').innerHTML = '<p>Product not found!</p>';
}

const changeImage = (src) => {
    const currentImage = document.getElementById("current-image");
    currentImage.src = src;
  
    const thumbnails = document.querySelectorAll(".thumbnail-gallery img");
    thumbnails.forEach((img) => img.classList.remove("active"));
  
    const activeThumbnail = Array.from(thumbnails).find(
      (img) => img.src.includes(src)
    );
    activeThumbnail.classList.add("active");
  };
  
  let currentIndex = 0;
  const images = [`${product.image}`,`${product.image1}`,`${product.image2}`,`${product.image3}`, `${product.image4}`];
  
  document.querySelector(".nav.left").onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(images[currentIndex]);
  };
  
  document.querySelector(".nav.right").onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(images[currentIndex]);
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