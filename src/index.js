//项目入口

//react 核心包
import React from 'react';
import ReactDOM from 'react-dom';
//项目的根组件
import Treaty from './components/login/Treaty';
import Login from './components/login/Login';
import Register from './components/login/Register';
import RegisterSuccess from './components/login/RegisterSuccess';
import FindPassword from './components/login/FindPassword';
import ChooseCity from './components/ChooseCity'
import ChooseTarget from './components/ChooseTarget'
import Home from './components/Home'
import ChooseType from './components/ChooseType'
import SpecialistList from './components/SpecialistList'
import SpecialistDetails from './components/SpecialistDetails'
import ReservationForm from './components/ReservationForm'
import ReservationSuccess from './components/ReservationSuccess'
import ReservationSuccess_Onsite from './components/ReservationSuccess_Onsite'
import NavigationRoute from './components/NavigationRoute'
import HistoryReservation from './components/HistoryReservation'
import SpecialistInterview from './components/SpecialistInterview'
import EquipmentTesting from './components/EquipmentTesting'
import OnlySound from './components/OnlySound'
import Video from './components/Video';
import MyCalendar from './components/Calendar';
import SpecialistTesting from './components/SpecialistTesting';
import StudentEvaluation from './components/StudentEvaluation';
import TestingResult from './components/TestingResult';
import SpecialistLunshu from './components/SpecialistLunshu';
import ResultAnalysis from './components/ResultAnalysis';
import PCTest from './components/PCTest';
import StudentEva from'./components/StudentEva';
import InterviewEva from './components/InterviewEva'
import ExpertEva from './components/ExpertEva'
import MyFollower from './components/Followers'
import MyEncourage from './components/Encourage';
import CommentR from './components/CommentRec';
import My from './components/My';
import MyInfo from './components/PersonalInfo';
import Recorder from './components/Recorder';

import Approot from './components/Approot';
// //把根组件渲染到id为root的dom节点上
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Login/>
// );

import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

function App() {
    
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/treaty" element={<Treaty />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/registersuccess" element={<RegisterSuccess/>} />
                    <Route path="/findpassword" element={<FindPassword/>} />
                    <Route  path="/choosecity" element={<ChooseCity/>} />
                    <Route path="/choosetype" element={<ChooseType/>} />
                    <Route path="/specialistlist" element={<SpecialistList/>} />
                    <Route path="/specialistdetails" element={<SpecialistDetails/>} />
                    <Route path="/reservationform" element={<ReservationForm/>} />
                    <Route path="/reservationsuccess" element={<ReservationSuccess/>} />
                    <Route path="/reservationsuccess-onsite" element={<ReservationSuccess_Onsite/>} />
                    <Route path="/navigationroute" element={<NavigationRoute/>} />
                    <Route path="/historyreservation" element={<HistoryReservation/>} />
                    <Route path="/specialistinterview" element={<SpecialistInterview/>} />
                    <Route path="/equipmenttesting" element={<EquipmentTesting/>} />
                    <Route path="/onlysound" element={<OnlySound/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/video" element={<Video/>} />
                    <Route path="/choosetarget" element={<ChooseTarget/>} />
                    <Route path="/calendar" element={<MyCalendar/>} />
                    <Route path="/specialisttesting" element={<SpecialistTesting/>} />
                    <Route path="/studentevaluation" element={<StudentEvaluation/>} />
                    <Route path="/testingresult" element={<TestingResult/>} />
                    <Route path="/specialistlunshu" element={<SpecialistLunshu/>} />
                    <Route path="/ResultAnalysis" element={<ResultAnalysis/>} />
                    <Route path="/PCTest" element={<PCTest/>} />
                    <Route path="/StudentEva" element={<StudentEva/>} />
                    <Route path="/InterviewEva" element={<InterviewEva/>} />
                    <Route path="/ExpertEva" element={<ExpertEva/>} />
                    <Route path="/MyFollower" element={<MyFollower/>} />
                    <Route path="/MyEncourage" element={<MyEncourage/>} />
                    <Route path="/CommentR" element={<CommentR/>} />
                    <Route path="/My" element={<My/>} />
                    <Route path="/MyInfo" element={<MyInfo/>} />
                    <Route path="/Recorder" element={<Recorder/>} />
                    {/* <Route path="/home:city" element={<Home/>}/> */}

                </Routes>
                
            </Suspense>
        </BrowserRouter>
    );
}
// const Home = () => {
//     return <div>hello world</div>
//   }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);