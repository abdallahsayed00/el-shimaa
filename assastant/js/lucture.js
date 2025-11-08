// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Login Simulation
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const navButtons = document.getElementById('navButtons');
const userMenu = document.getElementById('userMenu');
const userIcon = document.getElementById('userIcon');
const dropdownMenu = document.getElementById('dropdownMenu');
const logoutBtn = document.getElementById('logoutBtn');

loginBtn.addEventListener('click', function () {
    // Simulate login
    navButtons.style.display = 'none';
    userMenu.style.display = 'block';
});

signupBtn.addEventListener('click', function () {
    // Simulate signup and login
    navButtons.style.display = 'none';
    userMenu.style.display = 'block';
});

userIcon.addEventListener('click', function () {
    dropdownMenu.classList.toggle('active');
});

logoutBtn.addEventListener('click', function () {
    // Simulate logout
    userMenu.style.display = 'none';
    navButtons.style.display = 'flex';
    dropdownMenu.classList.remove('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    if (!userIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
});

// Add hover effect to course cards
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
    const title = card.querySelector('.course-title');

    card.addEventListener('mouseenter', function () {
        title.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function () {
        title.style.transform = 'translateY(0)';
    });
});

// Function to add courses (for admin use)
function addCourse(sectionId, courseData) {
    const container = document.getElementById(sectionId);

    // Remove empty state if exists
    const emptyState = container.querySelector('.empty-state');
    if (emptyState) {
        container.removeChild(emptyState);
    }

    // Create course card
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.innerHTML = `
                <div class="course-image">
                    <img src="${courseData.image}" alt="${courseData.title}">
                </div>
                <div class="course-content">
                    <h3 class="course-title">${courseData.title}</h3>
                    <button class="course-btn">الدخول إلى الصفحة</button>
                </div>
            `;

    container.appendChild(courseCard);

    // Add hover effect to the new card
    const title = courseCard.querySelector('.course-title');
    courseCard.addEventListener('mouseenter', function () {
        title.style.transform = 'translateY(-5px)';
    });

    courseCard.addEventListener('mouseleave', function () {
        title.style.transform = 'translateY(0)';
    });
}

// Example of adding a course (this would be done by admin in the admin panel)
// addCourse('individualLessonsContainer', {
//     title: 'رياضيات ١٠١ - الجزء الأول',
//     image: 'https://via.placeholder.com/400x300/1a237e/ffffff?text=رياضيات'
// });