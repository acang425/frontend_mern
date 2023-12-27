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


function SpecialistLunshu() {
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
        <div className="SpecialistLunshu">
            <ConfigProvider locale={zhCN}>
                <div className='phone'>
                    <NavBar
                        //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
                        // }
                        left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />
                        }
                        title="专家面试与测试"
                        style={{ background: '#0C5757', "--title-color": 'white', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '51px' }}
                    />
                    {showWindow1 && (
                        <div className="SI_float" style={{ background: '#616161', opacity: '0.9', borderRadius: '25px', width: '410px', height: '200px', color: 'white', fontSize: '15px' }}>
                            <button style={{ marginLeft: '360px', background: 'rgba(0,0,0,0)', border: '0px' }} onClick={closeWindow}><svg t="1700540118692" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2369" width="30" height="30"><path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#ffffff" p-id="2370"></path><path d="M927.846568 511.997953c0-229.315756-186.567139-415.839917-415.838893-415.839917-229.329059 0-415.85322 186.524161-415.85322 415.839917 0 229.300406 186.524161 415.84094 415.85322 415.84094C741.278405 927.838893 927.846568 741.29836 927.846568 511.997953M512.007675 868.171955c-196.375529 0-356.172979-159.827125-356.172979-356.174002 0-196.374506 159.797449-356.157629 356.172979-356.157629 196.34483 0 356.144326 159.783123 356.144326 356.157629C868.152001 708.34483 708.352505 868.171955 512.007675 868.171955" fill="#ffffff" p-id="2371"></path><path d="M682.378947 642.227993 553.797453 513.264806 682.261267 386.229528c11.661597-11.514241 11.749602-30.332842 0.234337-41.995463-11.514241-11.676947-30.362518-11.765975-42.026162-0.222057L511.888971 471.195665 385.223107 344.130711c-11.602246-11.603269-30.393217-11.661597-42.025139-0.059352-11.603269 11.618619-11.603269 30.407544-0.059352 42.011836l126.518508 126.887922L342.137823 639.104863c-11.662621 11.543917-11.780301 30.305213-0.23536 41.96988 5.830799 5.89015 13.429871 8.833179 21.086248 8.833179 7.53972 0 15.136745-2.8847 20.910239-8.569166l127.695311-126.311801L640.293433 684.195827c5.802146 5.8001 13.428847 8.717546 21.056572 8.717546 7.599072 0 15.165398-2.917446 20.968567-8.659217C693.922864 672.681586 693.950494 653.889591 682.378947 642.227993" fill="#ffffff" p-id="2372"></path></svg></button>
                            <div style={{ marginLeft: '30px', marginRight: '30px' }}>
                                <p style={{ fontWeight: '600',fontSize:'20px' }}>
                                作答完毕后请点击视频下方的停止作答按钮，您的作答将会上传系统，等待专家打分。
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
                            <div style={{ background: '#528787', width: '95%', textAlign: 'center', borderRadius: '20px', height: '300px', marginLeft: '2.5%', marginTop: '10px' }}>
                                <div>
                                    <svg style={{ marginTop: '10%' }} t="1703581625656" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3846" width="100" height="100"><path d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z" fill="#ffffff" p-id="3847"></path></svg>
                                </div>
                                <div style={{ color: 'white', fontSize: '20px', marginTop: '20px' }}>点击进行录像</div>
                            </div>
                            <Link to='/ResultAnalysis'><Button shape='round' size='lg' style={{ margin: '20px', background: '#0C5757', color: 'white', fontWeight: 'bolder' }}>停止作答</Button></Link>
                        </div>

                        <div style={{ padding: '20px', border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <h1 style={{ fontSize: '30px', color: '#0C5757' }}> 会员专享 </h1>
                            <h1 style={{ fontSize: '30px', color: '#0C5757' }}>专家一对一分析 </h1>
                            <img src={ali} style={{ width: '100%' }}></img>
                        </div>
                    </div>

                </div>

            </ConfigProvider>
        </div>
    );
}

export default SpecialistLunshu;
