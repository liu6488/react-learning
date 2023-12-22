// export function CalContent(props) {
//   return (
//     <>
//       {props.dates.map((date, index) => (
//         <span key={index} className={
//           date.month === props.curMonth ? (date.day === props.curDay && new Date().getMonth() === date.month ? 'today' : '') : 'not-cur-month'
//         }>
//           {date.day}
//         </span>
//       ))
//       }
//     </>
//   )
// }

import classNames from 'classnames/bind';
import styles from '../style.css';
const classnames = classNames.bind(styles)
export function CalContent(props) {
  return (
    <>
      {props.dates.map((date, index) => (
        <span key={index} className={classnames({
          'not-cur-month': date.month !== props.curMonth,
          'today': date.day === props.curDay && new Date().getMonth() === date.month && date.year === new Date().getFullYear()
        })}>
          {date.day}
        </span>
      ))
      }
    </>
  )
}
