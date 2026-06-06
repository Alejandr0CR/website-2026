import { Sidebar } from '@/components/Sidebar'
import { TabsSection } from '@/components/TabsSection'
import { WaveformDecoration } from '@/components/WaveformDecoration'

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      <Sidebar />

      <main className="w-full flex-1 border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <WaveformDecoration />
        <div className="relative w-full">
          <div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
            <TabsSection />
          </div>
        </div>
      </main>
    </div>
  )
}
