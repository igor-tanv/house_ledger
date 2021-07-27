import React from 'react'

export default function HomeButton() {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = '/';
      }}
    >
      Main Page
    </button>
  )
}