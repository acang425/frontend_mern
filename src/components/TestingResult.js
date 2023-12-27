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
import { useNavigate } from 'react-router-dom';
import root from './Approot';

const PreviewIcon = Icon.createFromIconfont(
    '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const img = [s1, s2, s3];
const score = ["5.0", 4.9, 4.5]
const name = ["许总监", "李专家", "陈讲师"]


function TestingResult() {

    const navigate = useNavigate();
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
        <div className="TestingResult">
            <ConfigProvider locale={zhCN}>
                <div className='phone'>
                    <NavBar
                        //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
                        // }
                        left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => { navigate('/home') }} />
                        }
                        title="评测结果"
                        style={{ background: '#0C5757', "--title-color": 'white', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '51px' }}
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
                        <div>
                            <video controls width="100%">
                                {/* <source src="/media/cc0-videos/flower.webm" type="video/webm" /> */}

                                <source src="https://upos-sz-mirrorcos.bilivideo.com/upgcxcode/91/23/1037322391/1037322391-1-208.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1703687868&gen=playurlv2&os=bcache&oi=2584261250&trid=0000e7305faa8dca4dafa063669888dcda50T&mid=0&platform=html5&upsig=0da136c995ea20e587fca112febb8bca&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=65869&bvc=vod&nettype=0&bw=36831&orderid=0,3&buvid=&build=0&mobi_app=&f=T_0_0&logo=80000000" type="video/mp4" />
                            </video>
                        </div>
                        <div style={{ background: '#528787', width: '95%', textAlign: 'center', borderRadius: '20px', height: '50px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <div style={{ color: 'white',fontWeight:'bold', fontSize: '20px', paddingTop: '10px' }}>查看视频回放</div>
                        </div>
                        <div style={{ border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', textAlign: 'center', borderRadius: '20px', height: '300px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <Grid bordered="false" style={{ marginTop: '50px' }}>
                                {Array.from(Array(3).keys()).map((_, i) => (
                                    <Grid.Item key={i} >
                                        <div className="block" style={{ background: '#F5F5F5' }}>
                                            <div style={{ fontSize: '20px', padding: '10px' }}>
                                                {name[i]}
                                            </div>
                                            <div>
                                                <img height="110px" src={img[i]}></img>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: "20px" }}><svg t="1703582422955" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4902" width="20" height="20"><path d="M784.16441 645.6c-3.8 3.7-5.5 9-4.6 14.2L835.36441 985c1.8 10.3-6.4 18.7-15.8 18.7-2.5 0-5-0.6-7.5-1.9L520.16441 848.3c-2.3-1.2-4.9-1.8-7.5-1.8s-5.1 0.6-7.5 1.8l-292.1 153.5c-2.5 1.3-5 1.9-7.5 1.9-9.3 0-17.5-8.4-15.8-18.7L245.66441 659.8c0.9-5.2-0.8-10.5-4.6-14.2L4.86441 415.3C-4.63559 406 0.56441 389.9 13.66441 388l326.5-47.5c5.2-0.8 9.7-4 12-8.8l146-295.9c2.9-5.9 8.6-8.9 14.3-8.9s11.4 3 14.3 8.9l146 295.9c2.3 4.7 6.8 8 12 8.8L1011.66441 388c13.1 1.9 18.4 18 8.9 27.3L784.16441 645.6z" p-id="4903" fill="#0C5757"></path></svg>
                                                    {score[i]}
                                                </span>
                                            </div>
                                        </div>
                                    </Grid.Item>
                                ))}
                            </Grid>
                        </div>
                        <div style={{ padding: '20px', border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <h1 style={{ fontSize: '30px', color: '#0C5757' }}>专家建议 </h1>
                            <p><span>常见的套路化答题：</span></p><p><span>（1）回答综合分析题，开头就来一句「关于......的问题，要辩证地看。」</span></p><p><span>分析：辩证地看待问题自然是需要的，但是大部分考生只懂得说这句话，结果引起了考官的期待，但后面的内容却完全体现不出辩证思维，反而会拉低自己的分数。所以，请不要说这句正确的废话，把你的辩证性体现在具体的答题内容中即可。</span></p><p><span>（2）回答应急应变题时，上来就是「请求领导批示」。</span></p><p><span>分析：应急应变题考验的就是，你会如何解决题目中的矛盾，如果你处处请示领导，领导都告诉你怎么做了，那出这道题还有什么意义呢？</span></p><p><span>（3）回答组织协调或人际关系题时，使用「领导把这个工作交给我，是对我的信任」这句话。</span></p><p><span>分析：这句话实在被用了太多次了，一开始我也用，直到有一次去了个线下的面试班，发现十来个人里有一半以上的人在解决人际关系题时会用上这句话，自那以后我再也不用这句话了。</span></p>
                            <Button style={{ background: '#0C5757', color: 'white', marginLeft: '320px' }}>开通会员</Button>
                        </div>
                        <div style={{ padding: '20px', border: '#E3E3E3 5px solid', background: '#F5F5F5', width: '95%', borderRadius: '20px', marginLeft: '2.5%', marginTop: '10px' }}>
                            <Link to='/InterviewEva'><Button style={{ marginLeft: '15%', background: '#206464', color: 'white', fontWeight: 'bold' }} size='lg'>面试评价</Button></Link>
                            <Link to='/ExpertEva'><Button style={{ marginLeft: '15%', background: '#206464', color: 'white', fontWeight: 'bold' }} size='lg'>专家评价</Button></Link>

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

export default root(TestingResult);
