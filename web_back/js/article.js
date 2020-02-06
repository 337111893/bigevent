// 所有与文章有关的
var article = {
    // 获取
    get: function (page, type, status) {
        return $.get(JKDIZHI.article_get, { 'page': page, 'type': type, 'state': status })
    },
    /**
     * 根据id获取文章详情，
     * @param {数字} id 
     */
    getById: function (id) {
        return $.get(JKDIZHI.article_get, { 'id': id })
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
    },
    //编辑文章
    edit: function (fd) {
        return $.ajax({
            type: 'post',
            url: JKDIZHI.article_edit,
            data: fd,
            processData: false, // 不要让jquery去处理formData数据
            contentType: false, // 不设置默认的请求头

        })
    }
}