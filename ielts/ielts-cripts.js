// IELTS Writing Script
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý chọn task
    const taskBtns = document.querySelectorAll('.task-btn');
    const tasks = document.querySelectorAll('.writing-task');
    
    taskBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            taskBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const taskId = this.dataset.task;
            tasks.forEach(task => task.classList.add('hidden'));
            document.getElementById(taskId).classList.remove('hidden');
        });
    });

    // Xử lý đếm từ
    const writingText = document.getElementById('writing-text');
    const wordCount = document.querySelector('.word-count');
    
    writingText.addEventListener('input', function() {
        const text = this.value.trim();
        const words = text ? text.split(/\s+/).length : 0;
        wordCount.textContent = words + ' words';
    });

    // Xử lý nút công cụ
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const command = this.querySelector('i').className.replace('fas fa-', '');
            
            switch(command) {
                case 'bold':
                    document.execCommand('bold', false, null);
                    break;
                case 'italic':
                    document.execCommand('italic', false, null);
                    break;
                case 'calculator':
                    alert('Word count: ' + wordCount.textContent);
                    break;
            }
        });
    });

    // Xử lý nộp bài
    const submitBtn = document.getElementById('submit-writing');
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const text = writingText.value.trim();
        
        if (!text) {
            alert('Vui lòng viết bài trước khi nộp!');
            return;
        }
        
        if (confirm('Bạn có chắc chắn muốn nộp bài?')) {
            // Gửi bài lên server hoặc lưu vào localStorage
            localStorage.setItem('lastWriting', text);
            alert('Bài viết đã được gửi thành công! Giáo viên sẽ chấm và phản hồi sớm.');
        }
    });

    // Xử lý lưu nháp
    const saveDraftBtn = document.getElementById('save-draft');
    saveDraftBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const text = writingText.value.trim();
        
        if (!text) {
            alert('Không có nội dung để lưu!');
            return;
        }
        
        localStorage.setItem('writingDraft', text);
        alert('Bài viết đã được lưu tạm!');
    });

    // Xử lý hiển thị bài mẫu
    const showSampleBtn = document.getElementById('show-sample');
    const sampleAnswer = document.getElementById('sample-answer');
    
    showSampleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sampleAnswer.classList.toggle('hidden');
        this.innerHTML = sampleAnswer.classList.contains('hidden') ? 
            '<i class="fas fa-eye"></i> Xem bài mẫu' : 
            '<i class="fas fa-eye-slash"></i> Ẩn bài mẫu';
    });

    // Khôi phục bài nháp nếu có
    const savedDraft = localStorage.getItem('writingDraft');
    if (savedDraft) {
        writingText.value = savedDraft;
        const words = savedDraft ? savedDraft.split(/\s+/).length : 0;
        wordCount.textContent = words + ' words';
    }
});
