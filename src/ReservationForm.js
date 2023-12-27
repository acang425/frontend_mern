//项目的根组件
// App -> index.js -> public/index.html

import React from 'react';
import { useState, useRef } from 'react';
import { render } from 'react-dom';
import { Toast, DateSelect, SearchBar, NavBar, Grid, Loading, ConfigProvider, Button, Switch, Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import { ArrowLeft } from '@zarm-design/icons';
import './App.css'
import ListItem from 'zarm/lib/list/ListItem';
import { Link } from 'react-router-dom';
import process1 from './images/process1.png'
function ReservationForm() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [ID, setID] = useState();
  const [date, setDate] = useState();
  const [value, setValue] = useState(new Date());
  return (
    <div className="ReservationForm">
      <ConfigProvider locale={zhCN} >
        <div className='phone'>
          <div>
            <NavBar
              //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
              // }
              left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />
              }
              title="面试预约"
              style={{ background: '#0C5757', "--title-color": 'white', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '51px' }}
            />
          </div>
          <div>
            <img src={process1}></img>
          </div>
          <div style={{ 'background': '#F5F5F5', paddingTop: '130px', paddingBottom: '330px' }}>
            <h1 style={{ fontSize: '20px', paddingLeft: '15px' }}><svg style={{ marginRight: '15px', marginTop: '2px' }} t="1700480054697" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11518" width="40" height="40"><path d="M672 192v48h48v-48zM112 256v640a16 16 0 0 0 16 16h328a24 24 0 0 1 0 48H128a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h544v48H128a16 16 0 0 0-16 16z m848 0v232a24 24 0 0 1-48 0V256a16 16 0 0 0-16-16H720v-48h176a64 64 0 0 1 64 64zM352 88V192h-48V88a24 24 0 0 1 48 0z" fill="" p-id="11519"></path><path d="M304 240h48v56a24 24 0 0 1-48 0z m632 160h-832a24 24 0 0 0 0 48h832a24 24 0 0 0 0-48zM720 88v208a24 24 0 0 1-48 0v-208a24 24 0 0 1 48 0zM200 544h304a21.28 21.28 0 0 1 24 24 21.28 21.28 0 0 1-24 24h-304a21.28 21.28 0 0 1-24-24 21.28 21.28 0 0 1 24-24zM200 656h304a24 24 0 0 1 0 48h-304a24 24 0 0 1 0-48zM200 768h304a24 24 0 0 1 0 48h-304a24 24 0 0 1 0-48z" fill="" p-id="11520"></path><path d="M950.72 609.76l-88.48-88.48a30.88 30.88 0 0 0-44.16 0L752 587.36 558.08 781.12a34.4 34.4 0 0 0-8 13.28L515.52 912l-2.24 7.84a32 32 0 0 0 5.6 27.68A32 32 0 0 0 544 960a33.6 33.6 0 0 0 8.96-1.28l125.28-36.96a27.04 27.04 0 0 0 13.28-8l1.76-1.76L720 886.24 740.48 864l11.52-11.52 48-48 128-128 22.08-22.24a30.88 30.88 0 0 0 0-44.48zM668.64 891.84L600 912 544 928l4.96-16 32-108.8L608 775.68 696.32 864zM800 760.8l-81.44 81.44-88.64-88.64 166.08-166.08 4 4.48 84.48 84.64z m106.56-106.72l-88.48-88.64L840.16 544 928 631.84z" fill="#0070FF" p-id="11521"></path></svg>预约信息</h1>
            <div style={{ 'background': '#F5F5F5' }}>
              <List >
                <ListItem style={{ background: '#F5F5F5', fontSize: '20px', '--separator-color': 'rgba(0,0,0,0)' }}>
                  <span style={{ width: '100px' }}>预约人</span>
                  <Input
                    style={{ fontSize: '20px', paddingLeft: '0px', width: '250px' }}
                    placeholder="请输入预约人姓名"
                    value={name}
                    onChange={(e) => {
                      const val = e.target.value;
                      setName(val);
                      console.log(`onChange: ${val}`);
                    }}

                  />
                  <span><svg t="1700481235191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12550" width="40" height="40"><path d="M116.98089346844444 938.0880250500741c0 13.315251313777777 8.876834209185184 22.19208430933333 22.19208430933333 22.19208552296296s22.19208430933333-8.876834209185184 22.19208430933333-22.19208552296296c0-199.72876242488888 162.00221764266664-361.73098006755555 361.73098006755555-361.73098006755555s361.73098006755555 162.00221764266664 361.73098006755555 361.73098006755555c0 13.315251313777777 8.876834209185184 22.19208430933333 22.19208430933333 22.19208552296296s22.19208430933333-8.876834209185184 22.19208552296296-22.19208552296296c0-184.19430316562963-124.27567407407408-339.53889575822217-290.71631003496293-390.5806894269629 84.32992134637037-42.164960673185185 142.0293412788148-128.71409117866665 142.02934249244444-228.57847178429628 0-142.0293412788148-115.39883986488888-257.4281823573333-257.4281823573333-257.4281823573333-142.0293412788148 0-257.4281823573333 115.39883986488888-257.4281823573333 257.4281823573333 0 99.86438060562962 57.69941993244444 186.4135111111111 142.02934249244444 228.57847178429628-168.65984390637036 48.822585723259266-290.7163088213333 204.16717831585183-290.7163088213333 390.5806894269629z m193.0711361611852-621.3783703703704c0-117.61804902399999 95.42596350103702-213.04401252503703 213.04401252503703-213.04401252503703s213.04401252503703 95.42596350103702 213.04401252503703 213.04401252503703-95.42596350103702 213.04401252503703-213.04401252503703 213.04401252503703-213.04401252503703-95.42596350103702-213.04401252503703-213.04401252503703z" fill="#1B5747" p-id="12551"></path></svg>   选择联系人
                  </span>
                </ListItem>
                <ListItem style={{ background: '#F5F5F5', fontSize: '20px', height: '70px', '--separator-color': 'rgba(0,0,0,0)' }}>
                  <span style={{ width: '100px' }}>面试日期</span>
                  {/* <Input
                    style={{ fontSize: '20px', paddingLeft: '0px', width: '250px' }}
                    placeholder="请选择预约日期"
                    value={date}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDate(val);
                      console.log(`onChange: ${val}`);
                    }}
                  />
                  <span><svg style={{ marginTop: '2px' }} t="1700480054697" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11518" width="40" height="40"><path d="M672 192v48h48v-48zM112 256v640a16 16 0 0 0 16 16h328a24 24 0 0 1 0 48H128a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h544v48H128a16 16 0 0 0-16 16z m848 0v232a24 24 0 0 1-48 0V256a16 16 0 0 0-16-16H720v-48h176a64 64 0 0 1 64 64zM352 88V192h-48V88a24 24 0 0 1 48 0z" fill="" p-id="11519"></path><path d="M304 240h48v56a24 24 0 0 1-48 0z m632 160h-832a24 24 0 0 0 0 48h832a24 24 0 0 0 0-48zM720 88v208a24 24 0 0 1-48 0v-208a24 24 0 0 1 48 0zM200 544h304a21.28 21.28 0 0 1 24 24 21.28 21.28 0 0 1-24 24h-304a21.28 21.28 0 0 1-24-24 21.28 21.28 0 0 1 24-24zM200 656h304a24 24 0 0 1 0 48h-304a24 24 0 0 1 0-48zM200 768h304a24 24 0 0 1 0 48h-304a24 24 0 0 1 0-48z" fill="" p-id="11520"></path><path d="M950.72 609.76l-88.48-88.48a30.88 30.88 0 0 0-44.16 0L752 587.36 558.08 781.12a34.4 34.4 0 0 0-8 13.28L515.52 912l-2.24 7.84a32 32 0 0 0 5.6 27.68A32 32 0 0 0 544 960a33.6 33.6 0 0 0 8.96-1.28l125.28-36.96a27.04 27.04 0 0 0 13.28-8l1.76-1.76L720 886.24 740.48 864l11.52-11.52 48-48 128-128 22.08-22.24a30.88 30.88 0 0 0 0-44.48zM668.64 891.84L600 912 544 928l4.96-16 32-108.8L608 775.68 696.32 864zM800 760.8l-81.44 81.44-88.64-88.64 166.08-166.08 4 4.48 84.48 84.64z m106.56-106.72l-88.48-88.64L840.16 544 928 631.84z" fill="#0070FF" p-id="11521"></path></svg>
                    选择日期
                  </span> */}

                  <DateSelect
                  style={{paddingLeft:'15px'}}
                    value={value}
                    onChange={(value, items) => {
                      console.log('DateSelect onChange', value, items);
                    }}
                    onConfirm={(value, items) => {
                      setValue(value);
                      // Toast.show(value.toLocaleString());
                      console.log('DateSelect onConfirm', value, items);
                    }}
                    filter={(type, { value }) => {
                      if (type === 'day') return value % 5 === 0;
                      return true;
                    }}
                  />

                </ListItem>
                <ListItem style={{ background: '#F5F5F5', fontSize: '20px', height: '70px', '--separator-color': 'rgba(0,0,0,0)' }}>
                  <span style={{ width: '100px' }}>身份证号</span>
                  <Input
                    style={{ fontSize: '20px', paddingLeft: '15px' }}
                    placeholder="请输入预约人身份证号"
                    value={ID}
                    onChange={(e) => {
                      const val = e.target.value;
                      setID(val);
                      console.log(`onChange: ${val}`);
                    }}
                  />
                </ListItem>
                <ListItem style={{ background: '#F5F5F5', fontSize: '20px', paddingTop: '10px', '--separator-color': 'rgba(0,0,0,0)' }}>
                  <span style={{ width: '100px' }}>联系电话</span>
                  <Input
                    style={{ fontSize: '20px', paddingLeft: '15px' }}
                    placeholder="请输入预约人联系电话"
                    value={phone}
                    onChange={(e) => {
                      const val = e.target.value;
                      setPhone(val);
                      console.log(`onChange: ${val}`);
                    }}
                  />
                </ListItem>
              </List>
            </div>
          </div>
          <div style={{ height: '100px' }}>
            <div style={{ width: "20%", marginRight: '90px', float: 'left', fontSize: '20px', textAlign: 'center' }}>
              <svg t="1700481720951" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13646" width="50" height="50"><path d="M448 917.376C448 917.333333 576 917.333333 576 917.333333c0.085333 0 0-42.709333 0-42.709333C576 874.666667 448 874.666667 448 874.666667c-0.085333 0 0 42.709333 0 42.709333z m371.349333-173.034667C809.6 745.877333 799.573333 746.666667 789.333333 746.666667a21.333333 21.333333 0 0 1-21.333333-21.333334V384a21.333333 21.333333 0 0 1 21.333333-21.333333 191.146667 191.146667 0 0 1 92.373334 23.637333C828.202667 234.517333 681.045333 128 511.296 128 341.290667 128 193.749333 234.816 140.458667 387.328A191.125333 191.125333 0 0 1 234.666667 362.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v341.333333a21.333333 21.333333 0 0 1-21.333333 21.333334 192 192 0 0 1-148.906667-313.216 21.269333 21.269333 0 0 1 0.042667-8.682667C127.36 228.288 304.469333 85.333333 511.274667 85.333333c209.706667 0 388.544 146.944 427.008 347.093334l0.213333 1.344A191.210667 191.210667 0 0 1 981.333333 554.666667c0 70.4-37.909333 131.968-94.421333 165.397333-57.642667 100.693333-154.752 174.762667-268.778667 204.074667A42.517333 42.517333 0 0 1 576 960h-128c-23.573333 0-42.666667-19.157333-42.666667-42.624v-42.752c0-23.552 18.922667-42.624 42.666667-42.624h128c23.573333 0 42.666667 19.157333 42.666667 42.624v5.141333a392.810667 392.810667 0 0 0 200.682666-135.424zM85.333333 554.666667c0.298667 133.589333 128 148.949333 128 148.949333V406.144s-128.298667 14.933333-128 148.522667z m853.333334 0c0.298667-133.589333-128-148.522667-128-148.522667v297.472s127.701333-15.36 128-148.949333z" fill="#1B5747" p-id="13647"></path></svg>
              <div style={{}}>
                客服
              </div>

            </div>
            <div style={{ float: 'left', fontSize: '20px', paddingRight: '10px' }}>
              <div style={{ color: '#A30014', marginTop: '40%' }}>
                ￥388.00
              </div>

            </div>
            <div style={{ float: 'left', fontSize: '20px' }}>
              <div >
                <Link to='/chooseType'> <Button shape='radius' style={{ background: '#0C5757', color: 'white', fontSize: '20px', fontWeight: '700', height: '100px', width: '250px' }}>确认预约</Button></Link>
              </div>

            </div>

          </div>

        </div>
      </ConfigProvider>
    </div>
  );
}

export default ReservationForm;
