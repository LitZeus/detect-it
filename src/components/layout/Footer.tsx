export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Detection of Varicose Veins. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}