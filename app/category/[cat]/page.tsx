import { getAllPosts } from '../../../lib/posts'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ cat: string }> }

const CATEGORY_MAP: Record<string, { label: string; desc: string; keywords: string[] }> = {
  'gpu': { label: 'Graphics Cards', desc: 'Best GPUs for gaming, workstation and AI — RTX, RX and Arc cards compared.', keywords: ['gpu','graphics card','rtx','rx','nvidia','amd','arc','vram','gaming gpu','workstation gpu'] },
  'cpu': { label: 'Processors (CPU)', desc: 'Top CPUs for gaming, streaming and content creation — Intel and AMD compared.', keywords: ['cpu','processor','ryzen','intel','core i9','core i7','core i5','amd','benchmark','gaming cpu'] },
  'motherboards': { label: 'Motherboards', desc: 'Best motherboards for gaming, workstation and budget builds with all chipsets.', keywords: ['motherboard','mobo','b650','z790','am5','lga1700','atx','matx','asus','gigabyte','msi'] },
  'ram': { label: 'RAM & Memory', desc: 'Best DDR5 and DDR4 RAM kits, speeds and capacities for gaming and productivity.', keywords: ['ram','ddr5','ddr4','memory','corsair','g.skill','crucial','kingston','sodimm','laptop ram'] },
  'storage': { label: 'Storage (SSD & HDD)', desc: 'Top NVMe SSDs, SATA SSDs and HDDs for speed, capacity and value.', keywords: ['ssd','nvme','pcie','sata','hdd','hard drive','m.2','samsung 990','wd black','seagate'] },
  'cpu-coolers': { label: 'CPU Coolers', desc: 'Best CPU air coolers and AIOs for overclocking, noise and thermal performance.', keywords: ['cpu cooler','aio','air cooler','240mm','360mm','noctua','be quiet','corsair','artic cooler'] },
  'psu': { label: 'Power Supplies', desc: 'Best PSUs by wattage and efficiency — 80+ Gold, Platinum and Titanium units compared.', keywords: ['psu','power supply','750w','850w','1000w','modular','corsair','seasonic','evga','be quiet'] },
  'pc-cases': { label: 'PC Cases', desc: 'Top ATX, mATX and ITX cases for airflow, cable management and aesthetics.', keywords: ['pc case','atx case','matx case','itx case','airflow','lian li','fractal','nzxt','phanteks'] },
  'monitors': { label: 'Monitors', desc: 'Best gaming monitors, 4K displays, ultrawide and OLED panels for every budget.', keywords: ['monitor','gaming monitor','4k monitor','1440p','oled','ips','144hz','240hz','ultrawide','asus rog'] },
  'peripherals': { label: 'Peripherals', desc: 'Best gaming mice, keyboards, headsets and controllers for PC gaming.', keywords: ['gaming mouse','mechanical keyboard','gaming headset','controller','mousepad','logitech','razer','corsair'] },
  'networking': { label: 'Networking', desc: 'Best WiFi routers, mesh systems, network cards and ethernet switches for fast connectivity.', keywords: ['router','wifi','mesh','network card','ethernet','tp-link','asus router','eero','netgear'] },
  'laptops': { label: 'Laptops', desc: 'Best gaming laptops, ultrabooks and workstation laptops compared for performance and value.', keywords: ['laptop','gaming laptop','ultrabook','macbook','razer blade','asus rog','lenovo','dell xps'] },
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((cat) => ({ cat }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cat } = await params
  const cat = CATEGORY_MAP[cat]
  if (!cat) return {}
  return {
    title: `${cat.label} 2025 — PC Pick Hub`,
    description: cat.desc,
    alternates: { canonical: `https://www.pcpickhub.com/category/${cat}` },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { cat } = await params
  const cat = CATEGORY_MAP[cat]
  if (!cat) notFound()

  const all = getAllPosts()
  const kw = cat.keywords
  const matched = all.filter((p) => {
    const text = ((p.keyword || '') + ' ' + (p.title || '') + ' ' + (p.slug || '')).toLowerCase()
    return kw.some((k: string) => text.includes(k))
  })
  const posts = matched.length > 0 ? matched : all.slice(0, 12)

  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--bg:#0a0a0a;--surface:#111111;--border:#1e1e1e;--text:#e4e4e7;--muted:#71717a;--accent:#22d3ee;--accent2:#6366f1;--radius:12px}
        body{background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.6}
        a{text-decoration:none;color:inherit}
        .container{max-width:1100px;margin:0 auto;padding:0 24px}
        .cat-hero{padding:60px 24px 48px;text-align:center;background:radial-gradient(ellipse 70% 50% at 50% 0%,color-mix(in srgb,#22d3ee 15%,transparent) 0%,transparent 70%)}
        .cat-badge{display:inline-block;padding:5px 16px;border-radius:20px;background:color-mix(in srgb,#22d3ee 12%,transparent);border:1px solid color-mix(in srgb,#22d3ee 30%,transparent);color:var(--accent);font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px}
        .cat-hero h1{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;letter-spacing:-0.03em;margin-bottom:12px}
        .cat-hero p{color:var(--muted);font-size:1rem;max-width:560px;margin:0 auto 24px}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.8rem;color:var(--muted);justify-content:center;margin-bottom:32px}
        .breadcrumb a{color:var(--accent)}
        .post-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px;padding-bottom:80px}
        .post-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:28px;display:flex;flex-direction:column;transition:border-color 0.15s,transform 0.15s}
        .post-card:hover{border-color:var(--accent);transform:translateY(-2px)}
        .post-tag{display:inline-block;padding:3px 10px;border-radius:20px;background:color-mix(in srgb,#22d3ee 10%,transparent);border:1px solid color-mix(in srgb,#22d3ee 25%,transparent);color:var(--accent);font-size:0.68rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:12px}
        .post-card h2{font-size:1rem;font-weight:700;line-height:1.4;margin-bottom:10px}
        .post-card h2 a:hover{color:var(--accent)}
        .post-card p{color:var(--muted);font-size:0.87rem;line-height:1.65;flex:1;margin-bottom:18px}
        .post-footer{display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid var(--border)}
        .post-date{font-size:0.72rem;color:var(--muted)}
        .post-link{font-size:0.82rem;color:var(--accent);font-weight:600}
        .empty{text-align:center;padding:80px 0;color:var(--muted)}
        @media(max-width:600px){.post-grid{grid-template-columns:1fr}}
      `}</style>

      <div className="cat-hero">
        <div className="cat-badge">Category</div>
        <h1>{cat.label}</h1>
        <p>{cat.desc}</p>
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>{cat.label}</span>
        </div>
      </div>

      <div className="container">
        {posts.length === 0 ? (
          <p className="empty">No articles yet — check back soon!</p>
        ) : (
          <div className="post-grid">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                {post.keyword && <span className="post-tag">{post.keyword}</span>}
                <h2><a href={`/${post.slug}`}>{post.title}</a></h2>
                <p>{post.description}</p>
                <div className="post-footer">
                  <span className="post-date">{post.date}</span>
                  <a href={`/${post.slug}`} className="post-link">Read →</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
