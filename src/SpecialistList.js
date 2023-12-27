
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Icon, TabBar, Grid, ConfigProvider, Image, Button, List } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useNavigate } from 'react-router-dom';
import { useScroll, Message } from 'zarm';
import { WarningCircle } from '@zarm-design/icons';
import ListItem from 'zarm/lib/list/ListItem';
import { Link } from 'react-router-dom';
const chooseArray = ['在线专家列表', '全部专家列表']
const cssVarUnchosen = { background: '#F5F5F5' }
const cssVarChosen = { background: '#F5F5F5', borderBottom: '10px solid #0C5757' }

const TabIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const ITEMS = [
  'https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/home__/u5.png?pageId=08f2c0b2-a820-4917-8f0b-d588646320ae',
  'https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/home__/u7.png?pageId=08f2c0b2-a820-4917-8f0b-d588646320ae',
  'https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/home__/u9.png?pageId=08f2c0b2-a820-4917-8f0b-d588646320ae',
  'https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/home__/u11.png?pageId=08f2c0b2-a820-4917-8f0b-d588646320ae'
];

const example = [
  <div style={{ width: '100%' }}>
    <div style={{ width: '100%' }}>
      <div style={{ width: '20%', float: 'left' }}>
        <Link to='/SpecialistDetails'><img style={{ height: '80px', width: '80px' }} src='https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/%E4%B8%93%E5%AE%B6%E5%88%97%E8%A1%A8/u8.svg?pageId=d0862e39-2207-4d51-a066-7366fd18ec46'></img></Link>
      </div>
      <div style={{ width: '50%', float: 'left' }}>
        <div>
          <span style={{ fontSize: '25px', fontWeight: '600' }}>
            <span style={{ marginRight: '15px' }}>Jack</span>
            <svg t="1700471844488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7485" width="20" height="20"><path d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z" fill="#F0F0F0" p-id="7486"></path><path d="M105.84 200.284C65.622 252.61 35.296 312.92 17.638 378.438h266.356L105.84 200.284z m900.522 178.154c-17.658-65.516-47.986-125.826-88.202-178.152L740.01 378.438h266.352zM17.638 645.568c17.66 65.516 47.986 125.826 88.202 178.15l178.148-178.15H17.638z m806.078-539.726C771.39 65.624 711.082 35.298 645.564 17.638v266.354l178.152-178.15zM200.284 918.158c52.326 40.218 112.636 70.544 178.152 88.204V740.01L200.284 918.158z m178.15-900.52c-65.516 17.66-125.826 47.986-178.15 88.202l178.15 178.15V17.638z m267.132 988.724c65.516-17.66 125.826-47.986 178.15-88.202l-178.15-178.15v266.352z m94.444-360.794L918.16 823.72c40.216-52.324 70.544-112.636 88.202-178.152H740.01z" fill="#0052B4" p-id="7487"></path><path d="M1019.666 445.218H578.784V4.334A517.112 517.112 0 0 0 512 0a517.011 517.011 0 0 0-66.782 4.334v440.882H4.334A517.112 517.112 0 0 0 0 512c0 22.638 1.488 44.922 4.334 66.782h440.882v440.884a516.7 516.7 0 0 0 133.566 0V578.784h440.884A517.066 517.066 0 0 0 1024 512c0-22.634-1.488-44.922-4.334-66.782z" fill="#D80027" p-id="7488"></path><path d="M645.566 645.568L874.038 874.04a513.272 513.272 0 0 0 30.096-32.87L708.53 645.566h-62.964v0.002z m-267.132 0h-0.004l-228.47 228.47a513.272 513.272 0 0 0 32.87 30.096l195.604-195.608v-62.958z m0-267.13v-0.004L149.962 149.96a513.272 513.272 0 0 0-30.096 32.87l195.606 195.606h62.962z m267.132 0L874.04 149.962a512.656 512.656 0 0 0-32.87-30.094L645.566 315.474v62.964z" fill="#D80027" p-id="7489"></path></svg>
          </span>
        </div>
        <div>
          <span><svg t="1700475854677" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8492" width="15" height="15"><path d="M272.4 813.1c-1.4 0-2.7-0.1-4.1-0.3-13.1-2.3-21.9-14.7-19.6-27.7l4.5-26.2c2.2-13.1 14.7-21.8 27.7-19.6 13.1 2.3 21.9 14.7 19.6 27.7l-4.5 26.2c-2 11.7-12.1 19.9-23.6 19.9z" fill="#3778FF" p-id="8493"></path><path d="M885 434.7l-244.8-35.6c-7.8-1.1-14.6-6.1-18.1-13.1l-74.8-151.6-69.6 141-74.7 10.8c-3.5 7-10.2 11.8-18 12.9l-191.2 27.8 202.8 197.7L361.3 831l140.1-73.7c7-3.7 15.4-3.7 22.4 0l62.7 33 22.2-11.7 129.7 68.2L701 628.7c-1.3-7.8 1.3-15.8 6.9-21.3L885 434.7z" fill="#91B4FF" p-id="8494"></path><path d="M774.1 940.4c-3.8 0-7.7-0.9-11.2-2.8L512 805.8 261.1 937.7c-8.1 4.3-17.9 3.5-25.3-1.8-7.4-5.4-11.1-14.5-9.6-23.5l11.5-67.2c2.2-13.1 14.8-21.9 27.7-19.6 13.1 2.3 21.9 14.7 19.6 27.7l-3.3 19.2 219-115.1c7-3.7 15.4-3.7 22.4 0l219 115.1-41.8-243.8c-1.3-7.8 1.3-15.8 6.9-21.3l177.2-172.7-244.8-35.6c-7.8-1.1-14.6-6.1-18.1-13.1L512 164.1 402.6 386c-3.5 7.1-10.3 12-18.1 13.1l-244.8 35.6 177.2 172.7c5.7 5.5 8.3 13.5 6.9 21.3L311.7 699c-2.3 13.1-14.6 21.9-27.7 19.6-13.1-2.2-21.9-14.7-19.6-27.7l9.9-57.8-203-197.8c-6.6-6.4-8.9-15.9-6.1-24.6 2.8-8.7 10.3-15 19.4-16.3l280.5-40.8L490.5 99.2c4.1-8.2 12.4-13.4 21.5-13.4s17.5 5.2 21.5 13.4L659 353.4l280.5 40.8c9 1.3 16.6 7.6 19.4 16.3 2.8 8.7 0.5 18.3-6.1 24.6L749.9 633l47.9 279.4c1.5 9-2.2 18.1-9.6 23.5-4.1 3-9.1 4.5-14.1 4.5z" fill="#3778FF" p-id="8495"></path></svg>         5.0</span>
        </div>

      </div>
      <div style={{ width: '30%', float: 'left' }}>
        <List>
          <ListItem><Button style={{ fontSize: '20px', fontWeight: 700, width: '100px' }} size='round' theme='primary'>+关注</Button></ListItem>
          <ListItem style={{ "--separator-color": 'rgva(0,0,0,0)' }}>
            <Link to='/ReservationForm'> <Button style={{ fontSize: '20px', fontWeight: 700, width: '100px' }} size='round' theme='primary'>+预约</Button></Link>
          </ListItem>
        </List>
      </div>
    </div>
    <div>
      <p style={{ fontSize: '20px', color: '#333435', marginLeft: '30px' }}>我荣获“十大最佳教师”称号....</p>
    </div>
  </div>
]


function SpecialistList() {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('found');
  const [choose, setChoose] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const containerRef = useRef();

  useScroll({
    container: containerRef,
    onScroll: (e) => {
      setScrollTop(e.target.scrollTop);
    },
  });

  return (
    <div className="SpecialistList">
      <ConfigProvider locale={zhCN}>
        <div className='phone'>
          <NavBar
            style={{ "--title-color": '#0C5757', "--title-font-weight": '700', '--title-font-size': '30px', '--height': '70px' }}
            left={<ArrowLeft style={{ color: '#0C5757' }} theme="primary" onClick={() => window.history.back()} />}
            title="专家列表"
          />
          <div style={{ background: '#F5F5F5' }}>
            <div
              ref={containerRef}
              style={{
                overflowY: 'auto',
                maxHeight: '1015px',
              }}
            >
              <div style={{ background: '#F5F5F5', height: '65px' }}>
                <Grid columns={2} bordered='false' style={{ height: '50px', fontSize: '30px', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
                  {Array.from(chooseArray).map((_, i) => (
                    <Grid.Item key={i} onClick={() => {
                      if (i == 1) setChoose(1);
                      else setChoose(0);
                    }}

                    >
                      <div style={choose == i ? cssVarChosen : cssVarUnchosen}>{chooseArray[i]}</div>
                    </Grid.Item>
                  ))}
                </Grid>
              </div>
              <div >
                <List>
                  <ListItem>{example}</ListItem>
                  <ListItem>{example}</ListItem>
                  <ListItem>{example}</ListItem>
                  <ListItem>{example}</ListItem>
                  <ListItem>{example}</ListItem>
                  <ListItem>{example}</ListItem>
                </List>
              </div>

            </div>

          </div>
          <div style={{ height: '60px' }}>
            <TabBar style={{ height: '100%', "--font-size": '15x' }} activeKey={activeKey} onChange={setActiveKey}>
              <TabBar.Item itemKey="home" title="首页" icon={<Link to='/home'><TabIcon type="home" /></Link>} />
              <TabBar.Item
                itemKey="found"
                title="现场面试"
                icon={<Link to='/specialistList'><TabIcon type="menu" /></Link>}
              // badge={{ shape: 'circle', text: '3' }}
              />
              <TabBar.Item
                itemKey="me"
                title="我的"
                icon={<Link to='/My'><TabIcon type="user" /></Link>}
              // badge={{ shape: 'dot' }}
              />
            </TabBar>
          </div>


        </div>

      </ConfigProvider>
    </div>
  );
}

export default SpecialistList;
