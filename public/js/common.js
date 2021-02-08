function loadSideMenu(){
    $('#sideMenu').load('/pages/sideMenu.html', function() {
        const menus = document.querySelectorAll('.side-menu');
        M.Sidenav.init(menus, {edge: 'right'});
    });
}
