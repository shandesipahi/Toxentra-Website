import Link from "next/link";
import Image from "next/image";

export function LogoDark() {
  return (
    <Link href="/" className="flex items-center shrink-0" aria-label="TOXENTRA — Home">
      <Image
        src="/logo.png"
        alt="TOXENTRA"
        width={149}
        height={32}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}

export function LogoLight() {
  return (
    <Link href="/" className="flex items-center shrink-0" aria-label="TOXENTRA — Home">
      <Image
        src="/logo-light.png"
        alt="TOXENTRA"
        width={149}
        height={32}
        className="h-8 w-auto"
      />
    </Link>
  );
}
