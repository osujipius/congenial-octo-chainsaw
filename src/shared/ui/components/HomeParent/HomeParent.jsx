/**
 * HomeParent.jsx
 *
 * @description A responsive landing page component with an interactive arcade-themed interface.
 * Features a central display with multiple "doors" leading to different sections of the application,
 * animated signage, and responsive layouts for various device sizes.
 *
 * @requires React hooks, Next.js components, custom responsive hooks, shared styles, and multiple image assets
 */

'use client'

import { Shared as s } from '@/shared/styles'
import { cf } from '@/shared/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import arcadeLab from '../../../../../public/images/center-door-label.png'
import homeBG from '../../../../../public/images/homeBG.png'
import homeBGiPadMiniHorizontal from '../../../../../public/images/homeBGiPadMiniHorizontal.png'
import homeBGiPadMiniVertical from '../../../../../public/images/homeBGiPadMiniVertical.png'
import homeBGiPhone14Vertical from '../../../../../public/images/homeBGiPhone14Vertical.png'
import raffles from '../../../../../public/images/left-door-label-1.png'
import loot from '../../../../../public/images/left-door-label-2.png'
import copsOnly from '../../../../../public/images/right-door-label-1.png'
import staking from '../../../../../public/images/right-door-label-2.png'
import arcadeLabHover from '../../../../../public/svg/arcadeLabOverlay.svg'
import brokenS from '../../../../../public/svg/brokenS.svg'
import collectionLink from '../../../../../public/svg/collectionLink.svg'
import connectWallet from '../../../../../public/svg/connectWallet.svg'
import copsOnlyHover from '../../../../../public/svg/copsOnlyOverlay.svg'
import crazyLabsLogo from '../../../../../public/svg/crazyLabsLogo.svg'
import doorOpen from '../../../../../public/svg/doorOpen.svg'
import lootHover from '../../../../../public/svg/lootOverlay.svg'
import missionsLink from '../../../../../public/svg/missionsLink.svg'
import rafflesLink from '../../../../../public/svg/rafflesLink.svg'
import rafflesHover from '../../../../../public/svg/rafflesOverlay.svg'
import stakingLink from '../../../../../public/svg/stakingLink.svg'
import stakingHover from '../../../../../public/svg/stakingOverlay.svg'
import h from './HomeParentExperimental.module.css'

/**
 * Door Component
 *
 * @description A reusable component that creates interactive doorways to different sections of the application.
 * Each door contains a link, signage image, and an overlay that appears on hover.
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Accessibility label for the door (default: 'door sign')
 * @param {StaticImageData} props.signage - Image for the door label
 * @param {StaticImageData} props.overlay - Hover effect image
 * @param {string} props.signageClass - Additional CSS classes for the signage image
 * @param {string} props.overlayClass - Additional CSS classes for the overlay image
 * @param {string} props.parentClass - Additional CSS classes for the door container
 * @param {string} props.link - Navigation path for the door (default: '/')
 * @returns {JSX.Element} - Door component with signage and overlay
 */
function Door({
	label = 'door sign',
	signage,
	overlay,
	signageClass = '',
	overlayClass = '',
	parentClass = '',
	link = '/',
}) {
	return (
		<Link
			href={link}
			className={cf(
				s.flex,
				s.flexLeft,
				s.flex_dColumn,
				s.p_Absolute,
				h.door,
				parentClass
			)}
		>
			<Image
				src={signage}
				alt={`${label} signage`}
				className={cf(s.p_Absolute, h.signage, signageClass)}
			/>
			<Image
				src={overlay}
				alt={`${label} overlay`}
				className={cf(h.overlay, overlayClass)}
			/>
		</Link>
	)
}

/**
 * CrazyLabsSignage Component
 *
 * @description Creates the animated "Crazy Labs" signage with a flickering effect.
 * The component randomly cycles through different background images to create
 * a neon light flickering effect. Includes original and clone elements for animation effects.
 *
 * @returns {JSX.Element} - Animated signage component with flickering effect
 */
function CrazyLabsSignage() {
	const [flickerBGClass, setFlickerBGClass] = useState('flickerSignage_1')
	const isMounted = useRef(null)

	// Array of CSS classes for different flicker states
	const FLICKER_STATES_BG = [
		'flickerSignage_1',
		'flickerSignage_2',
		'flickerSignage_3',
		'flickerSignage_4',
		'flickerSignage_5',
		'flickerSignage_6',
		'flickerSignage_7',
		'flickerSignage_8',
	]

	// Set up the flicker effect with random timing
	useEffect(() => {
		let timeoutId

		const flickerLoop = () => {
			if (!isMounted.current) return

			const nextIndex = Math.floor(Math.random() * FLICKER_STATES_BG.length)
			setFlickerBGClass(FLICKER_STATES_BG[nextIndex])

			const nextDelay = Math.floor(Math.random() * 2000 + 800)
			console.log({ nextDelay, nextIndex })
			if (timeoutId) clearTimeout(timeoutId)
			timeoutId = setTimeout(flickerLoop, nextDelay)
		}

		flickerLoop()

		return () => {
			isMounted.current = false
			clearTimeout(timeoutId)
		}
	}, [isMounted])

	return (
		<div
			className={cf(s.flex, s.flexCenter, h.cLSParent)}
			ref={isMounted}
		>
			<Image
				src={crazyLabsLogo}
				alt={`crazy labs logo`}
				className={cf(h.crazyLabsLogo)}
			/>
			<div className={cf(s.flex, s.flexCenter, h.cLSParentOriginal)}>
				<div className={cf(h.flickerCon, h?.[flickerBGClass])}></div>
				<Image
					src={brokenS}
					alt={`broken S on signage`}
					className={cf(h.brokenS)}
				/>
			</div>
			<div className={cf(s.flex, s.flexCenter, h.cLSParentClone)}>
				<div className={cf(h.flickerCon, h?.[flickerBGClass])}></div>
				<Image
					src={brokenS}
					alt={`broken S on signage clone`}
					className={cf(h.brokenS)}
				/>
			</div>
		</div>
	)
}

/**
 * MobileLink Component
 *
 * @description A simple component that creates mobile-friendly navigation links.
 * These links are displayed at the bottom of the screen on smaller devices,
 * providing alternative navigation when the door interface isn't visible.
 *
 * @param {Object} props - Component props
 * @param {string} props.href - The destination URL
 * @param {StaticImageData} props.imageSrc - The image to display for the link
 * @param {string} props.alt - Alt text for the image
 * @returns {JSX.Element} - Mobile navigation link
 */
const MobileLink = ({ href, imageSrc, alt }) => (
	<Link
		href={href}
		className={cf(h.link)}
	>
		<Image
			src={imageSrc}
			alt={alt}
			className={cf(h.linkImg)}
		/>
	</Link>
)

/**
 * HomeParent Component
 *
 * @description The main exported component that creates a responsive landing page.
 * It uses the useResponsiveState hook to determine the current device type/orientation
 * and renders appropriate layouts. Features include:
 * - Responsive background based on device size/orientation
 * - Animated CrazyLabsSignage
 * - Five interactive Door components for different application sections
 * - Interactive door open and connect wallet prompts
 * - Mobile navigation links for smaller devices
 *
 * @returns {JSX.Element} - The complete HomeParent component
 */
export default function HomeParent() {
	const isMobileEl = useRef(null)
	const isTabletPortraitEl = useRef(null)
	const isTabletLandscapeEl = useRef(null)
	const isLargeDesktopEl = useRef(null)

	//   JavaScript Fallback - Optional Enhancement
	//   For even more robust handling, consider adding this JavaScript to your component:
	useEffect(() => {
		const ensureDisplayClass = () => {
			// Check if all display classes are hidden
			if (
				isMobileEl.current &&
				isTabletPortraitEl.current &&
				isTabletLandscapeEl.current &&
				isLargeDesktopEl.current &&
				window.getComputedStyle(isMobileEl.current).display === 'none' &&
				window.getComputedStyle(isTabletPortraitEl.current).display === 'none' &&
				window.getComputedStyle(isTabletLandscapeEl.current).display === 'none' &&
				window.getComputedStyle(isLargeDesktopEl.current).display === 'none'
			) {
				// Determine which to show based on current viewport
				if (window.innerWidth >= 1025) {
					isLargeDesktopEl.current.style.display = 'inline-block'
				} else if (
					window.innerWidth >= 481 &&
					window.innerWidth <= 1024 &&
					window.innerHeight < window.innerWidth
				) {
					isTabletLandscapeEl.current.style.display = 'inline-block'
				} else if (window.innerWidth >= 481) {
					isTabletPortraitEl.current.style.display = 'inline-block'
				} else {
					isMobileEl.current.style.display = 'inline-block'
				}
			}
		}

		// Check on initial render and on resize
		ensureDisplayClass()
		window.addEventListener('resize', ensureDisplayClass)

		return () => {
			window.removeEventListener('resize', ensureDisplayClass)
		}
	}, [])

	return (
		<div
			className={cf(h.homeParent)}
			suppressHydrationWarning
		>
			<div className={cf(s.flex, s.flexTop, h.imageComponentsParent)}>
				<div
					className={cf(
						s.flex,
						s.flex_dColumn,
						s.spaceXStart,
						s.spaceYCenter,
						h.imageComponentsWrapper
					)}
				>
					<div
						className={cf(
							s.flex,
							s.flex_dColumn,
							s.spaceXStart,
							s.spaceYCenter,
							h.imageComponentsWrapperCon
						)}
					>
						{/* Responsive background image selection based on device and orientation */}

						<Image
							src={homeBGiPhone14Vertical}
							alt={'Collection Banner'}
							className={cf(s.wMax, s.hMax, s.flex, h.bg, h.isMobile)}
							priority
							ref={isMobileEl}
						/>
						<Image
							src={homeBGiPadMiniVertical}
							alt={'Collection Banner'}
							className={cf(h.bg, h.isTabletOrDesktop, h.isPortrait)}
							priority
							ref={isTabletPortraitEl}
						/>
						<Image
							src={homeBGiPadMiniHorizontal}
							alt={'Collection Banner'}
							className={cf(h.bg, h.isTabletOrDesktop, h.isLandscape)}
							priority
							ref={isTabletLandscapeEl}
						/>
						<Image
							src={homeBG}
							alt={'Collection Banner'}
							className={cf(s.wMax, s.hMax, s.flex, h.bg, h.isLargeDesktop)}
							priority
							ref={isLargeDesktopEl}
						/>
						{/* Animated flickering signage */}
						<CrazyLabsSignage />
						<div
							className={cf(
								s.wMax,
								s.hMax,
								s.flex,
								s.flexCenter,
								s.p_Absolute,
								h.signageParent
							)}
						>
							{/* TODO: Conditionally display the door open image when the user has successfully connected their wallet to the platform */}
							{/* For now it shows on hover after a 5 seconds delay */}
							<Image
								src={doorOpen}
								alt={`image showing that the arcade lab is now open`}
								className={cf(h.doorOpen)}
							/>
							{/* TODO: Conditionally display the connect wallet image prompting the user to connect their wallet to the platform */}
							{/* For now it shows on hover after a 5 seconds delay */}
							<Image
								src={connectWallet}
								alt={`image prompting the user to connect wallet`}
								className={cf(h.connectWallet)}
							/>
							{/* Door components for navigation to different sections */}
							<Door
								label={'Raffles'}
								signage={raffles}
								overlay={rafflesHover}
								signageClass={cf(h.rafflesSignage)}
								overlayClass={cf(h.rafflesOverlay)}
								parentClass={cf(h.rafflesParent)}
								link={'/raffles'}
							/>
							<Door
								label={'Loot'}
								signage={loot}
								overlay={lootHover}
								signageClass={cf(h.lootSignage)}
								overlayClass={cf(h.lootOverlay)}
								parentClass={cf(h.lootParent)}
								link={'/loot'}
							/>
							<Door
								label={'Arcade Lab'}
								signage={arcadeLab}
								overlay={arcadeLabHover}
								signageClass={cf(h.arcadeLabSignage)}
								overlayClass={cf(h.arcadeLabOverlay)}
								parentClass={cf(h.arcadeLabParent)}
								link={'/arcade-lab'}
							/>
							<Door
								label={'Staking'}
								signage={staking}
								overlay={stakingHover}
								signageClass={cf(h.stakingSignage)}
								overlayClass={cf(h.stakingOverlay)}
								parentClass={cf(h.stakingParent)}
								link={'/staking'}
							/>
							<Door
								label={"Cop's Only"}
								signage={copsOnly}
								overlay={copsOnlyHover}
								signageClass={cf(h.copsOnlySignage)}
								overlayClass={cf(h.copsOnlyOverlay)}
								parentClass={cf(h.copsOnlyParent)}
								link={'/cops-only'}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Mobile navigation links displayed on smaller screens and touch devices */}
			<div
				className={cf(
					s.wMax,
					s.flex,
					s.flexRight,
					s.flex_dColumn,
					h.linksParent
				)}
			>
				<div className={cf(s.wMax, s.flex, s.flexCenter, h.linksWrapper)}>
					<MobileLink
						href={'/collections'}
						imageSrc={collectionLink}
						alt={'Collections link'}
					/>
					<MobileLink
						href={'/staking'}
						imageSrc={stakingLink}
						alt={'Staking link'}
					/>
					<MobileLink
						href={'/raffles'}
						imageSrc={rafflesLink}
						alt={'Raffles link'}
					/>
					<MobileLink
						href={'/missions'}
						imageSrc={missionsLink}
						alt={'Missions link'}
					/>
				</div>
			</div>
		</div>
	)
}
