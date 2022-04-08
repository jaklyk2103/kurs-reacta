import { render, screen } from '@testing-library/react'
import { Timer } from "./Timer"

describe('Timer tests', () => {
  const setup = (hours, minutes, seconds, milliseconds) => {
    render(<Timer hours={hours} minutes={minutes} seconds={seconds} milliseconds={milliseconds}></Timer>)
  }

  test.each([
    {hours: null, minutes: 12, seconds: 0, milliseconds: null, expected: '12:00'},
    {hours: null, minutes: 0, seconds: 5, milliseconds: null, expected: '00:05'},
    {hours: null, minutes: 0, seconds: 0, milliseconds: null, expected: '00:00'},
    {hours: null, minutes: 12, seconds: 15, milliseconds: null, expected: '12:15'},
    {hours: null, minutes: 4, seconds: 2, milliseconds: null, expected: '04:02'},
    {hours: null, minutes: 4, seconds: 15, milliseconds: null, expected: '04:15'},
    {hours: null, minutes: 12, seconds: 5, milliseconds: null, expected: '12:05'},
    {hours: null, minutes: 15, seconds: 99, milliseconds: null, expected: '15:59'},
    {hours: null, minutes: 99, seconds: 23, milliseconds: null, expected: '59:23'},
    {hours: null, minutes: 99, seconds: 99, milliseconds: null, expected: '59:59'},
    {hours: 0, minutes: 12, seconds: 5, milliseconds: null, expected: '00:12:05'},
    {hours: 1, minutes: 12, seconds: 5, milliseconds: null, expected: '01:12:05'},
    {hours: 10, minutes: 12, seconds: 5, milliseconds: null, expected: '10:12:05'},
    {hours: 23, minutes: 12, seconds: 5, milliseconds: null, expected: '23:12:05'},
    {hours: 99, minutes: 12, seconds: 5, milliseconds: null, expected: '23:12:05'},
    {hours: 23, minutes: 12, seconds: 5, milliseconds: 0, expected: '23:12:05:000'},
    {hours: 23, minutes: 12, seconds: 5, milliseconds: 1, expected: '23:12:05:001'},
    {hours: 23, minutes: 12, seconds: 5, milliseconds: 11, expected: '23:12:05:011'},
    {hours: 23, minutes: 12, seconds: 5, milliseconds: 111, expected: '23:12:05:111'},
    {hours: 23, minutes: 12, seconds: 5, milliseconds: 1111, expected: '23:12:05:999'},
    {hours: -19, minutes: -123, seconds: -5, milliseconds: -1111, expected: '00:00:00:000'},
    {hours: 999, minutes: 999, seconds: 999, milliseconds: 9999, expected: '23:59:59:999'},
  ])('Should display time correctly for hours:$hours, minutes:$minutes, seconds:$seconds, milliseconds:$milliseconds', ({hours, minutes, seconds, milliseconds, expected}) => {
    setup(hours, minutes, seconds, milliseconds)
    const displayedTime = screen.getByText(expected)

    expect(displayedTime).toBeDefined()
  })
})