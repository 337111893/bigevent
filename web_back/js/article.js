// 所有与文章有关的
var article = {
    // 获取
    get: function (page, type, status) {
        return $.get(JKDIZHI.article_get, { 'page': page, 'type': type, 'state': status })
    },
    // 删除文章
    del: function (id) {
        return $.get(JKDIZHI.article_del, { 'id': id })
    },
    //添加文章
    add: function (fd) {
        return $.ajax({
            url: JKDIZHI.article_add,
            type: 'post',
            data: fd,
            processData: false, //不允许处理数据
            contentType: false, //不要设置请求头
        })
    }
}