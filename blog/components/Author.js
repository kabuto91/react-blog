import {Avatar, Divider, Icon, Tag} from 'antd';
import '../styles/components/author.css';
import Image from 'next/image';


const Author = () =>{
    return (
        <div className="author-div comm-box">
            <Image src="/img/background2.png" width={100} height={80} className="my-avatar" />
            <div className="author-introduction">
                <Tag color="red" className="avatar-tag">职业新手</Tag>
                <Tag color="blue" className="avatar-tag">啥都不会</Tag>
                <Tag color="green" className="avatar-tag">会积极学习的</Tag>
                
                <Divider>社交账号</Divider>
                
                <div className="author-avatar">
                    <Icon type="github"  />    kabuto91
                </div>
                <div className="author-avatar">
                    <Icon type="mail"  />    1034450752@qq.com
                </div>
            </div>
        </div>
    )
}

export default Author;