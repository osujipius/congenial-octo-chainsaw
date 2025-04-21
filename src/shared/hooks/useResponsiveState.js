'use client'
import { useState, useEffect } from 'react'

export const useResponsiveState = () => {
	// Define breakpoints using min-width thresholds (mobile-first)
	const BREAKPOINTS = {
		SMALL: 481, // Above tiny (481px+)
		MEDIUM: 769, // Above small (769px+)
		LARGE: 1025, // Desktop size (1025px+)
	}

	// Start with mobile defaults (assuming mobile-first)
	const [responsiveState, setResponsiveState] = useState({
		// Mobile-first properties
		isMobile: true, // Base mobile state (default for all devices)
		isTablet: false, // 481px and up
		isDesktop: false, // 769px and up
		isLargeDesktop: false, // 1025px and up

		// Orientation states
		isLandscape: false,
		isPortrait: true,

		// Original properties for compatibility
		isSmall: false, // 769px and below (kept for backward compatibility)
		isSmallLandscape: false,
		isTiny: false, // 481px and below (kept for backward compatibility)
		isTinyLandscape: false,
		isTouchDevice: false,
	})

	useEffect(() => {
		const getState = () => {
			const width = window.innerWidth
			const isLandscape = window.matchMedia('(orientation: landscape)').matches
			const isTouchDevice = window.matchMedia('(hover: none)').matches

			return {
				// Mobile-first properties
				isMobile: true, // Always true as base state in mobile-first approach
				isTablet: width >= BREAKPOINTS.SMALL,
				isDesktop: width >= BREAKPOINTS.MEDIUM,
				isLargeDesktop: width >= BREAKPOINTS.LARGE,

				// Orientation
				isLandscape,
				isPortrait: !isLandscape,

				// Original properties (for backward compatibility)
				isSmall: width <= 769,
				isSmallLandscape: width <= 769 && isLandscape,
				isTiny: width <= 481,
				isTinyLandscape: width <= 481 && isLandscape,
				isTouchDevice,
			}
		}

		// Initial update after the window exists
		setResponsiveState(getState())

		let animationFrameId
		const handleResize = () => {
			if (animationFrameId) cancelAnimationFrame(animationFrameId)
			animationFrameId = requestAnimationFrame(() => {
				setResponsiveState(getState())
			})
		}

		window.addEventListener('resize', handleResize)
		window.addEventListener('orientationchange', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('orientationchange', handleResize)
			if (animationFrameId) cancelAnimationFrame(animationFrameId)
		}
	}, [])

	return responsiveState
}
