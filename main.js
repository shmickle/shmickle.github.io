window.onload = () => {
    sidenavInitialization();
}

function sidenavInitialization() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, {
        //Sidenav options
    });
}