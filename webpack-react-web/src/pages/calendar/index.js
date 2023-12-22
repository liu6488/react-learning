import './style.css'
import { CalendarHeader } from './components/cal_header'
import { CalWeekName } from './components/cal_weekname'
import { getCalendarDate, getYearMonthDay } from '../../utils/calendar'
import { CalContent } from './components/cal_content';
const { useState } = require("react");
export default function Calendar(props) {
  // 日历上的当前页 [跟随翻页进行变动]
  const [calendarDate, setCalendarDate] = useState(new Date())
  // 今天所在年月日
  const { day: currentDay } = getYearMonthDay(new Date())
  // 日历所在年月日[跟随翻页进行变动]
  const { year: calCurYar, month: calCurMonth } = getYearMonthDay(calendarDate)
  console.log('日历年月', calCurYar, calCurMonth);
  // eslint-disable-next-line no-unused-vars
  const monthArrEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const monthArrCH = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  // 日历向上翻页
  function getUpMonth() {
    if (calCurMonth === 0) {
      setCalendarDate(new Date(calCurYar - 1, 11, 1))
      // console.log('去往上一年,当前日历日期', calendarDate);
    } else {
      setCalendarDate(new Date(calCurYar, calCurMonth - 1, 1))
    }
  }
  // 日历向下翻页
  function getDownMonth() {
    if (calCurMonth === 11) {
      setCalendarDate(new Date(calCurYar + 1, 0, 1))
    } else {
      setCalendarDate(new Date(calCurYar, calCurMonth + 1, 1))
    }
  }
  return (
    <div className='calendar'>
      <CalendarHeader curYear={calCurYar} title={monthArrCH[calCurMonth]} turnDown={() => { getDownMonth() }} turnUp={() => { getUpMonth() }}></CalendarHeader>
      <CalWeekName></CalWeekName>
      <div>
        <CalContent curYear={calCurYar}  curDay={currentDay} curMonth={calCurMonth} dates={getCalendarDate(calendarDate)}></CalContent>
      </div>
    </div>
  )
}