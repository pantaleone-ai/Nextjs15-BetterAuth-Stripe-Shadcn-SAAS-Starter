'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export function ChatEntryPoint() {
  const router = useRouter()
  const pathname = usePathname()

  if (pathname === '/chat') return null

  const handleChatOpen = () => {
    router.push('/chat')
  }

  return (
    <Button
      onClick={handleChatOpen}
      size="icon"
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
      aria-label="Open Chat"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}
