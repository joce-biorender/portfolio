"use client"

import { useState, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react'

interface WorkflowViewerProps {
  imageSrc: string
  title: string
  description: string
}

export function WorkflowViewer({ imageSrc, title, description }: WorkflowViewerProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [scale, setScale] = useState(0.3) // Start zoomed out to show full image
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleZoomIn = useCallback(() => {
    setScale(prev => Math.min(prev * 1.1, 5))
  }, [])

  const handleZoomOut = useCallback(() => {
    setScale(prev => Math.max(prev / 1.1, 0.1))
  }, [])

  const handleReset = useCallback(() => {
    setScale(0.3) // Reset to show full image
    setPosition({ x: 0, y: 0 })
  }, [])

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.95 : 1.05
    setScale(prev => Math.max(0.1, Math.min(5, prev * delta)))
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0) { // Left mouse button
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      })
    }
  }, [position])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }, [isDragging, dragStart])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0]
      setIsDragging(true)
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      })
    }
  }, [position])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      const touch = e.touches[0]
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      })
    }
  }, [isDragging, dragStart])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  return (
    <div className="mt-6">
      {/* Toggle Button */}
      <div className="flex items-center justify-between">
        <div>
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent font-normal px-6 py-2 rounded-none"
          >
            <Move className="w-4 h-4 mr-2" />
            {isExpanded ? 'Hide' : 'Explore'} the Full Workflow
            {isExpanded ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
          </Button>
          {description && (
            <p className="text-xs text-muted-foreground mt-2">
              Interactive zoomable diagram showing all {title.toLowerCase()} steps
            </p>
          )}
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="mt-6 bg-card/30 rounded-lg border border-border overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <h3 className="font-medium text-foreground">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 p-4 border-b border-border bg-card/50">
            <Button
              onClick={handleZoomOut}
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-foreground hover:text-background"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleZoomIn}
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-foreground hover:text-background"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-foreground hover:text-background"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
            <div className="text-xs text-muted-foreground ml-4">
              Zoom: {Math.round(scale * 100)}% | Use mouse wheel or pinch to zoom | Click and drag to pan
            </div>
          </div>

          {/* Image Container */}
          <div
            ref={containerRef}
            className="h-96 overflow-hidden relative cursor-grab active:cursor-grabbing bg-white"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
              }}
            >
              <img
                src={imageSrc}
                alt={`${title} workflow diagram`}
                className="max-w-none select-none"
                draggable={false}
                style={{
                  maxHeight: 'none',
                  maxWidth: 'none'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
