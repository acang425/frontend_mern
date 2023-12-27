import React from 'react';
import { useState, useRef } from 'react';
import { ConfigProvider, List } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css';
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';

function CommentR() {
  const data = [
    {
      name: '2017年湖南公务员公务员面试真题',
      date: '2018-12-03',
      time: '14分58秒',
      score: 80,
    },
    {
      name: '2017年湖南公务员公务员面试真题',
      date: '2018-12-03',
      time: '14分23秒',
      score: 90,
    },
    {
      name: '2017年湖南公务员公务员面试真题',
      date: '2018-12-03',
      time: '14分58秒',
      score: 88.5,
    },
    {
      name: '2017年湖南公务员公务员面试真题',
      date: '2018-12-03',
      time: '14分58秒',
      score: 87.5,
    },
    // 添加更多数据...
  ];

  const containerRef = useRef();

  return (
    <div className="comment-rec">
      <ConfigProvider locale={zhCN}>
        <div className="phone">
          <NavBar
            left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />}
            title="面试点评记录"
            style={{
              background: '#0C5757',
              '--title-color': 'white',
              '--title-font-weight': '700',
              '--title-font-size': '20px',
              '--height': '51px',
            }}
          />
          <div
            ref={containerRef}
            className="record-list"
          >
            {data.map((item, index) => (
              <div key={index} className="record-box">
                <div className="record-info">
                  <div className="record-name">{item.name}</div>
                  <div className="record-details">
                    <span className="record-date">{item.date}</span>
                    <span className="record-time">用时：{item.time}</span>
                  </div>
                </div>
                <span className="record-score">{item.score}</span>
              </div>
            ))}
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default CommentR;
