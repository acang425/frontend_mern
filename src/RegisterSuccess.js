
import React from 'react';
import { useState, useRef,useEffect } from 'react';
import { Grid, ConfigProvider, Image, Button} from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useScroll, Message } from 'zarm';
import { WarningCircle } from '@zarm-design/icons';
import { BrowserRouter, Route, Link, Routes ,useNavigate } from 'react-router-dom';
import process from'./images/process.png'

const imgSrc = 'https://img.freepik.com/free-vector/tiny-people-standing-near-big-checkmark-team-male-female-characters-finishing-work-with-list-good-job-sign-flat-vector-illustration-done-job-checklist-time-management-concept_74855-21019.jpg?w=900&t=st=1700238843~exp=1700239443~hmac=ae8a49d6ac33466321339ff85f0f4ce6f5b4c016c15493ca4dfba0b6bee7b5f3';

function RegisterSuccess() {
  const navigate=useNavigate();
  return (
    <div className="RegisterSuccess">
      <ConfigProvider locale={zhCN}>
        <div className='phone'>
          <NavBar
           style={{"--title-color":'#0C5757',"--title-font-weight": '700', '--title-font-size': '20px', '--height': '51px' }}
            left={<ArrowLeft style={{ color:'#0C5757'}}theme="primary" onClick={() => window.history.back()} />}
            title="注册成功"
          />
          <div className='App_column'>
         
          </div>
          <div className='App_column'>
          <svg t="1700385340516" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2333" width="200" height="200"><path d="M512.697383 63.443961c-247.539816 0-448.208115 200.668299-448.208115 448.208115 0 247.539816 200.668299 448.208115 448.208115 448.208115 247.539816 0 448.208115-200.668299 448.208115-448.208115C960.905498 264.11226 760.237199 63.443961 512.697383 63.443961zM782.650675 386.324696 472.510102 703.184297c-1.057075 1.586125-2.233877 3.100618-3.620457 4.504594-12.155854 12.346189-31.861662 12.346189-44.025703 0L270.811334 551.265282c-12.146645-12.347213-12.146645-32.354895 0-44.683688 12.154831-12.347213 31.860638-12.347213 44.016493 0L446.411701 640.173195l292.213271-298.549583c12.165064-12.346189 31.861662-12.346189 44.025703 0C794.797319 353.9698 794.797319 373.97646 782.650675 386.324696z" fill="#272636" p-id="2334"></path></svg>
          </div>
          <div className='App_column'>
            <div style={{width:'80%'}}>
            <Button block shape='round' theme='primary' size='lg' onClick={()=>{
              navigate('/');
            }} >立即登录</Button>
            </div>
          </div>
        </div>
        
      </ConfigProvider>
    </div>
  );
}

export default RegisterSuccess;
