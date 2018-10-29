window.onload = () => {
    sidenavInitialization();
    const profilePhoto = document.querySelector('.profile-photo');
    profilePhoto.classList.add('expandInOut');
}

function sidenavInitialization() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, {
        //Sidenav options
    });
}