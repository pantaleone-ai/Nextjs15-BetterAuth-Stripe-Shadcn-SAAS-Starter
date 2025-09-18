import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your profile and account information.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Your personal details and preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Name</p>
              <p className="text-sm text-muted-foreground">John Doe</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">john@example.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Status</p>
              <Badge variant="outline">Active</Badge>
            </div>
            <Button className="w-full">Edit Profile</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Account Activity</CardTitle>
            <CardDescription>
              Recent account activity and stats.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Last login</span>
                <span className="text-sm text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Account created</span>
                <span className="text-sm text-muted-foreground">Jan 15, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Total sessions</span>
                <span className="text-sm text-muted-foreground">247</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Sidebar Test</CardTitle>
          <CardDescription>
            This page demonstrates the persistent sidebar functionality.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Notice how the sidebar persists when you navigate between Dashboard, Settings, and Profile pages. 
            Try collapsing the sidebar using the hamburger menu or the keyboard shortcut (Cmd+B or Ctrl+B).
          </p>
        </CardContent>
      </Card>
    </div>
  )
}