import { AuthForm } from '@/components/auth/AuthForm';
import { Card, CardContent } from '@/components/ui/card';

export function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Advanced Detection of Varicose Veins
          </h1>
          <p className="text-lg text-muted-foreground">
            Our cutting-edge system uses advanced AI technology to detect and analyze varicose veins,
            helping healthcare professionals provide better care for their patients.
          </p>
        </div>
        <div className="flex justify-center">
          <AuthForm />
        </div>
      </div>
      
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Early Detection</h3>
            <p className="text-muted-foreground">
              Identify potential varicose veins early for better treatment outcomes.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Accurate Analysis</h3>
            <p className="text-muted-foreground">
              Get precise measurements and analysis of vein conditions.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Easy to Use</h3>
            <p className="text-muted-foreground">
              Simple interface designed for healthcare professionals.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}