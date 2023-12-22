export const getCalendarDate = (currentTime) => {
  console.log('日历的开始日期', currentTime);
  let calendatArr = [];
  // 获取当前所在的年月
  const { year, month } = getYearMonthDay(currentTime)
  // 首先获取当前月的第一天
  const firstDay = new Date(year, month, 1)
  // 获取第一天是周几
  const weekDay = firstDay.getDay() || 1   // 第一天为周日的话 为0  变为1
  // 获取日历的开始时间
  const startTime = firstDay - (weekDay - 1) * 24 * 60 * 60 * 1000
  console.log('开始时间', new Date(startTime) , weekDay);
  for (let i = 0; i < 42; i++) {
    calendatArr.push({
      date: new Date(startTime + i * 24 * 60 * 60 * 1000),
      year: year,
      month: new Date(startTime + i * 24 * 60 * 60 * 1000).getMonth(),
      day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate()
    })
  }
  // console.log(calendatArr);
  return calendatArr
}

export const getYearMonthDay = (currentTime) => {
  const year = currentTime.getFullYear()
  const month = currentTime.getMonth()
  const day = currentTime.getDate()
  return { year, month, day }
}

