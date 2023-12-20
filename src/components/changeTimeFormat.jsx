import React from "react";

const changeTimeFormat = (Component) => {
  return class DateTime extends React.Component {
    getMinutes() {
      const minutes = ((Date.now() - new Date(this.props.date).getTime()) / 60000);
      if (minutes <= 60) {
        const min = Math.floor(minutes);
        const lastDigit = days % 10;
        if (lastDigit === 1) {
          return `${min} минуту назад`;
        }
        if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
          return `${min} минуты назад`;
        }
        return `${min} минут назад`;
      } else if (minutes > 60 && minutes <= 1440) {
        const hours = Math.floor(minutes / 1440);
        const lastDigit = days % 10;
        if (lastDigit === 1) {
          return `${hours} час назад`;
        }
        if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
          return `${hours} часа назад`;
        }
        return `${hours} часов назад`;
      } else if (minutes > 1440) {
        const days = Math.floor(minutes / 1440);
        const lastDigit = days % 10;
        if (lastDigit === 1) {
          return `${days} день назад`;
        }
        if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
          return `${days} дня назад`;
        }
        return `${days} дней назад`;
      }
    }

    render() {
      return <Component props={this.getMinutes()} />
    }
  }
}

export default changeTimeFormat
