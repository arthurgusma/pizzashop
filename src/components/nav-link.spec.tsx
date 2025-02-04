import { describe, expect, it, vi } from "vitest";
import { render } from '@testing-library/react' 
import '@testing-library/jest-dom/vitest'
import { NavLink } from "./nav-link";
import { MemoryRouter } from "react-router";

describe("nav-link", () => {
    it("should should highlight the nav link when path matches path", () => {
       const wrapper = render(
       <>
        <NavLink to={"/"}>Home</NavLink>       
        <NavLink to={"/dashboard"}>dashboard</NavLink>
       </>, 
       {
        wrapper: ({children}) => {
             return (
                <MemoryRouter initialEntries={['/dashboard']}>
                    {children}
                </MemoryRouter>
             )
        }
       })

       expect(wrapper.getByText("dashboard").dataset.current).toEqual("true")
       expect(wrapper.getByText("Home").dataset.current).toEqual("false")

    })
})