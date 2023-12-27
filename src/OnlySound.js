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
import {Link } from 'react-router-dom';

const PreviewIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const MARKS = {
  0: '00:00',
  100: '01:40',
};

function OnlySound() {
  const list = [];
  list.push(<List.Item key={1} title={``} />);
  const [scrollTop, setScrollTop] = useState(0);

  const containerRef = useRef();

  useScroll({
    container: containerRef,
    onScroll: (e) => {
      setScrollTop(e.target.scrollTop);
    },
  });
  const [value, setValue] = useState("0");
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
  const wave_icon = [<svg t="1700546559276" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11682" width="150" height="150" opacity={0.4}><path d="M512 942c-16.57 0-30-13.44-30-30V112c0-16.57 13.43-30 30-30s30 13.43 30 30v800c0 16.56-13.43 30-30 30zM712 742c-16.56 0-30-13.44-30-30V312c0-16.57 13.44-30 30-30s30 13.43 30 30v400c0 16.56-13.44 30-30 30zM912 622c-16.56 0-30-13.44-30-30V432c0-16.57 13.44-30 30-30s30 13.43 30 30v160c0 16.56-13.44 30-30 30zM312 742c-16.57 0-30-13.44-30-30V312c0-16.57 13.43-30 30-30s30 13.43 30 30v400c0 16.56-13.43 30-30 30zM112 622c-16.57 0-30-13.44-30-30V432c0-16.57 13.43-30 30-30s30 13.43 30 30v160c0 16.56-13.43 30-30 30z" p-id="11683" fill="#ffffff"></path></svg>]
  const mic_icon = [<svg t="1700546481680" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10503" width="200" height="200"><path d="M512 683.52c130.56 0 235.52-102.4 235.52-232.96V256c0-130.56-104.96-232.96-235.52-232.96s-235.52 102.4-235.52 232.96v194.56c0 130.56 102.4 232.96 235.52 232.96z m368.64-281.6c0-23.04-20.48-43.52-46.08-43.52s-43.52 20.48-43.52 43.52c0 5.12 0 10.24 2.56 12.8v33.28c0 151.04-125.44 276.48-281.6 276.48-153.6 0-281.6-125.44-281.6-276.48V409.6c0-2.56 2.56-5.12 2.56-10.24 0-23.04-20.48-43.52-43.52-43.52-25.6 0-43.52 20.48-43.52 43.52v64c0 186.88 140.8 335.36 320 360.96v87.04h-122.88c-25.6 0-46.08 20.48-46.08 46.08s20.48 43.52 46.08 43.52h332.8c28.16 0 43.52-17.92 43.52-43.52 0-23.04-17.92-46.08-43.52-46.08h-122.88v-87.04c184.32-20.48 327.68-174.08 327.68-360.96v-61.44z m0 0" fill="#ffffff" p-id="10504"></path></svg>]
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (event) => {
    const newProgress = event.target.value;
    setProgress(newProgress);
  };
  function translate(progress) {
    var min = Math.floor(progress / 60);
    var sec = Math.floor(progress) % 60;
    return min.toString() + ':' + sec.toString();
  }
  const [isRunning, setIsRunning] = useState(false);
  const isRunning_icon=[<svg t="1700549132820" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12715" width="100" height="100"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" fill="#ffffff" p-id="12716"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" fill="#ffffff" p-id="12717"></path></svg>]
  const stop_icon=[<svg t="1700549167701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13755" width="100" height="100"><path d="M512 1024C228.266667 1024 0 795.733333 0 512S228.266667 0 512 0s512 228.266667 512 512-228.266667 512-512 512z m0-42.666667c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333z m-106.666667-682.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333V320c0-12.8 8.533333-21.333333 21.333333-21.333333z m213.333334 0c12.8 0 21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333V320c0-12.8 8.533333-21.333333 21.333334-21.333333z" fill="#ffffff" fill-opacity=".9" p-id="13756"></path></svg>]
  useEffect(() => {
    let intervalId;

    if (isRunning&&progress<=100) {
      intervalId = setInterval(() => {
        setProgress((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };



  return (
    <div className="OnlySound">
      <ConfigProvider locale={zhCN}>
        <div className='phone'>
          <NavBar
            //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
            // }
            left={<Link to="/equipmenttesting"><ArrowLeft style={{ color: 'white' }} theme="primary" /></Link>
            }
            right={<Link to='/SpecialistTesting' style={{ color: 'white' }}>跳过</Link>}
            title="Q&A drills"
            style={{ background: '#609191', "--title-color": 'white', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '51px' }}
          />
          <div style={{ background: '#609191', textAlign: 'center' }}>
            <div style={{ background: '#609191', paddingTop: '400px',marginBottom:'200px' }}>
              {wave_icon}
              {mic_icon}
              {wave_icon}
            </div>
            <div>
              <span style={{ fontSize: '20px', fontWeight: 'bolder', color: 'white', marginRight: '5px' }}>{translate(progress)}</span>
              <input style={{ width: '200px' }} type="range" min="0" max="100" value={progress} onChange={handleProgressChange} />
              <span style={{ fontSize: '20px', fontWeight: 'bolder', color: 'white', marginRight: '5px' }}>{translate(100 - progress)}</span>
            </div>

            <div style={{marginTop:'130px',marginBottom:'100px'}}>
              <Button style={{background:'rgba(0,0,0,0)',border:'0px',marginBottom:'100px'}} icon={isRunning?stop_icon:isRunning_icon} onClick={handleStartStop}></Button>
            </div>
          </div>


        </div>

      </ConfigProvider>
    </div>
  );
}

export default OnlySound;
