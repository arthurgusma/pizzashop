import { describe, expect, it, vi, beforeEach } from "vitest";
import { render } from '@testing-library/react' 
import '@testing-library/jest-dom/vitest'
import { Pagination } from "./pagination";
import userEvent from '@testing-library/user-event'

const onPageChange = vi.fn()

describe("pagination", () => {
    beforeEach(() => {
        onPageChange.mockClear()
    })

    it("should display pagination menu", () => {
        const wrapper = render(<Pagination 
            onPageChange={() => {}}
            pageIndex={0}
            perPage={10}
            totalCount={200}
        />)

        expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument()
        expect(wrapper.getByText("Página 1 de 20"))
        
    })

    it("should display navigate to next page", async () => {
        const wrapper = render(<Pagination 
            onPageChange={onPageChange}
            pageIndex={0}
            perPage={10}
            totalCount={200}
        />)

        const user = userEvent.setup()

        const button = wrapper.getByRole("button", {
            name: "Próxima página"
        })

        await user.click(button)

        expect(onPageChange).toHaveBeenCalledWith(1)
        
    })

    it("should display navigate to the previews page", async () => {
        const wrapper = render(<Pagination 
            onPageChange={onPageChange}
            pageIndex={5}
            perPage={10}
            totalCount={200}
        />)

        const user = userEvent.setup()

        const button = wrapper.getByRole("button", {
            name: "Página anterior"
        })

        await user.click(button)

        expect(onPageChange).toHaveBeenCalledWith(4)
        
    })


    it("should display navigate to the first page", async () => {
        const wrapper = render(<Pagination 
            onPageChange={onPageChange}
            pageIndex={5}
            perPage={10}
            totalCount={200}
        />)

        const user = userEvent.setup()

        const button = wrapper.getByRole("button", {
            name: "Primeira página"
        })

        await user.click(button)

        expect(onPageChange).toHaveBeenCalledWith(0)
        
    })


    it("should display navigate to the last page", async () => {
        const wrapper = render(<Pagination 
            onPageChange={onPageChange}
            pageIndex={5}
            perPage={10}
            totalCount={200}
        />)

        const user = userEvent.setup()

        const button = wrapper.getByRole("button", {
            name: "Última página"
        })

        await user.click(button)

        expect(onPageChange).toHaveBeenCalledWith(19)
        
    })
})