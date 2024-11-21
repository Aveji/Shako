document.addEventListener('DOMContentLoaded', () => {
    // ფორმის გაგზავნის პროცესის მართვა
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            showMessage('გთხოვთ, შეავსოთ ყველა ველი!', 'error');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showMessage('გთხოვთ, შეიყვანეთ სწორი Email მისამართი!', 'error');
            return;
        }

        showMessage('გაგზავნა მიმდინარეობს...', 'loading');

        setTimeout(() => {
            showMessage('თქვენი შეტყობინება წარმატებით გაიგზავნა!', 'success');
            e.target.reset();
        }, 2000);
    });

    function showMessage(message, type) {
        const box = document.createElement('div');
        box.className = `message-box ${type}`;
        box.textContent = message;
        document.getElementById('contactForm').before(box);

        setTimeout(() => box.remove(), 3000);
    }

    // მოდალის ფუნქცია
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.textContent = img.alt;
        });
    });

    // მოდალის დახურვა "close" ღილაკზე დაკლიკებით
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // მოდალის დახურვა ფონის დაკლიკებით
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // "Escape" კლავიშით მოდალის დახურვა
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});
