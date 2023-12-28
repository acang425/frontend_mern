import React, { useState } from 'react';

const Recorder = () => {
  const [mediaStream, setMediaStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        setAudioChunks((chunks) => [...chunks, e.data]);
      }
    };

    mediaRecorder.start();
    setMediaStream(stream);
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
    }
    setRecording(false);
  };

  const playRecording = () => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div>
      <button style={{fontSize:'30px',margin:'30px'}} onClick={startRecording} disabled={recording}>
        开始录音
      </button>
      <button  style={{fontSize:'30px',margin:'30px'}} onClick={stopRecording} disabled={!recording}>
        停止录音
      </button>
      <button  style={{fontSize:'30px',margin:'20px'}} onClick={playRecording} disabled={audioChunks.length === 0}>
        播放录音
      </button>
    </div>
  );
};

export default Recorder;
