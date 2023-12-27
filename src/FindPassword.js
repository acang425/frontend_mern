//项目的根组件
// App -> index.js -> public/index.html
import {  Link} from 'react-router-dom';
import React from 'react';
import { useState, useRef } from 'react';
import { render } from 'react-dom';
import { Grid,Loading, ConfigProvider, Button, Switch,Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function FindPassword() {
  const navigate=new useNavigate();
  const handleLogin = () => {
    // 处理登录逻辑
    console.log('Username:', username);
    console.log('Password:', password);
    // 根据实际需求进行登录验证等操作
  };
  const focusInput = useRef();
  const [username, setUsername] = useState('');
  const [valid,setValid] = useState('123456');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [password2, setPassword2] = useState('');



  const formData={
    account:username,
    password:password,
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(' http://localhost:8080/api/user/update', formData);
      const token = response.data.data.access_token;
      console.log(response.data);
      // console.log(item);
      if(username==''||password==''||password2=='')
      {
        alert('账号密码为空');
      }
      else if(password!=password2)
      {
        alert('密码不一致');
      }
      else if(!response.data.data.hasOwnProperty('updated'))
      {
        alert('不存在该账户')
      }
      else
      {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      // 处理登录失败的逻辑，例如提示用户登录失败
    }
  };

  return (
    <div className="FindPassword">
        <ConfigProvider locale={zhCN}>
        <div className='phone'>
          <div className='App_header'>
            <div className='App_title'>
              <svg t="1700049077276" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3309" width="100px" height="100px"><path d="M332.8 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2z" p-id="3310"></path><path d="M332.8 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2zM691.2 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2z" p-id="3311"></path><path d="M691.2 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2z" p-id="3312"></path><path d="M860.16 102.4h-97.28v51.2c0 39.424-32.256 71.68-71.68 71.68s-71.68-32.256-71.68-71.68V102.4H404.48v51.2c0 39.424-32.256 71.68-71.68 71.68s-71.68-32.256-71.68-71.68V102.4H163.84c-28.16 0-51.2 23.04-51.2 51.2v819.2c0 28.16 23.04 51.2 51.2 51.2h696.32c28.16 0 51.2-23.04 51.2-51.2V153.6c0-28.16-23.04-51.2-51.2-51.2z m-105.984 522.752l-343.04 235.52c-4.608 3.072-9.216 4.608-14.336 4.608-6.656 0-13.312-2.56-17.92-7.68l-112.64-112.64c-10.24-10.24-10.24-26.112 0-36.352s26.112-10.24 36.352 0l97.792 97.792 325.632-223.232c11.776-8.192 27.648-5.12 35.84 6.656s4.096 27.648-7.68 35.328zM737.28 501.76H286.72c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h450.56c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.72 30.72z m0-122.88H286.72c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h450.56c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.72 30.72z" p-id="3313"></path></svg>
              <h1>528公考</h1>
            </div>

          </div>
          <div className='App_column'>
            <div>
              <List style={{height:"60px",width:"400px"}}>
                <div className='list'>
                  <List.Item title="" prefix={
                    <svg t="1700036902123" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3560" width="30" height="30"><path d="M819.292 623.785c-40.844-40.844-88.387-72.547-140.151-94.102 69.587-51.392 114.809-133.97 114.809-226.921 0-155.467-126.483-281.951-281.951-281.951s-281.951 126.483-281.951 281.951c0 92.95 45.221 175.529 114.809 226.921-51.762 21.555-99.308 53.26-140.151 94.102-82.080 82.080-127.284 191.213-127.284 307.292 0 32.174 26.082 58.254 58.254 58.254s58.254-26.080 58.254-58.254c0-175.385 142.685-318.068 318.068-318.068 175.385 0 318.068 142.685 318.068 318.068 0 32.174 26.080 58.254 58.254 58.254s58.254-26.080 58.254-58.254c0-116.081-45.204-225.211-127.284-307.292zM512 137.32c91.225 0 165.442 74.218 165.442 165.442s-74.218 165.442-165.442 165.442-165.442-74.218-165.442-165.442 74.218-165.442 165.442-165.442z" p-id="3561"></path></svg>
                  }
                  style={{"--separator-color":'white'}}
                  >
                    <div className='form'>
                      <Input
style={{width:'340px',height:'50px'}}
                        ref={focusInput}
                        placeholder="手机号码"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}

                      />
                    </div>
                  </List.Item>
                </div>
                
                <div className='list'>
                  <List.Item title="" prefix={
                    <svg t="1700036902123" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3560" width="30" height="30"><path d="M819.292 623.785c-40.844-40.844-88.387-72.547-140.151-94.102 69.587-51.392 114.809-133.97 114.809-226.921 0-155.467-126.483-281.951-281.951-281.951s-281.951 126.483-281.951 281.951c0 92.95 45.221 175.529 114.809 226.921-51.762 21.555-99.308 53.26-140.151 94.102-82.080 82.080-127.284 191.213-127.284 307.292 0 32.174 26.082 58.254 58.254 58.254s58.254-26.080 58.254-58.254c0-175.385 142.685-318.068 318.068-318.068 175.385 0 318.068 142.685 318.068 318.068 0 32.174 26.080 58.254 58.254 58.254s58.254-26.080 58.254-58.254c0-116.081-45.204-225.211-127.284-307.292zM512 137.32c91.225 0 165.442 74.218 165.442 165.442s-74.218 165.442-165.442 165.442-165.442-74.218-165.442-165.442 74.218-165.442 165.442-165.442z" p-id="3561"></path></svg>
                  }
                  style={{"--separator-color":'white'}}
                  suffix={<Button size='sm'style={{color:'#999999',borderColor:'white',fontSize:'15px'}}>发送验证码</Button>}
                  >
                    <div className='nob_form'>
                      <Input
                      style={{width:'200px',height:'50px'}}
                        ref={focusInput}
                        placeholder="短信验证码"
                        value={valid}
                        onChange={(e) => {
                          setValid(e.target.value);
                        }}
                      />
                    </div>
                  </List.Item>
                </div>
                <div className='list'>
                  <List.Item
                    suffix={
                      <Switch style={{width:'100px'}} checked={checked} onChange={()=>{setChecked(!checked);setVisible(!visible)}} />
                    }
                    style={{"--separator-color":'white'}}
                    prefix={
                      <svg t="1700037166851" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2529" width="30" height="30"><path d="M770.63 425.1v-23.46c0-135.8-104.19-246.27-232.26-246.27S306.11 265.84 306.11 401.64v23.46h-65.37V858H836V425.1zM363 401.64C363 298.74 441.64 215 538.37 215s175.41 83.73 175.41 186.63v23.47H363z m202.43 321.09a27.06 27.06 0 0 1-54.12 0V560.39a27.06 27.06 0 0 1 54.12 0z" opacity=".8" p-id="2530"></path></svg>}
                  >
                    <div className='nob_form'>
                      <Input
                      style={{width:'200px',height:'50px'}}
                        type={visible ? 'text' : 'password'}
                        placeholder="输入新的登录密码"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                  </List.Item>
                </div>
                <div className='list'>
                  <List.Item
                   style={{"--separator-color":'white'}}
                    suffix={
                      <Switch style={{width:'100px'}} checked={checked2} onChange={()=>{setChecked2(!checked2);setVisible2(!visible2)}} />
                    }
                    prefix={
                      <svg t="1700037166851" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2529" width="30" height="30"><path d="M770.63 425.1v-23.46c0-135.8-104.19-246.27-232.26-246.27S306.11 265.84 306.11 401.64v23.46h-65.37V858H836V425.1zM363 401.64C363 298.74 441.64 215 538.37 215s175.41 83.73 175.41 186.63v23.47H363z m202.43 321.09a27.06 27.06 0 0 1-54.12 0V560.39a27.06 27.06 0 0 1 54.12 0z" opacity=".8" p-id="2530"></path></svg>}
                  >
                    <div className='nob_form'>
                      <Input
                      style={{width:'200px',height:'50px'}}
                        type={visible2 ? 'text' : 'password'}
                        placeholder="再次输入新的登录密码"
                        value={password2}
                        onChange={(e) => {
                          setPassword2(e.target.value);
                        }}
                      />
                    </div>

                  </List.Item>
                </div>

              </List>
            </div>
          </div>
          <div className='App_column'>
            <div style={{width:'80%'}}>
            <Link to='/' style={{width:'100%'}}><Button onClick={handleSubmit} loading block  theme="primary" shape="round">确认</Button></Link>
            </div>
          </div>
          <div className='App_column'>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default FindPassword;
