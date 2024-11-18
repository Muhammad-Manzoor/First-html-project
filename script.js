

function toggleMenu() {
    let elements = document.getElementsByClassName('side');
    let elementsArray = Array.from(elements);
    var sidebar = document.getElementById("sidebar");
    
    sidebar.classList.toggle("collapsed");
    
    elementsArray.forEach(function(element) {
        
        
        if (element.style.display === 'block') {
            element.parentElement.style.width = 'inherit';
            element.parentElement.style.marginLeft = '140px'; 
            element.style.display = 'none';
        } else {
            element.parentElement.style.width = '100%';
            element.parentElement.style.marginLeft = '-270px';
            setTimeout(() => {
                element.style.display = 'block';
            }, 600);
        }
    });
}
