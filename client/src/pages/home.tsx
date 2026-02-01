import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Shield, Car, FileCheck, Phone, Mail, MapPin } from "lucide-react";
import carInsurance1 from "../assets/images/car-insurance-1.png";
import carInsurance2 from "../assets/images/car-insurance-2.png";
import carInsurance3 from "../assets/images/car-insurance-3.png";

const bioLinks = [
  {
    id: 1,
    title: "التأمين الشامل للسيارات",
    description: "حماية كاملة لسيارتك من جميع المخاطر والحوادث",
    image: carInsurance1,
    url: "#comprehensive",
  },
  {
    id: 2,
    title: "       تأمين سيارتك بأفضل الأسعار",
    description: "تأمين شامل يغطي سيارتك  بأمان تام",
    image: carInsurance2,
    url: "#family",
  },
  {
    id: 3,
    title: "تقنيات السلامة المتقدمة",
    description: "استفد من خصومات تأمينية مع تقنيات السلامة الحديثة",
    image: carInsurance3,
    url: "#technology",
  },
];

const features = [
  {
    icon: Shield,
    title: "حماية شاملة",
    description: "تغطية كاملة لجميع أنواع الحوادث",
  },
  {
    icon: Car,
    title: "سيارة بديلة",
    description: "سيارة بديلة مجانية أثناء الإصلاح",
  },
  {
    icon: FileCheck,
    title: "معالجة سريعة",
    description: "معالجة المطالبات خلال 24 ساعة",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">
              تأمين السيارات
            </h1>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/privacy" data-testid="link-privacy-header">
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                الخصوصية
              </span>
            </Link>
            <Link href="/security" data-testid="link-security-header">
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                الأمان
              </span>
            </Link>
            <Link href="/cookies" data-testid="link-cookies-header">
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                الكوكيز
              </span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>أفضل خدمات التأمين</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            تأمين سيارتك بأفضل الأسعار
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            نوفر لك حماية شاملة لسيارتك وعائلتك مع تغطية تأمينية متكاملة تناسب
            احتياجاتك
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            خدماتنا التأمينية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bioLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="group block"
                data-testid={`link-bio-${link.id}`}
              >
                <Card className="overflow-hidden hover-elevate transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={link.image}
                      alt={link.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-testid={`img-bio-${link.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 right-4 left-4">
                      <h4 className="text-white font-bold text-lg mb-1">
                        {link.title}
                      </h4>
                      <p className="text-white/80 text-sm mb-3">
                        {link.description}
                      </p>
                      <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-lg animate-pulse group-hover:animate-none group-hover:scale-105 transition-transform">
                        اضغط هنا
                      </span>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover-elevate transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </section>

        <section className="bg-card rounded-2xl p-8 md:p-12 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              تواصل معنا
            </h3>
            <p className="text-muted-foreground">
              نحن هنا لمساعدتك في اختيار التأمين المناسب
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="flex items-center gap-4 p-4 rounded-xl bg-background"
              data-testid="contact-phone"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">اتصل بنا</p>
                <p className="font-semibold text-foreground" dir="ltr">
                  +966 XX XXX XXXX
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 p-4 rounded-xl bg-background"
              data-testid="contact-email"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  البريد الإلكتروني
                </p>
                <p className="font-semibold text-foreground">
                  info@example.com
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 p-4 rounded-xl bg-background"
              data-testid="contact-address"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">العنوان</p>
                <p className="font-semibold text-foreground">
                  المملكة العربية السعودية
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">
                تأمين السيارات
              </span>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/privacy" data-testid="link-privacy-footer">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  سياسة الخصوصية
                </span>
              </Link>
              <Link href="/security" data-testid="link-security-footer">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  قواعد الأمان
                </span>
              </Link>
              <Link href="/cookies" data-testid="link-cookies-footer">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  سياسة الكوكيز
                </span>
              </Link>
            </nav>
            <p className="text-sm text-muted-foreground">
              © 2026 جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
