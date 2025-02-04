import { expect, it, describe } from 'vitest' 
import { render } from '@testing-library/react' 
import { OrderStatus } from './order-status'
import '@testing-library/jest-dom/vitest'

describe("order Status", () => {
  it("should display the status pending", () => {
    const status = render(<OrderStatus status='pending'/>)

    expect(status.getByText('Pendente')).toBeInTheDocument()
  })

  it("should display the status canceled", () => {
    const status = render(<OrderStatus status='canceled'/>)

    expect(status.getByText('Cancelado')).toBeInTheDocument()
  })

  it("should display the status processing", () => {
    const status = render(<OrderStatus status='processing'/>)

    expect(status.getByText('Em preparo')).toBeInTheDocument()
  })

  it("should display the status delivering", () => {
    const status = render(<OrderStatus status='delivering'/>)

    expect(status.getByText('Em entrega')).toBeInTheDocument()
  })

  it("should display the status delivered", () => {
    const status = render(<OrderStatus status='delivered'/>)

    expect(status.getByText('Entregue')).toBeInTheDocument()
  })
})