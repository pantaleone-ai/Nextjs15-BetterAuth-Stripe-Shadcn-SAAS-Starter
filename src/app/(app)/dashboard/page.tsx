import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      
      <div className="md:col-span-2 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Your Dashboard</CardTitle>
            <CardDescription>
              This dashboard has a persistent sidebar that works across all app pages.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The sidebar is collapsible and includes:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Team switcher with dropdown</li>
                <li>• Collapsible navigation menu</li>
                <li>• Projects section</li>
                <li>• User profile dropdown</li>
                <li>• Mobile responsive design</li>
              </ul>
              <div className="pt-4">
                <Button>Get Started</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}