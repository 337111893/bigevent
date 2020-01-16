
//定义一个方法，与用户相关的都放在这里
var user = {
    //退出
    tuichu: function () {
        $.post(JKDIZHI.user_tuichu,
        ).then(function (res) {
            if (res.code === 200) {
                window.location.href = "./login.html"
            } else {
                alert(res.msg)
            }
        })
    },
    //管理员
    guanliyuan: function () {
        $.get(JKDIZHI.user_guanliyuan,
        ).then(function (res) {
            if (res.code === 200) {
                $('#yonghuming').text(res.data.nickname)
                $('#img1').attr('src', res.data.user_pic)
                $('#img2').attr('src', res.data.user_pic)
            }
        })
    },
    //登录
    denglu: function (name, password) {
        $.post(
            JKDIZHI.user_denglu, {
            'user_name': name,
            'password': password
        }).then(function (res) {
            // console.log(res);
            if (res.code === 200) {
                //成功跳转
                window.location.href = "./index.html"
            } else {
                //失败报错
                alert(res.msg)
            }
        })
    }
}
