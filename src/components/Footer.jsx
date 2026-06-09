export default function Footer({ t }) {
  return (
    <footer
      className="mt-16 py-6 text-center"
      style={{ borderTop: '1px solid rgba(99,102,241,0.1)' }}
    >
      <p className="text-sm text-slate-500">
        AhmedDev – IsmailUSA © 2026 &mdash; {t.footer.rights}
      </p>
    </footer>
  )
}
