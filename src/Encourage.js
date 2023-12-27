import React, { useState, useRef } from 'react';
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

const data = [
  {
    id: 1,
    name: '用户A',
    bio: '我是用户A',
    coins: 100,
    avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
  },
  {
    id: 2,
    name: '用户B',
    bio: '我是用户B',
    coins: 90,
    avatar: 'https://img.yzcdn.cn/vant/dog.jpeg',
  },
  // ... 其他用户的数据
];


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
              <span style={{ marginRight: '15px' }}>Windir</span>
            </span>
          </div>
        </div>
        <div style={{ paddingLeft: '50px', width: '20%', float: 'left' }}>
          <List>
            <ListItem><span style={{ fontSize: '30px' }}>11000</span><img style={{ margin: '10px', width: '30px' }} src={money}></img></ListItem>
          </List>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <p style={{ margin: '50px', fontSize: '20px', color: '#333435', marginLeft: '30px' }}>专注交互原型设计</p>
      </div>
    </div>
  ]
}

function MyEncourage() {
  const containerRef = useRef();
  const [userRank, setUserRank] = useState(2); // 用户的排名
  const numbers = Array.from(20, (_, i) => i + 1);
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
              background:'#F5F5F5'
            }}
          >
            <div>
              <img style={{ width: '100%' }} src={u16}></img>
            </div>
            <div style={{marginBottom:'50px'}}>
              <List>
                <ListItem>
                  <div style={{ width: '100%', color: '#666666' }}>
                    <div style={{ width: '100%' }}>
                      <div style={{ fontSize: '30px', width: '10%', float: 'left' }}>
                        10
                      </div>
                      <div style={{ width: '20%', float: 'left' }}>
                        <img style={{ height: '80px', width: '80px' }} src={u17}></img>
                      </div>
                      <div style={{ paddingLeft: '15px', width: '40%', float: 'left' }}>
                        <div>
                          <span style={{ fontSize: '25px', fontWeight: '600' }}>
                            <span style={{ marginRight: '15px' }}>Windir</span>
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
                      <p style={{ margin: '50px', fontSize: '20px', color: '#333435', marginLeft: '30px' }}>专注交互原型设计</p>
                    </div>
                  </div>
                </ListItem>
              </List>

            </div>
            <div>
              <List>
                {[...Array(20)].map((_, index) => (
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

export default MyEncourage;
