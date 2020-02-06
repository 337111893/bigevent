// 所有与文章有关的
var article = {
    // 获取5条焦点图
    getFouceFive: function (page, type, status) {
        // 就5张
        return $.get(JKDIZHI.article_get, { 'perpage': 5 })
    },
    /**
     * 根据id获取文章详情，
     * @param {数字} id 
     */
    getById: function (id) {
        return $.get(JKDIZHI.article_get, { 'id': id })
    },
    /**
     * 获取文章排行
     * @param {*} type 
     */
    getRank: function (type) {
        return $.get(JKDIZHI.article_rank, { 'type': type })
    },

    /**
     * 获取最新的文章
     */
    getLastest: function () {
        return $.get(JKDIZHI.article_last)
    }
}