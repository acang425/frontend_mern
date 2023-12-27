//项目的根组件
// App -> index.js -> public/index.html
import { SuccessCircle, CloseCircle } from '@zarm-design/icons';
import interview from './images/interview.png'
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import { Grid, ConfigProvider, Button, Switch, Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import ListItem from 'zarm/lib/list/ListItem';
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useScroll, Message } from 'zarm';
import { WarningCircle } from '@zarm-design/icons';
import { Link } from 'react-router-dom';
import s1 from './images/s1.svg'
import s2 from './images/s2.svg'
import s3 from './images/s3.svg'
import user from './images/user.svg'
import score from './images/score.svg'
import capa from './images/capa.svg'
import huiyuan from './images/会员.png'
import { useNavigate } from 'react-router-dom';


const PreviewIcon = Icon.createFromIconfont(
    '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const img = [s1, s2, s3];
const name = ["许总监", "李专家", "陈讲师"]


function ResultAnalysis() {
    const navigate=useNavigate();
    const list = [];
    list.push(<List.Item key={1} title={``} />);
    const [scrollTop, setScrollTop] = useState(0);
    const [showWindow1, setShowWindow1] = useState(true);
    const closeWindow = () => {
        setShowWindow1(false);
    };
    const containerRef = useRef();

    useScroll({
        container: containerRef,
        onScroll: (e) => {
            setScrollTop(e.target.scrollTop);
        },
    });
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
    const isRunning_icon = [<svg t="1700549132820" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12715" width="50" height="50"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" fill="#ffffff" p-id="12716"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" fill="#ffffff" p-id="12717"></path></svg>]
    const stop_icon = [<svg t="1700549167701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13755" width="50" height="50"><path d="M512 1024C228.266667 1024 0 795.733333 0 512S228.266667 0 512 0s512 228.266667 512 512-228.266667 512-512 512z m0-42.666667c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333z m-106.666667-682.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333V320c0-12.8 8.533333-21.333333 21.333333-21.333333z m213.333334 0c12.8 0 21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333V320c0-12.8 8.533333-21.333333 21.333334-21.333333z" fill="#ffffff" fill-opacity=".9" p-id="13756"></path></svg>]
    useEffect(() => {
        let intervalId;

        if (isRunning && progress <= 100) {
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
        <div className="ResultAnalysis">
            <ConfigProvider locale={zhCN}>
                <div className='phone'>
                    <NavBar
                        //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
                        // }
                        left={<ArrowLeft style={{ color: '#333333' }} theme="primary" onClick={() =>{navigate('/home')}} />
                        }
                        title="评测结果分析"
                        style={{ background: 'white', "--title-color": '#333333', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '70px' }}
                    />

                    <div
                        ref={containerRef}
                        style={{
                            overflowY: 'auto',
                            maxHeight: 1095,
                            background: '#F5F5F5',
                            // textAlign: 'center'
                        }}
                    >
                        <div style={{ padding: '20px', border: '#E3E3E3 0px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <img src={user} style={{ width: '100%' }}></img>
                        </div>
                        <div style={{ background:'#D8E1E1',padding: '20px', border: '#E3E3E3 5px solid',  width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <h1 style={{ fontSize: '25px', color: '#0C5757' }}>论述题 </h1>
                            <h1 style={{ textAlign:'center',fontSize: '50px', color: '#0C5757' }}>80/100</h1>
                        </div>
                        <div style={{ padding: '20px', border: '#E3E3E3 0px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <img src={score} style={{ width: '100%' }}></img>
                        </div>
                        <div style={{ background:'#D8E1E1',fontSize:'20px',padding: '20px', border: '#E3E3E3 5px solid',  width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                           
                            <h1 id='名家总结与建议'><span style={{ fontSize: '25px', color: '#0C5757' }}>名家总结与建议</span></h1><p><strong><span>考生表现：</span></strong><span>在面试中不自信，紧张，答题声音过小，声音发抖，大脑一片空白，没有答题的方向。</span></p><p><strong><span>建议：</span></strong></p><p><span>1.练习时可以多答自己擅长的题目,建立自信;</span></p><p><span>2.在生活中，可以勇敢地在众人面前答题或者表演节目，放开自己;</span></p><p><span>3.自己录制答题视频，通过视频逐一分析自身的优势和劣势。</span></p><p><span>4.针对答题内容，可以从官方主流网站中寻找专家人士的讲话评论，进行积累背诵，从根源上解决不自信的问题。</span></p>
                        </div>

                        <div style={{ padding: '20px', border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <h1 style={{ fontSize: '25px', color: '#0C5757' }}>
优秀作答 </h1>
                            <div style={{ background: '#206464', height: '150px', borderRadius: '20px' }}>
                                <div>
                                    <span style={{ marginBottom: '100px', paddingLeft: '30px' }}>
                                        <Button style={{ paddingTop: '90px', background: 'rgba(0,0,0,0)', border: '0px', marginBottom: '100px' }} icon={isRunning ? stop_icon : isRunning_icon} onClick={handleStartStop}></Button>
                                    </span>
                                    <span style={{ fontSize: '20px', fontWeight: 'bolder', color: 'white', marginRight: '5px' }}>{translate(progress)}</span>
                                    <input style={{ width: '200px' }} type="range" min="0" max="100" value={progress} onChange={handleProgressChange} />
                                    <span style={{ fontSize: '20px', fontWeight: 'bolder', color: 'white', marginRight: '5px' }}>{translate(100 - progress)}</span>

                                </div>                            </div>
                        </div>

                        <div style={{ padding: '20px', border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <h1 style={{ fontSize: '30px', color: '#0C5757' }}> 会员专享 </h1>
                            <h1 style={{ fontSize: '30px', color: '#0C5757' }}>专家一对一分析 </h1>
                            <img src={huiyuan} style={{ width: '100%' }}></img>
                            <Button style={{marginLeft:'35%',background:'#206464',color:'white',fontWeight:'bold'}} size='lg'>开通会员</Button>
                        </div>
                    </div>

                </div>

            </ConfigProvider>
        </div>
    );
}

export default ResultAnalysis;
