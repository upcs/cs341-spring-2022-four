
/* hamburger_menu
 * 
 * @author Brynn Harrington
 * implements the dropdown menu
 */
function hamburger_menu(x) {
    x.classList.toggle("change");
    document.getElementById('dropdown').style.display = document.getElementById('dropdown').style.display == 'block' ? 'none' : 'block';
}