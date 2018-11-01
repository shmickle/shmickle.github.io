window.onload = () => {
    sidenavInitialization();
    tooltipSlideIn();
}

function sidenavInitialization() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, {
        //Sidenav options
    });
}

function tooltipSlideIn() {
    const links = Array.from(document.querySelectorAll('.personal-links a'));
    links
        .map(link => link.addEventListener('mouseenter', () => {
            link.classList.add('display');
            setTimeout(function () {
                link.classList.add('opacity');
            }, 150);
        }));
    links
        .map(link => link.addEventListener('mouseleave', () => {
            link.classList.remove('opacity');
            setTimeout(function () {
                link.classList.remove('display');
            }, 300);
        }));
}