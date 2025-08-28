export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-foreground mb-2">
              GenePilot.AI — Decoding DNA. Delivering Health.
            </p>
            <div className="space-y-1 text-muted-foreground">
              <p>Phone: 08068135438</p>
              <p>Plot 101 Senator Atta Idoko Crescent, Apo Resettlement, Abuja, Nigeria</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">Copyright © 2025 GenePilot.AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
