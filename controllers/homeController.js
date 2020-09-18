exports.paginaPrincipal = (req, res) => {
    // res.send("Home Page BHT");

    res.render('homePage', {
        nombrePagina: 'Black Horse Tech'
    })
}


exports.paginaBoda = (req, res) => {
    // res.send('boda page');

    res.render('bodaPage', {
        nombrePagina: 'Bodas'
    })
}


exports.paginaSociales = (req, res) => {
    // res.send('boda page');

    res.render('socialesPage', {
        nombrePagina: 'Sociales'
    })
}