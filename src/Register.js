//项目的根组件
// App -> index.js -> public/index.html

import React from 'react';
import { useState, useRef } from 'react';
import { render } from 'react-dom';
import { Grid, ConfigProvider, Button, Switch,Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import ListItem from 'zarm/lib/list/ListItem';
import axios from 'axios';
import { BrowserRouter, Route, Link, Routes ,useNavigate } from 'react-router-dom';


function Register() {
  const handleLogin = () => {
    // 处理登录逻辑
    console.log('Username:', username);
    console.log('Password:', password);
    // 根据实际需求进行登录验证等操作
  };
  const focusInput = useRef();
  const [account, setAccount] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validcode, setvalidcode] = useState('123456');
  const [visible, setVisible] = useState(false);
  const [chosen, setChosen] = useState(true);
  const [checked, setChecked] = useState(false);
  const [roleID, setRoleID]=useState('6589a78da01759e3c30286db');
  const navigate=useNavigate();
  const formData={
    user_name:username, password:password, account:account
  }
  
  const PreviewIcon = Icon.createFromIconfont(
    '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
  );
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/user/create', formData);
      console.log('register success');
      if(account!=''&&username!=''&&password!='') navigate('/registersuccess');
      else alert("手机号码、用户名称或密码为空");
    } catch (error) {
      console.error(error);
      // 处理登录失败的逻辑，例如提示用户登录失败
    }
  };
  
  const handleRatioClick = () => {
    if (chosen === false) setChosen(true);
    else setChosen(false);
    console.log(chosen);
  }
  return (
    <div className="Register">
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
                  <List.Item title="" prefix={
                  <svg t="1703574782713" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2391" width="40" height="30"><path d="M371.2 448c55.466667 81.066667 123.733333 153.6 204.8 204.8 21.333333-17.066667 46.933333-38.4 72.533333-55.466667 51.2 29.866667 102.4 51.2 162.133334 68.266667L750.933333 810.666667c-4.266667 0-8.533333 0-8.533333-4.266667v4.266667C486.4 738.133333 285.866667 537.6 213.333333 285.866667h4.266667C213.333333 281.6 213.333333 277.333333 213.333333 273.066667L362.666667 213.333333c17.066667 59.733333 38.4 110.933333 68.266666 162.133334-21.333333 25.6-42.666667 46.933333-59.733333 72.533333z" fill="#444444" p-id="2392"></path></svg>                  }
                  style={{"--separator-color":'white'}}
                  >
                    <div className='form'>
                      <Input
                        ref={focusInput}
                        placeholder="手机号码"
                        value={account}
                        onChange={(e) => {
                          setAccount(e.target.value);
                        }}
                        style={{width:'340px',height:'50px'}}
                      />
                    </div>
                  </List.Item>
                  <List.Item title="" prefix={
                    <svg t="1700036902123" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3560" width="30" height="30"><path d="M819.292 623.785c-40.844-40.844-88.387-72.547-140.151-94.102 69.587-51.392 114.809-133.97 114.809-226.921 0-155.467-126.483-281.951-281.951-281.951s-281.951 126.483-281.951 281.951c0 92.95 45.221 175.529 114.809 226.921-51.762 21.555-99.308 53.26-140.151 94.102-82.080 82.080-127.284 191.213-127.284 307.292 0 32.174 26.082 58.254 58.254 58.254s58.254-26.080 58.254-58.254c0-175.385 142.685-318.068 318.068-318.068 175.385 0 318.068 142.685 318.068 318.068 0 32.174 26.080 58.254 58.254 58.254s58.254-26.080 58.254-58.254c0-116.081-45.204-225.211-127.284-307.292zM512 137.32c91.225 0 165.442 74.218 165.442 165.442s-74.218 165.442-165.442 165.442-165.442-74.218-165.442-165.442 74.218-165.442 165.442-165.442z" p-id="3561"></path></svg>
                  }
                  style={{"--separator-color":'white'}}
                  >
                    <div className='form'>
                      <Input
                        ref={focusInput}
                        placeholder="用户名称"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        style={{width:'340px',height:'50px'}}
                      />
                    </div>
                  </List.Item>
                  <List.Item title="" prefix={
                    <svg t="1703574875919" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2374" width="30" height="30"><path d="M958.359001 286.941198c0-64.308655-52.132334-116.440989-116.440989-116.440989L181.453678 170.500209c-64.308655 0-116.440989 52.132334-116.440989 116.440989l0 448.63995c0 64.308655 52.132334 116.440989 116.440989 116.440989l660.464333 0c64.308655 0 116.440989-52.132334 116.440989-116.440989L958.359001 286.941198zM843.814198 212.455763c12.059664 0 23.444968 3.465938 33.519418 8.598842L530.749016 549.347606c-1.227967 1.161453-1.156336 0.916882-1.752924 1.868557-1.426489 1.067308-6.055926 3.922333-15.449877 3.922333-9.397021 0-14.025435-2.75474-15.4509-3.818979-0.676405-1.077541-0.662079-0.716314-1.995447-1.940189l-353.122503-324.412624c11.609409-7.557116 25.445532-12.509918 40.300868-12.509918L843.814198 212.456786zM916.403446 736.484727c0 40.857547-31.730679 73.582879-72.589248 73.582879L183.27721 810.067606c-40.85857 0-75.28566-32.725332-75.28566-73.582879L107.99155 287.657512c0-10.630105 2.860141-20.735253 6.909363-29.882588l351.486236 322.096882c4.91187 5.302773 19.479657 17.676591 47.009663 17.676591 27.799136 0 42.303478-12.618389 47.076178-17.830087l346.800517-328.899822c6.251378 10.860349 9.129938 23.433712 9.129938 36.838L916.403446 736.484727z" fill="#272636" p-id="2375"></path></svg>
                  }
                  suffix={<Button size='sm' style={{color:'#999999',borderColor:'white',fontSize:'15px'}}>发送验证码</Button>}
                  style={{"--separator-color":'white'}}
                  >
                      <Input
                        style={{width:'200px',height:'50px'}}
                        placeholder="短信验证码"
                        value={validcode}
                        onChange={(e) => {
                          setvalidcode(e.target.value);
                        }}
                      />
                  </List.Item>
                  <List.Item
                    suffix={
                      <Switch style={{width:'100px'}} checked={checked} onChange={()=>{setChecked(!checked);setVisible(!visible)}} />
                      // visible ? (
                      //   <PreviewIcon type="preview-open" onClick={() => setVisible(!visible)} />
                      // ) : (
                      //   <PreviewIcon type="preview-close" onClick={() => setVisible(!visible)} />
                      // )
                    }
                    style={{"--separator-color":'white'}}
                    prefix={
                      <svg t="1700037166851" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2529" width="30" height="30"><path d="M770.63 425.1v-23.46c0-135.8-104.19-246.27-232.26-246.27S306.11 265.84 306.11 401.64v23.46h-65.37V858H836V425.1zM363 401.64C363 298.74 441.64 215 538.37 215s175.41 83.73 175.41 186.63v23.47H363z m202.43 321.09a27.06 27.06 0 0 1-54.12 0V560.39a27.06 27.06 0 0 1 54.12 0z" opacity=".8" p-id="2530"></path></svg>}
                  >
                      <Input
                      style={{width:'200px',height:'50px'}}
                        type={visible ? 'text' : 'password'}
                        placeholder="请输入"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                  </List.Item>
      

              </List>
            </div>
          </div>
          <div className='App_text_column'>
            <Checkbox checked={chosen} onChange={handleRatioClick}>已阅读并同意<a href='' style={{color:"green"}}>《用户服务协议》</a></Checkbox>
          </div>
          <div className='App_text_column'>
            <Button block theme="primary" shape="round" onClick={handleSubmit}>确认</Button>
          </div>
          <div className='App_column'>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default Register;
