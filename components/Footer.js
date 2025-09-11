export default function Footer(){
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container py-8 text-sm text-muted flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} AyuSkin. All rights reserved.</div>
        <div>Contact: hello@ayuskin.com · WhatsApp: +91-90000-00000</div>
      </div>
    </footer>
  )
}
