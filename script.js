document.addEventListener("DOMContentLoaded", () => {
    
    // 1. LocalStorage (Дані про браузер)
    localStorage.setItem('browserInfo', navigator.userAgent);
    const footer = document.getElementById('footer-storage');
    if (footer) footer.textContent = "System Data: " + localStorage.getItem('browserInfo');

    // 2. Коментарі (Варіант 17)
    const variant = 17;
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('comments-list');
            data.forEach(c => {
                const card = document.createElement('div');
                card.className = 'comment-card';
                card.innerHTML = `<div class="c-email">${c.email}</div><div class="c-text">"${c.body}"</div>`;
                list.appendChild(card);
            });
        });

    // 3. Модалка через 60 секунд
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.querySelector('.close-modal');

    setTimeout(() => {
        if (modal) modal.classList.remove('hidden');
    }, 60000); 

    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    }

    // 4. Перемикач теми
    const themeBtn = document.getElementById('theme-toggle');
    const hour = new Date().getHours();
    
    // Авто-тема (ніч з 21 до 7)
    if (hour < 7 || hour >= 21) {
        document.body.classList.add('dark-theme');
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});