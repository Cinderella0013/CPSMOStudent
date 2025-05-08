// src/pages/NewsDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function NewsDetail() {
  const { id } = useParams();

  // ตัวอย่างข้อมูล mock (ภายหลังจะเรียกจาก API ด้วย axios)
  const dummyNews = {
    1: {
      title: 'เชิญร่วมกิจกรรมรับน้อง',
      content: 'พบกันวันพฤหัสที่ 10 เวลา 9.00 น. ณ อาคารเรียนรวม',
    },
    2: {
      title: 'โครงการอบรม IoT ฟรี!',
      content: 'ผู้สนใจสามารถสมัครผ่าน QR Code หน้าเพจสโมสร',
    },
  };

  const news = dummyNews[id];

  return (
    <div>
      <h2>{news?.title || 'ไม่พบข่าว'}</h2>
      <p>{news?.content || 'เนื้อหายังไม่มี'}</p>
    </div>
  );
}

export default NewsDetail;
