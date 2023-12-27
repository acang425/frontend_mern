
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Grid, ConfigProvider, Image, Button, List } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useScroll, Message } from 'zarm';
import { WarningCircle } from '@zarm-design/icons';
import ListItem from 'zarm/lib/list/ListItem';
import { Link } from 'react-router-dom';
import service from './http';

const imgSrc = 'https://img.freepik.com/free-vector/tiny-people-standing-near-big-checkmark-team-male-female-characters-finishing-work-with-list-good-job-sign-flat-vector-illustration-done-job-checklist-time-management-concept_74855-21019.jpg?w=900&t=st=1700238843~exp=1700239443~hmac=ae8a49d6ac33466321339ff85f0f4ce6f5b4c016c15493ca4dfba0b6bee7b5f3';



function getTarget()
{
  return(
    <div>
      <div>
      <h1 style={{fontSize:'40px'}}>你的目标考试是？</h1>
      <p style={{fontSize:'18px',color:'#999999'}}> 填写完成将为你定制你的个性化题库</p>
      </div>
      <div className='column'>
        <div style={{paddingTop:'150px'}}>
        <List>
          <ListItem style={{"--separator-color":'white'}}>
            <Button style={{width:'210px',height:'80px',fontSize:'20px',fontWeight:'600',background:'#F2F2F2'}}>公务员</Button>
          </ListItem>
          <ListItem style={{"--separator-color":'white'}}>
            <Button style={{width:'210px',height:'80px',fontSize:'20px',fontWeight:'600',background:'#F2F2F2'}}>事业单位</Button>
          </ListItem>
        </List>
        </div>
       
      </div>
    </div>
  )
}
function getArea()
{
  return(
    <div>
      <div>
      <h1 style={{fontSize:'40px'}}>你的报考地区是？</h1>
      <p style={{fontSize:'18px',color:'#999999'}}> 填写完成将为你定制你的个性化题库</p>
      </div>
      <div className='column'>
        <div style={{paddingTop:'150px'}}>
        <List>
          <ListItem style={{"--separator-color":'white'}}>
            <Button style={{width:'210px',height:'80px',fontSize:'20px',fontWeight:'600',background:'#F2F2F2'}}>国考</Button>
          </ListItem>
          <ListItem style={{"--separator-color":'white'}}>
            <Button style={{width:'210px',height:'80px',fontSize:'20px',fontWeight:'600',background:'#F2F2F2'}}>省考</Button>
          </ListItem>
          <ListItem style={{"--separator-color":'white'}}>
            <Button style={{width:'210px',height:'80px',fontSize:'20px',fontWeight:'600',background:'#F2F2F2'}}>市考</Button>
          </ListItem>
        </List>
        </div>
       
      </div>
    </div>
  )
}
function getPType()
{
  return(
    <div>
      <div>
      <h1 style={{fontSize:'40px'}}>你要选择的题型是？</h1>
      <p style={{fontSize:'18px',color:'#999999'}}> 填写完成将为你定制你的个性化题库</p>
      </div>
      <div className='column'>
        <div style={{paddingTop:'150px'}}>
        <List>
          <ListItem style={{"--separator-color":'white'}}>
            <Button style={{width:'210px',height:'80px',fontSize:'20px',fontWeight:'600',background:'#F2F2F2'}}>公务员申论</Button>
          </ListItem>
          <ListItem style={{"--separator-color":'white'}}>
            <Button style={{width:'210px',height:'80px',fontSize:'20px',fontWeight:'600',background:'#F2F2F2'}}>公务员行测</Button>
          </ListItem>
          <ListItem style={{"--separator-color":'white'}}>
            <Button style={{width:'210px',height:'80px',fontSize:'20px',fontWeight:'600',background:'#F2F2F2'}}>公务员面试</Button>
          </ListItem>
        </List>
        </div>
       
      </div>
    </div>
  )
}

function ChooseTarget() {
  const [target,setTarget]=useState(true);
  const [area,setArea]=useState(false);
  const [pType,setPType]=useState(false);
  function display()
{
  if(target) return getTarget();
  if(area) return getArea();
  if(pType) return getPType();
}
  return (
    <div className="ChooseTarget">
      <ConfigProvider locale={zhCN}>

        <div className='row'>
          <div className='phone'>
          <div>
            <NavBar
              //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
              // }
              left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />
              }
              title="选择考公目的"
              right={<Link to='/home'><span style={{fontSize:'30px',color:'white',fontWeight:'700'}}>跳过</span></Link>}
              style={{ background: '#0C5757', "--title-color": 'white', "--title-font-weight": '700', '--title-font-size': '30px', '--height': '90px' }}
            />
          </div>
            <div className='ChooseTarget_column'>
              <List style={{width:'100%'}}>
                <ListItem  style={{"--separator-color":'white'}}>
                <Button block style={{"--border-color":'white',height:'100px',fontSize:'20px',fontWeight:'700'}} theme={target?"primary":"default"} onClick={()=>{
                  if(!target)setTarget(!target);
                  if(area)setArea(!area);
                  if(pType)setPType(!pType);
                }}>目标</Button>
                </ListItem>
                <ListItem style={{"--separator-color":'white'}}>
                <Button style={{"--border-color":'white',height:'100px',fontSize:'20px',fontWeight:'700'}} block theme={area?"primary":"default"} onClick={()=>{
                  if(target)setTarget(!target);
                  if(!area)setArea(!area);
                  if(pType)setPType(!pType);
                }}>地区</Button>
                </ListItem>
                <ListItem style={{"--separator-color":'white'}}>
                <Button style={{"--border-color":'white',height:'100px',fontSize:'20px',fontWeight:'700'}} block theme={pType?"primary":"default"}  onClick={()=>{
                  if(target)setTarget(!target);
                  if(area)setArea(!area);
                  if(!pType)setPType(!pType);
                }}>题型</Button>
                </ListItem>
              </List>
            </div>
            <div className='ChooseTarget_column' style={{float:'left',width:'80%',paddingLeft:'20px'}}>
              {display()}
            </div>
          </div>
        </div>


      </ConfigProvider>
    </div>
  );
}

export default ChooseTarget;
