import { describe, expect, it, vi } from "vitest";
import { render } from '@testing-library/react' 
import '@testing-library/jest-dom/vitest'
import { MemoryRouter } from "react-router";
import { SignIn } from "./signin";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { HelmetProvider } from "react-helmet-async";

describe("sing-oin", () => {
    it("should set default email input value if email is present on search params", () => {
       const wrapper = render(
       <>
        <SignIn />
       </>, 
       {
        wrapper: ({children}) => {
             return (
                <MemoryRouter initialEntries={['/sing-in?email=john.doe@email.com']}>
                    <HelmetProvider >
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                    </HelmetProvider>
                </MemoryRouter>
             )
        }
       })

       const emailInput = wrapper.getByLabelText("Seu e-mail")

       expect(emailInput).toHaveValue("john.doe@email.com")
    })
})