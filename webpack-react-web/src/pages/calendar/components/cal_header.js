export function CalendarHeader(props) {
  return (
    <div className="cal-header">
      <div className="left" onClick={props.turnUp}>&lt;</div>

      <div className="middle">
        <div className="year">
          {props.curYear}
        </div>
        {props.title}
      </div>
      <div className="right" onClick={props.turnDown}>&gt;</div>
    </div>
  )
}