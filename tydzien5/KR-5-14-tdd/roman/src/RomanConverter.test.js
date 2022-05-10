import { render, fireEvent } from "@testing-library/react"
import RomanConverter from './RomanConverter'

describe('RomanConverter: ', () => {
  test('has a title containg "roman converter"', () => {
    const { getByText } = render(<RomanConverter />)
    getByText(/roman converter/i)
  })
  test('has text input field with label "Arabic"', () => {
    const { getByRole } = render(<RomanConverter />)
    getByRole('textbox', { name: "Arabic" })
  })
  test('changes text input value when typing text', () => {
    const { getByRole } = render(<RomanConverter />)
    const textInput = getByRole('textbox')
    fireEvent.change(textInput, {target: { value: 'test-text' }})
    
    const value = textInput.getAttribute('value')
    expect(value).toBe('test-text')
  })
  test('has an output text with label "Roman"', () => {
    const { getByText } = render(<RomanConverter />)
    getByText("Roman")  
  })

  test.each([
    [1, 'I'],
    [19, 'XIX']
  ])('converts a %d to %s when entered to the input', (input, expectedOutput) => {
    const { getByText, getByRole } = render(<RomanConverter />)
    const textInput = getByRole('textbox')
    fireEvent.change(textInput, {target: { value: input }})

    const romanNumber = getByText(expectedOutput)
    expect(romanNumber).toBeInTheDocument()

  })
})