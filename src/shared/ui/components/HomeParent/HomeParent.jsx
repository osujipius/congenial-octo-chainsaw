'use client'

import { useResponsiveState } from '@/shared/hooks'
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
import connectWallet from '../../../../../public/svg/connectWallet.svg'
import collectionLink from '../../../../../public/svg/collectionLink.svg'
import missionsLink from '../../../../../public/svg/missionsLink.svg'
import rafflesLink from '../../../../../public/svg/rafflesLink.svg'
import stakingLink from '../../../../../public/svg/stakingLink.svg'
import copsOnlyHover from '../../../../../public/svg/copsOnlyOverlay.svg'
import crazyLabsLogo from '../../../../../public/svg/crazyLabsLogo.svg'
import doorOpen from '../../../../../public/svg/doorOpen.svg'
import lootHover from '../../../../../public/svg/lootOverlay.svg'
import rafflesHover from '../../../../../public/svg/rafflesOverlay.svg'
import stakingHover from '../../../../../public/svg/stakingOverlay.svg'
import h from './HomeParentRewritten.module.css'

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

function CrazyLabsSignage() {
	const [flickerBGClass, setFlickerBGClass] = useState('flickerSignage_1')
	const isMounted = useRef(null)

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

export default function HomeParent() {
	const {
		isMobile,
		isTablet,
		isDesktop,
		isLargeDesktop,
		isLandscape,
		isPortrait,
	} = useResponsiveState()
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
						<Image
							src={
								isLargeDesktop
									? homeBG
									: isTablet || isDesktop
									? isLandscape
										? homeBGiPadMiniHorizontal
										: homeBGiPadMiniVertical
									: homeBGiPhone14Vertical
							}
							alt={'Collection Banner'}
							className={cf(s.wMax, s.hMax, s.flex, h.bg)}
							priority
						/>
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
