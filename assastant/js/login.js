// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Password Toggle
const loginPasswordToggle = document.getElementById('loginPasswordToggle');
const loginPassword = document.getElementById('loginPassword');

loginPasswordToggle.addEventListener('click', function () {
    if (loginPassword.type === 'password') {
        loginPassword.type = 'text';
        loginPasswordToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        loginPassword.type = 'password';
        loginPasswordToggle.innerHTML = '<i class="fas fa-eye"></i>';
    }
});

// Form Submission
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Simulate login process
    alert('تم تسجيل الدخول بنجاح!');
    // In a real application, you would handle the login process here
    // ثم إعادة التوجيه إلى الصفحة الرئيسية
    window.location.href = 'index.html';
});