'use client'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

const variants: Record<string, Variants> = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  }
}

export function MotionWrapper({
  children,
  variant = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  className,
  ...props
}: {
  children: React.ReactNode
  variant?: 'fadeInUp'
  delay?: number
  duration?: number
  className?: string
}) {
  return (
    <motion.div
      variants={variants[variant]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration, delay, ease: [0.4, 0.0, 0.2, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0
}: {
  children: React.ReactNode
  className?: string
  staggerChildren?: number
  delayChildren?: number
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        animate: {
          transition: { staggerChildren, delayChildren }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
