function showPage(pageId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// Show home page by default
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});




