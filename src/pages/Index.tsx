import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent animate-gradient"
          style={{ backgroundSize: '200% 200%' }}
        />
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Будущее начинается здесь
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
            Мы создаём инновационные решения, которые меняют индустрию и вдохновляют на новые достижения
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold shadow-2xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Начать сотрудничество
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              О компании
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Лидер инноваций с подходом, ориентированным на результат и качество
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Rocket',
                title: 'Инновации',
                description: 'Передовые технологии и креативные решения для вашего бизнеса'
              },
              {
                icon: 'Target',
                title: 'Точность',
                description: 'Достигаем поставленных целей с максимальной эффективностью'
              },
              {
                icon: 'Users',
                title: 'Команда',
                description: 'Профессионалы своего дела с многолетним опытом работы'
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Напишите нам прямо сейчас!
            </p>
          </div>

          <Card className="shadow-2xl border-2 animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-32 text-base"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity"
                >
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: 'Mail',
                title: 'Email',
                content: 'info@company.ru',
                link: 'mailto:info@company.ru'
              },
              {
                icon: 'Phone',
                title: 'Телефон',
                content: '+7 (495) 123-45-67',
                link: 'tel:+74951234567'
              },
              {
                icon: 'MapPin',
                title: 'Адрес',
                content: 'Москва, ул. Примерная, д. 1',
                link: '#'
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-muted/50 transition-colors group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name={item.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2024 Компания. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
