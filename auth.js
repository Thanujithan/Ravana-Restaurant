// ===== AUTH JAVASCRIPT =====

// Show Alert Message
function showAlert(type, message) {
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');

    // Hide both first
    if (successAlert) successAlert.style.display = 'none';
    if (errorAlert) errorAlert.style.display = 'none';

    if (type === 'success' && successAlert) {
        document.getElementById('successMsg').textContent = message;
        successAlert.style.display = 'flex';
        setTimeout(() => { successAlert.style.display = 'none'; }, 4000);
    } else if (type === 'error' && errorAlert) {
        document.getElementById('errorMsg').textContent = message;
        errorAlert.style.display = 'flex';
        setTimeout(() => { errorAlert.style.display = 'none'; }, 4000);
    }
}

// Toggle Password Visibility
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    const i = icon.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        i.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        i.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Password Strength Checker
function checkPasswordStrength(password) {
    const fill = document.getElementById('strengthFill');
    const label = document.getElementById('strengthLabel');

    if (!fill || !label) return;

    let strength = 0;

    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const levels = [
        { pct: '0%', color: 'transparent', text: '' },
        { pct: '20%', color: '#ef4444', text: 'Very Weak' },
        { pct: '40%', color: '#f97316', text: 'Weak' },
        { pct: '60%', color: '#eab308', text: 'Average' },
        { pct: '80%', color: '#22c55e', text: 'Strong' },
        { pct: '100%', color: '#16a34a', text: 'Very Strong' }
    ];

    const level = levels[strength] || levels[0];

    fill.style.width = level.pct;
    fill.style.background = level.color;
    label.textContent = level.text;
    label.style.color = level.color;
}

// Email Validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone Validation
function isValidPhone(phone) {
    return /^[\d\s\+\-]{7,15}$/.test(phone);
}

// ===== LOGIN HANDLER =====
function handleLogin() {
    const email = document.getElementById('loginEmail')?.value.trim();
    const password = document.getElementById('loginPassword')?.value;
    const remember = document.getElementById('rememberMe')?.checked;

    if (!email || !password) {
        showAlert('error', 'Please enter Email and Password!');
        return;
    }

    if (!isValidEmail(email)) {
        showAlert('error', 'Please enter a valid Email address!');
        return;
    }

    if (password.length < 6) {
        showAlert('error', 'Password must be at least 6 characters long!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('ravana_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        showAlert('error', 'Invalid Email or Password. Please try again!');
        return;
    }

    const session = {
        name: user.firstName + ' ' + user.lastName,
        email: user.email,
        loggedIn: true
    };

    if (remember) {
        localStorage.setItem('ravana_session', JSON.stringify(session));
    } else {
        sessionStorage.setItem('ravana_session', JSON.stringify(session));
    }

    showAlert(
        'success',
        `Welcome ${user.firstName}! Login successful. Redirecting...`
    );

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1800);
}

// ===== REGISTER HANDLER =====
function handleRegister() {
    const firstName = document.getElementById('firstName')?.value.trim();
    const lastName = document.getElementById('lastName')?.value.trim();
    const email = document.getElementById('regEmail')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const password = document.getElementById('regPassword')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    const address = document.getElementById('address')?.value.trim();
    const agreeTerms = document.getElementById('agreeTerms')?.checked;

    if (!firstName || !lastName) {
        showAlert('error', 'Please enter your name!');
        return;
    }

    if (!email) {
        showAlert('error', 'Please enter your Email!');
        return;
    }

    if (!isValidEmail(email)) {
        showAlert('error', 'Please enter a valid Email address!');
        return;
    }

    if (!phone) {
        showAlert('error', 'Please enter your phone number!');
        return;
    }

    if (!isValidPhone(phone)) {
        showAlert('error', 'Please enter a valid phone number!');
        return;
    }

    if (!password || password.length < 6) {
        showAlert('error', 'Password must be at least 6 characters long!');
        return;
    }

    if (password !== confirmPassword) {
        showAlert('error', 'Passwords do not match! Please check again.');
        return;
    }

    if (!agreeTerms) {
        showAlert('error', 'You must agree to the Terms and Conditions!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('ravana_users') || '[]');

    if (users.find(u => u.email === email)) {
        showAlert('error', 'This Email is already registered!');
        return;
    }

    users.push({
        firstName,
        lastName,
        email,
        phone,
        password,
        address,
        createdAt: new Date().toISOString()
    });

    localStorage.setItem('ravana_users', JSON.stringify(users));

    showAlert(
        'success',
        `Welcome ${firstName}! Registration successful. Redirecting to Login page...`
    );

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// ===== AUTO-REDIRECT if already logged in =====
(function checkSession() {
    const session = JSON.parse(
        localStorage.getItem('ravana_session') ||
        sessionStorage.getItem('ravana_session') ||
        'null'
    );

    if (session && session.loggedIn) {
        const page = window.location.pathname;

        if (
            page.includes('login.html') ||
            page.includes('register.html')
        ) {
            window.location.href = 'index.html';
        }
    }
})();

// Enter key support
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if (document.getElementById('loginEmail')) handleLogin();
        if (document.getElementById('firstName')) handleRegister();
    }
});