// Lưu trạng thái đăng nhập
let isLoggedIn = false;

// Xử lý sự kiện khi trang load xong
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra xem có phải trang chủ không
    if (document.querySelector('#home')) {
        initHomePage();
    }
    
    // Thêm hiệu ứng cho các thẻ bài tập
    const exerciseCards = document.querySelectorAll('.exercise-card');
    exerciseCards.forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = this.dataset.link;
        });
    });
});

function initHomePage() {
    // Hiệu ứng cho hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    hero.style.transition = 'all 0.8s ease';
    
    setTimeout(() => {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 300);
    
    // Làm nổi bật menu hiện tại
    const currentPage = window.location.hash || '#home';
    document.querySelector(`nav a[href="${currentPage}"]`).classList.add('active');
}

// Hàm đăng nhập đơn giản
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Kiểm tra đơn giản (trong thực tế cần kết nối backend)
    if (username && password) {
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'admin/dashboard.html';
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
}

// Kiểm tra trạng thái đăng nhập khi vào trang admin
function checkLogin() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = '../login.html';
    }
}
