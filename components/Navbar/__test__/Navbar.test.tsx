import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from "../Navbar"

describe("Testing if navbar is rendered", ()=>{
    test("Navbar should be rendered", ()=>{
        render(<Navbar/>);
        const navbarText = screen.queryByText("Navbar");
        expect(navbarText).toBeInTheDocument();
    })
})