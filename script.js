// Khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng loading cho trang
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Active menu item
    const currentPage = window.location.hash || '#home';
    const menuItems = document.querySelectorAll('nav a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });

    // Lưu trạng thái đăng nhập
    const loginBtn = document.querySelector('.btn-login');
    if (localStorage.getItem('isLoggedIn') {
        loginBtn.innerHTML = '<i class="fas fa-user"></i> Tài khoản';
    }

    // Hiệu ứng cho feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500);
    });
});

// Hàm đăng nhập
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Kiểm tra đơn giản
    if (username && password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        window.location.href = 'index.html';
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
}

// Hàm đăng xuất
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}
