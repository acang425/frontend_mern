import React, { useState, useRef,useEffect } from 'react';
import { ConfigProvider, List, Image, Button, Icon } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css';
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { DollarOutlined } from '@ant-design/icons';
import u6 from './images/u6.png'
import u16 from './images/u16.png'
import u17 from './images/u17.svg'
import money from './images/money.png'
import ListItem from 'zarm/lib/list/ListItem';

import root from './Approot';
import axios from 'axios';



function MyEncourage() {

  const[usernames,setUsernames]=useState([]);
  const[vprice,setvprice]=useState([]);
  const[size,setSize]=useState();

  
function example(i) {
  

  return [
    <div style={{ width: '100%', color: '#666666' }}>
      <div style={{ width: '100%' }}>
        <div style={{ fontSize: '30px', width: '10%', float: 'left' }}>
          {i}
        </div>
        <div style={{ width: '20%', float: 'left' }}>
          <img style={{ height: '80px', width: '80px' }} src={u6}></img>
        </div>
        <div style={{ paddingLeft: '15px', width: '40%', float: 'left' }}>
          <div>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>
              <span style={{ marginRight: '15px' }}>{usernames[i-1]}</span>
            </span>
          </div>
        </div>
        <div style={{ paddingLeft: '50px', width: '20%', float: 'left' }}>
          <List>
            <ListItem><span style={{ fontSize: '30px' }}>{vprice[i-1]}</span><img style={{ margin: '10px', width: '30px' }} src={money}></img></ListItem>
          </List>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <p style={{ marginLeft: '20px', margin: '50px', fontSize: '20px', color: '#333435' }}>奋斗正当时</p>
      </div>
    </div>
  ]
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/user/list'); // 发起GET请求获取数据
        console.log(response.data.data);
        const data=response.data.data.list;
        const usernames = data.map(item => item.user_name);
        const vp = data.map(item => item.v_price);
        setUsernames(usernames)
        console.log(usernames);
        setvprice(vp)
        setSize(response.data.data.count)
        // setData(response.data); // 将获取的数据存储在状态中
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // 在组件挂载后立即获取数据
  }, []);

  const containerRef = useRef();
  const [userRank, setUserRank] = useState(2); // 用户的排名
  const numbers = Array.from(3, (_, i) => i + 1);
  return (
    <div className="encourage-rec">
      <ConfigProvider locale={zhCN}>
        <div className="phone">
          <NavBar
            left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />}
            title="激励排行"
            style={{
              background: '#0C5757',
              '--title-color': 'white',
              '--title-font-weight': '700',
              '--title-font-size': '20px',
              '--height': '51px',
            }}
          />
          <div
            ref={containerRef}
            style={{
              overflowY: 'auto',
              maxHeight: '1075px',
              background: '#F5F5F5'
            }}
          >
            <div>
              <img style={{ width: '100%' }} src={u16}></img>
            </div>
            <div style={{ marginBottom: '50px' }}>
              <List>
                <ListItem>
                  <div style={{ width: '100%', color: '#666666' }}>
                    <div style={{ width: '100%' }}>
                      <div style={{ fontSize: '30px', width: '10%', float: 'left' }}>
                        1
                      </div>
                      <div style={{ width: '20%', float: 'left' }}>
                        <img style={{ height: '80px', width: '80px' }} src={u17}></img>
                      </div>
                      <div style={{ paddingLeft: '15px', width: '40%', float: 'left' }}>
                        <div>
                          <span style={{ fontSize: '25px', fontWeight: '600' }}>
                            <span style={{ marginRight: '15px' }}>{localStorage.getItem('name') == null ? "Windir" : localStorage.getItem('name')}</span>
                          </span>
                        </div>
                      </div>
                      <div style={{ width: '20%', float: 'left' }}>
                        <List>
                          <ListItem><span style={{ fontSize: '30px' }}>11000</span><img style={{ margin: '10px', width: '30px' }} src={money}></img></ListItem>
                        </List>
                      </div>
                    </div>
                    <div style={{ width: '100%' }}>
                      <p style={{ margin: '50px', fontSize: '20px', color: '#333435', marginLeft: '30px' }}>奋斗正当时</p>
                    </div>
                  </div>
                </ListItem>
              </List>

            </div>
            <div>
              <List>
                {[...Array(size)].map((_, index) => (
                  <ListItem key={index}>
                    <div>{example(index + 1)}</div>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>


        </div>
      </ConfigProvider>
    </div>
  );
}

export default root(MyEncourage);
