
//定义一个方法，与用户相关的都放在这里
var user = {
    //退出
    tuichu: function () {
        return $.post(JKDIZHI.user_tuichu,
        )
    },
    //管理员
    guanliyuan: function () {
        return $.get(JKDIZHI.user_guanliyuan)
    },
    //登录
    denglu: function (name, password) {
        return $.post(
            JKDIZHI.user_denglu, {
            'user_name': name,
            'password': password
        })
    }
}
