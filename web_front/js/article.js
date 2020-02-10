// 所有与文章有关的
const article = {
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
        return $.get(JKDIZHI.article_get, { id })
    },
    /**
     * 获取文章排行
     * @param {*} type 
     */
    getRank: function (type) {
        return $.get(JKDIZHI.article_rank, { type })
    },

    /**
     * 获取最新的文章
     */
    getLastest: function () {
        return $.get(JKDIZHI.article_last)
    },
    /***
     * 在列表页中，用来获取文章列表数据
     * type: 文章类型编号
     * page: 当前第几页
     */
    getList: function (type, page) {
        return $.get(JKDIZHI.article_get, { type, page })
    },
    /**
    * 获取文章详情
    * @param {*} id 文章编号
    */
    getDetail: function (id) {
        return $.get(JKDIZHI.article_detail, { id })
    }
}