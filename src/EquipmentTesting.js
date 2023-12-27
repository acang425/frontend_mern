//项目的根组件
// App -> index.js -> public/index.html

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import { TabBar, Grid, ConfigProvider, Button, Switch, Input, List, Icon, Radio, Checkbox } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useScroll, Message } from 'zarm';
import { WarningCircle } from '@zarm-design/icons';
import { Link } from 'react-router-dom';

const TabIcon = Icon.createFromIconfont(
  '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);



function EquipmentTesting() {
  const [activeKey, setActiveKey] = useState('home');
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
  const mic_icon = [<svg t="1700545089621" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4914" width="70" height="70"><path d="M486.4 972.8v-128.9728A332.8 332.8 0 0 1 179.2 512a25.6 25.6 0 0 1 51.2 0 281.6 281.6 0 0 0 563.2 0 25.6 25.6 0 1 1 51.2 0 332.8 332.8 0 0 1-307.2 331.8272V972.8h153.6a25.6 25.6 0 1 1 0 51.2h-358.4a25.6 25.6 0 1 1 0-51.2h153.6zM512 51.2a153.6 153.6 0 0 0-153.6 153.6v307.2a153.6 153.6 0 0 0 307.2 0V204.8a153.6 153.6 0 0 0-153.6-153.6z m0-51.2a204.8 204.8 0 0 1 204.8 204.8v307.2a204.8 204.8 0 1 1-409.6 0V204.8a204.8 204.8 0 0 1 204.8-204.8z" fill="#ffffff" p-id="4915"></path></svg>]
  const vid_icon = [<svg t="1700545311517" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5965" width="70" height="70"><path d="M994.437707 273.119401l0 448.914196c0 7.193843-3.796466 13.876032-9.977235 17.570167s-13.855566 3.857864-20.200064 0.440022l-265.261433-142.833079c-9.946536-5.351891-13.671371-17.764596-8.319479-27.721365 5.362124-9.946536 17.774829-13.671371 27.731598-8.319479l235.094366 126.59321 0-380.38338-235.094366 126.59321c-6.344498 3.417843-14.019295 3.243881-20.200064-0.450255-6.191003-3.694135-9.977235-10.366092-9.977235-17.570167l0-203.985858L76.214822 211.966623l0 571.219753 632.485095 0c11.307533 0 20.466124 9.15859 20.466124 20.466124 0 11.2973-9.15859 20.466124-20.466124 20.466124L55.748698 824.118624c-11.307533 0-20.466124-9.168824-20.466124-20.466124l0-612.152001c0-11.307533 9.15859-20.466124 20.466124-20.466124l652.951219 0c11.307533 0 20.466124 9.15859 20.466124 20.466124l0 190.19169 235.094366-126.59321c6.344498-3.417843 14.019295-3.243881 20.200064 0.450255C990.641241 259.243369 994.437707 265.915325 994.437707 273.119401z" p-id="5966" fill="#ffffff"></path></svg>]
  const interview_icon=[<svg t="1700545616362" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7265" width="20" height="20"><path d="M371.75808 632.20736c0-77.45536 62.78656-140.24192 140.24192-140.24192 77.45536 0 140.24192 62.78656 140.24192 140.24192 0 32.9728-11.46368 64.0768-31.60064 88.704a221.30176 221.30176 0 0 1 61.36832 51.54304h230.68672a20.03456 20.03456 0 0 0 20.03456-20.03456V471.93088a20.03456 20.03456 0 0 0-20.03456-20.03456H111.30368a20.03456 20.03456 0 0 0-20.03456 20.03456v280.48896a20.03456 20.03456 0 0 0 20.03456 20.03456h230.68672a221.30176 221.30176 0 0 1 61.36832-51.54304 139.85792 139.85792 0 0 1-31.60064-88.704z m73.27232 113.01376a180.92544 180.92544 0 0 0-77.30176 59.29984 20.03456 20.03456 0 0 1-16.0256 8.00256H111.3088c-33.19296 0-60.10368-26.91072-60.10368-60.1088V471.936c0-33.19296 26.91072-60.1088 60.1088-60.1088h801.3824c33.19808 0 60.1088 26.91584 60.1088 60.1088v280.48896c0 33.19296-26.91072 60.10368-60.1088 60.10368h-240.39936c-6.2976 0-12.2368-2.9696-16.02048-8.00256a180.92544 180.92544 0 0 0-77.30176-59.29984c-14.30528-5.72416-17.06496-24.7808-4.9664-34.32448a99.9424 99.9424 0 0 0 38.1696-78.68928c0-55.3216-44.8512-100.1728-100.1728-100.1728-55.32672 0-100.1728 44.8512-100.1728 100.1728a99.9424 99.9424 0 0 0 38.1696 78.68928c12.09856 9.54368 9.33888 28.60032-4.9664 34.32448z m247.28064 187.50976v-20.03456c0-74.37824-45.45024-140.29824-113.34144-167.4752-14.30528-5.72416-17.06496-24.7808-4.9664-34.32448a99.9424 99.9424 0 0 0 38.1696-78.68928c0-55.3216-44.8512-100.1728-100.1728-100.1728-55.32672 0-100.1728 44.8512-100.1728 100.1728a99.9424 99.9424 0 0 0 38.1696 78.68928c12.09856 9.54368 9.33888 28.60032-4.9664 34.32448-67.8912 27.17696-113.34144 93.09696-113.34144 167.4752v20.03456h360.62208z m40.06912-20.03456v40.06912A20.03456 20.03456 0 0 1 712.3456 972.8H311.6544a20.03456 20.03456 0 0 1-20.03456-20.03456v-40.06912c0-80.72704 43.80672-153.2928 111.72864-191.7952a139.85792 139.85792 0 0 1-31.5904-88.69376c0-77.45536 62.78656-140.24192 140.24192-140.24192 77.45536 0 140.24192 62.78656 140.24192 140.24192a139.85792 139.85792 0 0 1-31.5904 88.69376c67.92192 38.5024 111.72864 111.06816 111.72864 191.7952z m-50.3296-500.86912a180.86912 180.86912 0 0 0-103.08096-107.3664c-14.30528-5.72928-17.06496-24.7808-4.9664-34.3296a99.9424 99.9424 0 0 0 38.1696-78.68928c0-55.3216-44.8512-100.1728-100.1728-100.1728-55.32672 0-100.1728 44.8512-100.1728 100.1728A99.9424 99.9424 0 0 0 449.9968 270.1312c12.09856 9.54368 9.33888 28.60032-4.9664 34.32448a180.86912 180.86912 0 0 0-103.08608 107.3664h340.11136z m45.9264 16.04608a20.03456 20.03456 0 0 1-19.6352 24.02304H315.65824a20.03456 20.03456 0 0 1-19.6352-24.02304c12.76928-62.88896 52.47488-116.60288 107.33056-147.72736A139.85792 139.85792 0 0 1 371.7632 191.4368C371.75808 113.99168 434.54464 51.2 512 51.2c77.45536 0 140.24192 62.79168 140.24192 140.24192 0 32.9728-11.46368 64.07168-31.59552 88.704 54.85568 31.1296 94.5664 84.8384 107.33056 147.72736z" fill="#343434" p-id="7266"></path></svg>]
  const chosen_icon=[<svg t="1700545616362" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7265" width="20" height="20"><path d="M371.75808 632.20736c0-77.45536 62.78656-140.24192 140.24192-140.24192 77.45536 0 140.24192 62.78656 140.24192 140.24192 0 32.9728-11.46368 64.0768-31.60064 88.704a221.30176 221.30176 0 0 1 61.36832 51.54304h230.68672a20.03456 20.03456 0 0 0 20.03456-20.03456V471.93088a20.03456 20.03456 0 0 0-20.03456-20.03456H111.30368a20.03456 20.03456 0 0 0-20.03456 20.03456v280.48896a20.03456 20.03456 0 0 0 20.03456 20.03456h230.68672a221.30176 221.30176 0 0 1 61.36832-51.54304 139.85792 139.85792 0 0 1-31.60064-88.704z m73.27232 113.01376a180.92544 180.92544 0 0 0-77.30176 59.29984 20.03456 20.03456 0 0 1-16.0256 8.00256H111.3088c-33.19296 0-60.10368-26.91072-60.10368-60.1088V471.936c0-33.19296 26.91072-60.1088 60.1088-60.1088h801.3824c33.19808 0 60.1088 26.91584 60.1088 60.1088v280.48896c0 33.19296-26.91072 60.10368-60.1088 60.10368h-240.39936c-6.2976 0-12.2368-2.9696-16.02048-8.00256a180.92544 180.92544 0 0 0-77.30176-59.29984c-14.30528-5.72416-17.06496-24.7808-4.9664-34.32448a99.9424 99.9424 0 0 0 38.1696-78.68928c0-55.3216-44.8512-100.1728-100.1728-100.1728-55.32672 0-100.1728 44.8512-100.1728 100.1728a99.9424 99.9424 0 0 0 38.1696 78.68928c12.09856 9.54368 9.33888 28.60032-4.9664 34.32448z m247.28064 187.50976v-20.03456c0-74.37824-45.45024-140.29824-113.34144-167.4752-14.30528-5.72416-17.06496-24.7808-4.9664-34.32448a99.9424 99.9424 0 0 0 38.1696-78.68928c0-55.3216-44.8512-100.1728-100.1728-100.1728-55.32672 0-100.1728 44.8512-100.1728 100.1728a99.9424 99.9424 0 0 0 38.1696 78.68928c12.09856 9.54368 9.33888 28.60032-4.9664 34.32448-67.8912 27.17696-113.34144 93.09696-113.34144 167.4752v20.03456h360.62208z m40.06912-20.03456v40.06912A20.03456 20.03456 0 0 1 712.3456 972.8H311.6544a20.03456 20.03456 0 0 1-20.03456-20.03456v-40.06912c0-80.72704 43.80672-153.2928 111.72864-191.7952a139.85792 139.85792 0 0 1-31.5904-88.69376c0-77.45536 62.78656-140.24192 140.24192-140.24192 77.45536 0 140.24192 62.78656 140.24192 140.24192a139.85792 139.85792 0 0 1-31.5904 88.69376c67.92192 38.5024 111.72864 111.06816 111.72864 191.7952z m-50.3296-500.86912a180.86912 180.86912 0 0 0-103.08096-107.3664c-14.30528-5.72928-17.06496-24.7808-4.9664-34.3296a99.9424 99.9424 0 0 0 38.1696-78.68928c0-55.3216-44.8512-100.1728-100.1728-100.1728-55.32672 0-100.1728 44.8512-100.1728 100.1728A99.9424 99.9424 0 0 0 449.9968 270.1312c12.09856 9.54368 9.33888 28.60032-4.9664 34.32448a180.86912 180.86912 0 0 0-103.08608 107.3664h340.11136z m45.9264 16.04608a20.03456 20.03456 0 0 1-19.6352 24.02304H315.65824a20.03456 20.03456 0 0 1-19.6352-24.02304c12.76928-62.88896 52.47488-116.60288 107.33056-147.72736A139.85792 139.85792 0 0 1 371.7632 191.4368C371.75808 113.99168 434.54464 51.2 512 51.2c77.45536 0 140.24192 62.79168 140.24192 140.24192 0 32.9728-11.46368 64.07168-31.59552 88.704 54.85568 31.1296 94.5664 84.8384 107.33056 147.72736z" fill="#00BC71" p-id="7266"></path></svg>]
  return (
    <div className="EquipmentTesting">
      <ConfigProvider locale={zhCN}>
        <div className='phone'>
          <NavBar
            //   left={<span><ArrowLeft style={{color:'white'}} theme="primary" onClick={() => window.history.back()} /><span style={{color:'white'}}>返回</span></span>
            // }
            left={<ArrowLeft style={{ color: '#0C5757' }} theme="primary" onClick={() => window.history.back()} />
            }
            title="设备测试"
            style={{ background: 'white', "--title-color": '#0C5757', "--title-font-weight": '700', '--title-font-size': '20px', '--height': '70px' }}
          />
          <div style={{height:'900px',marginTop:'100px'}}>
            <Link to='/OnlySound'><Button shape='radius' icon={mic_icon} style={{ background: '#82A9A9', color: 'white', marginLeft: '10px', marginRight: '40px', fontWeight: '700', width: '240px', height: '800px' }}>Only sound</Button></Link>
            <Link to='/Video'> <Button shape='radius' icon={vid_icon} style={{ background: '#0C5757', color: 'white', fontWeight: '700', width: '240px', height: '800px' }}>Video Test</Button></Link>

          </div>
         <div > 
         <TabBar style={{height:'80px',fontSize:'40px'}} activeKey={activeKey} onChange={setActiveKey}>
            <TabBar.Item itemKey="home" title="首页" icon={<TabIcon type="home" />} />
            <TabBar.Item
            style={{}}
              itemKey="found"
              title="面试"
              // icon={<TabIcon type="menu" />}
              icon={interview_icon}
              activeIcon={chosen_icon}
            // badge={{ shape: 'circle', text: '3' }}
            />
          </TabBar>
         </div>
        </div>

      </ConfigProvider>
    </div>
  );
}

export default EquipmentTesting;