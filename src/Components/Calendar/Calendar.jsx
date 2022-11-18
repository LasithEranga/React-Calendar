import React, { useEffect, useState } from "react";
import "./Calendar.css";
const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augest",
    "September",
    "October",
    "November",
    "December",
  ];
  const weeks = {
    jan1: { date: 1, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan2: { date: 2, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan3: { date: 3, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan4: { date: 4, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan5: { date: 5, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan6: { date: 6, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan7: { date: 7, events: [{ name: "title", start: "4pm", end: "5pm" }] },

    jan8: { date: 8, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan9: { date: 9, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan10: { date: 10, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan11: { date: 11, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan12: { date: 12, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan13: { date: 13, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan14: { date: 14, events: [{ name: "title", start: "4pm", end: "5pm" }] },

    jan15: { date: 15, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan16: { date: 16, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan17: { date: 17, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan18: { date: 18, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan19: { date: 19, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan20: { date: 20, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan21: { date: 21, events: [{ name: "title", start: "4pm", end: "5pm" }] },

    jan22: { date: 22, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan23: { date: 23, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan24: { date: 24, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan25: { date: 25, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan26: { date: 26, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan27: { date: 27, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan28: { date: 28, events: [{ name: "title", start: "4pm", end: "5pm" }] },

    jan29: { date: 29, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan30: { date: 30, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    jan31: { date: 31, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    feb1: { date: 1, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    feb2: { date: 2, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    feb3: { date: 3, events: [{ name: "title", start: "4pm", end: "5pm" }] },
    feb4: { date: 4, events: [{ name: "title", start: "4pm", end: "5pm" }] },
  };

  const [gridMonth, setMonth] = useState(new Date().getMonth());

  const [dayGridView, setDayGridView] = useState([]);

  const generateDayGrid = (month = 0) => {
    //check whether the first  day is sunday
    //if not loop until the sunday meets
    //the calendar can hold upto 6 weeks maximum
    //possible combinations are saturaday is 1st date -> makes 6 weeks in one month
    //all others make the 5 weeks view
    const dayGrid = [];
    let date = new Date();
    date.setDate(1); // set the date to the first date of the month
    date.setMonth(month);
    let day = date.toDateString();
    while (day.substring(0, 3).toLowerCase() !== "sun") {
      date.setDate(date.getDate() - 1);
      day = date.toDateString();
    }

    //at this point we have the starting date of the month
    //loop until last date of the month
    let endDate = new Date(new Date().getFullYear(), month + 1, 0);
    endDate.setDate(endDate.getDate() + 1);
    while (true) {
      if (date.toDateString() === endDate.toDateString()) {
        break;
      }
      dayGrid.push({
        [date.toDateString().substring(4, 7).toLocaleLowerCase() +
        date.toDateString().substring(8, 10)]: {
          date: new Date(date),
          events: [{ name: "title", start: "4pm", end: "5pm" }],
        },
      });

      date.setDate(date.getDate() + 1);
    }

    //there should be 42 days in one daygrid view
    //filling the rest of the dates
    while (dayGrid.length < 42) {
      dayGrid.push({
        [date.toDateString().substring(4, 7).toLocaleLowerCase() +
        date.toDateString().substring(8, 10)]: {
          date: new Date(date),
          events: [{ name: "title", start: "4pm", end: "5pm" }],
        },
      });

      date.setDate(date.getDate() + 1);
    }
    console.log(dayGrid);
    return dayGrid;
  };

  useEffect(() => {
    setDayGridView(generateDayGrid(gridMonth));
  }, [gridMonth]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "22rem",
        }}
      >
        <h3>{months[new Date(2022, gridMonth, 1).getMonth()]}</h3>
        <div>
          <button
            onClick={() => {
              setMonth((prev) => prev - 1);
            }}
            style={{ padding: "1px 10px 1px 10px", marginRight: "5px" }}
          >
            &lt;
          </button>
          <button
            onClick={() => {
              setMonth((prev) => prev + 1);
            }}
            style={{ padding: "1px 10px 1px 10px" }}
          >
            &gt;
          </button>
        </div>
      </div>
      <table collapse="collapse" className="tableStyle">
        <thead>
          <tr>
            {days.map((day, index) => {
              return <th key={index}>{day}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {[0, 1, 2, 3, 4, 5].map((week, index) => {
            return (
              <tr>
                {dayGridView
                  .slice(week === 0 ? week : week * 7, (week + 1) * 7)
                  .map((day, index) => {
                    let date = Object.values(day)[0];
                    return <td key={index}>{date.date.getDate()}</td>;
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
