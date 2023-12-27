//项目的根组件
// App -> index.js -> public/index.html

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Grid, ConfigProvider, Button, Switch, Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useScroll, Select,Panel, Messag,Calendar,Textarea  } from 'zarm';



function MyInfo() {
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

    const [mode, setMode] = useState('range');
    const [value, setValue] = useState([new Date('2023/12/18'), new Date('2023/12/19')]);
    const [min, setMin] = useState(new Date('2023/12/1'));
    const [max, setMax] = useState(new Date('2024/3/1'));
    const [custom, setCustom] = useState(false);
    const [direction, setDirection] = useState('vertical');
    const [header, setHeader] = useState(false);

    const [text, setText] = useState([]);
    const [selectedEducation, setSelectedEducation] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
      };

      const handleEducationChange = (value) => {
        setSelectedEducation(value);
      };
    
      const handleRegionChange = (value) => {
        setSelectedRegion(value);
      };
    

      const educationOptions = [
        { label: '高中及以下', value: 'highSchool' },
        { label: '专科', value: 'associateDegree' },
        { label: '本科', value: 'bachelorDegree' },
        { label: '硕士', value: 'masterDegree' },
        { label: '博士', value: 'doctorate' },
      ];
    
      const regionOptions = [
        { label: '华东', value: 'eastChina' },
        { label: '华南', value: 'southChina' },
        { label: '华北', value: 'northChina' },
        { label: '华中', value: 'centralChina' },
        { label: '西南', value: 'southwestChina' },
      ];

    return (
        <div className="MyInfo">
            <ConfigProvider locale={zhCN}>
                <div className='phone'>
                    <NavBar
                        //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
                        // }
                        left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />
                        }
                        title="我的资料填写"
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
      <div className="form-container" >
        <form>
            
        <label>基本资料</label>
         <Panel spacing style={{ padding: '20px' }}>
          <div className="form-item" style={{ padding: '20px' }}>
            <label>真实姓名</label>
            <Input placeholder="请输入您的真实姓名" />
          </div>
          <div className="form-item" style={{ padding: '20px' }}>
            <label>手机号码</label>
            <Input type="number" placeholder="请输入您的手机号码" />
          </div>
          <div className="form-item" style={{ padding: '20px' }}>
            <label>邮箱地址</label>
            <Input type="email" placeholder="请输入您的邮箱地址" />
          </div>
          <div className="form-item" style={{ padding: '20px' }}>
            <label>身份证号</label>
            <Input placeholder="请输入您的身份证号" />
          </div>
          <div className="form-item" style={{ padding: '20px' }}>
            <label>教育程度</label>
            <Select
                    placeholder="请选择您的教育程度"
                    dataSource={educationOptions}
                    value={selectedEducation}
                    onChange={handleEducationChange}
                  />
          </div>
          <div className="form-item" style={{ padding: '20px' }}>
            <label>所在区域</label>
            <Select
                    placeholder="请选择您的所在区域"
                    dataSource={regionOptions}
                    value={selectedRegion}
                    onChange={handleRegionChange}
                  />
          </div>
          <div className="form-item" style={{ padding: '20px' }}>
            <label>详细地址</label>
            <Input placeholder="请输入您的详细地址" />
          </div>
          </Panel>
          <div className="form-item">
            <label>个人介绍</label>
            <Panel spacing>
            <Input
                rows={5}
                type="text"
                placeholder="请输入您的个人介绍！"
                value={text}
                onChange={handleTextChange}
                size="lg" 
                style={{ padding: '20px' }}
              />
          </Panel>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Button theme="primary">提交</Button>
          </div>
        </form>
      </div>

                    </div>

                </div>

            </ConfigProvider>
        </div>
    );
}

export default MyInfo;
