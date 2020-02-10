// 文章评论
const comment = {
    add: function (name, content, article_id) {
        return $.post(JKDIZHI.comment_add,
            {
                name,
                content,
                article_id,
            }
        )
    },
    /**
     * 获取文章的评论
     * @param {*} id  文章编号
     */
    get: function (article_id) {
        return $.get(JKDIZHI.comment_get, { article_id })
    }
}