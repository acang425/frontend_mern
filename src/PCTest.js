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
import ali from './images/ali.svg'
const PreviewIcon = Icon.createFromIconfont(
    '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const img = [s1, s2, s3];
const score = ["5.0", 4.9, 4.5]
const name = ["许总监", "李专家", "陈讲师"]



function PCTest() {
    const [chooseRen, setChooseRen] = useState(0);
    const ren = [
        [<div>
            <div style={{ padding: '30px', color: '#333333', fontSize: '25px', marginTop: '20px', fontWeight: 'bold' }}>请点击下方按钮开始作答</div>
            <div>
                <svg onClick={() => { setChooseRen(1); }} t="1703602052409" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2441" width="100" height="100"><path d="M544 830.4V960h-64v-129.6c-161.6-16-288-152.8-288-318.4h64c0 140.8 115.2 256 256 256s256-115.2 256-256h64c0 165.6-126.4 302.4-288 318.4zM512 640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128s-128 57.6-128 128v320c0 70.4 57.6 128 128 128z" p-id="2442" fill="#206464"></path></svg>
            </div>
        </div>],
        [<div>
            <div style={{ padding: '30px', color: '#333333', fontSize: '25px', marginTop: '25px', fontWeight: 'bold' }}>正在录音，点击可停止录音</div>
            <div>
                <svg onClick={() => { setChooseRen(2); }} t="1703602507057" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3475" width="100" height="100"><path d="M512 1024C228.266667 1024 0 795.733333 0 512S228.266667 0 512 0s512 228.266667 512 512-228.266667 512-512 512z m0-42.666667c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333z m-106.666667-682.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333V320c0-12.8 8.533333-21.333333 21.333333-21.333333z m213.333334 0c12.8 0 21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333V320c0-12.8 8.533333-21.333333 21.333334-21.333333z" fill="#206464" fill-opacity=".9" p-id="3476"></path></svg>            </div>
        </div>],
        [<div>
            <div style={{ padding: '30px',color: '#333333', fontSize: '25px', marginTop: '20px', fontWeight: 'bold' }}>录音已保存，请选择</div>
            <div>
                <span style={{padding:'10px'}}>
                    <svg onClick={()=>{setChooseRen(0);}} t="1703602624358" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4526" width="40" height="40"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM428 718.4l-45.6 45.6-45.6-45.6-116-117.6 45.6-45.6L383.2 672l367.2-367.2 45.6 45.6-368 368z" p-id="4527" fill="#206464"></path></svg>
                    <span onClick={()=>{setChooseRen(0);}} style={{fontSize:'20px'}}>完成录制</span>
                </span>
                <span  style={{padding:'10px'}}>
                <svg onClick={()=>{setChooseRen(1);}} t="1703602700512" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5548" width="40" height="40"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" fill="#206464" p-id="5549"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" fill="#206464" p-id="5550"></path></svg>                    
                <span  onClick={()=>{setChooseRen(1);}} style={{fontSize:'20px'}}>继续录制</span>
                </span>
                <span>
                <svg onClick={()=>{setChooseRen(0);}} t="1703602785941" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7458" width="40" height="40"><path d="M203.946667 700.586667l146.773333-215.466667H248.746667a315.733333 315.733333 0 1 1 106.24 264.533333L301.226667 819.2a404.053333 404.053333 0 1 0-140.373334-334.08H56.746667l147.2 215.466667z" fill="#206464" p-id="7459"></path></svg>                    
                <span onClick={()=>{setChooseRen(0);}} style={{fontSize:'20px'}}>重新录制</span>
                </span>
            </div>
        </div>]

    ]
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
        <div className="PCTest">
            <ConfigProvider locale={zhCN}>
                <div className='phone'>
                    <NavBar
                        //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
                        // }
                        left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />
                        }
                        title="人机训练测试"
                        style={{ background: '#0C5757', "--title-color": 'white', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '51px' }}
                    />
                    {showWindow1 && (
                        <div className="SI_float" style={{ background: '#616161', opacity: '0.9', borderRadius: '25px', width: '410px', height: '200px', color: 'white', fontSize: '15px' }}>
                            <button style={{ marginLeft: '360px', background: 'rgba(0,0,0,0)', border: '0px' }} onClick={closeWindow}><svg t="1700540118692" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2369" width="30" height="30"><path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#ffffff" p-id="2370"></path><path d="M927.846568 511.997953c0-229.315756-186.567139-415.839917-415.838893-415.839917-229.329059 0-415.85322 186.524161-415.85322 415.839917 0 229.300406 186.524161 415.84094 415.85322 415.84094C741.278405 927.838893 927.846568 741.29836 927.846568 511.997953M512.007675 868.171955c-196.375529 0-356.172979-159.827125-356.172979-356.174002 0-196.374506 159.797449-356.157629 356.172979-356.157629 196.34483 0 356.144326 159.783123 356.144326 356.157629C868.152001 708.34483 708.352505 868.171955 512.007675 868.171955" fill="#ffffff" p-id="2371"></path><path d="M682.378947 642.227993 553.797453 513.264806 682.261267 386.229528c11.661597-11.514241 11.749602-30.332842 0.234337-41.995463-11.514241-11.676947-30.362518-11.765975-42.026162-0.222057L511.888971 471.195665 385.223107 344.130711c-11.602246-11.603269-30.393217-11.661597-42.025139-0.059352-11.603269 11.618619-11.603269 30.407544-0.059352 42.011836l126.518508 126.887922L342.137823 639.104863c-11.662621 11.543917-11.780301 30.305213-0.23536 41.96988 5.830799 5.89015 13.429871 8.833179 21.086248 8.833179 7.53972 0 15.136745-2.8847 20.910239-8.569166l127.695311-126.311801L640.293433 684.195827c5.802146 5.8001 13.428847 8.717546 21.056572 8.717546 7.599072 0 15.165398-2.917446 20.968567-8.659217C693.922864 672.681586 693.950494 653.889591 682.378947 642.227993" fill="#ffffff" p-id="2372"></path></svg></button>
                            <div style={{ marginLeft: '30px', marginRight: '30px' }}>
                                <p style={{ fontWeight: '600', fontSize: '20px' }}>
                                    作答完毕后请点击视频下方的完成录制按钮，您的作答将会上传系统，等待专家打分。
                                </p>

                            </div>

                        </div>
                    )}

                    <div
                        ref={containerRef}
                        style={{
                            overflowY: 'auto',
                            maxHeight: 1095,
                            background: '#F5F5F5',
                            // textAlign: 'center'
                        }}
                    >
                        <div style={{ padding: '20px', border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <h1 style={{ fontSize: '25px', color: '#0C5757' }}>论述题 </h1>
                            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#333333' }}>据报道，新大学生入职后，一年内有30%的人离职，三年内变动两次以上工作的接近六成。以往这种现象较多发生于企业，但近年来，在部分地区政府机关新录用的人员中，这种现象也有逐年增多的趋势。请谈谈你的看法。</p>
                        </div>
                        <div style={{ padding: '20px', border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <h1 style={{ fontSize: '25px', color: '#0C5757' }}>音频读题 </h1>
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
                        <div style={{ textAlign: 'center', padding: '20px', border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <div style={{ background: '#FFFFFF', width: '100%', textAlign: 'center', borderRadius: '20px', height: '300px', marginTop: '10px' }}>

                                {ren[chooseRen]}
                            </div>

                        </div>

                        <div style={{ padding: '20px', border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <h1 style={{ fontSize: '25px', color: '#0C5757' }}>熊猫审题 </h1>
                            <div style={{ fontSize: '20px', fontWeight: 'normal', color: '#333333' }}>
                                <p><span>主要测评要素：综合分析能力</span></p><p><span>观察要点：</span></p><ul><li><span>能认识到人才合理流动是经济社会发展过程中的正常现象。</span></li><li><span>能客观分析现象产生的原因，如择业渠道多样化、择业理念变化，部分年轻人自我认知不成熟和责任意识缺失等。</span></li><li><span>...</span></li><li><span>...</span></li><li><span>...</span></li><li><span>...</span></li><li><span>...</span></li></ul>

                            </div>
                        </div>

                        <div style={{ padding: '20px', border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <h1 style={{ fontSize: '30px', color: '#0C5757' }}> 会员专享 </h1>
                            <h1 style={{ fontSize: '25px', color: '#0C5757' }}>解析视频 </h1>
                            <img src={ali} style={{ width: '100%' }}></img>
                            <Button style={{ marginLeft: '35%', background: '#206464', color: 'white', fontWeight: 'bold' }} size='lg'>开通会员</Button>
                        </div>
                    </div>

                </div>

            </ConfigProvider>
        </div>
    );
}

export default PCTest;
