import React from 'react';

function Home() {
  return (
    <div className="text-center">
      <h1>ข่าวสารล่าสุด</h1>
      <p>ยินดีต้อนรับสู่เว็บไซต์ข่าวของสโมสรนักศึกษา วิทยาลัยการคอมพิวเตอร์</p>
      <img src="/images/SMO68.png" alt="Banner สโมสร"
          className="img-fluid rounded shadow mt-3"
          style={{ maxHeight: '400px', objectFit: 'cover' }}/>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">🎉 เปิดรับสมัครสมาชิกใหม่</h5>
          <p className="card-text">เข้าร่วมกับทีมงานสโมสรฯ เพื่อพัฒนากิจกรรมที่น่าสนใจ</p>
          <a href="#" className="btn btn-primary">อ่านต่อ</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
