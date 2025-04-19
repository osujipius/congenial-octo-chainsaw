'use client';
import { Shared as s } from '@/shared/styles';
import { cf } from '@/shared/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Skeleton } from '../Skeleton';
import c from './CusImage.module.css';

export default function CusImage ({
	src,
	alt = 'some image',
	parentClass,
	imageClass,
	isLink,
	link = '',
	callback = () => { },
	enableAnimation = null,
	imageProps = {},
	cusSkeleton = '',
	reference = null,
	isLocal=false
}) {
	const [loaded, setLoaded] = useState();
	const [banner, setBanner] = useState(true);

	useEffect(() => {
		setLoaded(() => false);
		setBanner(() => true);
	}, [src]);

	const Wrapper = ({ children }) =>
		isLink ? (
			<Link
				href={ link }
				target={ '_blank' }
				rel='noopener noreferrer'
				className={ cf(s.flex, s.flexCenter, s.p_relative, imageClass) }
			>
				{ children }
			</Link>
		) : (
			<div
				className={ cf(s.flex, s.flexCenter, s.p_relative, imageClass) }
				onClick={ () => {
					callback();
				} }
			>
				{ children }
			</div>
		);
	return (
		<div className={ cf(s.flex, s.flexCenter, s.p_relative, parentClass) } ref={ reference }>
			<Wrapper>
				{ src ? (
					<Image
						src={ src || null }
						key={ src }
						alt={ alt }
						fill={ !isLocal }
						className={ cf(
							s.flex,
							s.flexCenter,
							c.image,
							loaded ? c.loaded : '',
							imageClass
						) }
						onLoad={ () => setLoaded(() => true) }
						onError={ () => {
							setBanner(() => false);
							setLoaded(() => false);
						} }
						sizes=''
						{ ...imageProps }
					/>
				) : (
					<></>
				) }
			</Wrapper>
			{ !loaded ? (
				<Skeleton
					containerClassName={ cf(
						s.wMax,
						s.flex,
						s.flexCenter,
						c.imageParent,
						cusSkeleton
					) }
					className={ cf(imageClass, s.wMax, s.hMax) }
					enableAnimation={ enableAnimation || banner }
				/>
			) : (
				<></>
			) }
		</div>
	);
}
