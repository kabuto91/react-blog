'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
     
    this.ctx.body = 'api hi';
  }

  async getArticleList(){
      

      let sql = 'SELECT article.id as id,'+
      'article.title as title,'+
      'article.introduce as introduce,'+
      "FROM_UNIXTIME(article.addTime, '%y-%m-%d') as addTime,"+
      'article.view_count as view_count ,'+
      '.typetable.typeName as typeName '+
      'FROM article LEFT JOIN typetable ON article.type_id = typetable.Id ' +
      'WHERE article.type_id=1';

      const results = await this.app.mysql.query(sql);

      this.ctx.body = {
          data:results
      }
  }

  async getArticleListLimit(){
      

    let sql = 'SELECT article.id as id,'+
  'article.title as title,'+
  "FROM_UNIXTIME(article.addTime, '%y-%m-%d') as addTime,"+
  '.typetable.typeName as typeName '+
  'FROM article LEFT JOIN typetable ON article.type_id = typetable.Id ' +
  'WHERE article.type_id=1  ' +
  'ORDER BY article.addTime DESC LIMIT 6';

    const results = await this.app.mysql.query(sql);

    this.ctx.body = {
        data:results
    }
}

async getComputerListLimit(){
      

  let sql = 'SELECT article.id as id,'+
  'article.title as title,'+
  "FROM_UNIXTIME(article.addTime, '%y-%m-%d') as addTime,"+
  '.typetable.typeName as typeName '+
  'FROM article LEFT JOIN typetable ON article.type_id = typetable.Id ' +
  'WHERE article.type_id=2 ' +
  'ORDER BY article.addTime DESC LIMIT 6';

  const results = await this.app.mysql.query(sql);

  this.ctx.body = {
      data:results
  }
}

async getFunListLimit(){
      

  let sql = 'SELECT article.id as id,'+
  'article.title as title,'+
  "FROM_UNIXTIME(article.addTime, '%y-%m-%d') as addTime,"+
  '.typetable.typeName as typeName '+
  'FROM article LEFT JOIN typetable ON article.type_id = typetable.Id ' +
  'WHERE article.type_id=4  OR article.type_id=5 ' +
  'ORDER BY article.addTime DESC LIMIT 6';

  const results = await this.app.mysql.query(sql);

  this.ctx.body = {
      data:results
  }
}

async getArticleCount(){
  let sql = 'SELECT typetable.typeName, COUNT(*) as articleCount FROM article LEFT JOIN typetable ON article.type_id=typetable.id GROUP BY type_id';

  const results = await this.app.mysql.query(sql);

  this.ctx.body = {
      counts:results
  }
}

  async getArticleById(){
    //先配置路由的动态传值，然后再接收值
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
        'WHERE article.id='+id;

    const result = await this.app.mysql.query(sql);

    this.ctx.body = {
        data:result
    }
}

  //得到类别名称和编号
  async getTypeInfo(){
    const result = await this.app.mysql.select('typetable');
    this.ctx.body = {data:result}
  }

  //根据类别ID获得文章列表
  async getListById(){
    let id = this.ctx.params.id
    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime,"+
    'article.view_count as view_count ,'+
    'typetable.typeName as typeName '+
    'FROM article LEFT JOIN typetable ON article.type_id = typetable.Id '+
    'WHERE type_id='+id
    const result = await this.app.mysql.query(sql)
    this.ctx.body={data:result}

  }
  
}

module.exports = HomeController;
