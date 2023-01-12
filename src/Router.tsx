import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { CheckoutPage } from './pages/Checkout/Index'
import { Home } from './pages/Home/Index'
import { SuccessOrder } from './pages/SuccessOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/successOrder" element={<SuccessOrder />} />
      </Route>
    </Routes>
  )
}
