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
import process from './images/process.png'
import { Link } from 'react-router-dom';




const chooseArray = ['当前申请', '历史申请']
const cssVarUnchosen = { background: '#F5F5F5' }
const cssVarChosen = { background: '#F5F5F5', borderBottom: '10px solid #0C5757' }
const cssP= {
  marginTop: '10px',     /* 设置段落上方的间距为20像素 */
  marginBottom: '10px'  /* 设置段落下方的间距为20像素 */
}



const example = [
  <div style={{ width: '100%'}}>
    <div style={{marginLeft:'20px',paddingLeft:'30px',paddingRight:'30px', height: '300px', width: '450px', background: 'white', border: '2px solid #AAAAAA', borderRadius: '25px' }}>
      <div>
        <h2 style={{fontSize:'25px'}}>基础训练与测试</h2>
        <div style={{fontSize:'20px'}}>
        <p style={cssP}>面试单号：19383764500</p>
        <p style={cssP}>面试日期：2023-09-30   12:20-13:20</p>
        <p style={cssP}>预约专家：李萍</p>
        <p style={cssP}>面试地点：广东省广州市番禺区江南大道297号</p>
        </div>
      </div>
      <div style={{paddingLeft:'170px'}}>
        <Button shape='radius' style={{height:'30px',marginRight:'5px',border:'3px solid #0D5858'}}>取消预约</Button>
        <Link to='/NavigationRoute'><Button shape='radius' style={{height:'30px',background:'#0D5858',color:'white'}}>导航路线</Button></Link>
      </div>
    </div>
  </div>
]


function ReservationSuccess_Onsite() {
  const [choose, setChoose] = useState(0);
  const [showWindow, setShowWindow] = useState(true);

  const closeWindow = () => {
    setShowWindow(false);
  };
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
    <div className="ReservationSuccess_Onsite">
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
          {showWindow && (
        <div className="RS_float" style={{background:'#555555',borderRadius:'25px',width:'410px',height:'170px',color:'white',fontSize:'20px',fontWeight:'600'}}>
          <button style={{marginLeft:'360px',background:'rgba(0,0,0,0)',border:'0px'}}onClick={closeWindow}><svg t="1700540118692" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2369" width="30" height="30"><path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#ffffff" p-id="2370"></path><path d="M927.846568 511.997953c0-229.315756-186.567139-415.839917-415.838893-415.839917-229.329059 0-415.85322 186.524161-415.85322 415.839917 0 229.300406 186.524161 415.84094 415.85322 415.84094C741.278405 927.838893 927.846568 741.29836 927.846568 511.997953M512.007675 868.171955c-196.375529 0-356.172979-159.827125-356.172979-356.174002 0-196.374506 159.797449-356.157629 356.172979-356.157629 196.34483 0 356.144326 159.783123 356.144326 356.157629C868.152001 708.34483 708.352505 868.171955 512.007675 868.171955" fill="#ffffff" p-id="2371"></path><path d="M682.378947 642.227993 553.797453 513.264806 682.261267 386.229528c11.661597-11.514241 11.749602-30.332842 0.234337-41.995463-11.514241-11.676947-30.362518-11.765975-42.026162-0.222057L511.888971 471.195665 385.223107 344.130711c-11.602246-11.603269-30.393217-11.661597-42.025139-0.059352-11.603269 11.618619-11.603269 30.407544-0.059352 42.011836l126.518508 126.887922L342.137823 639.104863c-11.662621 11.543917-11.780301 30.305213-0.23536 41.96988 5.830799 5.89015 13.429871 8.833179 21.086248 8.833179 7.53972 0 15.136745-2.8847 20.910239-8.569166l127.695311-126.311801L640.293433 684.195827c5.802146 5.8001 13.428847 8.717546 21.056572 8.717546 7.599072 0 15.165398-2.917446 20.968567-8.659217C693.922864 672.681586 693.950494 653.889591 682.378947 642.227993" fill="#ffffff" p-id="2372"></path></svg></button>
          <p style={{marginLeft:'30px',marginRight:'30px'}}>tip:您已经预约成功，请按时前往广东省广州市番禺区江南大道297号进行面试，届时会有专家等待您！</p>
        </div>
      )}
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
                  <img src={process}></img>
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

export default ReservationSuccess_Onsite;
