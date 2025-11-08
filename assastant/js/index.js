 // Emoji Background Animation
        document.addEventListener('DOMContentLoaded', function() {
            const animatedBg = document.getElementById('animatedBg');
            const emojis = ['📚', '🎓', '✏️', '📝', '🔍', '💡', '📖', '🖋️', '📊', '🧮', '📐', '🔬', '💻', '📱', '🎒', '🏫', '📅', '⏰', '📋', '✅'];
            
            for (let i = 0; i < 25; i++) {
                const emoji = document.createElement('div');
                emoji.className = 'emoji';
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.left = Math.random() * 100 + '%';
                emoji.style.top = Math.random() * 100 + '%';
                emoji.style.animationDelay = Math.random() * 8 + 's';
                emoji.style.fontSize = (Math.random() * 2 + 1.8) + 'rem';
                animatedBg.appendChild(emoji);
            }

            // Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Login Simulation for user menu
            const userMenu = document.getElementById('userMenu');
            const userIcon = document.getElementById('userIcon');
            const dropdownMenu = document.getElementById('dropdownMenu');
            const logoutBtn = document.getElementById('logoutBtn');

            userIcon.addEventListener('click', function() {
                dropdownMenu.classList.toggle('active');
            });

            logoutBtn.addEventListener('click', function() {
                // Simulate logout
                userMenu.style.display = 'none';
                navButtons.style.display = 'flex';
                dropdownMenu.classList.remove('active');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(event) {
                if (!userIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
                    dropdownMenu.classList.remove('active');
                }
            });

            // Add hover effect to year cards
            const yearCards = document.querySelectorAll('.year-card');
            yearCards.forEach(card => {
                const title = card.querySelector('.year-title');
                
                card.addEventListener('mouseenter', function() {
                    title.style.transform = 'translateY(-5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    title.style.transform = 'translateY(0)';
                });
            });
        });