// src/pages/NewsList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NewsList() {
  // ตัวอย่างข่าวจำลอง (ไว้เปลี่ยนเป็นดึงจาก API ทีหลัง)
  const news = [
    { id: 1, title: 'เชิญร่วมกิจกรรมรับน้อง', summary: 'รับน้องสร้างสรรค์ 2025 ณ อาคารเรียนรวม' },
    { id: 2, title: 'โครงการอบรม IoT ฟรี!', summary: 'เรียนรู้ Arduino และ NodeMCU ฟรี' },
  ];

  return (
    <div>
      <h2>📚 ข่าวทั้งหมด</h2>
      <div className="row">
        {news.map((item) => (
          <div key={item.id} className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.summary}</p>
                <Link to={`/news/${item.id}`} className="btn btn-outline-primary">อ่านต่อ</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
