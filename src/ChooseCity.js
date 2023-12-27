//项目的根组件
// App -> index.js -> public/index.html

import React from 'react';
import { useState, useRef } from 'react';
import { render } from 'react-dom';
import { SearchBar, NavBar, Grid, Loading, ConfigProvider, Button, Switch, Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import { ArrowLeft } from '@zarm-design/icons';
import './App.css'
import ListItem from 'zarm/lib/list/ListItem';
import { Link } from 'react-router-dom';

function ChooseCity() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [chosenCity, setChosenCity] = useState('广州');
  const [locateCity, setLocateCity] = useState('广州');
  var cityArray = ['当前城市', chosenCity, '定位城市', locateCity]
  const cssVar1 = { color: '#999999', fontSize: '20px' }
  const cssVar2 = { color: '#0C5757', fontSize: '20px', fontWeight: '700' }
  const cssVarList1 = { color: '#999999', fontSize: '20px', background: '#F5F5F5', height: '56px', '--separator-color': '#F2F2F2' }
  const cssVarList2 = { color: '#999999', fontSize: '20px', height: '56px', '--separator-color': '#F2F2F2' }
  function textColor(i) {
    return i % 2 ? cssVar2 : cssVar1;
  }
  function clickCity(arr) {
    console.log(arr);
    setChosenCity(arr);
  }
  var hotCity = [
    "上海",
    "武汉",
    "杭州",
    "北京",
    "天津",
    "成都",
    "广州",
    "西安",
    "重庆",
    "深圳",
    "南京",
    "郑州"
  ];

  return (
    <div className="ChooseCity">
      <ConfigProvider locale={zhCN} >
        <div className='phone'>
          <div>
            <NavBar
              //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
              // }
              left={<Link to={{ pathname: '/home', state: { chosenCity } }}><ArrowLeft style={{ color: 'white' }} theme="primary" /> </Link>
              }
              title="选择报考城市"
              style={{ background: '#0C5757', "--title-color": 'white', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '51px' }}
            />
          </div>
          <div className='ChooseCity_column' style={{ background: '#F5F5F5' }}>
            <div style={{ width: '90%' }}>
              <SearchBar style={{ "--input-height": '50px' }} shape="round" />
            </div>

          </div>
          <div className='ChooseCity_column'>
            <div style={{ width: '100%' }}>
              <Grid columns={4} bordered='false'>
                {Array.from(cityArray).map((_, i) => (
                  <Grid.Item key={i} style={textColor(i)}>
                    <div>{cityArray[i]}</div>
                  </Grid.Item>
                ))}
              </Grid>
            </div>
          </div>

          <div>
            <div>
              <List>
                <ListItem title="热门城市" style={cssVarList1}></ListItem>
                <ListItem style={{ '--separator-color': '#F2F2F2' }}>
                  <div style={{ width: '100%' }}>
                    <Grid columns={4} bordered='false' gutter={[10, 16]}>
                      {Array.from(hotCity).map((_, i) => (
                        <Grid.Item key={i} style={cssVar1} onClick={() => {
                          clickCity(hotCity[i])
                        }}>
                          <div >
                            <Button shape='round' style={{ width: '100px', '--height': '40px', color: '#999999', fontSize: '20px' }}>{hotCity[i]}</Button>
                          </div>
                        </Grid.Item>
                      ))}
                    </Grid>
                  </div>
                </ListItem>
                <ListItem title="A" style={cssVarList1}></ListItem>
                <ListItem title="安庆" style={cssVarList2} onClick={() => { setChosenCity('安庆') }}></ListItem>
                <ListItem title="安顺" style={cssVarList2} onClick={() => { setChosenCity('安顺') }}></ListItem>
                <ListItem title="安化" style={cssVarList2} onClick={() => { setChosenCity('安化') }}></ListItem>
                <ListItem title="B" style={cssVarList1}></ListItem>
                <ListItem title="北京" style={cssVarList2} onClick={() => { setChosenCity('北京') }}></ListItem>
                <ListItem title="包头" style={cssVarList2} onClick={() => { setChosenCity('包头') }}></ListItem>
                <ListItem title="宝鸡" style={cssVarList2} onClick={() => { setChosenCity('宝鸡') }}></ListItem>
                <ListItem title="C" style={cssVarList1}></ListItem>
                <ListItem title="成都" style={cssVarList2} onClick={() => { setChosenCity('成都') }}></ListItem>
                <ListItem title="长沙" style={cssVarList2} onClick={() => { setChosenCity('长沙') }}></ListItem>
                {/* <ListItem title="长春" style={cssVarList2} onClick={() => { setChosenCity('长春') }}></ListItem> */}

              </List>
            </div>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default ChooseCity;
