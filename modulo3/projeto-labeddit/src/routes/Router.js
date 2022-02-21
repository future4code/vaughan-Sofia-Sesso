import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = ({ setButtonText }) => {
    return <Routes>
        <Route path='/login' element={<LoginPage setButtonText={setButtonText} />} />
        <Route path='/cadastro' element={<SignUpPage setButtonText={setButtonText} />} />
        <Route index element={<FeedPage />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='*' element={<ErrorPage />} />
    </Routes>
}

export default Router