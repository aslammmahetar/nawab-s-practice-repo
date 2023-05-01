//test cases scenario
//check for button render
//check for parameter
//check for functionality
//check for correct function called

import { render, screen } from '@testing-library/react'
import Button from '../Components/Button'
import App from '../App'

// Syntax
//1. we will wrap all the test cases in one cont called "describe("name of test case", ()=>{we write our test here}"
//2. we catch the ele with getBy methods.
// we write syntax of it('case name', ()=>expect(com or el to test).method = value)
//3. we check if they are rendered or meeeting certain requirements.
// expect(com or el to test).method = value

describe("testing button comp", () => {
    it("button should render", () => {
        // we catch the el
        // we need to render/ call our comp to catch
        render(<App />)
        // once we call/render the comp. it will be present in a object called screen
        const button = screen.getAllByTestId("custom-button")
        // we check for the test cases
        expect(button[0]).toBeInTheDocument()
        screen.debug()
    })

    it('checking if the parameters (children) is getting passed properly or not', () => {
        render(<App />)
        const button = screen.getAllByTestId("custom-button")
        expect(button[0]).toHaveTextContent("Add")
    })

    it("check if buttons are created and getting proper children", () => {
        render(<App />)
        const buttons = screen.getAllByTestId("custom-button")
        expect(buttons[0]).toHaveTextContent("Add")
        expect(buttons[1]).toHaveTextContent("Reduce")
        expect(buttons[2]).toHaveTextContent("Reset")
    })
})