"use client"

import { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function Context({ children }) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}