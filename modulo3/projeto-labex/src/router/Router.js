import React from 'react'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route exact path='/' element={<HomePage />} />

                <Route exact path='/admin/trips/list' element={<AdminHomePage />} />

                <Route exact path='/admin/trips/create' element={<CreateTripPage />} />

                <Route exact path='/admin/trips/:id' element={<TripDetailsPage />} />

                <Route exact path='/login' element={<LoginPage />} />

                <Route exact path='/trips/application' element={<ApplicationFormPage />} />

                <Route exact path='/trips/list' element={<ListTripsPage />} />

            </Routes>
        </BrowserRouter>
    )
}