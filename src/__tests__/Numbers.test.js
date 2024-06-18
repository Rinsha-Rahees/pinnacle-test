import { fireEvent, render, screen } from "@testing-library/react"
import Numbers from "../components/Numbers"
import { act } from "react"


test("Should verify ascending and descending", async () => {
    await act(() => render(<Numbers/>))

    const display = screen.getByTestId("display")
    expect(display).toHaveTextContent("15672")

    const ascBtn = screen.getByText("Ascending")
    const dscBtn = screen.getByText("Descending")

    fireEvent.click(ascBtn)
    expect(display).toHaveTextContent("12567")
    
    fireEvent.click(dscBtn)
    expect(display).toHaveTextContent("76521")


})