// Simple client-side registration (demo only)
(function(){
    const form = document.getElementById('register-form');
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    const confirmEl = document.getElementById('confirm-password');
    const msg = document.getElementById('register-message');

    function getUsers(){
        try{ return JSON.parse(localStorage.getItem('gocarz_users') || '[]'); }
        catch(e){ return []; }
    }

    function saveUsers(users){
        localStorage.setItem('gocarz_users', JSON.stringify(users));
    }

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        msg.textContent = '';
        let valid = true;

        if(!nameEl.value.trim()){ nameEl.classList.add('is-invalid'); valid = false; } else nameEl.classList.remove('is-invalid');
        const email = emailEl.value.trim();
        if(!email || !email.includes('@')){ emailEl.classList.add('is-invalid'); valid = false; } else emailEl.classList.remove('is-invalid');
        const pwd = passwordEl.value;
        if(!pwd || pwd.length < 6){ passwordEl.classList.add('is-invalid'); valid = false; } else passwordEl.classList.remove('is-invalid');
        if(pwd !== confirmEl.value){ confirmEl.classList.add('is-invalid'); valid = false; } else confirmEl.classList.remove('is-invalid');

        if(!valid) return;

        const users = getUsers();
        const exists = users.find(u => u.email && u.email.toLowerCase() === email.toLowerCase());
        if(exists){
            msg.className = 'alert alert-warning';
            msg.textContent = 'An account with this email already exists. Please login.';
            return;
        }

        // Save user (NOTE: storing plain passwords in localStorage is insecure; demo only)
        users.push({ name: nameEl.value.trim(), email: email, password: pwd, createdAt: Date.now() });
        saveUsers(users);

        msg.className = 'alert alert-success';
        msg.textContent = 'Account created. Redirecting to login...';
        setTimeout(()=> location.href = 'login.html', 900);
    });

    [nameEl, emailEl, passwordEl, confirmEl].forEach(el=> el.addEventListener('input', ()=>{
        if(el.classList.contains('is-invalid')) el.classList.remove('is-invalid');
        if(msg) { msg.textContent = ''; msg.className = ''; }
    }));

})();
