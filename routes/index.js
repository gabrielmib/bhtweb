const express = require('express');
const router = express.Router();

//importar express validator
//const { body } = require('express-validator/check'); asi era el original
const { body } = require('express-validator');


//importar el controlador
const usuariosController = require('../controllers/usuariosController');
const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');

module.exports = function() {

    //ruta para el home
    router.get('/',
        homeController.paginaPrincipal
        // authController.usuarioAutenticado
    );

    //pagina boda
    router.get('/boda',
        homeController.paginaBoda
    );

    //pagina eventos sociales
    router.get('/sociales',
        homeController.paginaSociales
    );

    //iniciar sesion
    router.get('/iniciar-sesion', usuariosController.formIniciarSesion);
    router.post('/iniciar-sesion', authController.autenticarUsuario);

    //Crear cuenta
    router.get('/crear-cuenta', usuariosController.formCrearCuenta);
    router.post('/crear-cuenta', usuariosController.crearCuenta);
    router.get('/confirmar/:correo', usuariosController.confirmarCuenta);

    //restablecer contrasena
    router.get('/reestablecer', usuariosController.formRestablecerPassword);
    router.post('/reestablecer', authController.enviarToken);
    router.get('/reestablecer/:token', authController.validarToken);
    router.post('/reestablecer/:token', authController.actualizarPassword);


    return router;
}