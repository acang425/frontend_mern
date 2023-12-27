//项目的根组件
// App -> index.js -> public/index.html
import { SuccessCircle, CloseCircle } from '@zarm-design/icons';
import interview from './images/interview.png'
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Grid, ConfigProvider, Button, Switch, Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import ListItem from 'zarm/lib/list/ListItem';
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useScroll, Message } from 'zarm';
import { WarningCircle } from '@zarm-design/icons';
import { Link } from 'react-router-dom';
const PreviewIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const example = [
  <div style={{ width: '100%',background:'#F5F5F5' }}>
    <div style={{ width: '100%' }}>
      <div style={{ width: '20%', float: 'left' }}>
        <Link to='/SpecialistDetails'><img style={{ height: '80px', width: '80px' }} src='https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/%E7%BB%93%E6%9D%9F%E9%A1%B5%E9%9D%A2%E5%90%90%E5%8F%B8%E6%8F%90%E7%A4%BA/u19.svg?pageId=4b441bb5-28f2-4a69-8b0d-4b47e0bddaac'></img></Link>
      </div>
      <div style={{ width: '80%', float: 'left' }}>
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
    </div>
    <div>
      <p style={{ fontSize: '20px', color: '#333435', marginLeft: '30px' }}>xx, 1995年毕业于xxxx学校，曾任xxx的人力资源管理部部长，留学x年学成归来。</p>
    </div>
  </div>
]


function SpecialistTesting() {
  const list = [];
  list.push(<List.Item key={1} title={``} />);
  const [scrollTop, setScrollTop] = useState(0);
  const [showWindow1, setShowWindow1] = useState(true);
  const [showWindow2, setShowWindow2] = useState(false);

  const closeWindow = () => {
    setShowWindow1(false);
  };

  const containerRef = useRef();

  useScroll({
    container: containerRef,
    onScroll: (e) => {
      setScrollTop(e.target.scrollTop);
    },
  });

  const navigate=useNavigate();

  const [textArray, setTextArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./111.txt');
        const text = await response.text();
        const lines = text.split('\n');
        setTextArray(lines);
      } catch (error) {
        console.error('Error fetching the file: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="SpecialistTesting">
      <ConfigProvider locale={zhCN}>
        <div className='phone'>
          <NavBar
            //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
            // }
            left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />
            }
            title="专家面试与测试"
            style={{ background: '#0C5757', "--title-color": 'white', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '51px' }}
          />
          {showWindow1 && (
            <div className="SI_float" style={{ background: '#616161', opacity: '0.9', borderRadius: '25px', width: '410px', height: '270px', color: 'white', fontSize: '15px' }}>
              <button style={{ marginLeft: '360px', background: 'rgba(0,0,0,0)', border: '0px' }} onClick={closeWindow}><svg t="1700540118692" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2369" width="30" height="30"><path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#ffffff" p-id="2370"></path><path d="M927.846568 511.997953c0-229.315756-186.567139-415.839917-415.838893-415.839917-229.329059 0-415.85322 186.524161-415.85322 415.839917 0 229.300406 186.524161 415.84094 415.85322 415.84094C741.278405 927.838893 927.846568 741.29836 927.846568 511.997953M512.007675 868.171955c-196.375529 0-356.172979-159.827125-356.172979-356.174002 0-196.374506 159.797449-356.157629 356.172979-356.157629 196.34483 0 356.144326 159.783123 356.144326 356.157629C868.152001 708.34483 708.352505 868.171955 512.007675 868.171955" fill="#ffffff" p-id="2371"></path><path d="M682.378947 642.227993 553.797453 513.264806 682.261267 386.229528c11.661597-11.514241 11.749602-30.332842 0.234337-41.995463-11.514241-11.676947-30.362518-11.765975-42.026162-0.222057L511.888971 471.195665 385.223107 344.130711c-11.602246-11.603269-30.393217-11.661597-42.025139-0.059352-11.603269 11.618619-11.603269 30.407544-0.059352 42.011836l126.518508 126.887922L342.137823 639.104863c-11.662621 11.543917-11.780301 30.305213-0.23536 41.96988 5.830799 5.89015 13.429871 8.833179 21.086248 8.833179 7.53972 0 15.136745-2.8847 20.910239-8.569166l127.695311-126.311801L640.293433 684.195827c5.802146 5.8001 13.428847 8.717546 21.056572 8.717546 7.599072 0 15.165398-2.917446 20.968567-8.659217C693.922864 672.681586 693.950494 653.889591 682.378947 642.227993" fill="#ffffff" p-id="2372"></path></svg></button>
              <div style={{ marginLeft: '30px', marginRight: '30px' }}>
                <p style={{ fontWeight: '600' }}>
                  您是否准备打开摄像头或麦克风...
                </p>
                <p>
                  tips:
                </p>
                <p >
                  您可以整理一下衣冠。
                </p>

                <p>请注意：作答结束后记得按下停止作答按钮哦          </p>
                <span style={{ textAlign: 'center' }}>
                  <svg style={{ marginLeft: '40px' }} t="1703577236560" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2819" width="50" height="50"><path d="M307.16287842 141.99149902l23.66250732-13.85661621 441.49561524 753.94131592-23.66250732 13.85661621L307.16287842 141.99149902zM512.34277344 678.93066406c21.08056641 0 40.79003906-4.97021484 58.61425781-14.05371093L376.60449219 334.44335937V535.99414063c0 78.83789063 60.67089844 142.93652344 135.73828125 142.93652343zM647.39550781 535.99414063V271.20166016c0-78.83789063-60.328125-143.10791016-135.39550781-143.10791016-43.53222656 0-81.92285156 21.59472656-106.77392578 55.18652344L639.85449219 583.12548828c4.97021484-14.73925781 7.54101563-30.67822266 7.54101562-47.13134765zM731.375 538.90771484V402.3125h-29.13574219v136.59521484c0 36.84814453-10.62597656 71.296875-29.3071289 100.26123047l16.96728515 29.13574219c26.22216797-36.33398438 41.47558594-81.06591797 41.47558594-129.39697266z" p-id="2820" fill="#ffffff"></path><path d="M530.85253906 757.42578125c29.13574219-2.05664063 56.55761719-9.94042969 81.06591797-22.28027344l-16.11035156-27.59326172c-24.85107422 11.99707031-52.61572266 18.68115234-81.75146485 18.68115235-103.34619141 0-188.69677734-83.97949219-188.69677734-186.98291016V402.3125h-32.56347656v136.59521484c0 115.171875 90.83496094 210.12011719 205.6640625 218.34667969V865.05664063h-125.11230469v30.84960937h275.93261719v-30.84960938h-118.25683594V757.42578125z" p-id="2821" fill="#ffffff"></path></svg>
                  <svg style={{ marginLeft: '150px' }} t="1703577208472" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1684" width="50" height="50"><path d="M907.712 642.592l-2.624-302.592-204.256 145.056 206.88 157.536z m-39.68-354.784a64 64 0 0 1 101.056 51.648l2.624 302.592a64 64 0 0 1-102.752 51.456l-206.912-157.536a64 64 0 0 1 1.728-103.104l204.256-145.056z" fill="#ffffff" p-id="1685"></path><path d="M144 256a32 32 0 0 0-32 32v417.376a32 32 0 0 0 32 32h456.32a32 32 0 0 0 32-32V288a32 32 0 0 0-32-32H144z m0-64h456.32a96 96 0 0 1 96 96v417.376a96 96 0 0 1-96 96H144a96 96 0 0 1-96-96V288a96 96 0 0 1 96-96z" fill="#ffffff" p-id="1686"></path></svg>
                </span>
              </div>

            </div>
          )}
          {showWindow2 && (
            <div className="SI_float" style={{ background: '#808080', opacity: '0.9', borderRadius: '25px', width: '410px', height: '270px', color: 'white', fontSize: '15px' }}>
              <button style={{ marginLeft: '360px', background: 'rgba(0,0,0,0)', border: '0px' }} onClick={() => { setShowWindow2(false) }}><svg t="1700540118692" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2369" width="30" height="30"><path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#ffffff" p-id="2370"></path><path d="M927.846568 511.997953c0-229.315756-186.567139-415.839917-415.838893-415.839917-229.329059 0-415.85322 186.524161-415.85322 415.839917 0 229.300406 186.524161 415.84094 415.85322 415.84094C741.278405 927.838893 927.846568 741.29836 927.846568 511.997953M512.007675 868.171955c-196.375529 0-356.172979-159.827125-356.172979-356.174002 0-196.374506 159.797449-356.157629 356.172979-356.157629 196.34483 0 356.144326 159.783123 356.144326 356.157629C868.152001 708.34483 708.352505 868.171955 512.007675 868.171955" fill="#ffffff" p-id="2371"></path><path d="M682.378947 642.227993 553.797453 513.264806 682.261267 386.229528c11.661597-11.514241 11.749602-30.332842 0.234337-41.995463-11.514241-11.676947-30.362518-11.765975-42.026162-0.222057L511.888971 471.195665 385.223107 344.130711c-11.602246-11.603269-30.393217-11.661597-42.025139-0.059352-11.603269 11.618619-11.603269 30.407544-0.059352 42.011836l126.518508 126.887922L342.137823 639.104863c-11.662621 11.543917-11.780301 30.305213-0.23536 41.96988 5.830799 5.89015 13.429871 8.833179 21.086248 8.833179 7.53972 0 15.136745-2.8847 20.910239-8.569166l127.695311-126.311801L640.293433 684.195827c5.802146 5.8001 13.428847 8.717546 21.056572 8.717546 7.599072 0 15.165398-2.917446 20.968567-8.659217C693.922864 672.681586 693.950494 653.889591 682.378947 642.227993" fill="#ffffff" p-id="2372"></path></svg></button>
              <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '30px' }}>您是否确定要结束面试？</h1>
                <span><Button size='lg' style={{ marginRight: '30px' }} onClick={()=>{navigate('/testingresult')}}>是，结束</Button><Button size='lg' onClick={() => { setShowWindow2(false) }}>否，继续</Button></span>

              </div>

            </div>
          )}
          <div
            ref={containerRef}
            style={{
              overflowY: 'auto',
              maxHeight: 1095,
              background: '#F5F5F5'
            }}
          >
            <div style={{ height: '90px' }}>
              <Button shape='round' style={{ marginBottom: '25px', background: '#0C5757', color: 'white', fontSize: '20px', fontWeight: 'bold', height: '40px', width: '300px' }}>Scenario Simulation</Button>
              <svg style={{ marginTop: '20px', marginLeft: '170px' }} t="1700542576129" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3609" width="40" height="40"><path d="M659.925333 128a74.666667 74.666667 0 0 1 71.338667 52.618667L754.56 256H821.333333c64.8 0 117.333333 52.533333 117.333334 117.333333v426.666667c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V373.333333c0-64.8 52.533333-117.333333 117.333334-117.333333h66.773333l23.296-75.381333A74.666667 74.666667 0 0 1 364.074667 128h295.850666zM512 405.333333c-88.362667 0-160 71.637333-160 160 0 88.362667 71.637333 160 160 160 88.362667 0 160-71.637333 160-160 0-88.362667-71.637333-160-160-160z m0 256a96 96 0 1 0 0-192 96 96 0 0 0 0 192z" fill="#0C5757" p-id="3610"></path></svg>
            </div>
            <div>
              <img style={{ width: '100%' }} src={interview}></img>
            </div>
            <div style={{ textAlign: 'center', marginTop: '50px', height: '10%' }}>
              <Button icon={<CloseCircle style={{ color: 'white' }} theme="danger" />} theme='danger' shape='round' size='lg' onClick={() => { setShowWindow2(true); }} >结束面试</Button>
            </div>
            <div>
              <h1>专家名片</h1>
              <List>
                <ListItem style={{background:'#F5F5F5' }}>{example}</ListItem>
                <ListItem style={{background:'#F5F5F5' }}>{example}</ListItem>
                <ListItem style={{background:'#F5F5F5' }}>{example}</ListItem>
                <ListItem style={{background:'#F5F5F5' }}>{example}</ListItem>
              </List>
            </div>

          </div>

        </div>

      </ConfigProvider>
    </div>
  );
}

export default SpecialistTesting;
