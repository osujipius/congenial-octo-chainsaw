"use client";

import CImage from "@/shared/ui/base/image";
import { Button, Center, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const navLinks_1 = [
  { name: "collections", href: "/collections" },
  { name: "missions", href: "/missions" },
  { name: "raffles", href: "/raffles" },
  { name: "loot", href: "/loot" },
  { name: "staking", href: "/staking" },
  { name: "cops", href: "/cop's" },
];

const navLinks_2 = [
  { name: "listings", href: "/listings" },
  { name: "team", href: "/team" },
];

export default function CHeader({}: Props) {
  return (
    <HStack
      position="relative"
      width="full"
      height={["64px", null, "80px"]}
      paddingX={["20px", "30px", "106px", null, null, "106px"]}
      justifyContent={["space-between", null, null, null, "initial"]}
      borderBottom={["5px solid", null, "none"]}
      borderBottomColor="headerBottomBorder"
      overflowX="hidden"
      _before={{
        content: '""',
        display: ["none", null, "block"],
        position: "absolute",
        left: 0,
        top: 0,
        width: ["100px", null, "1015px"],
        height: "full",
        backgroundImage: "url('/images/header-left.png')",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
      }}
      _after={{
        content: '""',
        display: ["none", null, "block"],
        position: "absolute",
        right: 0,
        top: 0,
        width: ["100px", null, "500px", null, "811px"],
        height: "full",
        backgroundImage: "url('/images/header-right.png')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}>
      <Link href="/">
        <CImage
          zIndex={1}
          width={["53px", null, "80px"]}
          height={["39px", null, "58px"]}
          imageUrl="/images/header-logo.png"
        />
      </Link>

      <HStack
        display={["none", null, null, null, "flex"]}
        width="90%"
        justifyContent="space-between">
        <HStack
          width={["748px"]}
          height={["64px", null, "80px"]}
          alignItems="start"
          gap="0"
          marginLeft="30px"
          zIndex={1}>
          {navLinks_1.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </HStack>

        <HStack
          width={["272px"]}
          height={["64px", null, "80px"]}
          alignItems="start"
          zIndex={1}>
          {navLinks_2.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <CImage
            imageUrl="/images/header-wallet.jpg"
            width="24px"
            height="24px"
            alignSelf="center"
            cursor="pointer"
            marginTop="-5px"
          />
        </HStack>
      </HStack>
      <HStack
        display={["flex", null, null, null, "none"]}
        marginRight={["5px", "20px"]}
        zIndex={2}>
        <ConnectWalletButton />
        <CImage width="24px" height="24px" imageUrl="/images/hamburger.jpg" />
      </HStack>
    </HStack>
  );
}

type NavLinkProps = {
  href: string;
  name: string;
};

const NavLink = ({ href, name }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link key={href} href={href}>
      <Text
        as={Center}
        height={["64px", null, "75px"]}
        padding="20px"
        cursor="pointer"
        fontFamily="navigation"
        color="black"
        fontSize="12px"
        fontWeight="black"
        letterSpacing="10%"
        textTransform="uppercase"
        _hover={{
          background: "headerHover",
          textDecoration: "none",
        }}
        _active={{
          background: "headerHover",
          textDecoration: "none",
        }}
        background={pathname.includes(href) ? "headerHover" : "transparent"}>
        {name}
      </Text>
    </Link>
  );
};

const ConnectWalletButton = () => {
  return (
    <Button
      variant="plain"
      height={["38px", null, "46px"]}
      background={["#D6D6D7", null, "white"]}
      width="181px"
      borderRadius="25px"
      border="1px solid"
      borderColor="ash"
      paddingX="20px"
      paddingY="14px">
      Connect Wallet{" "}
      <CImage
        display={["block", null, "none"]}
        width="18px"
        height="18px"
        imageUrl="/images/header-wallet-mobile.png"
      />
      <CImage
        display={["none", null, "block"]}
        width="18px"
        height="18px"
        imageUrl="/images/header-wallet-mobile.jpg"
      />
    </Button>
  );
};
