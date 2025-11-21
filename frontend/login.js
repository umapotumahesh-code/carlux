// Login with backend API
(function(){
    const form = document.getElementById('login-form');
    const usernameEl = document.getElementById('username');
    const passwordEl = document.getElementById('password');
    const msg = document.getElementById('login-message');
    const togglePassword = document.getElementById('toggle-password');

    const forgotLink = document.getElementById('forgot-link');
    const forgotModalEl = document.getElementById('forgotModal');
    const sendResetBtn = document.getElementById('send-reset');
    const resetEmail = document.getElementById('reset-email');
    const resetMessage = document.getElementById('reset-message');

    // Toggle password visibility
    togglePassword.addEventListener('click', ()=>{
        const type = passwordEl.type === 'password' ? 'text' : 'password';
        passwordEl.type = type;
        togglePassword.querySelector('i').classList.toggle('fa-eye');
        togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
    });

    // Show forgot modal
    forgotLink.addEventListener('click', (e)=>{
        e.preventDefault();
        resetEmail.value = '';
        resetMessage.textContent = '';
        const modal = new bootstrap.Modal(forgotModalEl);
        modal.show();
    });

    // Handle sending reset link (simulate)
    sendResetBtn.addEventListener('click', ()=>{
        const email = resetEmail.value.trim();
        if(!email || !email.includes('@')){
            resetEmail.classList.add('is-invalid');
            resetMessage.textContent = '';
            return;
        }
        resetEmail.classList.remove('is-invalid');
        // Simulate sending
        resetMessage.textContent = 'If an account exists for ' + email + ', a reset link has been sent.';
        // Optionally store a reset token locally (demo only)
        const token = Math.random().toString(36).slice(2,10);
        localStorage.setItem('gocarz_reset_token_for_' + email, token);
    });

    // Login with backend API
    form.addEventListener('submit', async (e)=>{
        e.preventDefault();
        msg.textContent = '';
        msg.className = '';
        let valid = true;

        if(!usernameEl.value.trim()){ usernameEl.classList.add('is-invalid'); valid = false; }
        else usernameEl.classList.remove('is-invalid');

        if(!passwordEl.value.trim()){ passwordEl.classList.add('is-invalid'); valid = false; }
        else passwordEl.classList.remove('is-invalid');

        if(!valid) return;

        const inputUser = usernameEl.value.trim();
        const inputPass = passwordEl.value;
        const userType = document.querySelector('input[name="user-type"]:checked').value;

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Signing in...';

        try {
            // Send login request to backend
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: inputUser,
                    password: inputPass
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Store token and user data
                localStorage.setItem('gocarz_token', data.token);
                localStorage.setItem('gocarz_user', JSON.stringify(data.user));

                msg.className = 'alert alert-success';
                msg.textContent = 'Login successful — redirecting...';

                // Redirect based on account type or user preference
                const redirectUrl = (userType === 'seller' || data.user.accountType === 'seller') ? 'seller-dashboard.html' : 'index.html';
                setTimeout(() => location.href = redirectUrl, 900);
            } else {
                msg.className = 'alert alert-danger';
                msg.textContent = data.error || 'Invalid email or password.';
            }
        } catch (error) {
            console.error('Login error:', error);
            msg.className = 'alert alert-danger';
            msg.textContent = 'Network error. Please check your connection and try again.';
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    // Clear validation errors on input
    [usernameEl, passwordEl].forEach(el=> el.addEventListener('input', ()=>{
        if(el.classList.contains('is-invalid')) el.classList.remove('is-invalid');
        if(msg) { msg.textContent = ''; msg.className = ''; }
    }));

})();
