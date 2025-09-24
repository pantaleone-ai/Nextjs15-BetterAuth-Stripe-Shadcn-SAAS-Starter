'use client'

import { Button } from '@/components/ui/button'
import { Chrome, Github, Facebook, Twitter } from 'lucide-react'
import { useState } from 'react'

export function SocialLogin() {
  const [loading, setLoading] = useState<string | null>(null)

  const signInWith = (provider: string) => {
    setLoading(provider)
    window.location.href = `/api/auth/${provider}`
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          {/* <span className="w-full border-t border-border" /> */}
        </div>
        <div className="relative flex justify-center text-xs uppercase p-4">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          onClick={() => signInWith('google')}
          disabled={loading === 'google'}
          className="w-full"
        >
          <Chrome className="mr-2 h-4 w-4" />
          {loading === 'google' ? 'Loading...' : 'Google'}
        </Button>

        <Button
          variant="outline"
          onClick={() => signInWith('github')}
          disabled={loading === 'github'}
          className="w-full"
        >
          <Github className="mr-2 h-4 w-4" />
          {loading === 'github' ? 'Loading...' : 'GitHub'}
        </Button>

        <Button
          variant="outline"
          onClick={() => signInWith('facebook')}
          disabled={loading === 'facebook'}
          className="w-full"
        >
          <Facebook className="mr-2 h-4 w-4" />
          {loading === 'facebook' ? 'Loading...' : 'Facebook'}
        </Button>

        <Button
          variant="outline"
          onClick={() => signInWith('twitter')}
          disabled={loading === 'twitter'}
          className="w-full"
        >
          <Twitter className="mr-2 h-4 w-4" />
          {loading === 'twitter' ? 'Loading...' : 'Twitter'}
        </Button>
      </div>
    </div>
  )
}
