module.exports = app =>{
    const {router, controller} = app;
    router.get('/default/index',controller.default.home.index);
    router.get('/default/getArticleList',controller.default.home.getArticleList);
    router.get('/default/getArticleListLimit',controller.default.home.getArticleListLimit);
    router.get('/default/getComputerListLimit',controller.default.home.getComputerListLimit);
    router.get('/default/getFunListLimit',controller.default.home.getFunListLimit);
    router.get('/default/getArticleCount',controller.default.home.getArticleCount);
    
    router.get('/default/getArticleById/:id',controller.default.home.getArticleById);
    router.get('/default/getTypeInfo',controller.default.home.getTypeInfo);
    router.get('/default/getListById/:id',controller.default.home.getListById);
}