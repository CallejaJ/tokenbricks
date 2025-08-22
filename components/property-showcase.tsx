// src/components/PropertyShowcase.tsx
"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  BatteryMedium as Ethereum,
  Wallet,
} from "lucide-react";

// Mock data basado en la estructura del código original
const mockProperties = [
  {
    id: 1,
    name: "Modern Downtown Loft",
    image: "/modern-downtown-loft.png",
    address: "123 Main St, Downtown, NY 10001",
    description:
      "A stunning modern loft in the heart of downtown with floor-to-ceiling windows and premium finishes.",
    attributes: [
      { trait_type: "Purchase Price", value: "20" },
      { trait_type: "Type of Residence", value: "Condo" },
      { trait_type: "Bed Rooms", value: "2" },
      { trait_type: "Bathrooms", value: "2" },
      { trait_type: "Square Feet", value: "1,200" },
      { trait_type: "Year Built", value: "2018" },
    ],
  },
  {
    id: 2,
    name: "Luxury Beachfront Villa",
    image: "/luxury-beachfront-villa.png",
    address: "456 Ocean Drive, Miami Beach, FL 33139",
    description:
      "Exclusive beachfront property with panoramic ocean views and private beach access.",
    attributes: [
      { trait_type: "Purchase Price", value: "45" },
      { trait_type: "Type of Residence", value: "Villa" },
      { trait_type: "Bed Rooms", value: "4" },
      { trait_type: "Bathrooms", value: "3" },
      { trait_type: "Square Feet", value: "3,500" },
      { trait_type: "Year Built", value: "2020" },
    ],
  },
  {
    id: 3,
    name: "Mountain View Cabin",
    image: "/mountain-cabin-exterior.png",
    address: "789 Pine Ridge, Aspen, CO 81611",
    description:
      "Cozy mountain retreat with breathtaking views and rustic charm, perfect for year-round living.",
    attributes: [
      { trait_type: "Purchase Price", value: "15" },
      { trait_type: "Type of Residence", value: "Cabin" },
      { trait_type: "Bed Rooms", value: "3" },
      { trait_type: "Bathrooms", value: "2" },
      { trait_type: "Square Feet", value: "1,800" },
      { trait_type: "Year Built", value: "2019" },
    ],
  },
  {
    id: 4,
    name: "Urban Penthouse Suite",
    image: "/urban-penthouse-city-view.png",
    address: "321 Sky Tower, Los Angeles, CA 90210",
    description:
      "Spectacular penthouse with 360-degree city views, rooftop terrace, and luxury amenities.",
    attributes: [
      { trait_type: "Purchase Price", value: "75" },
      { trait_type: "Type of Residence", value: "Penthouse" },
      { trait_type: "Bed Rooms", value: "3" },
      { trait_type: "Bathrooms", value: "3" },
      { trait_type: "Square Feet", value: "2,800" },
      { trait_type: "Year Built", value: "2021" },
    ],
  },
];

const EthLogo = () => (
  <svg
    width='11'
    height='18'
    viewBox='0 0 11 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='ml-1 inline-block align-middle'
  >
    <path d='M5.5 0L0 9.18L5.5 12.426L11 9.18L5.5 0Z' fill='currentColor' />
    <path
      d='M5.5 13.446L0 10.2L5.5 17.9999L11 10.2L5.5 13.446Z'
      fill='currentColor'
    />
  </svg>
);

export default function PropertyShowcase() {
  interface PropertyAttribute {
    trait_type: string;
    value: string;
  }

  interface Property {
    id: number;
    name: string;
    image: string;
    address: string;
    description: string;
    attributes: PropertyAttribute[];
  }

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const { address: account, isConnected } = useAccount();

  interface Property {
    id: number;
    name: string;
    image: string;
    address: string;
    description: string;
    attributes: PropertyAttribute[];
  }

  const formatAddress = (address: `0x${string}` | undefined): string => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <section className='py-20 bg-gradient-to-b from-slate-50 to-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-slate-900 mb-4'>
            Featured Properties
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
            Discover premium real estate opportunities tokenized on the
            blockchain
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {mockProperties.map((property) => (
            <Card
              key={property.id}
              className='group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg'
            >
              <div className='relative overflow-hidden rounded-t-lg'>
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <Badge className='absolute top-3 right-3 bg-blue-600 hover:bg-blue-700'>
                  <Ethereum className='w-3 h-3 mr-1' />
                  NFT
                </Badge>
              </div>

              <CardContent className='p-6'>
                <div className='flex justify-between items-start mb-3'>
                  <h3 className='font-semibold text-lg text-slate-900 line-clamp-1'>
                    {property.name}
                  </h3>
                  <div className='flex items-center text-blue-600 font-bold text-lg'>
                    {property.attributes[0].value}
                    <EthLogo />
                  </div>
                </div>

                <div className='flex items-center text-slate-600 mb-4'>
                  <MapPin className='w-4 h-4 mr-1' />
                  <span className='text-sm line-clamp-1'>
                    {property.address}
                  </span>
                </div>

                <div className='flex items-center justify-between text-sm text-slate-600 mb-4'>
                  <div className='flex items-center'>
                    <Bed className='w-4 h-4 mr-1' />
                    <span>{property.attributes[2].value}</span>
                  </div>
                  <div className='flex items-center'>
                    <Bath className='w-4 h-4 mr-1' />
                    <span>{property.attributes[3].value}</span>
                  </div>
                  <div className='flex items-center'>
                    <Square className='w-4 h-4 mr-1' />
                    <span>{property.attributes[4].value}</span>
                  </div>
                </div>

                <Button
                  className='w-full bg-blue-600 hover:bg-blue-700'
                  onClick={() => setSelectedProperty(property)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center'>
          <Button
            variant='outline'
            size='lg'
            className='border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent'
          >
            View All Properties
          </Button>
        </div>

        {/* Property Modal */}
        {selectedProperty && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
              <div className='relative'>
                <button
                  onClick={() => setSelectedProperty(null)}
                  className='absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100'
                  aria-label='Close'
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>

                <div className='grid md:grid-cols-2 gap-8 p-8'>
                  <div>
                    <img
                      src={selectedProperty.image || "/placeholder.svg"}
                      alt={selectedProperty.name}
                      className='w-full h-64 md:h-80 object-cover rounded-lg'
                    />
                  </div>

                  <div>
                    <div className='flex justify-between items-start mb-4'>
                      <h2 className='text-2xl font-bold text-slate-900'>
                        {selectedProperty.name}
                      </h2>
                      <div className='flex items-center text-blue-600 font-bold text-2xl'>
                        {selectedProperty.attributes[0].value}
                        <span className='ml-2 text-lg'>ETH</span>
                        <EthLogo />
                      </div>
                    </div>

                    <div className='flex items-center text-slate-600 mb-6'>
                      <MapPin className='w-5 h-5 mr-2' />
                      <span>{selectedProperty.address}</span>
                    </div>

                    <div className='grid grid-cols-3 gap-4 mb-6'>
                      <div className='text-center p-3 bg-slate-50 rounded-lg'>
                        <Bed className='w-6 h-6 mx-auto mb-1 text-slate-600' />
                        <div className='font-semibold'>
                          {selectedProperty.attributes[2].value}
                        </div>
                        <div className='text-sm text-slate-600'>Bedrooms</div>
                      </div>
                      <div className='text-center p-3 bg-slate-50 rounded-lg'>
                        <Bath className='w-6 h-6 mx-auto mb-1 text-slate-600' />
                        <div className='font-semibold'>
                          {selectedProperty.attributes[3].value}
                        </div>
                        <div className='text-sm text-slate-600'>Bathrooms</div>
                      </div>
                      <div className='text-center p-3 bg-slate-50 rounded-lg'>
                        <Square className='w-6 h-6 mx-auto mb-1 text-slate-600' />
                        <div className='font-semibold'>
                          {selectedProperty.attributes[4].value}
                        </div>
                        <div className='text-sm text-slate-600'>Sq Ft</div>
                      </div>
                    </div>

                    {!isConnected ? (
                      <div className='mb-6'>
                        <p className='text-slate-600 mb-4'>
                          Connect your wallet to interact with this property
                        </p>
                        <ConnectButton.Custom>
                          {({ openConnectModal }) => (
                            <Button
                              onClick={openConnectModal}
                              className='w-full bg-blue-600 hover:bg-blue-700'
                            >
                              <Wallet className='w-4 h-4 mr-2' />
                              Connect Wallet
                            </Button>
                          )}
                        </ConnectButton.Custom>
                      </div>
                    ) : (
                      <div className='mb-6'>
                        <div className='flex gap-3 mb-4'>
                          <Button className='flex-1 bg-blue-600 hover:bg-blue-700'>
                            Buy Property
                          </Button>
                          <Button
                            variant='outline'
                            className='flex-1 bg-transparent'
                          >
                            Contact Agent
                          </Button>
                        </div>
                        <div className='text-sm text-slate-600 bg-slate-50 p-3 rounded-lg'>
                          Connected: {formatAddress(account)}
                        </div>
                      </div>
                    )}

                    <div className='mb-6'>
                      <h3 className='text-lg font-semibold mb-3'>Overview</h3>
                      <p className='text-slate-600'>
                        {selectedProperty.description}
                      </p>
                    </div>

                    <div>
                      <h3 className='text-lg font-semibold mb-3'>
                        Property Details
                      </h3>
                      <div className='space-y-2'>
                        {selectedProperty.attributes.map((attr, index) => (
                          <div
                            key={index}
                            className='flex justify-between py-2 border-b border-slate-100 last:border-b-0'
                          >
                            <span className='text-slate-600'>
                              {attr.trait_type}
                            </span>
                            <span className='font-medium'>{attr.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
