//项目的根组件
// App -> index.js -> public/index.html
import { BrowserRouter, Route, Link, Routes ,useNavigate } from 'react-router-dom';
import React from 'react';
import Calendar from './Calendar.js'
import { useState, useRef } from 'react';
import { render } from 'react-dom';
import { Grid, ConfigProvider, Button, Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import axios from 'axios';

const PreviewIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);



function Login() {
  const handleLogin = () => {
    // 处理登录逻辑
    console.log('Username:', username);
    console.log('Password:', password);
    // 根据实际需求进行登录验证等操作
  };
  const focusInput = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [chosen, setChosen] = useState(true);
  const navigate = useNavigate();
  const [roleID, setRoleID]=useState('658991a15e4686492298f7ea');
  const formData={
    account:username,
    password:password,
    role_id:roleID
  }
  const handleRatioClick = () => {
    if (chosen === false) setChosen(true);
    else setChosen(false);
    console.log(chosen);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', formData);
      const token = response.data.data.access_token;
      console.log(response.data);
      localStorage.setItem('token', token); // 将token存储在localStorage中
      const item=localStorage.getItem('token');
      console.log(item);
      if(item!='undefined')
      {
        navigate('/chooseTarget'); // 跳转到home页面
      }
      else{
        alert('error');
      }
    } catch (error) {
      console.error(error);
      // 处理登录失败的逻辑，例如提示用户登录失败
    }
  };
  return (
    <div className="App">
        <ConfigProvider locale={zhCN}>
          <div className='phone'>
            <div className='App_header'>
              <div className='App_title'>
                <svg t="1700049077276" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3309" width="100px" height="100px"><path d="M332.8 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2z" p-id="3310"></path><path d="M332.8 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2zM691.2 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2z" p-id="3311"></path><path d="M691.2 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2z" p-id="3312"></path><path d="M860.16 102.4h-97.28v51.2c0 39.424-32.256 71.68-71.68 71.68s-71.68-32.256-71.68-71.68V102.4H404.48v51.2c0 39.424-32.256 71.68-71.68 71.68s-71.68-32.256-71.68-71.68V102.4H163.84c-28.16 0-51.2 23.04-51.2 51.2v819.2c0 28.16 23.04 51.2 51.2 51.2h696.32c28.16 0 51.2-23.04 51.2-51.2V153.6c0-28.16-23.04-51.2-51.2-51.2z m-105.984 522.752l-343.04 235.52c-4.608 3.072-9.216 4.608-14.336 4.608-6.656 0-13.312-2.56-17.92-7.68l-112.64-112.64c-10.24-10.24-10.24-26.112 0-36.352s26.112-10.24 36.352 0l97.792 97.792 325.632-223.232c11.776-8.192 27.648-5.12 35.84 6.656s4.096 27.648-7.68 35.328zM737.28 501.76H286.72c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h450.56c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.72 30.72z m0-122.88H286.72c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h450.56c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.72 30.72z" p-id="3313"></path></svg>
                <h1>528公考</h1>
              </div>
            </div>

            <div className='App_column' style={{ height: '15%' }}>
              <div>
                <List>
                  <List.Item title="" prefix={
                    <svg t="1700036902123" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3560" width="30" height="30"><path d="M819.292 623.785c-40.844-40.844-88.387-72.547-140.151-94.102 69.587-51.392 114.809-133.97 114.809-226.921 0-155.467-126.483-281.951-281.951-281.951s-281.951 126.483-281.951 281.951c0 92.95 45.221 175.529 114.809 226.921-51.762 21.555-99.308 53.26-140.151 94.102-82.080 82.080-127.284 191.213-127.284 307.292 0 32.174 26.082 58.254 58.254 58.254s58.254-26.080 58.254-58.254c0-175.385 142.685-318.068 318.068-318.068 175.385 0 318.068 142.685 318.068 318.068 0 32.174 26.080 58.254 58.254 58.254s58.254-26.080 58.254-58.254c0-116.081-45.204-225.211-127.284-307.292zM512 137.32c91.225 0 165.442 74.218 165.442 165.442s-74.218 165.442-165.442 165.442-165.442-74.218-165.442-165.442 74.218-165.442 165.442-165.442z" p-id="3561"></path></svg>
                  }
                    style={{ "--separator-color": 'white' }}
                  >
                    <div className='form'>
                      <Input
                        style={{ width: '340px', height: '50px' }}
                        placeholder="手机号码"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}

                      />
                    </div>
                  </List.Item>
                  <List.Item
                    suffix={
                      visible ? (
                        <PreviewIcon type="preview-open" onClick={() => setVisible(!visible)} />
                      ) : (
                        <PreviewIcon type="preview-close" onClick={() => setVisible(!visible)} />
                      )
                    }
                    style={{ "--separator-color": 'white' }}
                    prefix={
                      <svg t="1700037166851" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2529" width="30" height="30"><path d="M770.63 425.1v-23.46c0-135.8-104.19-246.27-232.26-246.27S306.11 265.84 306.11 401.64v23.46h-65.37V858H836V425.1zM363 401.64C363 298.74 441.64 215 538.37 215s175.41 83.73 175.41 186.63v23.47H363z m202.43 321.09a27.06 27.06 0 0 1-54.12 0V560.39a27.06 27.06 0 0 1 54.12 0z" opacity=".8" p-id="2530"></path></svg>}
                  >
                    <div className='form'>
                      <Input
                        style={{ width: '340px', height: '50px' }}
                        type={visible ? 'text' : 'password'}
                        placeholder="请输入"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </List.Item>
                </List>
              </div>
            </div>
            <div classname='App_column' style={{ textAlign: 'right' }}>
              {/* <a href='' style={{ color: "green" }}>忘记密码</a> */}
              <Link to="/findpassword" style={{ color: "green" }}>忘记密码</Link>
              &emsp;&emsp;&emsp;
            </div>
            <div className='App_text_column'>
              <Checkbox checked={chosen} onChange={handleRatioClick}>已阅读并同意 <Link to="/Treaty" style={{ color: "green" }}>《用户服务协议》</Link></Checkbox>
            </div>
            <div className='App_text_column'>
               <Link to="/ChooseType" style={{ color: "white" ,width:'100%'}}><Button block theme="primary" shape="round" onClick={handleSubmit} >登录</Button></Link>
            </div>
            <div className='App_text_column'>
            <Link to="/register" style={{ color: "green" }}>注册账号</Link>
            </div>
            <div style={{ height: '30%' }}>

            </div>
            <fieldset>
              <legend><span style={{ color: "gray" }}>OR</span></legend>
            </fieldset>
            <div className='App_text_column'>
              <Button icon={<svg t="1700038471677" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1492" width="20" height="20"><path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" fill="#28C445" p-id="1493"></path><path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" fill="#28C445" p-id="1494"></path></svg>} shape="round" size='lg' style={{ "--text-color": "gray" }}>微信账号登录</Button>
            </div>
          </div>
        </ConfigProvider>
        {/* <Route path="/" exact component={Home} /> */}

    </div>
  );
}

export default Login;
