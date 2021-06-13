import Head from 'next/head';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import ArticleCount from '../components/ArticleCount';
import {Row, Col, List, Icon, Divider, Statistic, Card} from 'antd';
import '../styles/pages/index.css';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';


const Home = ({article, article2, article3}) => {

  const [articlelist, setArticlelist] = useState(article.data);
  const [computerlist, setComputerlist] = useState(article2.data);
  const [funlist, setFunlist] = useState(article3.data);
  const [counts, setCount] = useState([])
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize:false,
    xhtml: false,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }

  }); 
  
    useEffect(()=>{
        const fetchData = async ()=>{
            const count = await axios(servicePath.getArticleCount).then((res)=>{
                return res.data.Counts;
            })
            setCount(count);
        }
        fetchData()
    },[])

  return (
    <div>
      <Head>
        <title>Home</title>
        
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
         
          <Card className="index-box">
          <List 
            header={<div className="index-title">学习过程</div>}
            itemLayout="vertical"
            dataSource={articlelist}
            
            renderItem={item=>(
              <List.Item>
                <Link href={{pathname:'/detailed', query:{id:item.id}}}>
                <div>
                    <a>{item.title}</a>
                    <span className="index-date">{item.addTime}</span>
                    </div>

                  </Link>
              </List.Item>
            )}                        
          />
          </Card>
          <Card className="index-box">
          <List 
            header={<div className="index-title">电脑爱好</div>}
            itemLayout="vertical"
            dataSource={computerlist}
            
            renderItem={item=>(
              <List.Item>
                <Link href={{pathname:'/detailed', query:{id:item.id}}}>
                    <div>
                    <a>{item.title}</a>
                    <span className="index-date">{item.addTime}</span>
                    </div>
                  </Link>
              </List.Item>
            )}                        
          />
          </Card>
          <Card className="index-box">
          <List 
            header={<div className="index-title">休闲生活</div>}
            itemLayout="vertical"
            dataSource={funlist}
            
            renderItem={item=>(
              <List.Item>
                <Link href={{pathname:'/detailed', query:{id:item.id}}}>
                <div>
                    <a>{item.title}</a>
                    <span className="index-date">{item.addTime}</span>
                    </div>

                  </Link>
              </List.Item>
            )}                        
          />
          </Card>

        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <div className="comm-box daily-box">
              日志整理
              <Divider />
              
              {
                counts.map((item, index)=>{
                  return (
                    <div className="daily-count" key={index}>
                      <Statistic title={item.typeName} value={item.articleCount} />
                    </div>
                  )
                })
              }
              
            </div>
          
          
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(servicePath.getArticleListLimit)
  const article = await res.json()
  const res2 = await fetch(servicePath.getComputerListLimit)
  const article2 = await res2.json()
  const res3 = await fetch(servicePath.getFunListLimit)
  const article3 = await res3.json()
  
  return {
    props: {
      article,
      article2,
      article3,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}

export default Home;
