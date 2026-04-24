'use client'

import { useCallback, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre'
import type { MapRef } from 'react-map-gl/maplibre'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

import { MOCK_RESTAURANTS } from '@/data/restaurants'
import { useParams } from 'next/navigation'
import Image from 'next/image'

export interface Restaurant {
  id: number
  name: string
  lat: number
  lng: number
  cuisine: string
  image?: string
}

interface RestaurantMapProps {
  restaurants?: Restaurant[]
  height?: string
}

const JAPAN_CENTER = {
  longitude: 138.0,
  latitude: 36.0,
  zoom: 4,
}

const loadingFallback = (
  <div
    className='relative rounded-2xl overflow-hidden border border-border shadow-lg bg-muted animate-pulse'
    style={{ width: '100%', height: '100%' }}
  />
)

function RestaurantMapInner({ restaurants = MOCK_RESTAURANTS }: RestaurantMapProps) {
  const mapRef = useRef<MapRef>(null)
  const params = useParams()
  const lang = (params?.lang as string) || 'en'

  const mapStyle = `https://api.maptiler.com/maps/dataviz/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}&language=${lang}`

  const fitBounds = useCallback(() => {
    if (!mapRef.current || restaurants.length === 0) return

    const bounds = new maplibregl.LngLatBounds()
    restaurants.forEach((r) => {
      bounds.extend([r.lng, r.lat])
    })

    mapRef.current.fitBounds(bounds, {
      padding: 100,
      duration: 2000,
      maxZoom: 15,
    })
  }, [restaurants])

  const handleMapLoad = useCallback(() => {
    fitBounds()
  }, [fitBounds])

  useEffect(() => {
    fitBounds()
  }, [fitBounds])

  return (
    <div className='relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-border shadow-lg'>
      <Map
        ref={mapRef}
        initialViewState={JAPAN_CENTER}
        minZoom={2}
        maxZoom={18}
        reuseMaps
        style={{ width: '100%', height: '100%' }}
        mapStyle={mapStyle}
        onLoad={handleMapLoad}
      >
        <NavigationControl position='top-right' />

        {restaurants.map((r) => (
          <Marker key={r.id} longitude={r.lng} latitude={r.lat} anchor='bottom'>
            <div className='group relative flex flex-col items-center'>
              <div className='absolute bottom-full mb-2 hidden group-hover:block bg-background/95 backdrop-blur-sm border border-border px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-50 animate-in fade-in slide-in-from-bottom-2'>
                <p className='text-sm font-bold'>{r.name}</p>
                <p className='text-xs text-muted-foreground'>{r.cuisine}</p>
              </div>

              <div className='relative w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:border-primary cursor-pointer drop-shadow-md hover:drop-shadow-xl z-10 bg-muted flex items-center justify-center'>
                {r.image ? (
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes='40px'
                    className='object-cover'
                  />
                ) : (
                  <span className='text-xs font-semibold text-muted-foreground'>
                    {r.name.charAt(0)}
                  </span>
                )}
              </div>

              <div className='absolute -bottom-1 w-4 h-1.5 bg-black/30 rounded-[100%] blur-[2px] group-hover:bg-primary/40 transition-colors duration-300' />
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

const RestaurantMap = dynamic(() => Promise.resolve(RestaurantMapInner), {
  ssr: false,
  loading: () => loadingFallback,
})

export default RestaurantMap
