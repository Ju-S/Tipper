var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var write = require('./write');
var editProfile = require('./editProfile');
var send_authentication = require('./send_email_authentication');
var tip_detail = require('./tip_deatil');
var payed_tips = require('./payed_tips');
var point_add = require('./point_add');
var tip_like = require('./tip_like'); 
var point_minus = require('./point_minus');
var account_destroy = require('./account_destroy');
var ck_admin = require('./ck_admin');
var payed_tips = require('./payed_tips');
var show_comment = require('./show_comment');
var add_comment = require('./add_comment');
var register = require('./signin');
var show_main = require('./show_main');
var show_writeList = require('./show_writeList');
var show_admin_dashboard = require('./show_admin-dashboard');
var show_freeList = require('./show_freeList');
var show_login = require('./show_login');
var show_chInfo = require('./show_chInfo');
var show_admin_notice = require('./show_admin_notice');

var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));
app.listen(3333, function(){
    console.log('connected!');
});
app.post('/board/write', write.write);
app.post('/users/editProfile', editProfile.editProfile);
app.post('/users/send_authentication', send_authentication.send_authentication);
app.get('/tipboard/detail', tip_detail.tip_detail);
app.post('/users/point_add', point_add.point_add);
app.post('/board/tip_like', tip_like.tip_like);
app.post('/users/point_minus', point_minus.point_minus);
app.post('/users/account_destroy', account_destroy.account_destroy);
app.post('/users/ck_admin', ck_admin.ck_admin);
app.post('/users/payed_tips', payed_tips.payed_tips);
app.post('/board/comment', show_comment.comment);
app.post('/board/add_comment', add_comment.add_comment);
app.post('/users/register', register.signin);
app.get('/', show_main.show_main);
app.get('/profile', show_writeList.show_writeList);
app.get('/admin_dashboard', show_admin_dashboard.show_admin_dashboard);
app.get('/freeList', show_freeList.show_freeList);
app.get('/login', show_login.show_login);
app.get('/chInfo', show_chInfo.show_chInfo);
app.get('/admin_notice', show_admin_notice.show_admin_notice);