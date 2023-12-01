'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserLocation } from '@/context/UserLocationContext'
import { useState, useEffect } from 'react'
import { getIPAddress as fetchIPAddress, fetchUserIP } from '@/lib/api'
import { ToastContainer, toast } from 'react-toastify';
// Import toast styles in your CSS file or component
import 'react-toastify/dist/ReactToastify.css';
import { isValidIP } from '@/utils/ipValidation'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [coord, setCoord] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [ipAddress, setIPAddress] = useState('')

  useEffect(() => {
    const fetchData = async (ip) => {
      try {
        const fetchedIPAddress = await fetchIPAddress(ip);
        setIPAddress(fetchedIPAddress);
      } catch (error) {
        console.error('Error fetching IP address information:', error);
      }
    };

    const initializeIP = async () => {
      try {
        const userIP = await fetchUserIP();
        setIPAddress(userIP);
        fetchData(userIP); // Fetch additional IP information
      } catch (error) {
        console.error('Error fetching user IP:', error);
      }
    };

    initializeIP();
  }, []); // Empty dependency array, runs once on mount

  const handleClick = async () => {
    try {

      if (!isValidIP(searchInput)) {
        // Check if the input is not a valid IP address
        toast.error('Invalid IP address format');
        console.log('Invalid IP address format')
        setSearchInput('');
        // setIPAddress(coord)
        return;
      }
      const clickedIPAddress = await fetchIPAddress(searchInput);
      setIPAddress(clickedIPAddress);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMyLocation();
  }, [ipAddress]); // Run when ipAddress changes

  const getMyLocation = () => {
    if (ipAddress?.location?.lat && ipAddress?.location?.lng) {
      setCoord({
        lat: ipAddress.location.lat,
        lng: ipAddress.location.lng,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(function (pos) {
      setCoord({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserLocation.Provider
          value={{
            coord,
            handleClick,
            searchInput,
            setSearchInput,
            ipAddress,
            setIPAddress,
          }}
        >
          {children}
          <ToastContainer />
        </UserLocation.Provider>
      </body>
    </html>
  );
}
