import { Link } from "wouter";
import { Shield, ArrowRight, Lock, ShieldCheck, Server, Key, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const securityMeasures = [
  {
    icon: Lock,
    title: "التشفير المتقدم",
    description: "نستخدم تشفير SSL/TLS لحماية جميع البيانات أثناء النقل، بالإضافة إلى تشفير AES-256 للبيانات المخزنة.",
  },
  {
    icon: Server,
    title: "خوادم آمنة",
    description: "بياناتك مخزنة على خوادم محمية في مراكز بيانات معتمدة دولياً مع أنظمة حماية متعددة الطبقات.",
  },
  {
    icon: ShieldCheck,
    title: "مراقبة مستمرة",
    description: "نراقب أنظمتنا على مدار الساعة للكشف عن أي تهديدات أمنية والتصدي لها فوراً.",
  },
  {
    icon: Key,
    title: "إدارة الوصول",
    description: "نطبق سياسات صارمة للتحكم في الوصول للبيانات، مع مصادقة متعددة العوامل لجميع المستخدمين.",
  },
];

const userGuidelines = [
  "استخدم كلمة مرور قوية وفريدة لحسابك",
  "لا تشارك بيانات تسجيل الدخول مع أي شخص",
  "تحقق من هوية المتصلين قبل تقديم أي معلومات",
  "أبلغ فوراً عن أي نشاط مشبوه على حسابك",
  "قم بتحديث معلومات الاتصال بانتظام",
  "استخدم شبكات آمنة عند الوصول لحسابك",
];

const certifications = [
  "ISO 27001 لإدارة أمن المعلومات",
  "PCI DSS للمعاملات المالية",
  "معايير الأمان السيبراني السعودية",
  "اعتماد هيئة التأمين",
];

export default function Security() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">تأمين السيارات</h1>
            </div>
          </Link>
          <Link href="/" data-testid="link-back-home">
            <Button variant="ghost" size="sm" className="gap-2">
              <span>العودة للرئيسية</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              قواعد الأمان
            </h2>
            <p className="text-lg text-muted-foreground">
              التزامنا بحماية بياناتك وتأمين معاملاتك
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              آخر تحديث: يناير 2026
            </p>
          </div>

          <Card className="p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">التزامنا بالأمان</h3>
            <p className="text-muted-foreground leading-relaxed">
              نضع أمان بياناتك ومعاملاتك في مقدمة أولوياتنا. نستثمر في أحدث التقنيات والممارسات الأمنية لضمان حماية معلوماتك الشخصية والمالية. فريقنا الأمني يعمل على مدار الساعة لمراقبة وحماية أنظمتنا من أي تهديدات محتملة.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="p-6" data-testid={`card-security-measure-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <measure.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{measure.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{measure.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">إرشادات الأمان للمستخدم</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              نعمل معًا للحفاظ على أمان حسابك. يرجى اتباع هذه الإرشادات:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userGuidelines.map((guideline, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{guideline}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">الشهادات والاعتمادات</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              نلتزم بأعلى المعايير الدولية والمحلية لأمن المعلومات:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg" data-testid={`cert-${index}`}>
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 md:p-8 bg-destructive/5 border-destructive/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">الإبلاغ عن مشكلة أمنية</h3>
                <p className="text-muted-foreground mb-4">
                  إذا لاحظت أي نشاط مشبوه أو ثغرة أمنية محتملة، يرجى إبلاغنا فوراً:
                </p>
                <p className="text-foreground font-medium">البريد الإلكتروني: security@example.com</p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">تأمين السيارات</span>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/privacy" data-testid="link-privacy-footer">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">سياسة الخصوصية</span>
              </Link>
              <Link href="/security" data-testid="link-security-footer">
                <span className="text-foreground font-medium cursor-pointer">قواعد الأمان</span>
              </Link>
              <Link href="/cookies" data-testid="link-cookies-footer">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">سياسة الكوكيز</span>
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
