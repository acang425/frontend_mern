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
import { useScroll, DateSelect, Messag,Calendar  } from 'zarm';



function MyCalendar() {
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


    return (
        <div className="MyCalendar">
            <ConfigProvider locale={zhCN}>
                <div className='phone'>
                    <NavBar
                        //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
                        // }
                        left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />
                        }
                        title="选择日期"
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
                        <div>
                            <Calendar
                            style={{'--day-selected-border-radius':'0%'}}
                                mode={mode}
                                value={value}
                                min={min}
                                max={max}
                                direction={direction}
                                header={header}
                                dateRender={(date, value) => {
                                    let customText = '';
                                    if (mode === 'range') {
                                        if (new Date(date).getTime() === new Date(value[0]).getTime()) {
                                            customText = 'start';
                                        }
                                        if (new Date(date).getTime() === new Date(value[1]).getTime()) {
                                            customText = 'end';
                                        }
                                    }
                                    if (custom && /(0|6)/.test(date.getDay())) {
                                        customText = 'Close';
                                    }
                                    if (customText) {
                                        return (
                                            <div className="custom">
                                                <div className="custom__date">{date.getDate()}</div>
                                                <div className="custom__text">{customText}</div>
                                            </div>
                                        );
                                    }
                                    return date.getDate();
                                }}
                                disabledDate={(date) => {
                                    if (custom) return /(0|6)/.test(date.getDay());
                                    return false;
                                }}
                                onChange={(value) => {
                                    setValue(value);
                                    console.log('onChange', value);
                                }}
                            />
                        </div>

                    </div>

                </div>

            </ConfigProvider>
        </div>
    );
}

export default MyCalendar;
