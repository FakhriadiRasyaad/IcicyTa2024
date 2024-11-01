document.getElementById('hamburger').addEventListener('click', function() {
    // Toggle the 'active' class on the menu to show/hide it
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Show or hide the menu

    // You can also toggle a class on the hamburger for animation
    this.classList.toggle('active');
});
