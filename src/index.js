//项目入口

//react 核心包
import React from 'react';
import ReactDOM from 'react-dom';
import PrivateRoute from './PrivateRoute';
//项目的根组件
import Treaty from './Treaty';
import Login from './Login';
import Register from './Register';
import RegisterSuccess from './RegisterSuccess';
import FindPassword from './FindPassword';
import ChooseCity from './ChooseCity'
import ChooseTarget from './ChooseTarget'
import Home from './Home'
import ChooseType from './ChooseType'
import SpecialistList from './SpecialistList'
import SpecialistDetails from './SpecialistDetails'
import ReservationForm from './ReservationForm'
import ReservationSuccess from './ReservationSuccess'
import ReservationSuccess_Onsite from './ReservationSuccess_Onsite'
import NavigationRoute from './NavigationRoute'
import HistoryReservation from './HistoryReservation'
import SpecialistInterview from './SpecialistInterview'
import EquipmentTesting from './EquipmentTesting'
import OnlySound from './OnlySound'
import Video from './Video';
import MyCalendar from './Calendar';
import SpecialistTesting from './SpecialistTesting';
import StudentEvaluation from './StudentEvaluation';
import TestingResult from './TestingResult';
import SpecialistLunshu from './SpecialistLunshu';
import ResultAnalysis from './ResultAnalysis';
import PCTest from './PCTest';
import StudentEva from'./StudentEva';
import InterviewEva from './InterviewEva'
import ExpertEva from './ExpertEva'
import MyFollower from './Followers'
import MyEncourage from './Encourage';
import CommentR from './CommentRec';
import My from './My';
import MyInfo from './PersonalInfo';
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