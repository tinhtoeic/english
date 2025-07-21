// Kiểm tra đăng nhập admin
function checkAdminLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const isAdmin = localStorage.getItem('isAdmin');
    
    if(!isLoggedIn || isLoggedIn !== 'true' || !isAdmin || isAdmin !== 'true') {
        window.location.href = "../auth/login.html";
    } else {
        const username = localStorage.getItem('username');
        if(username) {
            document.getElementById('admin-name').textContent = username;
        }
    }
}

// Đăng xuất admin
function adminLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('username');
    window.location.href = "../auth/login.html";
}

// Khởi tạo biểu đồ
document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById('statsChart')) {
        const ctx = document.getElementById('statsChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['TOEIC', 'IELTS', 'Ngữ pháp', 'Từ vựng'],
                datasets: [{
                    label: 'Số học viên',
                    data: [120, 85, 150, 200],
                    backgroundColor: [
                        'rgba(30, 136, 229, 0.7)',
                        'rgba(240, 98, 146, 0.7)',
                        'rgba(30, 136, 229, 0.7)',
                        'rgba(240, 98, 146, 0.7)'
                    ],
                    borderColor: [
                        'rgba(30, 136, 229, 1)',
                        'rgba(240, 98, 146, 1)',
                        'rgba(30, 136, 229, 1)',
                        'rgba(240, 98, 146, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
