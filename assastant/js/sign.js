 // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Password Toggle
        const signupPasswordToggle = document.getElementById('signupPasswordToggle');
        const signupPassword = document.getElementById('signupPassword');
        const signupConfirmPasswordToggle = document.getElementById('signupConfirmPasswordToggle');
        const signupConfirmPassword = document.getElementById('signupConfirmPassword');

        signupPasswordToggle.addEventListener('click', function() {
            if (signupPassword.type === 'password') {
                signupPassword.type = 'text';
                signupPasswordToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
            } else {
                signupPassword.type = 'password';
                signupPasswordToggle.innerHTML = '<i class="fas fa-eye"></i>';
            }
        });

        signupConfirmPasswordToggle.addEventListener('click', function() {
            if (signupConfirmPassword.type === 'password') {
                signupConfirmPassword.type = 'text';
                signupConfirmPasswordToggle.innerHTML = '<i class="fas fa-eye-slash"></i>';
            } else {
                signupConfirmPassword.type = 'password';
                signupConfirmPasswordToggle.innerHTML = '<i class="fas fa-eye"></i>';
            }
        });

        // Form Submission
        const signupForm = document.getElementById('signupForm');

        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if passwords match
            if (signupPassword.value !== signupConfirmPassword.value) {
                alert('كلمات المرور غير متطابقة!');
                return;
            }
            
            // Validate student ID (should be numeric)
            const studentId = document.getElementById('studentId').value;
            if (!/^\d+$/.test(studentId)) {
                alert('رقم الطالب يجب أن يتكون من أرقام فقط!');
                return;
            }
            
            // Validate parent phone (should be numeric)
            const parentPhone = document.getElementById('parentPhone').value;
            if (!/^\d+$/.test(parentPhone)) {
                alert('رقم ولي الأمر يجب أن يتكون من أرقام فقط!');
                return;
            }
            
            // Simulate signup process
            alert('تم إنشاء الحساب بنجاح!');
            // In a real application, you would handle the signup process here
            // ثم إعادة التوجيه إلى الصفحة الرئيسية
            window.location.href = 'index.html';
        });

        // Add input validation for student ID and parent phone
        document.getElementById('studentId').addEventListener('input', function(e) {
            this.value = this.value.replace(/[^\d]/g, '');
        });

        document.getElementById('parentPhone').addEventListener('input', function(e) {
            this.value = this.value.replace(/[^\d]/g, '');
        });