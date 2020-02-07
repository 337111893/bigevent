// 文章评论
var comment = {
    add: function (name, content, id) {
        return $.post(JKDIZHI.comment_add,
            {
                'name': name,
                'content': content,
                'article_id': id,
            }
        )
    },
    /**
     * 获取文章的评论
     * @param {*} id  文章编号
     */
    get: function (id) {
        return $.get(JKDIZHI.comment_get, { 'article_id': id })
    }
}