'use strict';

window.addEventListener("load", init);
function init() {
    console.log('init()');

    var
        fs = require("fs")
        , tumblr = require('tumblr')
    // , tumblr 			= require('tumblr.js')
        , Oauth = require('oauth')
        , exorcist = require('exorcist')
        , path = require('path')
    // , express 			= require("express")
    //		, tumblrAPI 		= require("express-tumblr-oauth")
    // , mapfile 			= path.join(__dirname, 'bundle.js.map')
    // , app 				= express()
        , callback_URL = 'google.com'
        , baseTumblrURL = 'https://www.tumblr.com'
        , APITumblrURL = 'https://api.tumblr.com'
        , oauth = {
            /*
            */
            requestUrl: baseTumblrURL + '/oauth/request_token'
            , authorizeURL: APITumblrURL + '/oauth/authorize'
            , oauth_callback: APITumblrURL + ':80/v2/blog/bookcult.tumblr.com/posts/text?limit=2&api_key=lGuohaIkGsYCy69StuPmI5CDQ7UiIDoVg1tHoirxbNziYp7vj0'
            , accessTokenURL: baseTumblrURL + '/oauth/access_token'
        //requestTokenURL 		: APITumblrURL 	+ '/oauth/request_token'
            , consumer_key: 'lGuohaIkGsYCy69StuPmI5CDQ7UiIDoVg1tHoirxbNziYp7vj0'
            , consumer_secret: 'VViK77e3pJjqmAYSglCUFiQdiCkfumDS3UyOlPJoRmPbkqgu1g'
            , token: '3QPvnwo4gK2rw0XFutnmMwJ9QAHGittBnSY8w3ipJyWyfeEQOH'
            , token_secret: 'G8SGtciW0tDCNZ4Ee60lojwqEEfehLOm22ynsV1Kh6mJzsHJZH'
        }
        ;

    //var asdf = require('oauth');

    console.log('Livraria OAuth', Oauth);
    console.log('tumblr', tumblr);
    console.log('oauth', oauth);

    try {
        var blog = new tumblr.Blog('bookcult.tumblr.com', oauth);

        console.log('blog', blog);
        console.log('blog.text()', blog.text());

        blog.text({ limit: 2 }, function (error, response) {
                console.log('ERROR, ', error);

                if (error) {
                    console.log('error', error)
                    throw new Error(error);
                }

                console.log('response', response);
            })
    } catch (e) {
        console.log('erro: ', e);
    }
}