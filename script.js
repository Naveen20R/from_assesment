function selectOption(element) {
    // Get all options
    const options = document.querySelectorAll('.options_1');
    
    // Remove 'active' class from all options
    options.forEach(option => {
        option.classList.remove('active');
    });
    
    // Add 'active' class to the clicked element
    element.classList.add('active');
}

function dropFun(para) {
    let drop_1 = document.getElementById(para);
    drop_1.classList.toggle('showContent');
}





