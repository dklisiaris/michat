Meteor.startup(function () {
  smtp = {
    username: 'dklisiaris@hotmail.com',
    password: 'a2PhihBANCm73gjel7_Y3Q',
    server:   'smtp.mandrillapp.com',
    port: 587
 };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});