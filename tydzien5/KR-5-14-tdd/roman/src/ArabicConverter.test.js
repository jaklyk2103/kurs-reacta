import { render, fireEvent } from "@testing-library/react"
import ArabicConverter from './ArabicConverter'

describe('ArabicConverter: ', () => {
  test('has a title containg "arabic converter"', () => {
    const { getByText } = render(<ArabicConverter />)
    getByText(/arabic converter/i)
  })
  test('has text input field with label "Roman"', () => {
    const { getByRole } = render(<ArabicConverter />)
    getByRole('textbox', { name: "Roman" })
  })
  test('changes text input value when typing text', () => {
    const { getByRole } = render(<ArabicConverter />)
    const textInput = getByRole('textbox')
    fireEvent.change(textInput, {target: { value: 'X' }})
    
    const value = textInput.getAttribute('value')
    expect(value).toBe('X')
  })
  test('has an output text with label "Arabic"', () => {
    const { getByText } = render(<ArabicConverter />)
    getByText("Arabic")  
  })

  test.each([
    ['I', 1],
    ['XIX', 19]
  ])('converts a %s to %d when entered to the input', (input, expectedOutput) => {
    const { getByText, getByRole } = render(<ArabicConverter />)
    const textInput = getByRole('textbox')
    fireEvent.change(textInput, {target: { value: input }})

    const arabicNumber = getByText(expectedOutput)
    expect(arabicNumber).toBeInTheDocument()

  })
})