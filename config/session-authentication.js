const uuid = require('uuid/v4');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserDao = require('../app/dao/UserDao');
const db = require('./database');


module.exports = (app) => {
    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'pass'
        },
        (email, pass, done) => {
            const userDao = new UserDao(db);
            userDao.getEmail(email)
                .then(user => {
                    if(!user || pass != user.senha){
                        return done(null, false, {
                            message: 'Login e senha incorretos!'
                        });
                    }
                    return done(null, user);
                })
                .catch(erro => done(erro, false));
        }
    ));

    passport.serializeUser((user, done) => {
        const userSession = {
            nome: user.nome_completo,
            email: user.email
        };

        done(null, userSession)
    });

    passport.deserializeUser((userSession, done) => {
        done(null, userSession);
    });

    app.use(session({
        secret: 'node alura',
        genid: function(req){
            return uuid();
        },
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function (req, resp, next) {
        req.passport = passport;
        next();
    });
    
};