"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Wallet, ToyBrick as Brick } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const connectWallet = () => {
    // Simulate wallet connection
    setIsConnected(!isConnected)
  }

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Brick className="h-6 w-6 text-primary" />
            <span className="font-serif font-bold text-xl text-foreground">TokenBricks</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#properties" className="text-foreground hover:text-primary transition-colors">
              Properties
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* Wallet Connection */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={connectWallet}
              variant={isConnected ? "outline" : "default"}
              className="flex items-center space-x-2"
            >
              <Wallet className="h-4 w-4" />
              <span>{isConnected ? "0x1234...5678" : "Connect Wallet"}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#properties" className="block text-foreground hover:text-primary transition-colors">
              Properties
            </a>
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button
              onClick={connectWallet}
              variant={isConnected ? "outline" : "default"}
              className="w-full flex items-center justify-center space-x-2"
            >
              <Wallet className="h-4 w-4" />
              <span>{isConnected ? "0x1234...5678" : "Connect Wallet"}</span>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
