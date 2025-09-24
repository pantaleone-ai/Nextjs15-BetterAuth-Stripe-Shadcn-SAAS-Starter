'use client'

import { FormEvent, useRef, useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useTheme } from 'next-themes'
import { Send, Paperclip, Loader2, X } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

interface ChatUIProps {
  messages: Message[]
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent) => void
  isLoading: boolean
  error?: string
}

export function ChatUI({ messages, input, handleInputChange, handleSubmit, isLoading, error }: ChatUIProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [attachedFiles, setAttachedFiles] = useState<File[]>([])

  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight
      }
    }
  }, [messages])

  const { theme } = useTheme()

  const handleFileButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setAttachedFiles((prev) => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 flex flex-col">
        <Card className="flex-1 rounded-none border-0">
          <CardHeader className="border-b">
            <CardTitle>AI Chat</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea ref={scrollAreaRef} className="h-full p-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.role === 'assistant' && <Avatar><AvatarFallback>AI</AvatarFallback></Avatar>}
                  <div className={`max-w-[70%] p-3 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    {message.content}
                  </div>
                  {message.role === 'user' && <Avatar><AvatarFallback>U</AvatarFallback></Avatar>}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 mb-4 justify-start">
                  <Avatar><AvatarFallback>AI</AvatarFallback></Avatar>
                  <div className="p-3 rounded-lg bg-muted flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Thinking...
                  </div>
                </div>
              )}
              {error && (
                <div className="p-3 rounded-lg bg-destructive text-destructive-foreground mb-4">
                  Error: {error}
                </div>
              )}
            </ScrollArea>
          </CardContent>
          <div className="p-4 border-t">
            {attachedFiles.length > 0 && (
              <div className="mb-2 space-y-1">
                {attachedFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 p-1 rounded bg-muted">
                    <Paperclip className="h-3 w-3" />
                    <span className="text-sm truncate">{file.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-4 w-4 p-0"
                      onClick={() => removeFile(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleFileButtonClick}
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type a message..."
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}
