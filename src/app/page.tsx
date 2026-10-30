import { Sidebar } from '@/components/Sidebar'
import { TabsSection } from '@/components/TabsSection'

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      <Sidebar />

      <main className="relative w-full flex-1 border-t border-edge lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120" style={{ backgroundImage: 'url(/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-canvas/50" />
        <div className="relative z-10 w-full">
          <div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
            <TabsSection />
          </div>
        </div>
      </main>
    </div>
  )
}
