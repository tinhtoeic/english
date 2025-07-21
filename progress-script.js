// Progress Page Script
document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo biểu đồ điểm số
    const scoreCtx = document.getElementById('scoreChart').getContext('2d');
    const scoreChart = new Chart(scoreCtx, {
        type: 'line',
        data: {
            labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
            datasets: [
                {
                    label: 'TOEIC',
                    data: [350, 420, 480, 520, 580, 620, 670],
                    borderColor: 'rgba(30, 136, 229, 1)',
                    backgroundColor: 'rgba(30, 136, 229, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'IELTS',
                    data: [4.0, 4.5, 5.0, 5.0, 5.5, 5.5, 6.0],
                    borderColor: 'rgba(240, 98, 146, 1)',
                    backgroundColor: 'rgba(240, 98, 146, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.dataset.label === 'IELTS') {
                                label += context.raw.toFixed(1);
                            } else {
                                label += context.raw;
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 300,
                    max: 900,
                    ticks: {
                        callback: function(value) {
                            if (value >= 300 && value <= 900) {
                                return value;
                            }
                            return '';
                        }
                    }
                }
            }
        }
    });

    // Khởi tạo biểu đồ thời gian học
    const timeCtx = document.getElementById('timeChart').getContext('2d');
    const timeChart = new Chart(timeCtx, {
        type: 'bar',
        data: {
            labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
            datasets: [{
                label: 'Phút học tập',
                data: [45, 60, 30, 75, 90, 120, 30],
                backgroundColor: [
                    'rgba(30, 136, 229, 0.7)',
                    'rgba(30, 136, 229, 0.7)',
                    'rgba(30, 136, 229, 0.7)',
                    'rgba(30, 136, 229, 0.7)',
                    'rgba(240, 98, 146, 0.7)',
                    'rgba(240, 98, 146, 0.7)',
                    'rgba(30, 136, 229, 0.7)'
                ],
                borderColor: [
                    'rgba(30, 136, 229, 1)',
                    'rgba(30, 136, 229, 1)',
                    'rgba(30, 136, 229, 1)',
                    'rgba(30, 136, 229, 1)',
                    'rgba(240, 98, 146, 1)',
                    'rgba(240, 98, 146, 1)',
                    'rgba(30, 136, 229, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Phút'
                    }
                }
            }
        }
    });

    // Xử lý thay đổi bộ lọc thời gian
    const timeFilter = document.getElementById('time-range');
    timeFilter.addEventListener('change', function() {
        // Trong thực tế sẽ gọi API để lấy dữ liệu mới
        console.log('Đã chọn khoảng thời gian: ' + this.value);
        
        // Giả lập cập nhật dữ liệu
        if (this.value === '7days') {
            scoreChart.data.labels = ['6 ngày trước', '5 ngày trước', '4 ngày trước', '3 ngày trước', '2 ngày trước', 'Hôm qua', 'Hôm nay'];
            scoreChart.data.datasets[0].data = [620, 630, 640, 650, 660, 665, 670];
            scoreChart.data.datasets[1].data = [5.5, 5.5, 5.5, 5.5, 6.0, 6.0, 6.0];
            scoreChart.update();
            
            timeChart.data.labels = ['6 ngày trước', '5 ngày trước', '4 ngày trước', '3 ngày trước', '2 ngày trước', 'Hôm qua', 'Hôm nay'];
            timeChart.data.datasets[0].data = [60, 45, 75, 60, 90, 120, 30];
            timeChart.update();
        } else if (this.value === '30days') {
            // Cập nhật dữ liệu cho 30 ngày
        } else {
            // Cập nhật dữ liệu cho tất cả
            scoreChart.data.labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'];
            scoreChart.data.datasets[0].data = [350, 420, 480, 520, 580, 620, 670];
            scoreChart.data.datasets[1].data = [4.0, 4.5, 5.0, 5.0, 5.5, 5.5, 6.0];
            scoreChart.update();
            
            timeChart.data.labels = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
            timeChart.data.datasets[0].data = [45, 60, 30, 75, 90, 120, 30];
            timeChart.update();
        }
    });
});
