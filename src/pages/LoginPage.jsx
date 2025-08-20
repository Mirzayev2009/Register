import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabaseClient';

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const telegramLink = "https://t.me/+qK6tVxy582MyMjcy";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const name = e.target.name.value.trim();
    let rawPhone = e.target.phone.value.trim().replace(/\s+/g, "");

    if (!/^\d{9}$/.test(rawPhone)) {
      alert("Raqamni to‘g‘ri kiriting: 90 123 45 67");
      setIsSubmitting(false);
      return;
    }

    const fullPhone = '+998' + rawPhone;
    const data = { name, phone: fullPhone };

    const { data: existing, error: selectError } = await supabase
      .from('submissions_parda')
      .select("*")
      .eq("phone", fullPhone);

    if (selectError) {
      console.error("❌ Supabase select error:", selectError.message);
      alert("Xatolik yuz berdi. Qaytadan urinib ko‘ring.");
      setIsSubmitting(false);
      return;
    }

    if (existing.length > 0) {
      alert("Bu raqam allaqachon ro‘yxatdan o‘tgan.");
      setIsSubmitting(false);
      return;
    }

    const { error: insertError } = await supabase
      .from('submissions_parda')
      .insert([data]);

    if (insertError) {
      console.error("❌ Supabase insert error:", insertError.message);
      alert("Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.");
      setIsSubmitting(false);
    } else {
      // Immediately redirect to Telegram bot
      window.location.href = telegramLink;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-400 to-violet-50 px-4">
      <Card className="w-full max-w-lg shadow-2xl backdrop-blur-xl bg-white/80 border border-red-100">
        <CardHeader className="text-center space-y-3 pt-6">
          <CardTitle className="text-2xl font-extrabold text-black leading-tight">
            Master Klass uchun joyni hoziroq band qiling
          </CardTitle>
          <p className="text-sm text-gray-500">
            Ismingiz va raqamingizni yozing. Keyin avtomatik Telegram botga yo‘naltirilasiz.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6 mt-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">Ismingiz</Label>
              <Input
                name="name"
                id="name"
                placeholder="Masalan: Fariza"
                className="h-12 text-base rounded-xl border-gray-300 focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-semibold">Telefon raqam</Label>
              <div className="flex items-center">
                <span className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-l-xl text-sm font-medium text-gray-600">
                  +998
                </span>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="90 123 45 67"
                  className="h-12 text-base rounded-r-xl border-l-0 focus:ring-2 focus:ring-red-400"
                  pattern="^\s*\d{2}[\s]?\d{3}[\s]?\d{2}[\s]?\d{2}\s*$"
                  title="Raqamni to‘g‘ri formatda kiriting: 90 123 45 67"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg font-bold bg-black shadow-violet-900  shadow-lg hover:scale-3d text-white rounded-xl transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "⏳ Yuborilmoqda..." : "🚀 Yuborish"}
            </Button>

            <p className="text-center text-sm text-gray-400 mt-1">Ro‘yxatdan o‘tish — mutlaqo bepul</p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
