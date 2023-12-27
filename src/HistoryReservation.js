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
import { SuccessCircle, CloseCircle } from '@zarm-design/icons';
import ListItem from 'zarm/lib/list/ListItem';

const chooseArray = ['当前申请', '历史申请']
const cssVarUnchosen = { background: '#F5F5F5' }
const cssVarChosen = { background: '#F5F5F5', borderBottom: '10px solid #0C5757' }
const cssP= {
  marginTop: '10px',     /* 设置段落上方的间距为20像素 */
  marginBottom: '10px'  /* 设置段落下方的间距为20像素 */
}



const example = [
  <div style={{ width: '100%'}}>
    <div style={{marginLeft:'20px',paddingLeft:'30px', height: '230px', width: '450px', background: 'white', border: '2px solid #AAAAAA', borderRadius: '25px' }}>
      <div>
        <h2 style={{fontSize:'25px'}}>基础训练与测试</h2>
        <div style={{fontSize:'20px'}}>
        <p style={cssP}>面试单号：19383764500</p>
        <p style={cssP}>面试日期：2023-09-30   12:20-13:20</p>
        <p style={cssP}>预约专家：李萍</p>
        </div>
      </div>
      <div style={{paddingLeft:'180px'}}>
        <Button shape='radius' style={{height:'30px',marginRight:'5px',border:'3px solid #0D5858'}}>取消预约</Button>
        <Button shape='radius' style={{height:'30px',background:'#0D5858',color:'white'}}>提交预约</Button>
      </div>
    </div>
  </div>
]


function HistoryReservation() {
  const [choose, setChoose] = useState(0);
 
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
    <div className="HistoryReservation">
      <ConfigProvider locale={zhCN}>
        <div className='phone'>
          <NavBar
            //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
            // }
            left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />
            }
            title="面试预约"
            style={{ background: '#0C5757', "--title-color": 'white', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '51px' }}
          />
          <div
            ref={containerRef}
            style={{
              background: '#F9F9F9',
              overflowY: 'auto',
              maxHeight: 1095,
            }}
          >
            <div style={{ background: '#F5F5F5' }}>
              <div

                ref={containerRef}
                style={{
                  background: '#F5F5F5',
                  overflowY: 'auto',
                  maxHeight: '1075px',
                }}
              >
                <div>
                  <img style={{width:'100%'}}src='https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/%E5%8E%86%E5%8F%B2%E7%94%B3%E8%AF%B7/u7.png?pageId=17aa1a44-c92d-42bd-82e9-52410c7fb124'></img>
                </div>
                <div style={{ background: '#F5F5F5', height: '65px' }}>
                  <Grid columns={2} bordered='false' style={{ height: '50px', fontSize: '30px', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px' }}>
                    {Array.from(chooseArray).map((_, i) => (
                      <Grid.Item key={i} onClick={() => {
                        if (i == 1) setChoose(1);
                        else setChoose(0);
                      }}

                      >
                        <div style={choose == i ? cssVarChosen : cssVarUnchosen}>{chooseArray[i]}</div>
                      </Grid.Item>
                    ))}
                  </Grid>
                </div>
                <div style={{paddingBottom:'500px'}}>
                  <List>
                    <ListItem style={{ background: '#F5F5F5' ,"--separator-color":'rgba(0,0,0,0)'}}>{example}</ListItem>
                    <ListItem style={{ background: '#F5F5F5',"--separator-color":'rgba(,,,0)' }}>{example}</ListItem>
                    <ListItem style={{ background: '#F5F5F5',"--separator-color":'rgba(,,,0)'  }}>{example}</ListItem>
                  </List>
                </div>
              </div>


            </div>


          </div>

        </div>

      </ConfigProvider>
    </div>
  );
}

export default HistoryReservation;
