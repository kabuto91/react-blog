import '../styles/pages/comm.css'
import { Divider, Statistic } from 'antd';

const ArticleCount = () =>{

    const [navArray, setNavArray] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await axios(servicePath.getArticleCount).then((res)=>{
                console.log(res);
                return res.data.data;
            })
            setNavArray(result);
        }
        fetchData()
    },[])
    
    
}


export default ArticleCount;