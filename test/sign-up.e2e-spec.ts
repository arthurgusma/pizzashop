import { test, expect } from '@playwright/test';

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByLabel("Nome do estabelecimento").fill("Pizza Shop")
  await page.getByLabel('Seu nome').fill("Romero Brito")

  await page.getByLabel('Seu e-mail').fill("teste@example.com")
  await page.getByLabel('Seu celular').fill("11989898989")

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText(
    'Restaurante cadastrado com sucesso!',
  )
  expect(toast).toBeVisible()
});

test('sign up error', async ({ page }) => {
    await page.goto('/sign-up', { waitUntil: 'networkidle' });

    await page.getByLabel("Nome do estabelecimento").fill("Pizzeria")
    await page.getByLabel('Seu nome').fill("Romero Brito")
  
    await page.getByLabel('Seu e-mail').fill("teste@example.com")
    await page.getByLabel('Seu celular').fill("11989898989")
  
    await page.getByRole('button', { name: 'Finalizar cadastro' }).click()
  
    const toast = page.getByText(
      'Erro ao cadastrar restaurante.',
    )
    expect(toast).toBeVisible()
});

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Fazer login' }).click()
  expect(page.url()).toContain('/sign-in')
})