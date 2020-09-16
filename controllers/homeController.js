exports.paginaPrincipal = (req, res) => {
    // res.send("Home Page BHT");

    res.render('homePage', {
        nombrePagina: 'Black Horse Tech'
    })
}