import type {ReactNode} from 'react';

import styles from './styles.module.css';

type ScheduleStatus = 'normal' | 'makeup' | 'holiday' | 'tentative';

type ScheduleEntryProps = {
  week: string;
  date: string;
  dateTime: string;
  day: string;
  time: string;
  status?: ScheduleStatus;
  children: ReactNode;
  slides?: ReactNode;
};

type ScheduleMonthProps = {
  title: string;
  children: ReactNode;
};

const statusLabels: Record<ScheduleStatus, string> = {
  normal: '上课',
  makeup: '补课',
  holiday: '放假',
  tentative: '待定',
};

export function ScheduleMonth({title, children}: ScheduleMonthProps) {
  return (
    <section className={styles.month}>
      <h2 className={styles.monthTitle}>{title}</h2>
      <ul className={styles.card}>{children}</ul>
    </section>
  );
}

export function ScheduleEntry({
  week,
  date,
  dateTime,
  day,
  time,
  status = 'normal',
  children,
  slides,
}: ScheduleEntryProps) {
  return (
    <li className={styles.row}>
      <div className={styles.date}>
        <time dateTime={dateTime}>{date}</time>
        <span>星期{day}</span>
      </div>
      <div className={styles.event}>
        <span className={`${styles.badge} ${styles[`badge--${status}`]}`}>
          {statusLabels[status]}
        </span>
        <span className={styles.eventText}>{children}</span>
      </div>
      <div className={styles.resources}>
        <span>第 {week} 周</span>
        <span>{time}</span>
        {slides ? <span>Slides：{slides}</span> : null}
      </div>
    </li>
  );
}

