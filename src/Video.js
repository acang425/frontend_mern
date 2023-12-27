//项目的根组件
// App -> index.js -> public/index.html

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import { Slider, Grid, ConfigProvider, Button, Switch, Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useScroll, Message } from 'zarm';
import { WarningCircle } from '@zarm-design/icons';
import { BrowserRouter,Link, Navigate, Route, Routes } from 'react-router-dom';

const PreviewIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const MARKS = {
  0: '00:00',
  100: '01:40',
};

function Video() {
  const [showWindow, setShowWindow] = useState(true);

  const closeWindow = () => {
    setShowWindow(false);
  };


  return (
    <div className="Video">
      <ConfigProvider locale={zhCN}>
        <div className='phone' style={{ background: '#8BAEAE'}}>
          <NavBar
            left={<Link to="/equipmenttesting"><ArrowLeft style={{ color: 'white' }} theme="primary" /></Link>
            }
            right={<Link to='/SpecialistTesting' style={{ color: 'white' }}>跳过</Link>}
            title="Video test"
            style={{ background: '#8BAEAE', "--title-color": 'white', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '51px' }}
          />
          {showWindow && (
        <div className="RS_float" style={{background:'#555555',borderRadius:'25px',width:'410px',height:'250px',color:'white',fontSize:'20px',fontWeight:'600'}}>
          <button style={{marginLeft:'360px',background:'rgba(0,0,0,0)',border:'0px'}}onClick={closeWindow}><svg t="1700540118692" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2369" width="30" height="30"><path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#ffffff" p-id="2370"></path><path d="M927.846568 511.997953c0-229.315756-186.567139-415.839917-415.838893-415.839917-229.329059 0-415.85322 186.524161-415.85322 415.839917 0 229.300406 186.524161 415.84094 415.85322 415.84094C741.278405 927.838893 927.846568 741.29836 927.846568 511.997953M512.007675 868.171955c-196.375529 0-356.172979-159.827125-356.172979-356.174002 0-196.374506 159.797449-356.157629 356.172979-356.157629 196.34483 0 356.144326 159.783123 356.144326 356.157629C868.152001 708.34483 708.352505 868.171955 512.007675 868.171955" fill="#ffffff" p-id="2371"></path><path d="M682.378947 642.227993 553.797453 513.264806 682.261267 386.229528c11.661597-11.514241 11.749602-30.332842 0.234337-41.995463-11.514241-11.676947-30.362518-11.765975-42.026162-0.222057L511.888971 471.195665 385.223107 344.130711c-11.602246-11.603269-30.393217-11.661597-42.025139-0.059352-11.603269 11.618619-11.603269 30.407544-0.059352 42.011836l126.518508 126.887922L342.137823 639.104863c-11.662621 11.543917-11.780301 30.305213-0.23536 41.96988 5.830799 5.89015 13.429871 8.833179 21.086248 8.833179 7.53972 0 15.136745-2.8847 20.910239-8.569166l127.695311-126.311801L640.293433 684.195827c5.802146 5.8001 13.428847 8.717546 21.056572 8.717546 7.599072 0 15.165398-2.917446 20.968567-8.659217C693.922864 672.681586 693.950494 653.889591 682.378947 642.227993" fill="#ffffff" p-id="2372"></path></svg></button>
          <p style={{marginLeft:'30px',marginRight:'30px'}}>当前您的网络状况：良好</p>
          <p style={{marginLeft:'30px',marginRight:'30px'}}>当前专家的网络状况：良好</p>
          <p style={{marginLeft:'30px',marginRight:'30px'}}>专家xx将实时观看您的作答,准备完毕后请点击开始作答按钮。</p>
        </div>
      )}
          <div style={{background:'#0C5757',textAlign:'center',height:'40px',margin:'20px',paddingLeft:'20px',paddingRight:'20px',borderRadius:'20px',width:'50%'}}>
            <span style={{ color: 'white',fontSize:'25px' }}>Scenario Simulation</span>
          </div>
          <div style={{width:'100%',marginTop:'50px'}}>
            <img style={{width:'540px'}} src='https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/video/u11.png?pageId=b60f3b38-f95b-4351-8d04-2196eee1ab10'></img>
          </div>
          <div style={{textAlign:'center'}}>
          <svg style={{width:'140px',height:'220px'}} t="1703519476530" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2751" id="mx_n_1703519476531" width="200" height="200"><path d="M495.940744 913.438928 495.940744 736.922702c0-0.203638 0-0.407276 0.01535-0.611937-134.418432-8.278547-240.878093-119.882368-240.878093-256.512165l0-6.288217 0.047072 0c-0.031722-0.548492-0.047072-1.096984-0.047072-1.653663 0-13.305027 10.772344-24.086581 24.085558-24.086581 13.314237 0 24.086581 10.781554 24.086581 24.086581 0 0.556679-0.016373 1.105171-0.047072 1.653663l0.047072 0 0 8.476045c0 115.399263 93.459578 208.78721 208.747301 208.78721 115.304096 0 208.747301-93.476975 208.747301-208.78721l0-8.476045 0.047072 0c-0.030699-0.548492-0.047072-1.096984-0.047072-1.653663 0-13.305027 10.772344-24.086581 24.086581-24.086581 13.313214 0 24.085558 10.781554 24.085558 24.086581 0 0.556679-0.01535 1.105171-0.047072 1.653663l0.047072 0 0 6.288217c0 136.551002-106.427938 248.233618-240.878093 256.512165 0.01535 0.203638 0.01535 0.407276 0.01535 0.611937l0 176.516226 88.23867 0c13.344936 0 24.164353 10.694573 24.164353 24.085558 0 13.305027-10.709923 24.085558-24.164353 24.085558l-208.590735 0c-13.344936 0-24.164353-10.694573-24.164353-24.085558 0-13.305027 10.709923-24.085558 24.164353-24.085558L495.940744 913.438928zM351.423303 223.027539c0-88.716554 71.866794-160.637584 160.575162-160.637584 88.676645 0 160.575162 72.046896 160.575162 160.637584l0 256.794597c0 88.716554-71.866794 160.637584-160.575162 160.637584-88.676645 0-160.575162-72.046896-160.575162-160.637584L351.423303 223.027539z" fill="#0B6721" p-id="2752"></path></svg>          
          </div>
      


        </div>

      </ConfigProvider>
    </div>
  );
}

export default Video;
