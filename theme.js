const toggleThemeButton = document.getElementById('toggleThemeButton');
const toggleThemeIcon = document.getElementById('toggleTheme');

// Check for stored theme in localStorage and apply it
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleThemeIcon.setAttribute('alt', 'light mode');
}

// Event listener to toggle theme and save preference in localStorage
toggleThemeButton.addEventListener('click', () => {
    // Toggle the dark-theme class on the body
    document.body.classList.toggle('dark-theme');

    // Update alt text based on the theme for accessibility
    if (document.body.classList.contains('dark-theme')) {
        toggleThemeIcon.setAttribute('alt', 'light mode');
        localStorage.setItem('theme', 'dark'); // Save theme preference as 'dark'
    } else {
        toggleThemeIcon.setAttribute('alt', 'dark mode');
        localStorage.setItem('theme', 'light'); // Save theme preference as 'light'
    }
});
