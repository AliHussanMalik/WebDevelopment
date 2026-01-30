// Inside app.js
function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Could not find ${file}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error(err));
}

// When the page loads, fill the placeholders
window.onload = () => {
    // Check if the placeholder exists before trying to load into it
    if(document.getElementById('nav-placeholder')) loadComponent('nav-placeholder', 'includes/navbar.html');
    if(document.getElementById('sidebar-placeholder')) loadComponent('sidebar-placeholder', 'includes/sidebar.html');
};