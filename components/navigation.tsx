"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Wallet, ToyBrick as Brick, ChevronDown } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isConnected } = useAccount();

  return (
    <nav className='bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center space-x-2'>
            <Brick className='h-6 w-6 text-primary' />
            <span className='font-serif font-bold text-xl text-foreground'>
              TokenBricks
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#features'
              className='text-foreground hover:text-primary transition-colors'
            >
              Features
            </a>
            <a
              href='#how-it-works'
              className='text-foreground hover:text-primary transition-colors'
            >
              How It Works
            </a>
            <a
              href='#properties'
              className='text-foreground hover:text-primary transition-colors'
            >
              Properties
            </a>
            <a
              href='#about'
              className='text-foreground hover:text-primary transition-colors'
            >
              About
            </a>
          </div>

          {/* Wallet Connection with RainbowKit */}
          <div className='hidden md:flex items-center space-x-4'>
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === "authenticated");

                return (
                  <div
                    {...(!ready && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <Button
                            onClick={openConnectModal}
                            className='flex items-center space-x-2'
                          >
                            <Wallet className='h-4 w-4' />
                            <span>Connect Wallet</span>
                          </Button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <Button
                            onClick={openChainModal}
                            variant='destructive'
                            className='flex items-center space-x-2'
                          >
                            <span>Wrong network</span>
                            <ChevronDown className='h-4 w-4' />
                          </Button>
                        );
                      }

                      return (
                        <div className='flex items-center gap-2'>
                          <Button
                            onClick={openChainModal}
                            variant='outline'
                            size='sm'
                            className='flex items-center gap-1'
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 16,
                                  height: 16,
                                  borderRadius: 999,
                                  overflow: "hidden",
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? "Chain icon"}
                                    src={chain.iconUrl}
                                    style={{ width: 16, height: 16 }}
                                  />
                                )}
                              </div>
                            )}
                            <span className='hidden sm:inline'>
                              {chain.name}
                            </span>
                            <ChevronDown className='h-3 w-3' />
                          </Button>

                          <Button
                            onClick={openAccountModal}
                            variant='default'
                            className='flex items-center space-x-2'
                          >
                            <Wallet className='h-4 w-4' />
                            <span>{account.displayName}</span>
                            {account.displayBalance && (
                              <span className='hidden lg:inline text-xs'>
                                ({account.displayBalance})
                              </span>
                            )}
                          </Button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden py-4 space-y-4'>
            <a
              href='#features'
              className='block text-foreground hover:text-primary transition-colors'
            >
              Features
            </a>
            <a
              href='#how-it-works'
              className='block text-foreground hover:text-primary transition-colors'
            >
              How It Works
            </a>
            <a
              href='#properties'
              className='block text-foreground hover:text-primary transition-colors'
            >
              Properties
            </a>
            <a
              href='#about'
              className='block text-foreground hover:text-primary transition-colors'
            >
              About
            </a>

            {/* Mobile Wallet Connection */}
            <div className='pt-2 border-t border-border'>
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === "authenticated");

                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <Button
                              onClick={openConnectModal}
                              className='w-full flex items-center justify-center space-x-2'
                            >
                              <Wallet className='h-4 w-4' />
                              <span>Connect Wallet</span>
                            </Button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <Button
                              onClick={openChainModal}
                              variant='destructive'
                              className='w-full flex items-center justify-center space-x-2'
                            >
                              <span>Wrong network</span>
                            </Button>
                          );
                        }

                        return (
                          <div className='space-y-2'>
                            <Button
                              onClick={openChainModal}
                              variant='outline'
                              className='w-full flex items-center justify-center gap-2'
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 999,
                                    overflow: "hidden",
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? "Chain icon"}
                                      src={chain.iconUrl}
                                      style={{ width: 16, height: 16 }}
                                    />
                                  )}
                                </div>
                              )}
                              <span>{chain.name}</span>
                            </Button>

                            <Button
                              onClick={openAccountModal}
                              className='w-full flex items-center justify-center space-x-2'
                            >
                              <Wallet className='h-4 w-4' />
                              <span>{account.displayName}</span>
                            </Button>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
