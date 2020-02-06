// 所有与文章分类有关的
var category = {
    // 获取
    get: function () {
        return $.get(JKDIZHI.category_get)
    },
    //新增
    add: function (name, slug) {
        return $.post(JKDIZHI.category_add, { 'name': name, 'slug': slug })
    },
    //删除
    del: function (id) {
        return $.post(JKDIZHI.category_del, { 'id': id })
    },
    //编辑
    edit: function (id, name, slug) {
        return $.post(JKDIZHI.category_edit, { 'id': id, 'name': name, 'slug': slug })
    }
}