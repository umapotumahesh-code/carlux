// Demo client-side login behavior (no server)
(function(){
    // Demo fallback user
    const demoUser = { username: 'user@gocarz.com', password: 'password123' };

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

    function getUsers(){
        try{ return JSON.parse(localStorage.getItem('gocarz_users') || '[]'); }
        catch(e){ return []; }
    }

    function findUserByEmail(email){
        const users = getUsers();
        return users.find(u => u.email && u.email.toLowerCase() === email.toLowerCase());
    }

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

    // Simple client-side validation and login
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        msg.textContent = '';
        let valid = true;
        if(!usernameEl.value.trim()){ usernameEl.classList.add('is-invalid'); valid = false; }
        else usernameEl.classList.remove('is-invalid');

        if(!passwordEl.value.trim()){ passwordEl.classList.add('is-invalid'); valid = false; }
        else passwordEl.classList.remove('is-invalid');

        if(!valid) return;

        const inputUser = usernameEl.value.trim();
        const inputPass = passwordEl.value;

        // First check localStorage users by email
        const storedUser = findUserByEmail(inputUser);
        if(storedUser && storedUser.password === inputPass){
            msg.className = 'alert alert-success';
            msg.textContent = 'Login successful — redirecting...';
            localStorage.setItem('gocarz_logged_in_user', JSON.stringify({ email: storedUser.email, name: storedUser.name, ts: Date.now() }));
            setTimeout(()=> location.href = 'index.html', 900);
            return;
        }

        // Fallback to demo user
        if((inputUser === demoUser.username || inputUser === 'user') && inputPass === demoUser.password){
            msg.className = 'alert alert-success';
            msg.textContent = 'Login successful — redirecting...';
            localStorage.setItem('gocarz_logged_in_user', JSON.stringify({ username: demoUser.username, ts: Date.now() }));
            setTimeout(()=> location.href = 'index.html', 900);
            return;
        }

        msg.className = 'alert alert-danger';
        msg.textContent = 'Invalid username or password.';
    });

    // Small improvement: clear messages when typing
    [usernameEl, passwordEl].forEach(el=> el.addEventListener('input', ()=>{
        if(el.classList.contains('is-invalid')) el.classList.remove('is-invalid');
        if(msg) { msg.textContent = ''; msg.className = ''; }
    }));

})();
