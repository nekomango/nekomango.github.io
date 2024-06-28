/* 彈出更換背景視窗 */
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const dropArea = document.getElementById('drop-area');

openModalBtn.onclick = () => {
    modal.style.display = 'flex';
}

closeModal.onclick = () => {
    modal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.style.borderColor = '#000';
});

dropArea.addEventListener('dragleave', () => {
    dropArea.style.borderColor = '#ccc';
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.style.borderColor = '#ccc';

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.body.style.backgroundImage = `url(${e.target.result})`;
            modal.style.display = 'none';
        };
        reader.readAsDataURL(file);
    } else {
        alert('請拖放一個圖片文件');
    }
});

function resetBG(){
    document.body.style.backgroundImage = 'none';
}