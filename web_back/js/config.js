//设置地址优化
// var DIZHI = 'http://192.168.0.114:8000'
const DIZHI = 'http://localhost:8000'

const JKDIZHI = {
    //登录
    user_denglu: DIZHI + '/admin/login',
    //退出
    user_tuichu: DIZHI + '/admin/logout',
    //获取管理员
    user_guanliyuan: DIZHI + '/admin/getuser',
    //获取文章分类
    category_get: DIZHI + '/admin/category_search',


    //添加文章分类
    category_add: DIZHI + '/admin/category_add',
    //删除文章分类
    category_del: DIZHI + '/admin/category_delete',
    //编辑文章分类
    category_edit: DIZHI + '/admin/category_edit',


    //获取文章
    article_get: DIZHI + '/admin/search',
    // 删除文章
    article_del: DIZHI + '/admin/article_delete',
    // 添加文章
    article_add: DIZHI + '/admin/article_publish',
    //编辑文章
    article_edit: DIZHI + '/admin/article_edit'

}