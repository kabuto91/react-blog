'use strict'

const Controller = require('egg').Controller

class MainController extends Controller{
    async index(){
        this.ctx.body="hi api"
    }

     //判断用户名密码是否正确
     async checkLogin(){
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = " SELECT userName FROM admin_user WHERE userName = '"+userName +
                    "' AND password = '"+password+"'"
  
        const res = await this.app.mysql.query(sql)
        if(res.length>0){
            //登录成功,进行session缓存
            let openId=new Date().getTime()
            this.ctx.session.openId={ 'openId':openId }
            this.ctx.body={'data':'登录成功','openId':openId}
  
        }else{
            this.ctx.body={'data':'登录失败'}
        } 
    }

    async getTypeInfo(){
        const resType = await this.app.mysql.select('typetable');
        this.ctx.body = {data:resType}
    }
    //增加文章
    async addArticle(){
        let tmpArticle = this.ctx.request.body;
        const result = await this.app.mysql.insert('article', tmpArticle);
        const insertSuccess = result.affectedRows === 1;
        const insertId = result.insertId;
        this.ctx.body = {
            isSuccess: insertSuccess,
            insertId: insertId
        }
    }
    //修改文章
    async updateArticle(){
        let tempArticle = this.ctx.request.body;

        const result = await this.app.mysql.update('article',tempArticle);
        const updateSuccess = result.affectedRows === 1
        this.ctx.body = {
            isSuccess: updateSuccess
        }
    }
    //文章列表
    async getArticleList(){
        let sql = 'SELECT article.id as id,'+
                'article.title as title,'+
                'article.introduce as introduce,'+
                'article.view_count as view_count,' +
                "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime,"+
                'typetable.typeName as typeName '+
                'FROM article LEFT JOIN typetable ON article.type_id = typetable.Id '+
                'ORDER BY article.id DESC '
        
        const resList = await this.app.mysql.query(sql);
        this.ctx.body={list:resList}
    }

    //删除文章
    async delArticle(){
        let id = this.ctx.params.id;
        const res = await this.app.mysql.delete('article',{'id':id})
        this.ctx.body={data:res}
    }

    async getArticleById(){
        let id = this.ctx.params.id;
        let sql = 'SELECT article.id as id,'+
            'article.title as title,'+
            'article.introduce as introduce,'+
            'article.article_content as article_content,'+
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime,"+
            'article.view_count as view_count ,'+
            'typetable.typeName as typeName ,'+
            'typetable.id as typeId '+
            'FROM article LEFT JOIN typetable ON article.type_id = typetable.Id '+
            'WHERE article.id='+id
        const result = await this.app.mysql.query(sql)
        this.ctx.body={data:result}
    }
}

module.exports = MainController;