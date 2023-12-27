//项目的根组件
// App -> index.js -> public/index.html

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import { Grid, ConfigProvider, Button, Switch, Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useScroll, Message } from 'zarm';
import { WarningCircle } from '@zarm-design/icons';
import { Link } from 'react-router-dom';
const PreviewIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);



function SpecialistInterview() {
  const list = [];
  list.push(<List.Item key={1} title={``} />);
  const [scrollTop, setScrollTop] = useState(0);
  const [showWindow, setShowWindow] = useState(true);

  const closeWindow = () => {
    setShowWindow(false);
  };
  const containerRef = useRef();

  useScroll({
    container: containerRef,
    onScroll: (e) => {
      setScrollTop(e.target.scrollTop);
    },
  });

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
    <div className="SpecialistInterview">
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
            {showWindow && (
        <div className="SI_float" style={{background:'#1F6363',opacity:'0.9',borderRadius:'25px',width:'410px',height:'270px',color:'white',fontSize:'15px'}}>
          <button style={{marginLeft:'360px',background:'rgba(0,0,0,0)',border:'0px'}}onClick={closeWindow}><svg t="1700540118692" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2369" width="30" height="30"><path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#ffffff" p-id="2370"></path><path d="M927.846568 511.997953c0-229.315756-186.567139-415.839917-415.838893-415.839917-229.329059 0-415.85322 186.524161-415.85322 415.839917 0 229.300406 186.524161 415.84094 415.85322 415.84094C741.278405 927.838893 927.846568 741.29836 927.846568 511.997953M512.007675 868.171955c-196.375529 0-356.172979-159.827125-356.172979-356.174002 0-196.374506 159.797449-356.157629 356.172979-356.157629 196.34483 0 356.144326 159.783123 356.144326 356.157629C868.152001 708.34483 708.352505 868.171955 512.007675 868.171955" fill="#ffffff" p-id="2371"></path><path d="M682.378947 642.227993 553.797453 513.264806 682.261267 386.229528c11.661597-11.514241 11.749602-30.332842 0.234337-41.995463-11.514241-11.676947-30.362518-11.765975-42.026162-0.222057L511.888971 471.195665 385.223107 344.130711c-11.602246-11.603269-30.393217-11.661597-42.025139-0.059352-11.603269 11.618619-11.603269 30.407544-0.059352 42.011836l126.518508 126.887922L342.137823 639.104863c-11.662621 11.543917-11.780301 30.305213-0.23536 41.96988 5.830799 5.89015 13.429871 8.833179 21.086248 8.833179 7.53972 0 15.136745-2.8847 20.910239-8.569166l127.695311-126.311801L640.293433 684.195827c5.802146 5.8001 13.428847 8.717546 21.056572 8.717546 7.599072 0 15.165398-2.917446 20.968567-8.659217C693.922864 672.681586 693.950494 653.889591 682.378947 642.227993" fill="#ffffff" p-id="2372"></path></svg></button>
          <div style={{marginLeft:'30px',marginRight:'30px'}}>
          <p style={{fontWeight:'600'}}>
          正在为您预约评分专家中，请稍后...
          </p>
          <p>
            tips:
          </p>
          <p >
          在此期间您可以整理一下衣冠，调整一下心情，匹配好组员后可以点击以下按钮进入专家测试。请注意：作答结束后记得按下停止作答按钮哦。          </p>
          </div>
          <Link to='/EquipmentTesting'><Button shape='round' style={{marginLeft:'100px',fontWeight:'700'}}>匹配成功，进入测试</Button></Link>
         </div>
      )}
          <div
            ref={containerRef}
            style={{
              overflowY: 'auto',
              maxHeight: 1095,
            }}
          >
            <div style={{height:'90px'}}>
              <Button shape='round' style={{marginBottom:'25px',background:'#0C5757',color:'white',fontSize:'20px',fontWeight:'bold',height:'40px',width:'300px'}}>Scenario Simulation</Button>
              <svg style={{marginTop:'20px',marginLeft:'170px'}} t="1700542576129" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3609" width="40" height="40"><path d="M659.925333 128a74.666667 74.666667 0 0 1 71.338667 52.618667L754.56 256H821.333333c64.8 0 117.333333 52.533333 117.333334 117.333333v426.666667c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V373.333333c0-64.8 52.533333-117.333333 117.333334-117.333333h66.773333l23.296-75.381333A74.666667 74.666667 0 0 1 364.074667 128h295.850666zM512 405.333333c-88.362667 0-160 71.637333-160 160 0 88.362667 71.637333 160 160 160 88.362667 0 160-71.637333 160-160 0-88.362667-71.637333-160-160-160z m0 256a96 96 0 1 0 0-192 96 96 0 0 0 0 192z" fill="#0C5757" p-id="3610"></path></svg>
            </div>
            <div>
              <img style={{width:'100%'}}src='https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/%E4%B8%93%E5%AE%B6%E9%9D%A2%E8%AF%95-%E7%AD%89%E5%BE%85%E9%A1%B5%E9%9D%A2/u11.svg?pageId=0878158a-1812-4024-aa5c-34d53e9804b0'></img>
            </div>
            
          </div>

        </div>

      </ConfigProvider>
    </div>
  );
}

export default SpecialistInterview;
