/* hamburgerMenu
 * 
 * @author Brynn Harrington
 * implements the hamburger menu
 */
function hamburgerMenu(x) {
    x.classList.toggle("change");
    document.getElementById('dropdown').style.display = document.getElementById('dropdown').style.display == 'block' ? 'none' : 'block';
}