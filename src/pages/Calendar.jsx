import React from 'react';

function Calendar() {
  return (
    <div>
      <h2>📅 ปฏิทินกิจกรรม</h2>
      <p>ดูตารางกิจกรรมทั้งหมดของสโมสรนักศึกษาได้ที่ Google Calendar ด้านล่าง:</p>

      <div className="mt-4">
        <iframe
            src="https://calendar.google.com/calendar/embed?src=d2lzc2FydXQudEBra3VtYWlsLmNvbQ&ctz=Asia%2FBangkok"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
        ></iframe>
     </div>

    </div>
  );
}

export default Calendar;
