import {Avatar, Divider, Icon} from 'antd';
import '../styles/components/author.css';


const Author = () =>{
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="https://blogimages.jspang.com/blogtouxiang1.jpg" /></div>
            <div className="author-introduction">
                因为美好的东西都是免费的，比如水、阳光和空气，所以本站视频全部免费。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<Icon type="github" />} className="account" />
                <Avatar size={28} icon={<Icon type="qq" />} className="account" />
                <Avatar size={28} icon={<Icon type="wechat" />} className="account" />
            </div>
        </div>
    )
}

export default Author;