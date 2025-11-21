document.addEventListener('DOMContentLoaded', () => {
    let translations = {};

    // Function to set the language
    const setLanguage = async (lang) => {
        if (Object.keys(translations).length === 0) {
            const response = await fetch('translations.json');
            translations = await response.json();
        }

        if (translations[lang]) {
            document.querySelectorAll('[data-translate-key]').forEach(element => {
                const key = element.getAttribute('data-translate-key');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
            localStorage.setItem('gocarz_lang', lang);
            updateLanguageButton(lang);
        }
    };

    // Function to update the main language button text
    const updateLanguageButton = (lang) => {
        const langButton = document.querySelector('#languageDropdown .fa-globe');
        if (langButton && langButton.nextSibling) {
            langButton.nextSibling.textContent = ` ${lang.toUpperCase()}`;
        }
    };

    // Add event listeners to language selector links
    document.querySelectorAll('.dropdown-item[data-lang]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedLang = event.target.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // Check for saved language on page load
    const savedLang = localStorage.getItem('gocarz_lang');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        // Default to English if no language is saved
        updateLanguageButton('en');
    }
});