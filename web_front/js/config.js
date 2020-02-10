//设置地址优化
// var DIZHI = 'http://192.168.0.114:8000'
const DIZHI = 'http://localhost:8000'

const JKDIZHI = {

    //获取文章分类
    category_get: DIZHI + '/category',

    //获取文章
    article_get: DIZHI + '/search',

    //热门文章排行
    article_rank: DIZHI + '/rank',

    //最新资讯
    article_last: DIZHI + '/lastest',

    // 获取文章详情
    article_detail: DIZHI + '/article',

    // 添加评论
    comment_add: DIZHI + '/post_comment',

    // 获取评论
    comment_get: DIZHI + '/get_comments'
}