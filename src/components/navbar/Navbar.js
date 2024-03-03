"use client"
import React from 'react'
import { Nav1, Nav2 } from './components/Nav'
import { Nav3 } from './components/Nav'

export function MainNavBar() {
  return (
    <div className='sticky top-0 z-10'>
      <Nav1 />
      <Nav2 />
    </div>
  )
}

export function AuthNavBar() {
  return (
    <Nav3 />
  )
}