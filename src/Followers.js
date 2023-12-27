import React, { useState,useRef } from 'react';
import { ConfigProvider, List, Image, Button } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css';
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import ListItem from 'zarm/lib/list/ListItem';
import { Link } from 'react-router-dom';
import u6 from './images/u6.png'

function MyFollower() {
  const [follow, setFollow] = useState(false);
  const [follow2, setFollow2] = useState(false);
  const containerRef = useRef();
  const button_f = [<Button onClick={() => { setFollow(!follow) }} style={{ fontSize: '20px', fontWeight: 700, width: '100px' }} size='round' theme='primary'>+关注</Button>]
  const button_t = [<Button onClick={() => { setFollow(!follow) }} style={{ fontSize: '20px', fontWeight: 700, width: '100px' }} size='round' theme='default'>已关注</Button>]
  const button_f2 = [<Button onClick={() => { setFollow2(!follow2) }} style={{ fontSize: '20px', fontWeight: 700, width: '100px' }} size='round' theme='primary'>+关注</Button>]
  const button_t2 = [<Button onClick={() => { setFollow2(!follow2) }} style={{ fontSize: '20px', fontWeight: 700, width: '100px' }} size='round' theme='default'>已关注</Button>]

  const example = [[
    <div style={{ width: '100%', color: '#666666' }}>
      <div style={{ width: '100%' }}>
        <div style={{ width: '20%', float: 'left' }}>
          <img style={{ height: '80px', width: '80px' }} src={u6}></img>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <div>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>
              <span style={{ marginRight: '15px' }}>Windir</span>
            </span>
          </div>


        </div>
        <div style={{ width: '30%', float: 'left' }}>
          <List>
            <ListItem>{follow ? button_t : button_f}</ListItem>
          </List>
        </div>
      </div>
      <div>
        <p style={{ fontSize: '20px', color: '#333435', marginLeft: '30px' }}>专注交互原型设计</p>
      </div>
    </div>
  ],
  [
    <div style={{ width: '100%', color: '#666666' }}>
      <div style={{ width: '100%' }}>
        <div style={{ width: '20%', float: 'left' }}>
          <img style={{ height: '80px', width: '80px' }} src={u6}></img>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <div>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>
              <span style={{ marginRight: '15px' }}>Windir</span>
            </span>
          </div>


        </div>
        <div style={{ width: '30%', float: 'left' }}>
          <List>
            <ListItem>{follow2 ? button_t2 : button_f2}</ListItem>
          </List>
        </div>
      </div>
      <div>
        <p style={{ fontSize: '20px', color: '#333435', marginLeft: '30px' }}>专注交互原型设计</p>
      </div>
    </div>
  ]

]


  const [followers, setFollowers] = useState([
    {
      id: 1,
      avatar: '',
      name: '用户1',
      bio: '用户1的简介',
      isFollowed: false,
    },
    {
      id: 2,
      avatar: '',
      name: '用户2',
      bio: '用户2的简介',
      isFollowed: false,
    },
    // 添加更多粉丝数据...
  ]);

  const handleFollow = (id) => {
    setFollowers((prevFollowers) =>
      prevFollowers.map((follower) =>
        follower.id === id ? { ...follower, isFollowed: !follower.isFollowed } : follower
      )
    );
  };

  return (
    <div className="follower-rec">
      <ConfigProvider locale={zhCN}>
        <div className="phone">
          <NavBar
            left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />}
            title="粉丝列表"
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
            }}
          >
            <List>
              <ListItem>
                {example[0]}
              </ListItem>
              <ListItem>
                {example[1]}
              </ListItem>
            
            </List>
          </div>

        </div>
      </ConfigProvider>
    </div>
  );
}

export default MyFollower;
