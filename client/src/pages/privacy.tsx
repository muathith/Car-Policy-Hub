import { Link } from "wouter";
import { Shield, ArrowRight, Lock, Eye, Database, UserCheck, Bell, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: Database,
    title: "البيانات التي نجمعها",
    items: [
      "الاسم الكامل ومعلومات الاتصال",
      "بيانات السيارة ورقم اللوحة",
      "معلومات رخصة القيادة",
      "تاريخ التأمين السابق",
      "معلومات الدفع والفوترة",
    ],
  },
  {
    icon: Eye,
    title: "كيف نستخدم بياناتك",
    items: [
      "تقديم خدمات التأمين المطلوبة",
      "معالجة المطالبات والتعويضات",
      "تحسين خدماتنا وتجربة المستخدم",
      "إرسال إشعارات مهمة عن وثيقتك",
      "الامتثال للمتطلبات القانونية",
    ],
  },
  {
    icon: Lock,
    title: "حماية بياناتك",
    items: [
      "تشفير جميع البيانات الحساسة",
      "خوادم آمنة ومحمية",
      "مراقبة مستمرة للأمان",
      "سياسات صارمة للوصول للبيانات",
      "نسخ احتياطية منتظمة",
    ],
  },
  {
    icon: UserCheck,
    title: "حقوقك",
    items: [
      "الوصول إلى بياناتك الشخصية",
      "تصحيح أي معلومات غير دقيقة",
      "طلب حذف بياناتك",
      "الاعتراض على معالجة البيانات",
      "نقل بياناتك لجهة أخرى",
    ],
  },
];

export default function Privacy() {
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              سياسة الخصوصية
            </h2>
            <p className="text-lg text-muted-foreground">
              نلتزم بحماية خصوصيتك وبياناتك الشخصية
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              آخر تحديث: يناير 2026
            </p>
          </div>

          <Card className="p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">مقدمة</h3>
            <p className="text-muted-foreground leading-relaxed">
              نحن نقدر ثقتك بنا ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا عند استخدام خدماتنا. نحن نعمل وفقًا لأفضل الممارسات العالمية ونلتزم بجميع القوانين واللوائح المحلية والدولية المتعلقة بحماية البيانات.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {sections.map((section, index) => (
              <Card key={index} className="p-6" data-testid={`card-privacy-section-${index}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">مشاركة البيانات مع الأطراف الثالثة</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              لا نبيع أو نؤجر بياناتك الشخصية لأي طرف ثالث. قد نشارك بياناتك فقط في الحالات التالية:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>شركات إعادة التأمين لتوفير التغطية التأمينية</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>مزودي خدمات الدفع لمعالجة المعاملات المالية</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>الجهات الحكومية عند الطلب القانوني</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>مراكز الإصلاح المعتمدة عند معالجة المطالبات</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
            <h3 className="text-lg font-bold text-foreground mb-3">تواصل معنا</h3>
            <p className="text-muted-foreground mb-4">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية أو ترغب في ممارسة حقوقك، يرجى التواصل معنا:
            </p>
            <p className="text-foreground font-medium">البريد الإلكتروني: privacy@example.com</p>
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
                <span className="text-foreground font-medium cursor-pointer">سياسة الخصوصية</span>
              </Link>
              <Link href="/security" data-testid="link-security-footer">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">قواعد الأمان</span>
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
