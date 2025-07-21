// TOEIC Listening Script
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý chọn part
    const parts = document.querySelectorAll('.part');
    parts.forEach(part => {
        part.addEventListener('click', function() {
            parts.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            // Ở đây có thể thêm code load bài tập tương ứng
            console.log('Chọn part: ' + this.dataset.part);
        });
    });

    // Xử lý audio player
    const audioPlayer = document.getElementById('listening-audio');
    const timer = document.querySelector('.timer');
    
    audioPlayer.addEventListener('timeupdate', function() {
        const currentTime = formatTime(audioPlayer.currentTime);
        const duration = formatTime(audioPlayer.duration);
        timer.textContent = `${currentTime} / ${duration}`;
    });

    // Xử lý nộp bài
    const submitBtn = document.getElementById('submit-answer');
    const resultContainer = document.getElementById('result-container');
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        
        if (!selectedOption) {
            alert('Vui lòng chọn đáp án trước khi nộp bài!');
            return;
        }
        
        // Hiển thị kết quả
        resultContainer.classList.remove('hidden');
        
        // Cuộn đến kết quả
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    });

    // Xử lý hiển thị transcript
    const showTranscriptBtn = document.getElementById('show-transcript');
    const transcriptContainer = document.getElementById('transcript-container');
    
    showTranscriptBtn.addEventListener('click', function(e) {
        e.preventDefault();
        transcriptContainer.classList.toggle('hidden');
        this.innerHTML = transcriptContainer.classList.contains('hidden') ? 
            '<i class="fas fa-align-left"></i> Xem transcript' : 
            '<i class="fas fa-times"></i> Ẩn transcript';
    });

    // Xử lý chọn level
    const levelSelect = document.getElementById('level');
    levelSelect.addEventListener('change', function() {
        console.log('Chọn level: ' + this.value);
        // Ở đây có thể thêm code load bài tập theo level
    });
});

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
