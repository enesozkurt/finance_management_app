'use client'

import { sidebarLinks } from '@/constants/index'
import { cn } from '@/lib/utils'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import { usePathname } from '@/node_modules/next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname()
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer items-center flex gap-2'>
                <Image src="/icons/logo.svg" width={34} height={34} alt="Bank Logo" className='size-[24px] max-xl:size-14' />
                <h1 className='sidebar-logo'>Bank</h1>
            </Link>
            {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link href={item.route} key={item.route} className={cn('sidebar-link', {
                        'bg-bank-gradient' : isActive
                    })}>
                        <div className='relative size-6'>
                            <Image src={item.imgURL} alt={item.label} fill className={cn({
                                'brightness-[3] invert-0': isActive
                            })} />
                        </div>
                        <p className={cn('sidebar-label', {
                            '!text-white' : isActive
                        })}>{item.label}</p>
                    </Link>
                )
            })}
            USER
        </nav>
        FOOTER
    </section>
  )
}

export default Sidebar