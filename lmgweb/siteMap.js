require('babel-register');
 
const router = require('./router').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://leftistmediagroup.4a2ib8tj96gajw856jj7.xyz')
        .save('./sitemap.xml')
);
