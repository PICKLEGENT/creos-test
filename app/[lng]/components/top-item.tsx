'use client'

import { cn } from "@/lib/utils"
import { UserAvatar } from "./avatar"
import { motion } from 'framer-motion'

interface TopItemProps {
    name: string
    img?: string
    position: number
}

export const TopItem = ({ name, img, position }: TopItemProps) => {
    const initial = name.split('').shift()

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6 p-3 bg-neutral-200 dark:bg-zinc-800 rounded-xl shadow-neumorphism-light dark:shadow-neumorphism-dark"
        >
            <div className="flex items-center gap-x-3">
                <div className="relative flex h-10 w-10 shrink-0 rounded-full overflow-hidden">
                    <h1 className={cn("flex justify-center items-center h-full w-full font-bold text-lg text-black bg-gradient-to-br from-[#8EC5FC] to-[#E0C3FC] rounded-full uppercase",
                        position === 1 && 'text-gold bg-gradient-to-tr from-[#fffbf0] from-10% to-[#FEC84E] to-90%',
                        position === 2 && 'text-silver bg-gradient-to-tr from-[#D7D7D7] from-10% to-[#353535] to-90%',
                        position === 3 && 'text-bronze bg-gradient-to-tr from-[#db6c2b] from-10% to-[#673208] to-90%'
                    )}>
                        {position}
                    </h1>
                </div>
                <motion.div
                    initial={{ x: 12, width: 0 }}
                    animate={{ x: 0, width: '24px' }}
                    transition={{ type: 'spring' }}
                    className="hidden lg:block h-1 bg-black dark:bg-white rounded-full"
                />
                <UserAvatar initial={initial!} img={img} />
                <h2 className="font-bold lg:text-xl">{name}</h2>
            </div>
        </motion.div>
    )
}