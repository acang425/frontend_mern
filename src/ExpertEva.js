import React, { useState, useRef } from 'react';
import { ConfigProvider, Button, Input, List, Radio, Rate } from 'zarm';
import { NavBar } from 'zarm';
import { ArrowLeft, Success } from '@zarm-design/icons';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css';
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom';

const selectItems = [
  ['专家专业性', '专家时效性', '专家态度'],
  ['负责任', '沟通能力', '耐心']
];

function ExpertE() {
  const [scrollTop, setScrollTop] = useState(0);
  const [content, setContent] = useState('');
  const containerRef = useRef();
  const [selectedOption, setSelectedOption] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [attitudeRating, setAttitudeRating] = useState(0);
  const [storeRating, setStoreRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);

  const [files, setFiles] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  const [text, setText] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);

    // 将图片转换为 base64 编码，并设置缩略图
    Promise.all(
      acceptedFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }),
    ).then((base64List) => {
      setThumbnails(base64List);
    });
  };

  const CustomRadio = (props) => {
    const RadioRef = useRef();

    return (
      <Radio
        ref={RadioRef}
        value={props.value}
        checked={selectedOption === props.value}
        onChange={() => {
          if (selectedOption === props.value) {
            setSelectedOption('');
          } else {
            setSelectedOption(props.value);
          }
        }}
        render={({ checked }) => (
          <div
            style={{
              display: 'inline-block',
              margin: '5px',
            }}
          >
            <span
              style={{
                position: 'relative',
                padding: '4px 8px',
                fontSize: 20,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: checked ? 'var(--za-theme-primary)' : 'var(--za-theme-default)',
              }}
            >
              <span
                style={{
                  display: checked ? 'inline-block' : 'none',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  fontSize: 0,
                }}
              >
                <Success style={{ fontSize: 10 }} theme="primary" />
              </span>
              {props.label}
            </span>
          </div>
        )}
      />
    );
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAnonymousChange = () => {
    setAnonymous(!anonymous);
  };

  const handleAttitudeRatingChange = (value) => {
    setAttitudeRating(value);
  };

  const handleStoreRatingChange = (value) => {
    setStoreRating(value);
  };

  const handleOverallRatingChange = (value) => {
    setOverallRating(value);
  };

  return (
    <div className="ExpertEvaluation">
      <ConfigProvider locale={zhCN}>
        <div className="phone">
          <NavBar
            left={<ArrowLeft style={{ color: 'white' }} theme="primary" onClick={() => window.history.back()} />}
            title="学生评价"
            style={{
              background: '#0C5757',
              "--title-color": 'white',
              "--title-font-weight": '700',
              '--title-font-size': '20px',
              '--height': '51px',
            }}
          />
          <div
            ref={containerRef}
            style={{
              background: '#F9F9F9',
              overflowY: 'auto',
              maxHeight: 1095,
              color:'#999999'
            }}
          >
            <div className='App_header'>
              <div className='App_title'>
                <svg t="1700049077276" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3309" width="100px" height="100px"><path d="M332.8 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2z" p-id="3310"></path><path d="M332.8 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2zM691.2 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2z" p-id="3311"></path><path d="M691.2 204.8c-28.16 0-51.2-23.04-51.2-51.2V51.2c0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2v102.4c0 28.16-23.04 51.2-51.2 51.2z" p-id="3312"></path><path d="M860.16 102.4h-97.28v51.2c0 39.424-32.256 71.68-71.68 71.68s-71.68-32.256-71.68-71.68V102.4H404.48v51.2c0 39.424-32.256 71.68-71.68 71.68s-71.68-32.256-71.68-71.68V102.4H163.84c-28.16 0-51.2 23.04-51.2 51.2v819.2c0 28.16 23.04 51.2 51.2 51.2h696.32c28.16 0 51.2-23.04 51.2-51.2V153.6c0-28.16-23.04-51.2-51.2-51.2z m-105.984 522.752l-343.04 235.52c-4.608 3.072-9.216 4.608-14.336 4.608-6.656 0-13.312-2.56-17.92-7.68l-112.64-112.64c-10.24-10.24-10.24-26.112 0-36.352s26.112-10.24 36.352 0l97.792 97.792 325.632-223.232c11.776-8.192 27.648-5.12 35.84 6.656s4.096 27.648-7.68 35.328zM737.28 501.76H286.72c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h450.56c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.72 30.72z m0-122.88H286.72c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h450.56c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.72 30.72z" p-id="3313"></path></svg>
                <h1>528公考</h1>
              </div>
            </div>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <p style={{ marginBottom: '10px' }}>本次面试让你最有收获的是？？</p>
              {selectItems.map((row, rowIndex) => (
                <div key={rowIndex} style={{ marginBottom: '10px' }}>
                  {row.map((item, index) => (
                    <CustomRadio key={index} value={`option${rowIndex + 1}-${index + 1}`} label={item} />
                  ))}
                </div>
              ))}
            </div>

            <div style={{ width: '95%', paddingLeft: '5%' }}>
              <List.Item>
                <Input
                  rows={10}
                  type="text"
                  placeholder="拍几张照片吧，让更多小伙伴了解我！"
                  value={text}
                  onChange={handleTextChange}
                  size="lg"
                />
              </List.Item>
              <List.Item>
                <Dropzone onDrop={onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} style={{ marginTop: 20 }}>
                      <input {...getInputProps()} />
                      <p style={{ fontSize: '20px' }}>上传图片</p>
                      {thumbnails.map((thumbnail) => (
                        <img
                          key={thumbnail}
                          src={thumbnail}
                          alt="缩略图"
                          style={{ width: 100, height: 100, objectFit: 'cover', marginRight: 10 }}
                        />
                      ))}
                    </div>
                  )}
                </Dropzone>
              </List.Item>

              <List.Item>
                <label>
                  <input type="checkbox" checked={anonymous} onChange={handleAnonymousChange} />
                  <span style={{ fontSize: '20px' }}>匿名评价</span>
                </label>
              </List.Item>
            </div>



            <div style={{ fontSize: '20px', textAlign: 'center', margin: '20px 0' }}>
              <label>相关评价</label>
              <div>
                <p>服务态度评价</p>
                <Rate allowHalf value={attitudeRating} onChange={handleAttitudeRatingChange} />
              </div>
              <div>
                <p>店内环境评价</p>
                <Rate allowHalf value={storeRating} onChange={handleStoreRatingChange} />
              </div>
              <div>
                <p>总体评价</p>
                <Rate allowHalf value={overallRating} onChange={handleOverallRatingChange} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to='/TestingResult'><Button style={{ background: '#0C5757', width: '200px' }} shape='round' blocked size='lg' theme="primary">提交</Button></Link>
            </div>
          </div>
          </div>
      </ConfigProvider>
    </div>
  );
}

export default ExpertE;
