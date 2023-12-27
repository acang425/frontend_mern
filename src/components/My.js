
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Icon, TabBar, Grid, ConfigProvider, Image, Button, List } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import { Switch, NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import { useNavigate } from 'react-router-dom';
import { useScroll, Message } from 'zarm';
import { WarningCircle } from '@zarm-design/icons';
import ListItem from 'zarm/lib/list/ListItem';
import { Link } from 'react-router-dom';
import u49 from './images/u49.svg'
import root from './Approot';



const chooseArray = ['在线专家列表', '全部专家列表']
const cssVarUnchosen = { background: '#F5F5F5' }
const cssVarChosen = { background: '#F5F5F5', borderBottom: '10px solid #0C5757' }

const TabIcon = Icon.createFromIconfont(
    '//lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_20337_14.627ee457cf7594fbbce6d5e14b8c29ef.js',
);

const ITEMS = [
    'https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/home__/u5.png?pageId=08f2c0b2-a820-4917-8f0b-d588646320ae',
    'https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/home__/u7.png?pageId=08f2c0b2-a820-4917-8f0b-d588646320ae',
    'https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/home__/u9.png?pageId=08f2c0b2-a820-4917-8f0b-d588646320ae',
    'https://files.axshare.com/gsc/8IEDA8/c9/ae/f9/c9aef9afe37143db96155f997e61110d/images/home__/u11.png?pageId=08f2c0b2-a820-4917-8f0b-d588646320ae'
];


const example = [[
    <div style={{ width: '100%', color: '#666666' }}>
        <div style={{ width: '100%' }}>
            <div style={{ width: '20%', float: 'left' }}>
                <img style={{ height: '90px', width: '90px' }} src={u49}></img>
            </div>
            <div style={{ width: '50%', float: 'left' }}>
                <div>
                    <span style={{ fontSize: '25px', fontWeight: '600' }}>
                        <span style={{ marginRight: '15px' }}>     {localStorage.getItem('name')==null?"Windir":localStorage.getItem('name')}</span>
                    </span>
                    <div>
                        {localStorage.getItem('phone')==null?18033441984:localStorage.getItem('phone')}
                    </div>
                    <div>
                资料填写->
                    </div>
                </div>


            </div>
        </div>

    </div>
]

]

const icons =
    [
        <svg t="1703651163044" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6262" width="40" height="40"><path d="M341.333333 170.666667h341.333334V128H341.333333v42.666667z m-42.666666-42.709334C298.666667 104.405333 317.824 85.333333 341.12 85.333333h341.76C706.304 85.333333 725.333333 104.490667 725.333333 127.957333v42.752A42.645333 42.645333 0 0 1 682.88 213.333333H341.12C317.696 213.333333 298.666667 194.176 298.666667 170.709333V127.957333zM512 746.666667c-129.6 0-234.666667-105.066667-234.666667-234.666667s105.066667-234.666667 234.666667-234.666667 234.666667 105.066667 234.666667 234.666667-105.066667 234.666667-234.666667 234.666667z m0-42.666667a192 192 0 1 0 0-384 192 192 0 0 0 0 384z m21.333333-320v115.925333l96.298667 57.792a21.333333 21.333333 0 0 1-21.930667 36.565334l-106.666666-64A21.333333 21.333333 0 0 1 490.666667 512v-128a21.333333 21.333333 0 0 1 42.666666 0zM236.16 128v42.666667S170.666667 170.688 170.666667 170.773333V896s682.666667 0.042667 682.666666-0.106667C853.333333 895.893333 853.333333 170.666667 853.205333 170.666667h-63.296V128h63.296C876.842667 128 896 147.072 896 170.773333v725.12C896 919.509333 877.013333 938.666667 853.333333 938.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.773334V170.773333C128 147.157333 147.114667 128 170.752 128h65.408z" fill="#206464" p-id="6263"></path></svg>,
        <svg t="1703651250602" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7425" width="40" height="40"><path d="M693.2554956 911.04694985h-419.51580556a223.43416523 223.43416523 0 0 1-68.49961963-10.32818115 176.06413477 176.06413477 0 0 1-56.43232998-29.77781398 140.11070713 140.11070713 0 0 1-37.85816601-46.45906875c-8.9439917-17.84066133-13.52246396-38.00013487-13.52246397-59.99336279v-259.09182597c0-11.77152363 0.52054981-23.6613542 1.57348038-35.49203086a128.83607227 128.83607227 0 0 1 8.8138538-37.06551124 101.09313457 101.09313457 0 0 1 23.24728037-34.1078414c10.77774697-10.64760908 25.14018867-19.16569688 42.59043721-25.5187705l0.59153378-0.22478292a287.88769336 287.88769336 0 0 0 41.52567657-18.62148515 561.33013096 561.33013096 0 0 0 50.74177324-30.75976055 480.92884981 480.92884981 0 0 0 51.00204902-39.94036523 406.3837544 406.3837544 0 0 0 44.60165156-46.56554473 222.41672754 222.41672754 0 0 0 30.75976055-49.27476973 119.61997471 119.61997471 0 0 0 10.90788399-49.22744677v-0.72167169c0.78082471-19.27217285 3.85680058-35.18443301 9.40538848-48.67140498a97.79237578 97.79237578 0 0 1 23.66135419-34.85317411 96.66846123 96.66846123 0 0 1 34.02502647-20.49073243A113.14859502 113.14859502 0 0 1 507.9042793 27.61480727c30.29836377 0 56.29036114 8.11584404 77.31347432 24.0872581 20.63270039 15.68747724 34.54557715 39.44347734 42.31833134 72.59303409l0.3904128 1.54981845 0.07098398 1.59714141a359.23850684 359.23850684 0 0 1-5.21732901 81.09929092c-4.1762294 24.0872581-11.55857167 50.87191113-21.87492187 79.38384257a302.02535302 302.02535302 0 0 1-26.51254717 54.74054268h246.97721339c28.39362451 0 53.09607833 8.00936807 73.4685038 23.75599922 21.02311318 16.24351992 31.67072227 36.79340537 31.67072227 60.93981738a73.61047178 73.61047178 0 0 1-8.70737872 34.51008427 98.83347539 98.83347539 0 0 1-21.74478398 27.56547774 99.98105098 99.98105098 0 0 1-22.85686758 15.08411338c16.13704307 15.37988028 24.28837998 33.81207451 24.28837999 54.96532471 0 23.92162911-10.44648809 44.69629746-31.07918848 61.75613408A109.84783623 109.84783623 0 0 1 843.83635185 635.71160394c16.32633398 15.91226016 24.61963886 34.68754511 24.61963887 55.95910226 0 13.01374511-4.30636641 25.45961661-12.80079228 37.0063582-7.8319081 10.71859307-18.55050117 19.99384453-31.81269024 27.56547685a157.1232208 157.1232208 0 0 1-17.24912666 8.4234419c17.04800566 16.96519072 25.73172247 37.18381817 25.73172247 59.99336279a60.2181457 60.2181457 0 0 1-16.9060377 42.3656543 116.67413672 116.67413672 0 0 1-36.67509844 25.80270732 191.00628018 191.00628018 0 0 1-44.01011865 13.92470683 227.43293467 227.43293467 0 0 1-41.40736963 4.25904346z m-499.96440966-498.7813421c-10.31635019 3.76215557-18.4085332 8.50625684-24.15824209 14.1968127a58.46720537 58.46720537 0 0 0-13.8418919 20.11215058 93.22573448 93.22573448 0 0 0-6.19927471 26.4652251c-0.98194658 10.71859307-1.44334248 21.60281602-1.44334247 32.32140909v259.09182597c0 16.24351992 3.20611377 30.83074453 9.53552549 43.35943096a97.79237578 97.79237578 0 0 0 26.25227226 32.32140996 122.51849062 122.51849062 0 0 0 39.70375136 20.94029824 164.86048388 164.86048388 0 0 0 50.61163623 7.5124793h419.50397549a164.71851592 164.71851592 0 0 0 30.55863868-3.31258887 137.14120722 137.14120722 0 0 0 31.07918848-9.77213936 67.328383 67.328383 0 0 0 21.29521816-14.85933047 22.0287208 22.0287208 0 0 0 6.0691377-16.07789003c0-12.87177627-4.73227119-23.6613542-14.3624417-33.1258957-8.82568477-8.55357979-19.85187568-12.57600937-34.65205313-12.57600938v-42.43663828a138.00484687 138.00484687 0 0 0 33.82390547-4.19989044 113.98857276 113.98857276 0 0 0 28.66573037-11.21548183 54.30280693 54.30280693 0 0 0 17.30828057-14.81200752 24.33570292 24.33570292 0 0 0 5.21732813-14.64637851c0-12.43404141-5.08719112-22.37180977-15.9950751-31.4341084-11.0971749-9.16877461-23.76783018-13.42781807-40.03501114-13.42781807v-42.40114629h30.03808887c15.5336792 0 27.94405869-4.24721338 39.04123447-13.42781894 10.90788398-9.06229863 15.9950751-19.00006699 15.9950751-31.4341084 0-12.20925849-4.95705323-21.81576797-15.60466319-30.27470274-10.90788398-8.67188584-23.77966113-12.93093018-39.38432343-12.9309293v-42.24734823h29.05614317a59.99336279 59.99336279 0 0 0 21.09409628-3.75032461 53.23804628 53.23804628 0 0 0 17.36743447-10.00875235 54.31463789 54.31463789 0 0 0 12.28024248-15.62832421 36.21370254 36.21370254 0 0 0 4.28270537-17.18997364c0-12.10278252-4.89790019-21.54366299-15.37988027-29.67133798-10.96703789-8.50625684-23.96895117-12.64699336-39.63276826-12.64699336H485.0592418l24.95089775-32.6999918c19.33132588-25.35314063 33.82390547-51.20317002 43.17014092-76.89940049 9.60650948-26.51254717 16.39731797-51.09669404 20.18313457-73.08992198a327.54412266 327.54412266 0 0 0 4.82691621-71.42179745c-5.54858789-22.70306953-14.43342568-38.78095957-26.31142529-47.7841043-11.68870869-8.89666875-26.02748935-13.20303516-43.77350479-13.20303515a54.42111387 54.42111387 0 0 0-18.08910527 3.08780683 46.13963994 46.13963994 0 0 0-16.06605996 9.94959932c-5.28831299 4.8624082-9.79580039 11.6532167-13.32134209 20.11215058-3.72666357 9.16877461-5.91533877 21.15325019-6.60151758 35.74047569a156.49619502 156.49619502 0 0 1-14.1021668 63.88565537 259.58871474 259.58871474 0 0 1-36.37933154 58.27791445 458.59253203 458.59253203 0 0 1-49.54687559 51.70005878 535.92966738 535.92966738 0 0 1-56.12473125 43.96279571 612.63977695 612.63977695 0 0 1-55.37939941 33.64644551 350.48380606 350.48380606 0 0 1-49.23927774 21.9340749z m0 0" p-id="7426" fill="#206464"></path><path d="M693.2554956 919.32842377h-419.51580556a231.88126904 231.88126904 0 0 1-70.9840626-10.64760908 184.4047626 184.4047626 0 0 1-59.07057012-31.24481836 148.32119708 148.32119708 0 0 1-40.03501024-49.21561582C94.10269062 809.16115961 89.2521125 787.73580355 89.2521125 764.52401518v-259.09182598c0-12.06729053 0.54421084-24.25288799 1.59714141-36.20187158a137.12937715 137.12937715 0 0 1 9.39355752-39.45530743 109.36277842 109.36277842 0 0 1 25.10469667-36.86438935c11.57040175-11.3929418 26.90295908-20.59720839 45.57176807-27.38801778l0.8163167-0.29576689A279.59438935 279.59438935 0 0 0 211.98355596 347.04308587a553.33259297 553.33259297 0 0 0 49.99644052-30.3220248 472.52906982 472.52906982 0 0 0 50.09108643-39.23052539 397.90115859 397.90115859 0 0 0 43.77350479-45.61909013 214.13525362 214.13525362 0 0 0 29.57669297-47.42918438 111.38582373 111.38582373 0 0 0 10.1862123-45.84387304v-1.05293057c0.82814766-20.27778047 4.10524453-37.1128333 10.02058418-51.48710596a103.90883555 103.90883555 0 0 1 62.70258779-60.04068574A121.61935898 121.61935898 0 0 1 508.04624727 19.33333334c32.09662705 0 59.80407187 8.67188584 82.32968144 25.76721445 22.30082578 16.95335977 37.13649521 42.21185537 45.34698515 77.20699834l0.5915338 2.36613516 0.09464502 2.36613515a367.6027957 367.6027957 0 0 1-5.33563507 82.90938428c-4.25904346 24.52499297-11.73603164 51.70005878-22.2535037 80.77986299a301.68226318 301.68226318 0 0 1-19.91102959 43.6433669h232.46097275c30.21554883 0 56.64528105 8.57724082 78.53203389 25.48327851 23.15263447 17.8879834 34.88866612 40.59105293 34.88866611 67.43485899a81.84462364 81.84462364 0 0 1-9.63017139 38.37871582 107.09128828 107.09128828 0 0 1-23.57853925 29.90795185 104.10995742 104.10995742 0 0 1-14.98946749 11.038021 80.22382031 80.22382031 0 0 1 19.21301983 52.82397333c0 26.51254717-11.46392578 49.44039873-34.08418125 68.14469883a117.3011625 117.3011625 0 0 1-14.5635627 10.3163502 82.28235849 82.28235849 0 0 1 19.59160078 53.73493506c0 14.81200752-4.85057724 28.91417432-14.40976464 41.91608848-8.51808779 11.64138575-20.11215059 21.69746191-34.36811632 29.84879795q-3.70300166 2.11769122-7.64261718 4.08158349a88.73007714 88.73007714 0 0 1 20.31327246 57.16583174 68.26300664 68.26300664 0 0 1-19.14203584 48.03254824 124.89645674 124.89645674 0 0 1-39.27784746 27.66012276A199.34690713 199.34690713 0 0 1 736.27183672 914.91558139a235.63159365 235.63159365 0 0 1-43.01634112 4.41284238zM177.20136582 380.78417641l-0.56787275 0.21295195c-16.44464092 5.91533877-29.78964492 13.92470684-39.6564293 23.6613542a92.9536295 92.9536295 0 0 0-21.3780331 31.28031035 120.60192128 120.60192128 0 0 0-8.28147393 34.71120615c-1.01743857 11.4520957-1.53798838 23.1408044-1.53798838 34.72303711v259.09182598c0 20.60903935 4.24721338 39.54995332 12.63516328 56.27853017a131.84106416 131.84106416 0 0 0 35.59850684 43.77350479 167.88913682 167.88913682 0 0 0 53.77042705 28.39362451 215.42479717 215.42479717 0 0 0 65.95602451 9.87861534h419.51580556a218.96216982 218.96216982 0 0 0 39.98768819-4.14073653A182.68931425 182.68931425 0 0 0 775.26574824 885.33888842a108.46364678 108.46364678 0 0 0 34.13150332-23.94529014 52.19694668 52.19694668 0 0 0 14.67003956-36.67509843c0-20.53805537-7.8319081-38.7454667-23.29460333-54.12534698l-8.77836182-8.73103974 11.41660284-4.7322712a149.70538652 149.70538652 0 0 0 16.32633486-7.99753711c12.24475049-6.99193037 22.08787383-15.49818721 29.22177217-25.2584956 7.44149619-10.1152292 11.20365088-20.91663721 11.20365088-32.12028809 0-18.92908301-7.44149619-35.72864472-22.12336583-50.03193339l-8.48259579-8.28147305 10.64760907-5.13451406a101.89762119 101.89762119 0 0 0 20.89297619-13.380496c18.64514707-15.37988028 28.09785762-34.04868838 28.09785761-55.39122949 0-18.77528408-7.3113583-35.24358691-21.72112295-48.96717188l-8.66005576-8.28147393 10.75408506-5.20549804a91.71140801 91.71140801 0 0 0 21.02311318-13.83006094 90.55200146 90.55200146 0 0 0 19.93469062-25.2584956 65.39998271 65.39998271 0 0 0 7.71360206-30.64145362c0-21.49634004-9.57101748-39.79839727-28.45277842-54.42111386s-41.93974951-22.0287208-68.40497462-22.02872081H559.79362812l7.66627911-12.58784033a294.86779277 294.86779277 0 0 0 25.79087548-53.23804628c10.18621318-28.18067256 17.41475654-54.42111387 21.50817101-77.99965313a350.92154092 350.92154092 0 0 0 5.11085214-79.26553653v-0.86363876l-0.21295195-0.86363965c-7.29952734-31.13834151-20.11215059-53.34452227-39.26601651-67.88442481C560.77557471 43.4324224 536.45170273 35.89628119 508.04624727 35.89628119a105.11556503 105.11556503 0 0 0-34.30896329 5.78520088 87.35771865 87.35771865 0 0 0-52.82397246 50.69445117c-5.14634414 12.50502539-8.02119902 27.4471708-8.77836269 45.67824404v0.54421085a127.77131162 127.77131162 0 0 1-11.62955479 52.62285146 230.59172549 230.59172549 0 0 1-31.94282812 51.10852412 414.40495342 414.40495342 0 0 1-45.51261416 47.5238294A489.02103281 489.02103281 0 0 1 271.26707802 330.48013803a570.12032373 570.12032373 0 0 1-51.475275 31.20932549 296.3584582 296.3584582 0 0 1-42.5904372 19.09471289z m516.05412978 496.11943915h-419.51580556a173.02365088 173.02365088 0 0 1-53.15523223-7.91472216 130.57518164 130.57518164 0 0 1-42.35382333-22.37181065 105.89638974 105.89638974 0 0 1-28.45277842-35.05429599c-6.90911543-13.67626289-10.41099609-29.57669209-10.41099522-47.07426358v-259.09182598c0-11.25097383 0.49688877-22.38364072 1.47883447-33.1258957a101.54270039 101.54270039 0 0 1 6.77897755-28.7840373 66.52389638 66.52389638 0 0 1 15.77029306-22.97517451c6.50687256-6.44771865 15.64015518-11.83067666 27.08041905-16.0305671h0.16562987c14.06667481-4.80325518 30.22737979-12.0081375 48.0443792-21.41352509a604.79603789 604.79603789 0 0 0 54.59857383-33.1258957 526.92652266 526.92652266 0 0 0 55.21376953-43.22929395 450.15725918 450.15725918 0 0 0 48.600421-50.71811221 251.3782248 251.3782248 0 0 0 35.23175595-56.42049814 148.28570508 148.28570508 0 0 0 13.38049601-60.50208252v-0.34308984c0.69800977-15.47452529 3.11146787-28.39362451 7.19305136-38.4851918 4.01059951-9.67749346 9.18060557-17.43841758 15.37988028-23.15263536a54.49209785 54.49209785 0 0 1 19.01189794-11.68870868 62.61977286 62.61977286 0 0 1 20.75100733-3.54920273c19.68624668 0 35.65766074 4.87423916 48.83703486 14.89482245 13.46331006 10.19804326 23.34192539 27.83758271 29.35190918 52.40989864l0.18929092 0.76899375v0.79265566a336.19234746 336.19234746 0 0 1-4.90973116 73.17273692c-3.86863154 22.47828662-10.77774697 47.5238294-20.54988544 74.53326532-9.65383242 26.50071621-24.57231592 53.08424737-44.36503858 79.04075274l-14.80017744 19.40231074h319.57024747c17.60404746 0 32.22676406 4.73227119 44.70812753 14.38610274s18.59782412 21.46084805 18.597825 36.14271855a44.24673164 44.24673164 0 0 1-5.25282099 21.02311319 62.70258779 62.70258779 0 0 1-14.1968127 18.00629032 61.20009229 61.20009229 0 0 1-20.00567461 11.55857081 68.26300664 68.26300664 0 0 1-23.9216291 4.25904434h-20.70368438v26.02748935a67.05627715 67.05627715 0 0 1 36.29651748 14.32694971c12.62333232 10.0205833 18.75162305 22.05238184 18.75162305 36.76974345s-6.21110567 27.21055693-18.92908388 37.8581669-26.76099112 15.37988028-44.34137667 15.37988027h-21.81576885v26.18128829a65.06872383 65.06872383 0 0 1 37.01818828 14.96580556c12.80079229 10.64760908 19.01189795 22.99883643 19.01189796 37.85816689a32.69999092 32.69999092 0 0 1-6.82630049 19.53244776 62.28851396 62.28851396 0 0 1-19.8755376 17.09532773 122.13990879 122.13990879 0 0 1-30.75975967 12.04362949 145.44634307 145.44634307 0 0 1-27.60096973 4.18805948v26.52437812c13.01374511 1.39601953 23.53121631 6.18744375 32.15578008 14.55173262 11.20365088 10.89605391 16.88237578 24.02810508 16.88237578 39.0412336a30.20371875 30.20371875 0 0 1-8.28147392 21.76844589 75.3969041 75.3969041 0 0 1-23.90979814 16.69308575 145.51732705 145.51732705 0 0 1-33.00758878 10.38733417 173.02365088 173.02365088 0 0 1-32.10845713 3.46638779zM196.03580292 420.07385482c-9.14511357 3.33625078-16.23168896 7.46515723-21.0822662 12.2684124a50.38685333 50.38685333 0 0 0-11.94898359 17.3674336 84.94426055 84.94426055 0 0 0-5.61957188 24.06359707c-0.93462363 10.20987422-1.40785049 20.82199131-1.40785049 31.57607637v259.09182598c0 14.94214541 2.91034687 28.27531758 8.64822481 39.63276826a89.46357979 89.46357979 0 0 0 24.06359706 29.57669208 114.10687969 114.10687969 0 0 0 37.01818829 19.56793976 156.50802598 156.50802598 0 0 0 48.07987119 7.09840634h419.46848349a156.6973169 156.6973169 0 0 0 28.99698927-3.15879082 128.9543792 128.9543792 0 0 0 29.22177216-9.18060557 59.15338506 59.15338506 0 0 0 18.75162305-13.01374424 13.85372285 13.85372285 0 0 0 3.82130859-10.39916513c0-10.64760908-3.76215557-19.28400381-11.83067666-27.21055693-7.34685029-7.09840635-16.26718096-10.30451924-28.90234423-10.30452013h-8.28147393v-58.90494023h8.28147393a129.43943701 129.43943701 0 0 0 31.7890292-3.93961552 105.74259082 105.74259082 0 0 0 26.5362082-10.4109961 46.23428584 46.23428584 0 0 0 14.76468545-12.52868643 16.12521299 16.12521299 0 0 0 3.60835575-9.73664735c0-9.8549543-4.01059951-17.59221651-13.01374423-25.06920469-9.64200146-7.96204599-20.36059541-11.51124873-34.73486807-11.51124874h-8.28147392v-58.94043222h38.31956279c13.71175488 0 24.1227501-3.54920273 33.7765834-11.52307969 8.97948369-7.46515723 13.01374511-15.19058935 13.01374424-25.04554278 0-9.5946794-3.84496963-16.94152969-12.48136436-23.79149208-9.46454151-7.48881826-20.6918543-11.1326669-34.30896328-11.1326669h-8.28147392v-58.82212617h37.33761709a52.05497872 52.05497872 0 0 0 18.24290419-3.25343584 45.0393873 45.0393873 0 0 0 14.74102354-8.43527285 46.13963994 46.13963994 0 0 0 10.43465713-13.27401914 28.05053555 28.05053555 0 0 0 3.33625078-13.33317304c0-9.46454151-3.76215557-16.56294785-12.19742842-23.11714336-9.46454151-7.34685029-20.78649932-10.91971494-34.58106826-10.91971495H468.33066494l35.08978799-46.00950205c18.77528408-24.63146982 32.90111279-49.68884355 41.96341142-74.65157227 9.46454151-26.02748935 16.10155107-50.16207041 19.80455274-71.65841044a320.50487021 320.50487021 0 0 0 4.73227119-68.81904756c-5.08719112-20.37242549-12.84811523-34.62839122-23.08165137-42.38931621s-22.89235957-11.52307969-38.81645068-11.52307881a46.39991484 46.39991484 0 0 0-15.37988027 2.63824102 38.16576386 38.16576386 0 0 0-13.19120508 8.28147392c-4.40101143 4.03426055-8.18682891 9.84312334-11.25097383 17.21363467-3.33625078 8.21048994-5.34746602 19.2603419-5.91533789 32.7709749A164.74217695 164.74217695 0 0 1 447.42585869 206.25803002a267.88201875 267.88201875 0 0 1-37.52690713 60.13533076 466.66105401 466.66105401 0 0 1-50.38685332 52.57552852 543.44214756 543.44214756 0 0 1-56.90555683 44.57799052 621.33532471 621.33532471 0 0 1-56.13656221 34.09601133c-18.62148516 9.80763135-35.56301484 17.35560352-50.43417627 22.43096367z" p-id="7427" fill="#206464"></path></svg>,
        <svg t="1703651337769" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8515" width="40" height="40"><path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#206464" p-id="8516"></path><path d="M809.889039 214.109426c-164.252925-164.278507-431.528224-164.278507-595.778078 0-164.280554 164.250878-164.280554 431.527201 0 595.781148 164.250878 164.276461 431.526177 164.276461 595.778078 0C974.16857 645.636626 974.16857 378.360304 809.889039 214.109426M767.13326 767.130701c-140.681066 140.712789-369.617176 140.683113-510.281869 0-140.694369-140.67902-140.694369-369.585453 0-510.279822 140.664693-140.664693 369.601826-140.694369 510.281869 0C907.812279 397.516596 907.812279 626.481358 767.13326 767.130701" fill="#206464" p-id="8517"></path><path d="M602.493525 338.736864c-32.254611 0-63.968917 16.619516-90.523713 47.111994-26.464745-30.491455-58.211796-47.111994-90.465384-47.111994-75.30715 0-136.547933 66.088184-136.547933 147.31823 0 38.565341 24.124444 89.705068 55.092759 117.8992 28.496008 35.20685 144.231939 140.649344 172.305321 140.649344 26.764574 0 139.576919-100.787474 170.33955-139.365094 32.132838-29.330002 56.360635-80.55978 56.360635-119.18345C739.056807 404.825049 677.801698 338.736864 602.493525 338.736864M644.593366 563.495838l-3.310396 3.013637-2.805906 3.491521c-23.599488 29.627784-93.117794 91.060949-126.208447 112.990401-33.985022-22.557762-106.159832-87.301322-128.297015-114.603131l-2.685155-3.311419-3.163039-2.892887c-21.005406-19.094894-36.640502-55.959499-36.640502-76.128865 0-50.065256 35.894512-90.792842 80.021521-90.792842 15.33629 0 32.31294 9.801227 47.829332 27.643594l42.636053 49.097208 42.663682-49.067532c15.516392-17.841344 32.522718-27.67327 47.860031-27.67327 44.128033 0 80.051197 40.726563 80.051197 90.792842C682.544723 506.314511 666.940326 543.117718 644.593366 563.495838" fill="#206464" p-id="8518"></path></svg>,
        <svg t="1703651367663" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9623" width="40" height="40"><path d="M512 136c-208 0-376 144-376 320 0 108.8 64 209.6 172.8 268.8 11.2 6.4 25.6 1.6 32-9.6 6.4-11.2 1.6-25.6-9.6-32-92.8-51.2-147.2-136-147.2-227.2 0-150.4 147.2-272 328-272s328 121.6 328 272-147.2 272-328 272c-6.4 0-12.8 3.2-17.6 6.4l-86.4 86.4V752c0-12.8-11.2-24-24-24s-24 11.2-24 24v128c0 9.6 6.4 19.2 14.4 22.4 3.2 1.6 6.4 1.6 9.6 1.6 6.4 0 12.8-3.2 17.6-6.4l121.6-121.6c203.2-4.8 366.4-145.6 366.4-320-1.6-176-169.6-320-377.6-320z" p-id="9624" fill="#206464"></path><path d="M312 424h400c12.8 0 24-11.2 24-24s-11.2-24-24-24h-400c-12.8 0-24 11.2-24 24s11.2 24 24 24zM312 568H624c12.8 0 24-11.2 24-24s-11.2-24-24-24H312c-12.8 0-24 11.2-24 24s11.2 24 24 24z" p-id="9625" fill="#206464"></path></svg>,
        <svg t="1703651418917" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10683" width="40" height="40"><path d="M469.333333 554.666667l128 128 59.733334-59.733334-102.4-102.4V341.333333h-85.333334v213.333334zM85.333333 256l149.333334 149.333333 29.866666 29.866667C298.666667 332.8 396.8 256 512 256c140.8 0 256 115.2 256 256s-115.2 256-256 256c-128 0-234.666667-93.866667-251.733333-217.6l-85.333334-85.333333c-4.266667 17.066667-4.266667 29.866667-4.266666 46.933333 0 187.733333 153.6 341.333333 341.333333 341.333333s341.333333-153.6 341.333333-341.333333-153.6-341.333333-341.333333-341.333333C405.333333 170.666667 311.466667 221.866667 247.466667 298.666667l-42.666667-42.666667H85.333333z" fill="#206464" p-id="10684"></path></svg>,
        <svg t="1703651454210" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11824" width="40" height="40"><path d="M961.834667 89.045333a42.666667 42.666667 0 0 1 0 26.965334l-273.024 819.029333a42.666667 42.666667 0 0 1-78.336 6.186667l-180.437334-347.392-347.392-180.48a42.666667 42.666667 0 0 1 6.186667-78.293334l819.029333-273.024a42.666667 42.666667 0 0 1 53.973334 27.008z m-107.946667 80.938667L211.498667 384.085333l244.181333 126.890667a21.248 21.248 0 0 1 5.162667-8.277333l90.496-90.496a21.333333 21.333333 0 0 1 30.165333 0l30.208 30.165333a21.333333 21.333333 0 0 1 0 30.165333l-90.538667 90.496a21.248 21.248 0 0 1-8.32 5.12l126.890667 244.224 214.186667-642.389333z" fill="#206464" opacity=".65" p-id="11825"></path></svg>,
        <svg t="1703651500032" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13220" width="40" height="40"><path d="M512 328c-100.8 0-184 83.2-184 184S411.2 696 512 696 696 612.8 696 512 612.8 328 512 328z m0 320c-75.2 0-136-60.8-136-136s60.8-136 136-136 136 60.8 136 136-60.8 136-136 136z" p-id="13221" fill="#206464"></path><path d="M857.6 572.8c-20.8-12.8-33.6-35.2-33.6-60.8s12.8-46.4 33.6-60.8c14.4-9.6 20.8-27.2 16-44.8-8-27.2-19.2-52.8-32-76.8-8-14.4-25.6-24-43.2-19.2-24 4.8-48-1.6-65.6-19.2-17.6-17.6-24-41.6-19.2-65.6 3.2-16-4.8-33.6-19.2-43.2-24-14.4-51.2-24-76.8-32-16-4.8-35.2 1.6-44.8 16-12.8 20.8-35.2 33.6-60.8 33.6s-46.4-12.8-60.8-33.6c-9.6-14.4-27.2-20.8-44.8-16-27.2 8-52.8 19.2-76.8 32-14.4 8-24 25.6-19.2 43.2 4.8 24-1.6 49.6-19.2 65.6-17.6 17.6-41.6 24-65.6 19.2-16-3.2-33.6 4.8-43.2 19.2-14.4 24-24 51.2-32 76.8-4.8 16 1.6 35.2 16 44.8 20.8 12.8 33.6 35.2 33.6 60.8s-12.8 46.4-33.6 60.8c-14.4 9.6-20.8 27.2-16 44.8 8 27.2 19.2 52.8 32 76.8 8 14.4 25.6 22.4 43.2 19.2 24-4.8 49.6 1.6 65.6 19.2 17.6 17.6 24 41.6 19.2 65.6-3.2 16 4.8 33.6 19.2 43.2 24 14.4 51.2 24 76.8 32 16 4.8 35.2-1.6 44.8-16 12.8-20.8 35.2-33.6 60.8-33.6s46.4 12.8 60.8 33.6c8 11.2 20.8 17.6 33.6 17.6 3.2 0 8 0 11.2-1.6 27.2-8 52.8-19.2 76.8-32 14.4-8 24-25.6 19.2-43.2-4.8-24 1.6-49.6 19.2-65.6 17.6-17.6 41.6-24 65.6-19.2 16 3.2 33.6-4.8 43.2-19.2 14.4-24 24-51.2 32-76.8 4.8-17.6-1.6-35.2-16-44.8z m-56 92.8c-38.4-6.4-76.8 6.4-104 33.6-27.2 27.2-40 65.6-33.6 104-17.6 9.6-36.8 17.6-56 24-22.4-30.4-57.6-49.6-97.6-49.6-38.4 0-73.6 17.6-97.6 49.6-19.2-6.4-38.4-14.4-56-24 6.4-38.4-6.4-76.8-33.6-104-27.2-27.2-65.6-40-104-33.6-9.6-17.6-17.6-36.8-24-56 30.4-22.4 49.6-57.6 49.6-97.6 0-38.4-17.6-73.6-49.6-97.6 6.4-19.2 14.4-38.4 24-56 38.4 6.4 76.8-6.4 104-33.6 27.2-27.2 40-65.6 33.6-104 17.6-9.6 36.8-17.6 56-24 22.4 30.4 57.6 49.6 97.6 49.6 38.4 0 73.6-17.6 97.6-49.6 19.2 6.4 38.4 14.4 56 24-6.4 38.4 6.4 76.8 33.6 104 27.2 27.2 65.6 40 104 33.6 9.6 17.6 17.6 36.8 24 56-30.4 22.4-49.6 57.6-49.6 97.6 0 38.4 17.6 73.6 49.6 97.6-6.4 19.2-14.4 38.4-24 56z" p-id="13222" fill="#206464"></path></svg>
    ]
function My() {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState('found');
    const [choose, setChoose] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const containerRef = useRef();

    useScroll({
        container: containerRef,
        onScroll: (e) => {
            setScrollTop(e.target.scrollTop);
        },
    });

    return (
        <div className="My">
            <ConfigProvider locale={zhCN}>
                <div className='phone'>
                    <NavBar
                        style={{ "--title-color": '#0C5757', "--title-font-weight": '700', '--title-font-size': '30px', '--height': '70px' }}
                        left={<ArrowLeft style={{ color: '#0C5757' }} theme="primary" onClick={() => window.history.back()} />}
                        title="我的"
                    />
                    <div style={{ background: '#F5F5F5' }}>
                        <div
                            ref={containerRef}
                            style={{
                                overflowY: 'auto',
                                maxHeight: '1015px',
                                background: '#F5F5F5'
                            }}
                        >
                            <div >
                                <List style={{ marginBottom: '100px', '--arrow-size': '60px' }}>
                                    <ListItem style={{ '--arrow-size': '10px', height: '200px', paddingTop: '50px' }} hasArrow title="" onClick={() => {navigate('/MyInfo') }} >{example}</ListItem>
                                </List>
                                <List style={{ marginBottom: '100px' }}>
                                    <List.Item prefix={icons[0]} style={{ fontSize: '20px', height: '70px' }} hasArrow title="我的预约" onClick={() => {navigate('/historyreservation'); }} />
                                    <List.Item prefix={icons[1]} style={{ fontSize: '20px', height: '70px' }} hasArrow title="应用打分" onClick={() => {navigate('/StudentEva') }} />
                                    <List.Item prefix={icons[2]} style={{ fontSize: '20px', height: '70px' }} hasArrow title="我的粉丝" onClick={() => {navigate('/Myfollower')}} />
                                    <List.Item prefix={icons[3]} style={{ fontSize: '20px', height: '70px' }} hasArrow title="我的消息" onClick={() => { }} />
                                    <List.Item prefix={icons[4]} style={{ fontSize: '20px', height: '70px' }} hasArrow title="激励排行" onClick={() => {navigate('/MyEncourage') }} />
                                    <List.Item prefix={icons[5]} style={{ fontSize: '20px', height: '70px' }} title="内容推送" suffix={<Switch checked={checked} onChange={setChecked} />} />
                                </List>
                                <List>
                                    <List.Item prefix={icons[6]} style={{ fontSize: '20px', height: '70px' }} hasArrow title="设置" onClick={() => { }} />
                                </List>

                            </div>
                            <div>
                                <Button size='lg' 
                                onClick={()=>{navigate('/')}}
                                shape='round' style={{ margin: '50px', background: '#0C5757', color: 'white', fontWeight: 'bold', height: '70px', width: '80%' }}>退出账号</Button>
                            </div>

                        </div>

                    </div>
                    <div style={{ height: '60px' }}>
                <TabBar style={{ height: '100%',"--font-size":'15x' }} activeKey={activeKey} onChange={setActiveKey}>
                  <TabBar.Item itemKey="home" title="首页" icon={<Link to='/home'><TabIcon type="home" /></Link>} />
                  <TabBar.Item
                    itemKey="found"
                    title="现场面试"
                    icon={<Link to='/specialistList'><TabIcon type="menu" /></Link>}
                  // badge={{ shape: 'circle', text: '3' }}
                  />
                  <TabBar.Item
                    itemKey="me"
                    title="我的"
                    icon={<Link to='/My'><TabIcon  type="user" /></Link>}
                  // badge={{ shape: 'dot' }}
                  />
                </TabBar>
              </div>


                </div>

            </ConfigProvider>
        </div>
    );
}

export default My;
