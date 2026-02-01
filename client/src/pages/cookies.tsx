import { Link } from "wouter";
import { Shield, ArrowRight, Cookie, Settings, BarChart3, Users, Clock, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cookieTypes = [
  {
    icon: Settings,
    title: "ملفات تعريف الارتباط الضرورية",
    description: "ضرورية لعمل الموقع بشكل صحيح. تتيح لك التنقل واستخدام الميزات الأساسية مثل تسجيل الدخول وإكمال النماذج.",
    required: true,
  },
  {
    icon: BarChart3,
    title: "ملفات تعريف الارتباط التحليلية",
    description: "تساعدنا على فهم كيفية استخدام الزوار للموقع. نستخدم هذه المعلومات لتحسين تجربة المستخدم وأداء الموقع.",
    required: false,
  },
  {
    icon: Users,
    title: "ملفات تعريف الارتباط التسويقية",
    description: "تُستخدم لعرض إعلانات ملائمة لاهتماماتك. قد تُشارك مع شركاء إعلانيين لتخصيص المحتوى الإعلاني.",
    required: false,
  },
];

const cookieDetails = [
  { name: "session_id", purpose: "الحفاظ على جلسة المستخدم", duration: "حتى إغلاق المتصفح", type: "ضروري" },
  { name: "preferences", purpose: "تخزين تفضيلات المستخدم", duration: "سنة واحدة", type: "ضروري" },
  { name: "_ga", purpose: "تحليل استخدام الموقع", duration: "سنتان", type: "تحليلي" },
  { name: "_gid", purpose: "تمييز المستخدمين", duration: "24 ساعة", type: "تحليلي" },
];

export default function Cookies() {
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
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              سياسة ملفات تعريف الارتباط
            </h2>
            <p className="text-lg text-muted-foreground">
              كيف نستخدم ملفات تعريف الارتباط لتحسين تجربتك
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              آخر تحديث: يناير 2026
            </p>
          </div>

          <Card className="p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">ما هي ملفات تعريف الارتباط؟</h3>
            <p className="text-muted-foreground leading-relaxed">
              ملفات تعريف الارتباط (الكوكيز) هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا. تساعدنا هذه الملفات على تذكر تفضيلاتك وتحسين تجربة استخدامك للموقع. نستخدم ملفات تعريف الارتباط لأغراض مختلفة، بما في ذلك تحليل حركة المرور وتخصيص المحتوى.
            </p>
          </Card>

          <div className="space-y-6 mb-8">
            {cookieTypes.map((type, index) => (
              <Card key={index} className="p-6" data-testid={`card-cookie-type-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-lg font-bold text-foreground">{type.title}</h3>
                      {type.required && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          مطلوب
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">ملفات تعريف الارتباط المستخدمة</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-testid="table-cookies">
                <thead>
                  <tr className="border-b">
                    <th className="text-right py-3 px-4 font-semibold text-foreground">الاسم</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">الغرض</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">المدة</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">النوع</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="border-b last:border-b-0" data-testid={`row-cookie-${index}`}>
                      <td className="py-3 px-4 text-muted-foreground font-mono text-xs">{cookie.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{cookie.purpose}</td>
                      <td className="py-3 px-4 text-muted-foreground">{cookie.duration}</td>
                      <td className="py-3 px-4">
                        <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                          {cookie.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">إدارة ملفات تعريف الارتباط</h3>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك. تتيح لك معظم المتصفحات:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>عرض ملفات تعريف الارتباط المخزنة وحذفها</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>حظر ملفات تعريف الارتباط من مواقع معينة</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>ضبط التنبيهات قبل تخزين ملفات تعريف الارتباط</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>حذف جميع ملفات تعريف الارتباط عند إغلاق المتصفح</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              ملاحظة: تعطيل ملفات تعريف الارتباط قد يؤثر على بعض وظائف الموقع.
            </p>
          </Card>

          <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">لديك أسئلة؟</h3>
                <p className="text-muted-foreground mb-4">
                  إذا كان لديك أي استفسارات حول استخدامنا لملفات تعريف الارتباط، يرجى التواصل معنا:
                </p>
                <p className="text-foreground font-medium">البريد الإلكتروني: cookies@example.com</p>
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
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">قواعد الأمان</span>
              </Link>
              <Link href="/cookies" data-testid="link-cookies-footer">
                <span className="text-foreground font-medium cursor-pointer">سياسة الكوكيز</span>
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
