import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Dashboard } from './pages/Dashboard';
import { ReportPage } from './pages/Report';
import { Import } from './pages/Import';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Dashboard />}/>
        <Route path='import' element={<Import />}/>
        <Route path='report' element={<ReportPage />}/>
      </Route>
    </Routes>
  )
}