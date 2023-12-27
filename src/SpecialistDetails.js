
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Grid,Loading, ConfigProvider, Image, Button, List } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useScroll, Message } from 'zarm';
import { WarningCircle } from '@zarm-design/icons';
import ListItem from 'zarm/lib/list/ListItem';
import { Link } from 'react-router-dom';
const imgexm = ['https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/%E4%B8%93%E5%AE%B6%E8%AF%A6%E6%83%85/u52.png?pageId=7eb1e6c6-363b-4eda-bfd2-df1ce4cabc01']
const example = [
  <div style={{ width: '100%' ,fontFamily: 'Monospace',}}>
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <span style={{ fontFamily: 'Monospace', marginLeft: '30px', fontSize: '20px' }}><svg t="1700475854677" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8492" width="20" height="20"><path d="M272.4 813.1c-1.4 0-2.7-0.1-4.1-0.3-13.1-2.3-21.9-14.7-19.6-27.7l4.5-26.2c2.2-13.1 14.7-21.8 27.7-19.6 13.1 2.3 21.9 14.7 19.6 27.7l-4.5 26.2c-2 11.7-12.1 19.9-23.6 19.9z" fill="#3778FF" p-id="8493"></path><path d="M885 434.7l-244.8-35.6c-7.8-1.1-14.6-6.1-18.1-13.1l-74.8-151.6-69.6 141-74.7 10.8c-3.5 7-10.2 11.8-18 12.9l-191.2 27.8 202.8 197.7L361.3 831l140.1-73.7c7-3.7 15.4-3.7 22.4 0l62.7 33 22.2-11.7 129.7 68.2L701 628.7c-1.3-7.8 1.3-15.8 6.9-21.3L885 434.7z" fill="#91B4FF" p-id="8494"></path><path d="M774.1 940.4c-3.8 0-7.7-0.9-11.2-2.8L512 805.8 261.1 937.7c-8.1 4.3-17.9 3.5-25.3-1.8-7.4-5.4-11.1-14.5-9.6-23.5l11.5-67.2c2.2-13.1 14.8-21.9 27.7-19.6 13.1 2.3 21.9 14.7 19.6 27.7l-3.3 19.2 219-115.1c7-3.7 15.4-3.7 22.4 0l219 115.1-41.8-243.8c-1.3-7.8 1.3-15.8 6.9-21.3l177.2-172.7-244.8-35.6c-7.8-1.1-14.6-6.1-18.1-13.1L512 164.1 402.6 386c-3.5 7.1-10.3 12-18.1 13.1l-244.8 35.6 177.2 172.7c5.7 5.5 8.3 13.5 6.9 21.3L311.7 699c-2.3 13.1-14.6 21.9-27.7 19.6-13.1-2.2-21.9-14.7-19.6-27.7l9.9-57.8-203-197.8c-6.6-6.4-8.9-15.9-6.1-24.6 2.8-8.7 10.3-15 19.4-16.3l280.5-40.8L490.5 99.2c4.1-8.2 12.4-13.4 21.5-13.4s17.5 5.2 21.5 13.4L659 353.4l280.5 40.8c9 1.3 16.6 7.6 19.4 16.3 2.8 8.7 0.5 18.3-6.1 24.6L749.9 633l47.9 279.4c1.5 9-2.2 18.1-9.6 23.5-4.1 3-9.1 4.5-14.1 4.5z" fill="#3778FF" p-id="8495"></path></svg>         5.0</span>
        <span style={{ fontFamily: 'Monospace', marginLeft: '20px', fontSize: '20px' }}>
          <svg style={{ marginRight: '20px' }} t="1700471844488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7485" width="20" height="20"><path d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z" fill="#F0F0F0" p-id="7486"></path><path d="M105.84 200.284C65.622 252.61 35.296 312.92 17.638 378.438h266.356L105.84 200.284z m900.522 178.154c-17.658-65.516-47.986-125.826-88.202-178.152L740.01 378.438h266.352zM17.638 645.568c17.66 65.516 47.986 125.826 88.202 178.15l178.148-178.15H17.638z m806.078-539.726C771.39 65.624 711.082 35.298 645.564 17.638v266.354l178.152-178.15zM200.284 918.158c52.326 40.218 112.636 70.544 178.152 88.204V740.01L200.284 918.158z m178.15-900.52c-65.516 17.66-125.826 47.986-178.15 88.202l178.15 178.15V17.638z m267.132 988.724c65.516-17.66 125.826-47.986 178.15-88.202l-178.15-178.15v266.352z m94.444-360.794L918.16 823.72c40.216-52.324 70.544-112.636 88.202-178.152H740.01z" fill="#0052B4" p-id="7487"></path><path d="M1019.666 445.218H578.784V4.334A517.112 517.112 0 0 0 512 0a517.011 517.011 0 0 0-66.782 4.334v440.882H4.334A517.112 517.112 0 0 0 0 512c0 22.638 1.488 44.922 4.334 66.782h440.882v440.884a516.7 516.7 0 0 0 133.566 0V578.784h440.884A517.066 517.066 0 0 0 1024 512c0-22.634-1.488-44.922-4.334-66.782z" fill="#D80027" p-id="7488"></path><path d="M645.566 645.568L874.038 874.04a513.272 513.272 0 0 0 30.096-32.87L708.53 645.566h-62.964v0.002z m-267.132 0h-0.004l-228.47 228.47a513.272 513.272 0 0 0 32.87 30.096l195.604-195.608v-62.958z m0-267.13v-0.004L149.962 149.96a513.272 513.272 0 0 0-30.096 32.87l195.606 195.606h62.962z m267.132 0L874.04 149.962a512.656 512.656 0 0 0-32.87-30.094L645.566 315.474v62.964z" fill="#D80027" p-id="7489"></path></svg>
          英国，格拉斯哥
        </span>
      </div>
    </div>
    <div>
      <p style={{ fontFamily: 'Monospace', fontSize: '20px', color: '#333435', marginLeft: '30px', marginRight: '30px' }}> &emsp;我是一个身体健康，踏实开朗，为人谦和，认真上进，富有责任心的人，对工作和生活充满热情!
      </p>
      <p style={{ fontFamily: 'Monospace', fontSize: '20px', color: '#333435', marginLeft: '30px', marginRight: '30px' }}>
        &emsp;我具有良好的团队精神和团队意识。在校期间，学习成绩良好，获得两年学院奖学金、国家励志奖学金，系统地学习大学三年的英文翻译专业知识，具备专业的英语基础;熟悉翻译操作;除了认真完成学业外，曾担任院团委青年志愿者协会干事、绿色环保协会项目长、班级学生干部。热心环保、公益活动，参加过广州亚运志愿者、科学中心志愿者。
      </p>
    </div>
    <div style={{ width: '80%', marginLeft: '10%' }}>
      <Link to='/ReservationForm'><Button block shape='round' style={{ background: '#0C5757', color: 'white', fontSize: '20px', fontWeight: '700', height: '60px' }}>预约</Button></Link>
    </div>
    <div style={{marginTop:'167px'}}>
      <div style={{ width: '100%' }}>
        <div style={{ width: '20%', float: 'left' }}>
          <img style={{ height: '80px', width: '80px' }} src='https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/%E4%B8%93%E5%AE%B6%E5%88%97%E8%A1%A8/u8.svg?pageId=d0862e39-2207-4d51-a066-7366fd18ec46'></img>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <div>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>
              <span style={{ marginRight: '15px' }}>Joe</span>
              <svg t="1700471844488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7485" width="20" height="20"><path d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z" fill="#F0F0F0" p-id="7486"></path><path d="M105.84 200.284C65.622 252.61 35.296 312.92 17.638 378.438h266.356L105.84 200.284z m900.522 178.154c-17.658-65.516-47.986-125.826-88.202-178.152L740.01 378.438h266.352zM17.638 645.568c17.66 65.516 47.986 125.826 88.202 178.15l178.148-178.15H17.638z m806.078-539.726C771.39 65.624 711.082 35.298 645.564 17.638v266.354l178.152-178.15zM200.284 918.158c52.326 40.218 112.636 70.544 178.152 88.204V740.01L200.284 918.158z m178.15-900.52c-65.516 17.66-125.826 47.986-178.15 88.202l178.15 178.15V17.638z m267.132 988.724c65.516-17.66 125.826-47.986 178.15-88.202l-178.15-178.15v266.352z m94.444-360.794L918.16 823.72c40.216-52.324 70.544-112.636 88.202-178.152H740.01z" fill="#0052B4" p-id="7487"></path><path d="M1019.666 445.218H578.784V4.334A517.112 517.112 0 0 0 512 0a517.011 517.011 0 0 0-66.782 4.334v440.882H4.334A517.112 517.112 0 0 0 0 512c0 22.638 1.488 44.922 4.334 66.782h440.882v440.884a516.7 516.7 0 0 0 133.566 0V578.784h440.884A517.066 517.066 0 0 0 1024 512c0-22.634-1.488-44.922-4.334-66.782z" fill="#D80027" p-id="7488"></path><path d="M645.566 645.568L874.038 874.04a513.272 513.272 0 0 0 30.096-32.87L708.53 645.566h-62.964v0.002z m-267.132 0h-0.004l-228.47 228.47a513.272 513.272 0 0 0 32.87 30.096l195.604-195.608v-62.958z m0-267.13v-0.004L149.962 149.96a513.272 513.272 0 0 0-30.096 32.87l195.606 195.606h62.962z m267.132 0L874.04 149.962a512.656 512.656 0 0 0-32.87-30.094L645.566 315.474v62.964z" fill="#D80027" p-id="7489"></path></svg>
            </span>
          </div>
          <div>
            Online
          </div>
        </div>
        <div >
          <Link to='/SpecialistInterview'>          <Button icon={<svg style={{marginRight:''}} t="1700477831515" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9601" width="30" height="30"><path d="M1024 354.5v315c0 46.3-47.7 77.3-90 58.5l-128.4-57.1c-2.6-1.2-5.6 0.8-5.6 3.7V768c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.4 28.7-64 64-64h672c35.3 0 64 28.6 64 64v93.4c0 2.9 3 4.8 5.6 3.7L934 296c42.3-18.8 90 12.2 90 58.5z" p-id="9602"></path></svg>} shape='round' style={{ background: '#0C5757', color: 'white', fontSize: '20px', fontWeight: '200', height: '60px' }}>开始课程</Button></Link>

        </div>
      </div>
    </div>

  </div>
]


function SpecialistDetails() {
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
    <div className="SpecialistDetails">
      <ConfigProvider locale={zhCN}>
        <div className='phone'>
          <NavBar
            style={{ "--title-color": '#0C5757', "--title-font-weight": '700', '--title-font-size': '30px', '--height': '70px' }}
            left={<ArrowLeft style={{ color: '#0C5757' }} theme="primary" onClick={() => window.history.back()} />}
            title="专家详情"
          />
          <div style={{ background: '#F5F5F5' }}>
            <div
              ref={containerRef}
              style={{
                overflowY: 'auto',
                maxHeight: '1075px',
              }}
            >
              <img src={imgexm} style={{ width: '100%' }}></img>
              <h1 style={{ fontFamily: 'Monospace', marginLeft: '30px', fontSize: '50px' }}>Joe</h1>
              {example}
              <div style={{marginTop:'300px',marginBottom:'30px',textAlign:'center',color:'#9999A5',fontSize:'20px'}}>
              <Loading type="spinner" />正在加载
              </div>
            </div>

          </div>


        </div>

      </ConfigProvider>
    </div>
  );
}

export default SpecialistDetails;
