// Registration with backend API
(function(){
    const form = document.getElementById('register-form');
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    const confirmEl = document.getElementById('confirm-password');
    const msg = document.getElementById('register-message');

    form.addEventListener('submit', async (e)=>{
        e.preventDefault();
        msg.textContent = '';
        msg.className = '';
        let valid = true;

        // Client-side validation
        if(!nameEl.value.trim()){ nameEl.classList.add('is-invalid'); valid = false; } else nameEl.classList.remove('is-invalid');
        const email = emailEl.value.trim();
        if(!email || !email.includes('@')){ emailEl.classList.add('is-invalid'); valid = false; } else emailEl.classList.remove('is-invalid');
        const pwd = passwordEl.value;
        if(!pwd || pwd.length < 6){ passwordEl.classList.add('is-invalid'); valid = false; } else passwordEl.classList.remove('is-invalid');
        if(pwd !== confirmEl.value){ confirmEl.classList.add('is-invalid'); valid = false; } else confirmEl.classList.remove('is-invalid');

        if(!valid) return;

        // Get account type
        const accountType = document.querySelector('input[name="account-type"]:checked').value;

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Creating account...';

        try {
            // Send registration request to backend
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameEl.value.trim(),
                    email: email.toLowerCase().trim(),
                    password: pwd,
                    accountType: accountType
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Store token and user data
                localStorage.setItem('carlux_token', data.token);
                localStorage.setItem('carlux_user', JSON.stringify(data.user));

                msg.className = 'alert alert-success';
                msg.textContent = 'Account created successfully! Redirecting...';

                // Redirect based on account type
                const redirectUrl = accountType === 'seller' ? 'seller-dashboard.html' : 'index.html';
                setTimeout(() => location.href = redirectUrl, 1500);
            } else {
                msg.className = 'alert alert-danger';
                msg.textContent = data.error || 'Registration failed. Please try again.';
            }
        } catch (error) {
            console.error('Registration error:', error);
            msg.className = 'alert alert-danger';
            msg.textContent = 'Network error. Please check your connection and try again.';
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    // Clear validation errors on input
    [nameEl, emailEl, passwordEl, confirmEl].forEach(el=> el.addEventListener('input', ()=>{
        if(el.classList.contains('is-invalid')) el.classList.remove('is-invalid');
        if(msg) { msg.textContent = ''; msg.className = ''; }
    }));

})();
